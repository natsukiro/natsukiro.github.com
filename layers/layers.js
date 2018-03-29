var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_SHPptss_0 = new ol.format.GeoJSON();
var features_SHPptss_0 = format_SHPptss_0.readFeatures(json_SHPptss_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHPptss_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SHPptss_0.addFeatures(features_SHPptss_0);var lyr_SHPptss_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SHPptss_0, 
                style: style_SHPptss_0,
                title: '<img src="styles/legend/SHPptss_0.png" /> SHP ptss'
            });

lyr_SHPptss_0.setVisible(true);
var layersList = [baseLayer,lyr_SHPptss_0];
lyr_SHPptss_0.set('fieldAliases', {'Groupe': 'Groupe', 'ID RELEVE': 'ID RELEVE', 'N° relev�': 'N° relev�', 'Date': 'Date', 'X': 'X', 'Y': 'Y', 'Départeme': 'Départeme', 'Commune': 'Commune', 'Lieu-dit': 'Lieu-dit', 'Nom BV': 'Nom BV', 'Surface BV': 'Surface BV', 'pH': 'pH', 'Températu': 'Températu', 'Conductivi': 'Conductivi', 'Disque de': 'Disque de', 'Dureté': 'Dureté', 'Turbidité': 'Turbidité', 'Nitrate': 'Nitrate', 'Phosphate': 'Phosphate', 'Ammonium': 'Ammonium', 'Sulfate': 'Sulfate', 'Conditions': 'Conditions', 'Seuil (cod': 'Seuil (cod', 'Type de pr': 'Type de pr', 'Situation': 'Situation', 'Irisations': 'Irisations', 'Mousse (co': 'Mousse (co', 'Teinte de': 'Teinte de', 'Odeur (cod': 'Odeur (cod', 'Corps étr': 'Corps étr', 'Précision': 'Précision', 'Hauteur d'': 'Hauteur d'', 'Tempéra_1': 'Tempéra_1', 'Présence': 'Présence', 'Si flore a': 'Si flore a', 'Nombre de': 'Nombre de', 'Présenc_1': 'Présenc_1', 'Recouvreme': 'Recouvreme', 'Présenc_2': 'Présenc_2', 'Recouvre_1': 'Recouvre_1', 'Présenc_3': 'Présenc_3', 'Recouvre_2': 'Recouvre_2', 'Espèces m': 'Espèces m', 'Hauteur ar': 'Hauteur ar', 'Distance a': 'Distance a', 'Présenc_4': 'Présenc_4', 'Recouvre_3': 'Recouvre_3', 'Espèces_1': 'Espèces_1', 'Hauteur _1': 'Hauteur _1', 'Distance_1': 'Distance_1', 'Présenc_5': 'Présenc_5', 'Recouvre_4': 'Recouvre_4', 'Présenc_6': 'Présenc_6', 'Précisi_1': 'Précisi_1', 'Présenc_7': 'Présenc_7', 'Précisi_2': 'Précisi_2', 'Présenc_8': 'Présenc_8', 'Précisi_3': 'Précisi_3', 'Présenc_9': 'Présenc_9', 'Précisi_4': 'Précisi_4', 'Présenc10': 'Présenc10', 'Précisi_5': 'Précisi_5', 'Présenc11': 'Présenc11', 'Précisi_6': 'Précisi_6', });
lyr_SHPptss_0.set('fieldImages', {'Groupe': 'TextEdit', 'ID RELEVE': 'TextEdit', 'N° relev�': 'TextEdit', 'Date': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Départeme': 'TextEdit', 'Commune': 'TextEdit', 'Lieu-dit': 'TextEdit', 'Nom BV': 'TextEdit', 'Surface BV': 'TextEdit', 'pH': 'TextEdit', 'Températu': 'TextEdit', 'Conductivi': 'TextEdit', 'Disque de': 'TextEdit', 'Dureté': 'TextEdit', 'Turbidité': 'TextEdit', 'Nitrate': 'TextEdit', 'Phosphate': 'TextEdit', 'Ammonium': 'TextEdit', 'Sulfate': 'TextEdit', 'Conditions': 'TextEdit', 'Seuil (cod': 'TextEdit', 'Type de pr': 'TextEdit', 'Situation': 'TextEdit', 'Irisations': 'TextEdit', 'Mousse (co': 'TextEdit', 'Teinte de': 'TextEdit', 'Odeur (cod': 'TextEdit', 'Corps étr': 'TextEdit', 'Précision': 'TextEdit', 'Hauteur d'': 'TextEdit', 'Tempéra_1': 'TextEdit', 'Présence': 'TextEdit', 'Si flore a': 'TextEdit', 'Nombre de': 'TextEdit', 'Présenc_1': 'TextEdit', 'Recouvreme': 'TextEdit', 'Présenc_2': 'TextEdit', 'Recouvre_1': 'TextEdit', 'Présenc_3': 'TextEdit', 'Recouvre_2': 'TextEdit', 'Espèces m': 'TextEdit', 'Hauteur ar': 'TextEdit', 'Distance a': 'TextEdit', 'Présenc_4': 'TextEdit', 'Recouvre_3': 'TextEdit', 'Espèces_1': 'TextEdit', 'Hauteur _1': 'TextEdit', 'Distance_1': 'TextEdit', 'Présenc_5': 'TextEdit', 'Recouvre_4': 'TextEdit', 'Présenc_6': 'TextEdit', 'Précisi_1': 'TextEdit', 'Présenc_7': 'TextEdit', 'Précisi_2': 'TextEdit', 'Présenc_8': 'TextEdit', 'Précisi_3': 'TextEdit', 'Présenc_9': 'TextEdit', 'Précisi_4': 'TextEdit', 'Présenc10': 'TextEdit', 'Précisi_5': 'TextEdit', 'Présenc11': 'TextEdit', 'Précisi_6': 'TextEdit', });
lyr_SHPptss_0.set('fieldLabels', {'Groupe': 'inline label', 'ID RELEVE': 'header label', 'N° relev�': 'inline label', 'Date': 'inline label', 'X': 'inline label', 'Y': 'inline label', 'Départeme': 'no label', 'Commune': 'no label', 'Lieu-dit': 'no label', 'Nom BV': 'no label', 'Surface BV': 'no label', 'pH': 'inline label', 'Températu': 'inline label', 'Conductivi': 'inline label', 'Disque de': 'no label', 'Dureté': 'inline label', 'Turbidité': 'inline label', 'Nitrate': 'inline label', 'Phosphate': 'inline label', 'Ammonium': 'no label', 'Sulfate': 'no label', 'Conditions': 'no label', 'Seuil (cod': 'no label', 'Type de pr': 'no label', 'Situation': 'no label', 'Irisations': 'no label', 'Mousse (co': 'no label', 'Teinte de': 'no label', 'Odeur (cod': 'no label', 'Corps étr': 'no label', 'Précision': 'no label', 'Hauteur d'': 'no label', 'Tempéra_1': 'no label', 'Présence': 'no label', 'Si flore a': 'no label', 'Nombre de': 'no label', 'Présenc_1': 'no label', 'Recouvreme': 'no label', 'Présenc_2': 'no label', 'Recouvre_1': 'no label', 'Présenc_3': 'no label', 'Recouvre_2': 'no label', 'Espèces m': 'no label', 'Hauteur ar': 'no label', 'Distance a': 'no label', 'Présenc_4': 'no label', 'Recouvre_3': 'no label', 'Espèces_1': 'no label', 'Hauteur _1': 'no label', 'Distance_1': 'no label', 'Présenc_5': 'no label', 'Recouvre_4': 'no label', 'Présenc_6': 'no label', 'Précisi_1': 'no label', 'Présenc_7': 'no label', 'Précisi_2': 'no label', 'Présenc_8': 'no label', 'Précisi_3': 'no label', 'Présenc_9': 'no label', 'Précisi_4': 'no label', 'Présenc10': 'no label', 'Précisi_5': 'no label', 'Présenc11': 'no label', 'Précisi_6': 'no label', });
lyr_SHPptss_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});