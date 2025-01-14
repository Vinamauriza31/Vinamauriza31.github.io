ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([109.799912, -8.453112, 111.310867, -7.522375]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Potensi_Resapan_Air_1 = new ol.format.GeoJSON();
var features_Potensi_Resapan_Air_1 = format_Potensi_Resapan_Air_1.readFeatures(json_Potensi_Resapan_Air_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Potensi_Resapan_Air_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Potensi_Resapan_Air_1.addFeatures(features_Potensi_Resapan_Air_1);
var lyr_Potensi_Resapan_Air_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Potensi_Resapan_Air_1, 
                style: style_Potensi_Resapan_Air_1,
                popuplayertitle: 'Potensi_Resapan_Air',
                interactive: true,
    title: 'Potensi_Resapan_Air<br />\
    <img src="styles/legend/Potensi_Resapan_Air_1_0.png" /> Baik<br />\
    <img src="styles/legend/Potensi_Resapan_Air_1_1.png" /> Agak Baik<br />\
    <img src="styles/legend/Potensi_Resapan_Air_1_2.png" /> Agak Buruk<br />\
    <img src="styles/legend/Potensi_Resapan_Air_1_3.png" /> Buruk<br />\
    <img src="styles/legend/Potensi_Resapan_Air_1_4.png" /> Sangat Buruk<br />'
        });
var format_DIY_Prov_Kab_2 = new ol.format.GeoJSON();
var features_DIY_Prov_Kab_2 = format_DIY_Prov_Kab_2.readFeatures(json_DIY_Prov_Kab_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DIY_Prov_Kab_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DIY_Prov_Kab_2.addFeatures(features_DIY_Prov_Kab_2);
var lyr_DIY_Prov_Kab_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DIY_Prov_Kab_2, 
                style: style_DIY_Prov_Kab_2,
                popuplayertitle: 'DIY_Prov_Kab',
                interactive: false,
                title: '<img src="styles/legend/DIY_Prov_Kab_2.png" /> DIY_Prov_Kab'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Potensi_Resapan_Air_1.setVisible(true);lyr_DIY_Prov_Kab_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Potensi_Resapan_Air_1,lyr_DIY_Prov_Kab_2];
lyr_Potensi_Resapan_Air_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NB_TP': 'NB_TP', 'NB_JT': 'NB_JT', 'NB_KL': 'NB_KL', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Total': 'Total', 'Ket': 'Ket', });
lyr_DIY_Prov_Kab_2.set('fieldAliases', {'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'METADATA': 'METADATA', 'UPDATED': 'UPDATED', });
lyr_Potensi_Resapan_Air_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NB_TP': 'TextEdit', 'NB_JT': 'TextEdit', 'NB_KL': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Total': 'TextEdit', 'Ket': 'TextEdit', });
lyr_DIY_Prov_Kab_2.set('fieldImages', {'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'METADATA': 'TextEdit', 'UPDATED': 'TextEdit', });
lyr_Potensi_Resapan_Air_1.set('fieldLabels', {'OBJECTID': 'no label', 'NB_TP': 'no label', 'NB_JT': 'no label', 'NB_KL': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Total': 'no label', 'Ket': 'inline label - always visible', });
lyr_DIY_Prov_Kab_2.set('fieldLabels', {'KDPKAB': 'no label', 'KDPPUM': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'METADATA': 'no label', 'UPDATED': 'no label', });
lyr_DIY_Prov_Kab_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});