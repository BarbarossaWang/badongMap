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
            img: "img7.png",
            content:
              "生物多样性指地球上各种生命的多样性，涵盖所有生命形式，从基因、细菌到所有生态系统，例如森林或珊瑚礁生态系统。我们今天见到的生物多样性是经过45亿年进化的结果，并日益受到人类的影响。生物多样性在诸多方面构成了我们赖以生存的生命之网——食物、水、药物、稳定的气候、经济增长等等。全球一半以上的GDP依赖于大自然。超过10亿人依靠森林谋生。土地和海洋吸收了碳排放总量的一半以上。然而，大自然正处于危机之中。多达一百万个物种面临灭绝的威胁，许多物种在几十年内就会灭绝。一些不可替代的生态系统，如亚马逊雨林的部分地区，由于森林砍伐，正在从碳汇变成碳源。85%的湿地，如能够吸收大量碳的盐沼和红树林沼泽，已经消失了。（联合国）",
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
            img: "img11.png",
            content:
              "水源涵养功能主要表现在缓和地表径流、补充地下水、减缓河流流量的季节波动、滞洪补枯、保 证水质等方面。 水源涵养能力与降雨、地表径流、生态系统类型组成、地表植被、土层厚度及物理性 质等因素相关。（生态环境部）",
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
            url: "https://cnaquaman.com/alist/d/Badong/sc.tif",
            img: "img9.png",
            content:
              "水土保持的目的在避免裸露土地或各種土地開發利用行為，使土壤遭受沖蝕、水 資源大量流失，而必須採取適當之對策，以確保水土資源不致破壞流失，此等為保護 水土流失所採取之防治對策即稱為水土保持方法。",
            style: {
              clampLow: false,
              clampHigh: false,
              domain: [4, 14421],
              rampColors: {
                type: "quantize",
                colors: ["#b2182b", "#d6604d", "#f4a582", "#5a191b", "#a7535a"],
              },
            },
          },
          {
            id: "水土流失敏感性",
            url: "https://cnaquaman.com/alist/d/Badong/ws.tif",
            img: "img10.png",
            content:
              "水土流失敏感性是 指区域生态系统水土流失生态过程发生的潜在可能性及程度,它是生态敏感性的重要组成部分,用来说明区域发 生水土流失的难易程度。",
            style: {
              clampLow: false,
              clampHigh: false,
              domain: [1, 9],
              rampColors: {
                type: "quantize",
                colors: ["#b2182b", "#d6604d", "#f4a582", "#5a191b", "#a7535a"],
              },
            },
          },
          {
            id: "石漠化敏感性",
            url: "https://cnaquaman.com/alist/d/Badong/rd.tif",
            img: "img13.png",
            content:
              "石漠化敏感性是评价石漠化发生的敏感程度大小,是判断石漠化发生发展的指示灯,是进行石漠化综合治理和生态环境恢复的理论基础和前提。",
            style: {
              clampLow: false,
              clampHigh: false,
              domain: [0, 7],
              rampColors: {
                type: "quantize",
                colors: ["#b2182b", "#d6604d", "#f4a582", "#5a191b", "#a7535a"],
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
            img: "img1.png",
            url: "https://cnaquaman.com/alist/d/Badong/pi.tif",
            style: {
              clampLow: false,
              clampHigh: false,
              domain: [0, 2],
              rampColors: {
                type: "quantize",
                colors: ["#b2182b", "#d6604d", "#f4a582"],
              },
            },
          },
          {
            id: "城镇建设土地资源",
            img: "img2.png",
            url: "https://cnaquaman.com/alist/d/Badong/ci.tif",
            style: {
              clampLow: false,
              clampHigh: false,
              domain: [1, 5],
              rampColors: {
                type: "quantize",
                colors: ["#b2182b", "#d6604d", "#f4a582", "#5a191b", "#a7535a"],
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
        img: "img3.png",
        url: "https://cnaquaman.com/alist/d/Badong/pi.tif",
        style: {
          clampLow: false,
          clampHigh: false,
          domain: [0, 2],
          rampColors: {
            type: "quantize",
            colors: ["#b2182b", "#d6604d", "#f4a582"],
          },
        },
      },
      {
        id: "城镇建设",
        url: "https://cnaquaman.com/alist/d/Badong/ci.tif",
        img: "img4.png",
        style: {
          clampLow: false,
          clampHigh: false,
          domain: [1, 5],
          rampColors: {
            type: "quantize",
            colors: ["#b2182b", "#d6604d", "#f4a582", "#5a191b", "#a7535a"],
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
