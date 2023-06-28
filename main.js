import "./style.scss";

import * as bootstrap from "bootstrap";

// import Graph from './graph';
import G6 from "@antv/g6";
import STORE from "./store";

import { RasterLayer, Scene } from "@antv/l7";
import { GaodeMap } from "@antv/l7-maps";
import * as GeoTIFF from "geotiff";

// const mapEl = document.getElementById('map')
const pxOutEL = document.getElementById("pixel-output");
const graphEl = document.getElementById("graph");
const navBtnEl = document.querySelectorAll(".nav-btn");
const articleEl = document.getElementById("article");

// L7 Map
const scene = new Scene({
  id: "map",
  map: new GaodeMap({
    // style: 'dark',
    center: [110.32, 31.05],
    zoom: 8,
  }),
});

async function getTiffData(url) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const tiff = await GeoTIFF.fromArrayBuffer(arrayBuffer);
  const image = await tiff.getImage();
  const width = image.getWidth();
  const height = image.getHeight();
  const values = await image.readRasters();
  return {
    data: values[0],
    width,
    height,
  };
}

async function addLayer(source, style) {
  const tiffdata = await getTiffData(source);

  const layer = new RasterLayer();
  layer
    .source(tiffdata.data, {
      parser: {
        type: "raster",
        width: tiffdata.width,
        height: tiffdata.height,
        extent: [
          110.0936269999999979, 30.2267289999999988, 110.5391089999999963,
          31.3957230000000003,
        ],
      },
    })
    .style(style);

  scene.addLayer(layer);
}

// G6 Tree Graph
const width = graphEl.scrollWidth;
const height = graphEl.scrollHeight || 500;
const graph = new G6.TreeGraph({
  container: graphEl,
  width,
  height,
  linkCenter: true,
  modes: {
    default: ["click-select", "drag-canvas", "zoom-canvas"],
  },
  defaultNode: {
    size: 20,
    anchorPoints: [
      [0, 0.5],
      [1, 0.5],
    ],
  },
  defaultEdge: {
    type: "cubic-vertical",
  },
  layout: {
    type: "compactBox",
    direction: "TB",
    getId: function getId(d) {
      return d.id;
    },
    getHeight: function getHeight() {
      return 16;
    },
    getWidth: function getWidth() {
      return 16;
    },
    getVGap: function getVGap() {
      return 40;
    },
    getHGap: function getHGap() {
      return 20;
    },
  },
});

graph.node(function (node) {
  let position = "right";
  let rotate = 0;
  if (!node.children) {
    position = "bottom";
    rotate = Math.PI / 2;
  }
  return {
    label: node.id,
    labelCfg: {
      position,
      offset: 5,
      style: {
        rotate,
        textAlign: "start",
      },
    },
  };
});

graph.on("nodeselectchange", (e) => {
  if (e.select) {
    const currentId = e.selectedItems.nodes[0].getModel().id;
    const source = e.selectedItems.nodes[0].getModel().url;
    const style = e.selectedItems.nodes[0].getModel().style;
    addLayer(source, style);
  } else {
    scene.removeAllLayer();
  }
});

graph.data(STORE[1]);
graph.render();
graph.fitView();

if (typeof window !== "undefined")
  window.onresize = () => {
    if (!graph || graph.get("destroyed")) return;
    if (!graphEl || !graphEl.scrollWidth || !graphEl.scrollHeight) return;
    graph.changeSize(graphEl.scrollWidth, graphEl.scrollHeight);
  };

// Nav Button
function handleNavBtnClick(value) {
  graph.data(STORE[value]);
  graph.render();
  graph.fitView();
}

navBtnEl.forEach((btnEl) => {
  btnEl.addEventListener("click", (e) => handleNavBtnClick(e.target.value));
});
