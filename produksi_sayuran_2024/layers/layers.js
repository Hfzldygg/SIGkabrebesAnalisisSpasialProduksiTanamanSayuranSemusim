var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LapakGIS_Batas_Kecamatan_2024_1 = new ol.format.GeoJSON();
var features_LapakGIS_Batas_Kecamatan_2024_1 = format_LapakGIS_Batas_Kecamatan_2024_1.readFeatures(json_LapakGIS_Batas_Kecamatan_2024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapakGIS_Batas_Kecamatan_2024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LapakGIS_Batas_Kecamatan_2024_1.addFeatures(features_LapakGIS_Batas_Kecamatan_2024_1);
var lyr_LapakGIS_Batas_Kecamatan_2024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LapakGIS_Batas_Kecamatan_2024_1, 
                style: style_LapakGIS_Batas_Kecamatan_2024_1,
                popuplayertitle: 'LapakGIS_Batas_Kecamatan_2024',
                interactive: true,
    title: 'LapakGIS_Batas_Kecamatan_2024<br />\
    <img src="styles/legend/LapakGIS_Batas_Kecamatan_2024_1_0.png" /> Rendah<br />\
    <img src="styles/legend/LapakGIS_Batas_Kecamatan_2024_1_1.png" /> Sedang<br />\
    <img src="styles/legend/LapakGIS_Batas_Kecamatan_2024_1_2.png" /> Tinggi<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_LapakGIS_Batas_Kecamatan_2024_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_LapakGIS_Batas_Kecamatan_2024_1];
lyr_LapakGIS_Batas_Kecamatan_2024_1.set('fieldAliases', {'KDCPUM': 'KDCPUM', 'WADMKC': 'Kecamatan', 'IdShp': 'IdShp', 'Data Produksi Sayuran Kab.Brebes 2024_Kecamatan': 'Kecamatan', 'Data Produksi Sayuran Kab.Brebes 2024_Bawang Daun': 'Produksi Bawang Daun (Kwn)', 'Data Produksi Sayuran Kab.Brebes 2024_Bawang Merah': 'Produksi Bawang Merah (Kwn)', 'Data Produksi Sayuran Kab.Brebes 2024_Bawang Putih': 'Produksi Bawang Putih (Kwn)', 'Data Produksi Sayuran Kab.Brebes 2024_Bayam': 'Produksi Bayam (Kwn)', 'Data Produksi Sayuran Kab.Brebes 2024_Buncis': 'Produksi Buncis (Kwn)', 'Data Produksi Sayuran Kab.Brebes 2024_Cabai Rawit': 'Produksi Cabai Rawit (Kwn)', 'Data Produksi Sayuran Kab.Brebes 2024_Kacang Panjang': 'Produksi Kacang Panjang (Kwn)', 'Data Produksi Sayuran Kab.Brebes 2024_Kangkung': 'Produksi Kangkung (Kwn)', 'Data Produksi Sayuran Kab.Brebes 2024_Kembang Kol': 'Produksi Kembang Kol (Kwn)', 'Data Produksi Sayuran Kab.Brebes 2024_Kentang': 'Produksi Kentang (Kwn)', 'Data Produksi Sayuran Kab.Brebes 2024_Ketimun': 'Produksi Ketimun (Kwn)', 'Data Produksi Sayuran Kab.Brebes 2024_Kubis': 'Produksi Kubis (Kwn)', 'Data Produksi Sayuran Kab.Brebes 2024_Labu Siam': 'Produksi Labu Siam (Kwn)', 'Data Produksi Sayuran Kab.Brebes 2024_Sawi': 'Produksi Sawi (Kwn)', 'Data Produksi Sayuran Kab.Brebes 2024_Terong': 'Produksi Terong (Kwn)', 'Data Produksi Sayuran Kab.Brebes 2024_Tomat': 'Produksi Tomat (Kwn)', 'Data Produksi Sayuran Kab.Brebes 2024_Wortel': 'Produksi Wortel (Kwn)', 'Data Produksi Sayuran Kab.Brebes 2024_Cabai Besar': 'Produksi Cabai Besar (Kwn)', 'Data Produksi Sayuran Kab.Brebes 2024_Cabai Keriting': 'Produksi Cabai Keriting (Kwn)', 'Data Produksi Sayuran Kab.Brebes 2024_Jumlah': 'Jumlah Produksi (Kwn)', });
lyr_LapakGIS_Batas_Kecamatan_2024_1.set('fieldImages', {'KDCPUM': 'Hidden', 'WADMKC': 'TextEdit', 'IdShp': 'Hidden', 'Data Produksi Sayuran Kab.Brebes 2024_Kecamatan': 'Hidden', 'Data Produksi Sayuran Kab.Brebes 2024_Bawang Daun': 'TextEdit', 'Data Produksi Sayuran Kab.Brebes 2024_Bawang Merah': 'TextEdit', 'Data Produksi Sayuran Kab.Brebes 2024_Bawang Putih': 'TextEdit', 'Data Produksi Sayuran Kab.Brebes 2024_Bayam': 'TextEdit', 'Data Produksi Sayuran Kab.Brebes 2024_Buncis': 'TextEdit', 'Data Produksi Sayuran Kab.Brebes 2024_Cabai Rawit': 'TextEdit', 'Data Produksi Sayuran Kab.Brebes 2024_Kacang Panjang': 'TextEdit', 'Data Produksi Sayuran Kab.Brebes 2024_Kangkung': 'TextEdit', 'Data Produksi Sayuran Kab.Brebes 2024_Kembang Kol': 'TextEdit', 'Data Produksi Sayuran Kab.Brebes 2024_Kentang': 'TextEdit', 'Data Produksi Sayuran Kab.Brebes 2024_Ketimun': 'TextEdit', 'Data Produksi Sayuran Kab.Brebes 2024_Kubis': 'TextEdit', 'Data Produksi Sayuran Kab.Brebes 2024_Labu Siam': 'TextEdit', 'Data Produksi Sayuran Kab.Brebes 2024_Sawi': 'TextEdit', 'Data Produksi Sayuran Kab.Brebes 2024_Terong': 'TextEdit', 'Data Produksi Sayuran Kab.Brebes 2024_Tomat': 'TextEdit', 'Data Produksi Sayuran Kab.Brebes 2024_Wortel': 'TextEdit', 'Data Produksi Sayuran Kab.Brebes 2024_Cabai Besar': 'TextEdit', 'Data Produksi Sayuran Kab.Brebes 2024_Cabai Keriting': 'TextEdit', 'Data Produksi Sayuran Kab.Brebes 2024_Jumlah': 'TextEdit', });
lyr_LapakGIS_Batas_Kecamatan_2024_1.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'Data Produksi Sayuran Kab.Brebes 2024_Bawang Daun': 'inline label - always visible', 'Data Produksi Sayuran Kab.Brebes 2024_Bawang Merah': 'inline label - always visible', 'Data Produksi Sayuran Kab.Brebes 2024_Bawang Putih': 'inline label - always visible', 'Data Produksi Sayuran Kab.Brebes 2024_Bayam': 'inline label - always visible', 'Data Produksi Sayuran Kab.Brebes 2024_Buncis': 'inline label - always visible', 'Data Produksi Sayuran Kab.Brebes 2024_Cabai Rawit': 'inline label - always visible', 'Data Produksi Sayuran Kab.Brebes 2024_Kacang Panjang': 'inline label - always visible', 'Data Produksi Sayuran Kab.Brebes 2024_Kangkung': 'inline label - always visible', 'Data Produksi Sayuran Kab.Brebes 2024_Kembang Kol': 'inline label - always visible', 'Data Produksi Sayuran Kab.Brebes 2024_Kentang': 'inline label - always visible', 'Data Produksi Sayuran Kab.Brebes 2024_Ketimun': 'inline label - always visible', 'Data Produksi Sayuran Kab.Brebes 2024_Kubis': 'inline label - always visible', 'Data Produksi Sayuran Kab.Brebes 2024_Labu Siam': 'inline label - always visible', 'Data Produksi Sayuran Kab.Brebes 2024_Sawi': 'inline label - always visible', 'Data Produksi Sayuran Kab.Brebes 2024_Terong': 'inline label - always visible', 'Data Produksi Sayuran Kab.Brebes 2024_Tomat': 'inline label - always visible', 'Data Produksi Sayuran Kab.Brebes 2024_Wortel': 'inline label - always visible', 'Data Produksi Sayuran Kab.Brebes 2024_Cabai Besar': 'inline label - always visible', 'Data Produksi Sayuran Kab.Brebes 2024_Cabai Keriting': 'inline label - always visible', 'Data Produksi Sayuran Kab.Brebes 2024_Jumlah': 'inline label - always visible', });
lyr_LapakGIS_Batas_Kecamatan_2024_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});