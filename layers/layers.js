var wms_layers = [];

var lyr_STOrtofotocolor2022_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_color_2022",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "[ST] Ortofoto color [2022]",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_STOrtofotocolor2022_0, 0]);
var format_positiuscaldesdestrac_1 = new ol.format.GeoJSON();
var features_positiuscaldesdestrac_1 = format_positiuscaldesdestrac_1.readFeatures(json_positiuscaldesdestrac_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_positiuscaldesdestrac_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_positiuscaldesdestrac_1.addFeatures(features_positiuscaldesdestrac_1);
var lyr_positiuscaldesdestrac_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_positiuscaldesdestrac_1, 
                style: style_positiuscaldesdestrac_1,
                popuplayertitle: "positius caldes d'estrac",
                interactive: true,
                title: '<img src="styles/legend/positiuscaldesdestrac_1.png" /> positius caldes d\'estrac'
            });
var group_Mapasdefondo = new ol.layer.Group({
                                layers: [lyr_STOrtofotocolor2022_0,],
                                title: "Mapas de fondo"});

lyr_STOrtofotocolor2022_0.setVisible(true);lyr_positiuscaldesdestrac_1.setVisible(true);
var layersList = [group_Mapasdefondo,lyr_positiuscaldesdestrac_1];
lyr_positiuscaldesdestrac_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'àrea': 'àrea', });
lyr_positiuscaldesdestrac_1.set('fieldImages', {'fid': 'Range', 'id': 'TextEdit', 'àrea': 'Range', });
lyr_positiuscaldesdestrac_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'àrea': 'no label', });
lyr_positiuscaldesdestrac_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});