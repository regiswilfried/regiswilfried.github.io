ol.proj.proj4.register(proj4);
ol.proj.get("USER:103478").setExtent([289631.244549, 9827229.007879, 317155.300549, 9844124.354754]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_limites_tous_amas_1 = new ol.format.GeoJSON();
var features_limites_tous_amas_1 = format_limites_tous_amas_1.readFeatures(json_limites_tous_amas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:103478'});
var jsonSource_limites_tous_amas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limites_tous_amas_1.addFeatures(features_limites_tous_amas_1);
var lyr_limites_tous_amas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_limites_tous_amas_1, 
                style: style_limites_tous_amas_1,
                interactive: true,
                title: '<img src="styles/legend/limites_tous_amas_1.png" /> limites_tous_amas'
            });
var format_concession_comilog_n13_mporalokoutm33s_2 = new ol.format.GeoJSON();
var features_concession_comilog_n13_mporalokoutm33s_2 = format_concession_comilog_n13_mporalokoutm33s_2.readFeatures(json_concession_comilog_n13_mporalokoutm33s_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:103478'});
var jsonSource_concession_comilog_n13_mporalokoutm33s_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_concession_comilog_n13_mporalokoutm33s_2.addFeatures(features_concession_comilog_n13_mporalokoutm33s_2);
var lyr_concession_comilog_n13_mporalokoutm33s_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_concession_comilog_n13_mporalokoutm33s_2, 
                style: style_concession_comilog_n13_mporalokoutm33s_2,
                interactive: true,
                title: '<img src="styles/legend/concession_comilog_n13_mporalokoutm33s_2.png" /> concession_comilog_n°13_mporaloko-utm33s'
            });
var format_LimiteexclusionC2020_3 = new ol.format.GeoJSON();
var features_LimiteexclusionC2020_3 = format_LimiteexclusionC2020_3.readFeatures(json_LimiteexclusionC2020_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:103478'});
var jsonSource_LimiteexclusionC2020_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteexclusionC2020_3.addFeatures(features_LimiteexclusionC2020_3);
var lyr_LimiteexclusionC2020_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteexclusionC2020_3, 
                style: style_LimiteexclusionC2020_3,
                interactive: true,
                title: '<img src="styles/legend/LimiteexclusionC2020_3.png" /> Limite exclusion C2020'
            });
var format_Limitesgolder2018_4 = new ol.format.GeoJSON();
var features_Limitesgolder2018_4 = format_Limitesgolder2018_4.readFeatures(json_Limitesgolder2018_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:103478'});
var jsonSource_Limitesgolder2018_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitesgolder2018_4.addFeatures(features_Limitesgolder2018_4);
var lyr_Limitesgolder2018_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limitesgolder2018_4, 
                style: style_Limitesgolder2018_4,
                interactive: true,
                title: '<img src="styles/legend/Limitesgolder2018_4.png" /> Limites golder 2018'
            });
var format_Bornestopographiques_5 = new ol.format.GeoJSON();
var features_Bornestopographiques_5 = format_Bornestopographiques_5.readFeatures(json_Bornestopographiques_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:103478'});
var jsonSource_Bornestopographiques_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bornestopographiques_5.addFeatures(features_Bornestopographiques_5);
var lyr_Bornestopographiques_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bornestopographiques_5, 
                style: style_Bornestopographiques_5,
                interactive: true,
                title: '<img src="styles/legend/Bornestopographiques_5.png" /> Bornes topographiques'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_limites_tous_amas_1.setVisible(true);lyr_concession_comilog_n13_mporalokoutm33s_2.setVisible(true);lyr_LimiteexclusionC2020_3.setVisible(true);lyr_Limitesgolder2018_4.setVisible(true);lyr_Bornestopographiques_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_limites_tous_amas_1,lyr_concession_comilog_n13_mporalokoutm33s_2,lyr_LimiteexclusionC2020_3,lyr_Limitesgolder2018_4,lyr_Bornestopographiques_5];
lyr_limites_tous_amas_1.set('fieldAliases', {'N_AMAS': 'N_AMAS', });
lyr_concession_comilog_n13_mporalokoutm33s_2.set('fieldAliases', {'Layer': 'Layer', });
lyr_LimiteexclusionC2020_3.set('fieldAliases', {'Layer': 'Layer', });
lyr_Limitesgolder2018_4.set('fieldAliases', {'Text': 'Text', });
lyr_Bornestopographiques_5.set('fieldAliases', {'id': 'id', 'X': 'X', 'Y': 'Y', 'Z': 'Z', });
lyr_limites_tous_amas_1.set('fieldImages', {'N_AMAS': '', });
lyr_concession_comilog_n13_mporalokoutm33s_2.set('fieldImages', {'Layer': '', });
lyr_LimiteexclusionC2020_3.set('fieldImages', {'Layer': 'TextEdit', });
lyr_Limitesgolder2018_4.set('fieldImages', {'Text': 'TextEdit', });
lyr_Bornestopographiques_5.set('fieldImages', {'id': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Z': 'TextEdit', });
lyr_limites_tous_amas_1.set('fieldLabels', {'N_AMAS': 'inline label', });
lyr_concession_comilog_n13_mporalokoutm33s_2.set('fieldLabels', {'Layer': 'inline label', });
lyr_LimiteexclusionC2020_3.set('fieldLabels', {'Layer': 'inline label', });
lyr_Limitesgolder2018_4.set('fieldLabels', {'Text': 'inline label', });
lyr_Bornestopographiques_5.set('fieldLabels', {'id': 'inline label', 'X': 'inline label', 'Y': 'inline label', 'Z': 'inline label', });
lyr_Bornestopographiques_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});