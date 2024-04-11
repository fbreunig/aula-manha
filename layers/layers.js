var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_SANDY_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "SANDY",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SANDY_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6122627.734416, -2875928.685875, -5677127.354900, -2511465.147313]
                            })
                        });

lyr_GoogleHybrid_0.setVisible(true);lyr_SANDY_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_SANDY_1];
