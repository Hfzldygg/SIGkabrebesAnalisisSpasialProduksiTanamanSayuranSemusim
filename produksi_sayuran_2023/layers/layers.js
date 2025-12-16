var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DataProduksiSayuranKabupatenBrebes2023_1 = new ol.format.GeoJSON();
var features_DataProduksiSayuranKabupatenBrebes2023_1 = format_DataProduksiSayuranKabupatenBrebes2023_1.readFeatures(json_DataProduksiSayuranKabupatenBrebes2023_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DataProduksiSayuranKabupatenBrebes2023_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DataProduksiSayuranKabupatenBrebes2023_1.addFeatures(features_DataProduksiSayuranKabupatenBrebes2023_1);
var lyr_DataProduksiSayuranKabupatenBrebes2023_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DataProduksiSayuranKabupatenBrebes2023_1, 
                style: style_DataProduksiSayuranKabupatenBrebes2023_1,
                popuplayertitle: 'Data Produksi Sayuran Kabupaten Brebes 2023',
                interactive: true,
    title: 'Data Produksi Sayuran Kabupaten Brebes 2023<br />\
    <img src="styles/legend/DataProduksiSayuranKabupatenBrebes2023_1_0.png" /> Rendah<br />\
    <img src="styles/legend/DataProduksiSayuranKabupatenBrebes2023_1_1.png" /> Sedang<br />\
    <img src="styles/legend/DataProduksiSayuranKabupatenBrebes2023_1_2.png" /> Tinggi<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_DataProduksiSayuranKabupatenBrebes2023_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_DataProduksiSayuranKabupatenBrebes2023_1];
lyr_DataProduksiSayuranKabupatenBrebes2023_1.set('fieldAliases', {'KDCPUM': 'KDCPUM', 'WADMKC': 'Kecamatan', 'IdShp': 'IdShp', 'Data Produksi Sayuran Brebes 2023_Kecamatan': 'Data Produksi Sayuran Brebes 2023_Kecamatan', 'Data Produksi Sayuran Brebes 2023_Bawang Daun': 'Produksi Bawang Daun (Kwn)', 'Data Produksi Sayuran Brebes 2023_Bawang Merah': 'Produksi Bawang Merah (Kwn)', 'Data Produksi Sayuran Brebes 2023_Bawang Putih': 'Produksi Bawang Putih (Kwn)', 'Data Produksi Sayuran Brebes 2023_Bayam': 'Produksi Bayam (Kwn)', 'Data Produksi Sayuran Brebes 2023_Buncis': 'Produksi Buncis (Kwn)', 'Data Produksi Sayuran Brebes 2023_Cabai Rawit': 'Produksi Cabai Rawit (Kwn)', 'Data Produksi Sayuran Brebes 2023_Kacang Panjang': 'Produksi Kacang Panjang (Kwn)', 'Data Produksi Sayuran Brebes 2023_Kangkung': 'Produksi Kangkung (Kwn)', 'Data Produksi Sayuran Brebes 2023_Kembang Kol': 'Produksi Kembang Kol (Kwn)', 'Data Produksi Sayuran Brebes 2023_Kentang': 'Produksi Kentang (Kwn)', 'Data Produksi Sayuran Brebes 2023_Ketimun': 'Produksi Ketimun (Kwn)', 'Data Produksi Sayuran Brebes 2023_Kubis': 'Produksi Kubis (Kwn)', 'Data Produksi Sayuran Brebes 2023_Labu Siam': 'Produksi Labu Siam (Kwn)', 'Data Produksi Sayuran Brebes 2023_Papriks': 'Produksi Papriks (Kwn)', 'Data Produksi Sayuran Brebes 2023_Sawi': 'Produksi Sawi (Kwn)', 'Data Produksi Sayuran Brebes 2023_Terong': 'Produksi Terong (Kwn)', 'Data Produksi Sayuran Brebes 2023_Tomat': 'Produksi Tomat (Kwn)', 'Data Produksi Sayuran Brebes 2023_Wortel': 'Produksi Wortel (Kwn)', 'Data Produksi Sayuran Brebes 2023_Cabai Besar': 'Produksi Cabai Besar (Kwn)', 'Data Produksi Sayuran Brebes 2023_Cabai Keriting': 'Produksi Cabai Keriting (Kwn)', 'Data Produksi Sayuran Brebes 2023_Jumlah': 'Jumlah Produksi (Kwn)', });
lyr_DataProduksiSayuranKabupatenBrebes2023_1.set('fieldImages', {'KDCPUM': 'Hidden', 'WADMKC': 'TextEdit', 'IdShp': 'Hidden', 'Data Produksi Sayuran Brebes 2023_Kecamatan': 'Hidden', 'Data Produksi Sayuran Brebes 2023_Bawang Daun': 'TextEdit', 'Data Produksi Sayuran Brebes 2023_Bawang Merah': 'TextEdit', 'Data Produksi Sayuran Brebes 2023_Bawang Putih': 'TextEdit', 'Data Produksi Sayuran Brebes 2023_Bayam': 'TextEdit', 'Data Produksi Sayuran Brebes 2023_Buncis': 'TextEdit', 'Data Produksi Sayuran Brebes 2023_Cabai Rawit': 'TextEdit', 'Data Produksi Sayuran Brebes 2023_Kacang Panjang': 'TextEdit', 'Data Produksi Sayuran Brebes 2023_Kangkung': 'TextEdit', 'Data Produksi Sayuran Brebes 2023_Kembang Kol': 'TextEdit', 'Data Produksi Sayuran Brebes 2023_Kentang': 'TextEdit', 'Data Produksi Sayuran Brebes 2023_Ketimun': 'TextEdit', 'Data Produksi Sayuran Brebes 2023_Kubis': 'TextEdit', 'Data Produksi Sayuran Brebes 2023_Labu Siam': 'TextEdit', 'Data Produksi Sayuran Brebes 2023_Papriks': 'TextEdit', 'Data Produksi Sayuran Brebes 2023_Sawi': 'TextEdit', 'Data Produksi Sayuran Brebes 2023_Terong': 'TextEdit', 'Data Produksi Sayuran Brebes 2023_Tomat': 'TextEdit', 'Data Produksi Sayuran Brebes 2023_Wortel': 'TextEdit', 'Data Produksi Sayuran Brebes 2023_Cabai Besar': 'TextEdit', 'Data Produksi Sayuran Brebes 2023_Cabai Keriting': 'TextEdit', 'Data Produksi Sayuran Brebes 2023_Jumlah': 'TextEdit', });
lyr_DataProduksiSayuranKabupatenBrebes2023_1.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'Data Produksi Sayuran Brebes 2023_Bawang Daun': 'inline label - always visible', 'Data Produksi Sayuran Brebes 2023_Bawang Merah': 'inline label - always visible', 'Data Produksi Sayuran Brebes 2023_Bawang Putih': 'inline label - always visible', 'Data Produksi Sayuran Brebes 2023_Bayam': 'inline label - always visible', 'Data Produksi Sayuran Brebes 2023_Buncis': 'inline label - always visible', 'Data Produksi Sayuran Brebes 2023_Cabai Rawit': 'inline label - always visible', 'Data Produksi Sayuran Brebes 2023_Kacang Panjang': 'inline label - always visible', 'Data Produksi Sayuran Brebes 2023_Kangkung': 'inline label - always visible', 'Data Produksi Sayuran Brebes 2023_Kembang Kol': 'inline label - always visible', 'Data Produksi Sayuran Brebes 2023_Kentang': 'inline label - always visible', 'Data Produksi Sayuran Brebes 2023_Ketimun': 'inline label - always visible', 'Data Produksi Sayuran Brebes 2023_Kubis': 'inline label - always visible', 'Data Produksi Sayuran Brebes 2023_Labu Siam': 'inline label - always visible', 'Data Produksi Sayuran Brebes 2023_Papriks': 'inline label - always visible', 'Data Produksi Sayuran Brebes 2023_Sawi': 'inline label - always visible', 'Data Produksi Sayuran Brebes 2023_Terong': 'inline label - always visible', 'Data Produksi Sayuran Brebes 2023_Tomat': 'inline label - always visible', 'Data Produksi Sayuran Brebes 2023_Wortel': 'inline label - always visible', 'Data Produksi Sayuran Brebes 2023_Cabai Besar': 'inline label - always visible', 'Data Produksi Sayuran Brebes 2023_Cabai Keriting': 'inline label - always visible', 'Data Produksi Sayuran Brebes 2023_Jumlah': 'inline label - always visible', });
lyr_DataProduksiSayuranKabupatenBrebes2023_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});