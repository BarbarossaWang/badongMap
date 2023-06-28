const STORE = [
  {
    id: "巴东双评价",
    children: [
      {
        id: "本底评价",
      },
      {
        id: "承载力评价",
      },
      {
        id: "适宜性评价",
      },

      {
        id: "综合分析",
      },
    ],
  },
  {
    id: "本底评价",
    children: [
      {
        id: "生态资源",
        children: [
          {
            id: "生物多样性维护重要性",
            url: "https://cnaquaman.com/alist/d/Badong/bi.tif",
            img: "生物多样性维护功能重要性评价.png",
            style: {
              clampLow: false,
              clampHigh: false,
              domain: [0, 1],
              rampColors: {
                type: "quantize",
                colors: ["#b2182b", "#d6604d"],
              },
            },
          },
          {
            id: "水源涵养功能重要性",
            url: "https://cnaquaman.com/alist/d/Badong/wr.tif",
            img: "水源涵养功能重要性评价.png",
            style: {
              clampLow: false,
              clampHigh: false,
              domain: [2215, 10581],
              rampColors: {
                type: "quantize",
                colors: ["#b2182b", "#d6604d", "#f4a582"],
              },
            },
          },
          {
            id: "水土保持功能重要性",
            url: "https://cnaquaman.com/alist/d/Badong/badong_wr.tif",
            img: "水土保持功能重要性评价.png",
            style: {
              clampLow: false,
              clampHigh: false,
              domain: [2215, 10581],
              rampColors: {
                type: "quantize",
                colors: ["#b2182b", "#d6604d", "#f4a582"],
              },
            },
          },
          {
            id: "水土流失敏感性",
            url: "https://cnaquaman.com/alist/d/Badong/badong_ws.tif",
            img: "水土流失敏感评价.png",
            style: {
              clampLow: false,
              clampHigh: false,
              domain: [2215, 10581],
              rampColors: {
                type: "quantize",
                colors: ["#b2182b", "#d6604d", "#f4a582"],
              },
            },
          },
          {
            id: "石漠化敏感性",
            url: "https://cnaquaman.com/alist/d/Badong/badong_rd.tif",
            img: "巴东县石漠化脆弱性评价等级图.png",
            style: {
              clampLow: false,
              clampHigh: false,
              domain: [2215, 10581],
              rampColors: {
                type: "quantize",
                colors: ["#b2182b", "#d6604d", "#f4a582"],
              },
            },
          },
        ],
      },
      {
        id: "土地资源",
        children: [
          {
            id: "农业生产土地资源",
            url: "https://cnaquaman.com/alist/d/Badong/badong_pi.tif",
            img: "农业生产土地资源评价.png",
            style: {
              clampLow: false,
              clampHigh: false,
              domain: [2215, 10581],
              rampColors: {
                type: "quantize",
                colors: ["#b2182b", "#d6604d", "#f4a582"],
              },
            },
          },
          {
            id: "城镇建设土地资源",
            url: "https://cnaquaman.com/alist/d/Badong/badong_ci.tif",
            img: "城镇建设土地资源评价.png",
            style: {
              clampLow: false,
              clampHigh: false,
              domain: [2215, 10581],
              rampColors: {
                type: "quantize",
                colors: ["#b2182b", "#d6604d", "#f4a582"],
              },
            },
          },
        ],
      },
      {
        id: "水资源",
        children: [
          {
            id: "用水总量控制指标",
          },
        ],
      },
      {
        id: "自然灾害",
        children: [
          {
            id: "气象灾害风险",
          },
          {
            id: "地震灾害风险",
          },
          {
            id: "地质灾害风险",
          },
        ],
      },
    ],
  },
  {
    id: "承载力评价",
    children: [
      {
        id: "农业承载",
      },
      {
        id: "土地资源",
      },
    ],
  },
  {
    id: "适宜性评价",
    children: [
      {
        id: "农业生产",
        url: "https://cnaquaman.com/alist/d/Badong/badong_bi.tif",
        img: "巴东县农业生产适宜性评价专题图.png",
        style: {
          clampLow: false,
          clampHigh: false,
          domain: [2215, 10581],
          rampColors: {
            type: "quantize",
            colors: ["#b2182b", "#d6604d", "#f4a582"],
          },
        },
      },
      {
        id: "城镇建设",
        url: "https://cnaquaman.com/alist/d/Badong/badong_bi.tif",
        img: "巴东县城镇建设适宜性评价专题图.png",
        style: {
          clampLow: false,
          clampHigh: false,
          domain: [2215, 10581],
          rampColors: {
            type: "quantize",
            colors: ["#b2182b", "#d6604d", "#f4a582"],
          },
        },
      },
    ],
  },
  {
    id: "综合分析",
  },
];

export default STORE;
