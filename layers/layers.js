ol.proj.proj4.register(proj4);
ol.proj.get("USER:102773").setExtent([294224.578474, 9830608.531137, 314867.620474, 9844028.948513]);
var wms_layers = [];

var format_concession_comilog_n13_mporalokoutm33s_0 = new ol.format.GeoJSON();
var features_concession_comilog_n13_mporalokoutm33s_0 = format_concession_comilog_n13_mporalokoutm33s_0.readFeatures(json_concession_comilog_n13_mporalokoutm33s_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:102773'});
var jsonSource_concession_comilog_n13_mporalokoutm33s_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_concession_comilog_n13_mporalokoutm33s_0.addFeatures(features_concession_comilog_n13_mporalokoutm33s_0);
var lyr_concession_comilog_n13_mporalokoutm33s_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_concession_comilog_n13_mporalokoutm33s_0, 
                style: style_concession_comilog_n13_mporalokoutm33s_0,
                interactive: true,
                title: '<img src="styles/legend/concession_comilog_n13_mporalokoutm33s_0.png" /> concession_comilog_n°13_mporaloko-utm33s'
            });
var format_LimiteexclusionC2020_1 = new ol.format.GeoJSON();
var features_LimiteexclusionC2020_1 = format_LimiteexclusionC2020_1.readFeatures(json_LimiteexclusionC2020_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:102773'});
var jsonSource_LimiteexclusionC2020_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteexclusionC2020_1.addFeatures(features_LimiteexclusionC2020_1);
var lyr_LimiteexclusionC2020_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteexclusionC2020_1, 
                style: style_LimiteexclusionC2020_1,
                interactive: true,
                title: '<img src="styles/legend/LimiteexclusionC2020_1.png" /> Limite exclusion C2020'
            });
var format_Amas_2 = new ol.format.GeoJSON();
var features_Amas_2 = format_Amas_2.readFeatures(json_Amas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:102773'});
var jsonSource_Amas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Amas_2.addFeatures(features_Amas_2);
var lyr_Amas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Amas_2, 
                style: style_Amas_2,
                interactive: true,
                title: '<img src="styles/legend/Amas_2.png" /> Amas'
            });
var format_Limitesgolder2018_3 = new ol.format.GeoJSON();
var features_Limitesgolder2018_3 = format_Limitesgolder2018_3.readFeatures(json_Limitesgolder2018_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:102773'});
var jsonSource_Limitesgolder2018_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitesgolder2018_3.addFeatures(features_Limitesgolder2018_3);
var lyr_Limitesgolder2018_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limitesgolder2018_3, 
                style: style_Limitesgolder2018_3,
                interactive: true,
                title: '<img src="styles/legend/Limitesgolder2018_3.png" /> Limites golder 2018'
            });
var format_Bornestopographiques_4 = new ol.format.GeoJSON();
var features_Bornestopographiques_4 = format_Bornestopographiques_4.readFeatures(json_Bornestopographiques_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:102773'});
var jsonSource_Bornestopographiques_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bornestopographiques_4.addFeatures(features_Bornestopographiques_4);
var lyr_Bornestopographiques_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bornestopographiques_4, 
                style: style_Bornestopographiques_4,
                interactive: true,
                title: '<img src="styles/legend/Bornestopographiques_4.png" /> Bornes topographiques'
            });

lyr_concession_comilog_n13_mporalokoutm33s_0.setVisible(true);lyr_LimiteexclusionC2020_1.setVisible(true);lyr_Amas_2.setVisible(true);lyr_Limitesgolder2018_3.setVisible(true);lyr_Bornestopographiques_4.setVisible(true);
var layersList = [lyr_concession_comilog_n13_mporalokoutm33s_0,lyr_LimiteexclusionC2020_1,lyr_Amas_2,lyr_Limitesgolder2018_3,lyr_Bornestopographiques_4];
lyr_concession_comilog_n13_mporalokoutm33s_0.set('fieldAliases', {'Layer': 'Layer', });
lyr_LimiteexclusionC2020_1.set('fieldAliases', {'Layer': 'Layer', });
lyr_Amas_2.set('fieldAliases', {'N_AMAS': 'N_AMAS', });
lyr_Limitesgolder2018_3.set('fieldAliases', {'Text': 'Text', });
lyr_Bornestopographiques_4.set('fieldAliases', {'id': 'id', 'X': 'X', 'Y': 'Y', 'Z': 'Z', });
lyr_concession_comilog_n13_mporalokoutm33s_0.set('fieldImages', {'Layer': '', });
lyr_LimiteexclusionC2020_1.set('fieldImages', {'Layer': 'TextEdit', });
lyr_Amas_2.set('fieldImages', {'N_AMAS': 'TextEdit', });
lyr_Limitesgolder2018_3.set('fieldImages', {'Text': 'TextEdit', });
lyr_Bornestopographiques_4.set('fieldImages', {'id': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Z': 'TextEdit', });
lyr_concession_comilog_n13_mporalokoutm33s_0.set('fieldLabels', {'Layer': 'no label', });
lyr_LimiteexclusionC2020_1.set('fieldLabels', {'Layer': 'no label', });
lyr_Amas_2.set('fieldLabels', {'N_AMAS': 'no label', });
lyr_Limitesgolder2018_3.set('fieldLabels', {'Text': 'no label', });
lyr_Bornestopographiques_4.set('fieldLabels', {'id': 'no label', 'X': 'no label', 'Y': 'no label', 'Z': 'no label', });
lyr_Bornestopographiques_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});