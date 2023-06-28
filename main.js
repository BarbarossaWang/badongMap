import "./style.scss";

import * as bootstrap from "bootstrap";

// import Graph from './graph';
import G6 from "@antv/g6";
import STORE from "./store";

import {
  ExportImage,
  Fullscreen,
  MapTheme,
  RasterLayer,
  Scale,
  Scene,
  Zoom,
  MouseLocation,
  LayerSwitch,
  LineLayer,
} from "@antv/l7";
import { GaodeMap } from "@antv/l7-maps";
import * as GeoTIFF from "geotiff";

// const mapEl = document.getElementById('map')
const graphEl = document.getElementById("graph");
// Nav Button
const navBtnEl = document.querySelectorAll(".nav-btn");
const contourEL = document.getElementById("contour");
const imageryEl = document.getElementById("imagery");
const atEl = document.getElementById("articleTitle");
const acEl = document.getElementById("articleContent");
const aiEl = document.getElementById("articleImg");

navBtnEl.forEach((btnEl) => {
  btnEl.addEventListener("click", (e) => handleNavBtnClick(e));
});

function handleNavBtnClick(e) {
  navBtnEl.forEach((btnEl) => {
    btnEl.classList.remove("btn-primary");
  });
  e.target.classList.toggle("btn-primary");
  graph.changeData(STORE[e.target.value]);
  graph.fitView();
}

// L7 Map
// Init map scene
const scene = new Scene({
  id: "map",
  map: new GaodeMap({
    style: "normal",
    pitch: 45,
    center: [110.32, 31.05],
    zoom: 8,
  }),
});

// L7 map controls
const mapTheme = new MapTheme();
const mapZoom = new Zoom({
  position: "lefttop",
});
const mapScale = new Scale();
const mapFullScreen = new Fullscreen();
const mapExportImage = new ExportImage({
  onExport: (base64) => {
    alert("保存成功");
  },
});
const mapMouseLocation = new MouseLocation({
  position: "bottomright",
});
const layerSwitch = new LayerSwitch();

// Add map controls
scene.addControl(mapTheme);
scene.addControl(mapZoom);
scene.addControl(mapScale);
scene.addControl(mapFullScreen);
scene.addControl(mapExportImage);
scene.addControl(mapMouseLocation);
scene.addControl(layerSwitch);

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

async function addLayer(id, source, style) {
  const tiffdata = await getTiffData(source);

  const layer = new RasterLayer({
    name: id,
  });
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
  layerSwitch.setOptions({
    layers: scene.getLayers(),
  });
}

// G6 Tree Graph
const width = graphEl.scrollWidth - 20;
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
    type: "cubic-horizontal",
  },
  layout: {
    type: "compactBox",
    direction: "LR",
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
      return 10;
    },
    getHGap: function getHGap() {
      return 100;
    },
  },
});

graph.node(function (node) {
  return {
    label: node.id,
    labelCfg: {
      offset: 10,
      position: node.children && node.children.length > 0 ? "left" : "right",
    },
  };
});

graph.on("nodeselectchange", (e) => {
  if (e.select) {
    const currentId = e.selectedItems.nodes[0].getModel().id;
    const source = e.selectedItems.nodes[0].getModel().url;
    const style = e.selectedItems.nodes[0].getModel().style;
    const content = e.selectedItems.nodes[0].getModel().content;
    const img = e.selectedItems.nodes[0].getModel().img;

    atEl.innerText = currentId ? currentId : "";
    acEl.innerText = content ? content : "";
    aiEl.src = img ? img : "";

    source ? addLayer(currentId, source, style) : "";

    switch (currentId) {
      case "本底评价":
        graph.changeData(STORE[1]);
        graph.fitView();
        break;
      case "承载力评价":
        graph.changeData(STORE[2]);
        graph.fitView();
        break;
      case "适宜性评价":
        graph.changeData(STORE[3]);
        graph.fitView();
        break;
      case "综合分析":
        graph.changeData(STORE[4]);
        graph.fitView();
        break;
    }
  } else {
    scene.removeAllLayer();
  }
});

graph.data(STORE[0]);
graph.render();
graph.fitView();

if (typeof window !== "undefined")
  window.onresize = () => {
    if (!graph || graph.get("destroyed")) return;
    if (!graphEl || !graphEl.scrollWidth || !graphEl.scrollHeight) return;
    graph.changeSize(graphEl.scrollWidth, graphEl.scrollHeight);
  };

// Button Events
contourEL.addEventListener("click", () => {
  fetch("https://cnaquaman.com/alist/d/Badong/contour.json")
    .then((res) => res.json())
    .then((data) => {
      const layer = new LineLayer({
        name: "等高线",
      })
        .source(data)
        .size("ELEV", (h) => {
          return [h % 50 === 0 ? 1.0 : 0.5, (h - 1400) * 20];
        })
        .shape("line")
        .scale("ELEV", {
          type: "quantize",
        })
        .style({
          heightfixed: true,
        })
        .color("ELEV", [
          "#094D4A",
          "#146968",
          "#1D7F7E",
          "#289899",
          "#34B6B7",
          "#4AC5AF",
          "#5FD3A6",
          "#7BE39E",
          "#A1EDB8",
          "#CEF8D6",
        ]);
      scene.addLayer(layer);
      layerSwitch.setOptions({
        layers: scene.getLayers(),
      });
    });
});

imageryEl.addEventListener("click", () => {
  // 影像底图服务
  const baseLayer = new RasterLayer({
    name: "高德影像底图",
    zIndex: 1,
  });
  baseLayer.source(
    "https://webst0{1-4}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
    {
      parser: {
        type: "rasterTile",
        tileSize: 256,
        // minZoom: 6,
        // maxZoom: 15,
        zoomOffset: 0,
        // extent: [-180, -85.051129, 179, 85.051129],
      },
    }
  );

  // 影像注记服务
  const annotionLayer = new RasterLayer({
    name: "高德影像注记",
    zIndex: 2,
  });
  annotionLayer.source(
    "https://webst0{1-3}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}",
    {
      parser: {
        type: "rasterTile",
        tileSize: 256,
        // minZoom: 6,
        // maxZoom: 15,
        zoomOffset: 0,
        // extent: [-180, -85.051129, 179, 85.051129],
      },
    }
  );

  scene.addLayer(baseLayer);
  scene.addLayer(annotionLayer);
  layerSwitch.setOptions({
    layers: scene.getLayers(),
  });
});
