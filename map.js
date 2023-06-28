// 本底评价 features' assessment
const feat = new LayerGroup({
    layers: [
        // 水土流失敏感性
        new TileLayer({
            source: new GeoTIFF({
                sources: [{
                    url: 'https://cnaquaman.com/alist/d/Badong/badong_ws.tif',
                }]
            })
        }),
        // 水土保持功能重要性
        new TileLayer({
            source: new GeoTIFF({
                sources: [{
                    url: 'https://cnaquaman.com/alist/d/Badong/badong_sc.tif',
                }]
            })
        }),
        // 水源涵养功能重要性 Water Reservation
        new TileLayer({
            source: new GeoTIFF({
                sources: [{
                    url: 'https://cnaquaman.com/alist/d/Badong/badong_wr.tif',
                }]
            })
        }),
        // 生物多样性维护重要性 Biodiversity
        new TileLayer({
            source: new GeoTIFF({
                sources: [{
                    url: 'https://cnaquaman.com/alist/d/Badong/badong_bi.tif',
                }]
            })
        }),
        // 石漠化敏感性 Rocky Desertification
        new TileLayer({
            source: new GeoTIFF({
                sources: [{
                    url: 'https://cnaquaman.com/alist/d/Badong/badong_rd.tif',
                }]
            })
        }),
        // 农业生产土地资源 Production Index
        new TileLayer({
            source: new GeoTIFF({
                sources: [{
                    url: 'https://cnaquaman.com/alist/d/Badong/badong_pi.tif',
                }]
            })
        }),
        // 城镇建设土地资源 Construction Index
        new TileLayer({
            source: new GeoTIFF({
                sources: [{
                    url: 'https://cnaquaman.com/alist/d/Badong/badong_ci.tif',
                }]
            })
        }),
    ]
})
