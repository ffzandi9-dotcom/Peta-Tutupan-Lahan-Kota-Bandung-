ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32748").setExtent([781138.435200, 9228747.036500, 802757.486000, 9243507.677000]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Kota_BandungADMNew_1 = new ol.format.GeoJSON();
var features_Kota_BandungADMNew_1 = format_Kota_BandungADMNew_1.readFeatures(json_Kota_BandungADMNew_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_Kota_BandungADMNew_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kota_BandungADMNew_1.addFeatures(features_Kota_BandungADMNew_1);
var lyr_Kota_BandungADMNew_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kota_BandungADMNew_1, 
                style: style_Kota_BandungADMNew_1,
                popuplayertitle: 'Kota_Bandung-ADM-New',
                interactive: true,
    title: 'Kota_Bandung-ADM-New<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_0.png" /> Andir<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_1.png" /> Antapani<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_2.png" /> Arcamanik<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_3.png" /> Astana Anyar<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_4.png" /> Babakan Ciparay<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_5.png" /> Bandung Kidul<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_6.png" /> Bandung Kulon<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_7.png" /> Bandung Wetan<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_8.png" /> Batununggal<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_9.png" /> Bojongloa Kaler<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_10.png" /> Bojongloa Kidul<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_11.png" /> Buahbatu<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_12.png" /> Cibeunying Kaler<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_13.png" /> Cibeunying Kidul<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_14.png" /> Cibiru<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_15.png" /> Cicendo<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_16.png" /> Cidadap<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_17.png" /> Cimahi Utara<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_18.png" /> Cinambo<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_19.png" /> Coblong<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_20.png" /> Gedebage<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_21.png" /> Kiaracondong<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_22.png" /> Lengkong<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_23.png" /> Mandalajati<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_24.png" /> Panyileukan<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_25.png" /> Rancasari<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_26.png" /> Regol<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_27.png" /> Sukajadi<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_28.png" /> Sukasari<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_29.png" /> Sumur Bandung<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_30.png" /> Ujungberung<br />\
    <img src="styles/legend/Kota_BandungADMNew_1_31.png" /> <br />' });
var lyr_Clippedmask_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Clipped (mask)<br />\
    <img src="styles/legend/Clippedmask_2_0.png" /> 0<br />\
    <img src="styles/legend/Clippedmask_2_1.png" /> sawah<br />\
    <img src="styles/legend/Clippedmask_2_2.png" /> hutan<br />\
    <img src="styles/legend/Clippedmask_2_3.png" /> 3<br />\
    <img src="styles/legend/Clippedmask_2_4.png" /> 4<br />\
    <img src="styles/legend/Clippedmask_2_5.png" /> 5<br />\
    <img src="styles/legend/Clippedmask_2_6.png" /> 6<br />\
    <img src="styles/legend/Clippedmask_2_7.png" /> 7<br />\
    <img src="styles/legend/Clippedmask_2_8.png" /> 8<br />\
    <img src="styles/legend/Clippedmask_2_9.png" /> 9<br />\
    <img src="styles/legend/Clippedmask_2_10.png" /> 10<br />\
    <img src="styles/legend/Clippedmask_2_11.png" /> 11<br />\
    <img src="styles/legend/Clippedmask_2_12.png" /> 12<br />\
    <img src="styles/legend/Clippedmask_2_13.png" /> 13<br />\
    <img src="styles/legend/Clippedmask_2_14.png" /> 14<br />\
    <img src="styles/legend/Clippedmask_2_15.png" /> 15<br />\
    <img src="styles/legend/Clippedmask_2_16.png" /> 16<br />\
    <img src="styles/legend/Clippedmask_2_17.png" /> 17<br />\
    <img src="styles/legend/Clippedmask_2_18.png" /> 18<br />\
    <img src="styles/legend/Clippedmask_2_19.png" /> 19<br />\
    <img src="styles/legend/Clippedmask_2_20.png" /> 20<br />\
    <img src="styles/legend/Clippedmask_2_21.png" /> 21<br />\
    <img src="styles/legend/Clippedmask_2_22.png" /> 22<br />\
    <img src="styles/legend/Clippedmask_2_23.png" /> 23<br />\
    <img src="styles/legend/Clippedmask_2_24.png" /> 24<br />\
    <img src="styles/legend/Clippedmask_2_25.png" /> 25<br />\
    <img src="styles/legend/Clippedmask_2_26.png" /> 26<br />\
    <img src="styles/legend/Clippedmask_2_27.png" /> 27<br />\
    <img src="styles/legend/Clippedmask_2_28.png" /> 28<br />\
    <img src="styles/legend/Clippedmask_2_29.png" /> 29<br />\
    <img src="styles/legend/Clippedmask_2_30.png" /> 30<br />\
    <img src="styles/legend/Clippedmask_2_31.png" /> 31<br />\
    <img src="styles/legend/Clippedmask_2_32.png" /> 32<br />\
    <img src="styles/legend/Clippedmask_2_33.png" /> 33<br />\
    <img src="styles/legend/Clippedmask_2_34.png" /> 34<br />\
    <img src="styles/legend/Clippedmask_2_35.png" /> 35<br />\
    <img src="styles/legend/Clippedmask_2_36.png" /> 36<br />\
    <img src="styles/legend/Clippedmask_2_37.png" /> 37<br />\
    <img src="styles/legend/Clippedmask_2_38.png" /> 38<br />\
    <img src="styles/legend/Clippedmask_2_39.png" /> 39<br />\
    <img src="styles/legend/Clippedmask_2_40.png" /> 40<br />\
    <img src="styles/legend/Clippedmask_2_41.png" /> 41<br />\
    <img src="styles/legend/Clippedmask_2_42.png" /> 42<br />\
    <img src="styles/legend/Clippedmask_2_43.png" /> 43<br />\
    <img src="styles/legend/Clippedmask_2_44.png" /> 44<br />\
    <img src="styles/legend/Clippedmask_2_45.png" /> 45<br />\
    <img src="styles/legend/Clippedmask_2_46.png" /> 46<br />\
    <img src="styles/legend/Clippedmask_2_47.png" /> 47<br />\
    <img src="styles/legend/Clippedmask_2_48.png" /> 48<br />\
    <img src="styles/legend/Clippedmask_2_49.png" /> 49<br />\
    <img src="styles/legend/Clippedmask_2_50.png" /> 50<br />\
    <img src="styles/legend/Clippedmask_2_51.png" /> 51<br />\
    <img src="styles/legend/Clippedmask_2_52.png" /> 52<br />\
    <img src="styles/legend/Clippedmask_2_53.png" /> 53<br />\
    <img src="styles/legend/Clippedmask_2_54.png" /> 54<br />\
    <img src="styles/legend/Clippedmask_2_55.png" /> 55<br />\
    <img src="styles/legend/Clippedmask_2_56.png" /> 56<br />\
    <img src="styles/legend/Clippedmask_2_57.png" /> 57<br />\
    <img src="styles/legend/Clippedmask_2_58.png" /> 58<br />\
    <img src="styles/legend/Clippedmask_2_59.png" /> 59<br />\
    <img src="styles/legend/Clippedmask_2_60.png" /> 60<br />\
    <img src="styles/legend/Clippedmask_2_61.png" /> 61<br />\
    <img src="styles/legend/Clippedmask_2_62.png" /> 62<br />\
    <img src="styles/legend/Clippedmask_2_63.png" /> 63<br />\
    <img src="styles/legend/Clippedmask_2_64.png" /> 64<br />\
    <img src="styles/legend/Clippedmask_2_65.png" /> 65<br />\
    <img src="styles/legend/Clippedmask_2_66.png" /> 66<br />\
    <img src="styles/legend/Clippedmask_2_67.png" /> 67<br />\
    <img src="styles/legend/Clippedmask_2_68.png" /> 68<br />\
    <img src="styles/legend/Clippedmask_2_69.png" /> 69<br />\
    <img src="styles/legend/Clippedmask_2_70.png" /> 70<br />\
    <img src="styles/legend/Clippedmask_2_71.png" /> 71<br />\
    <img src="styles/legend/Clippedmask_2_72.png" /> 72<br />\
    <img src="styles/legend/Clippedmask_2_73.png" /> 73<br />\
    <img src="styles/legend/Clippedmask_2_74.png" /> 74<br />\
    <img src="styles/legend/Clippedmask_2_75.png" /> 75<br />\
    <img src="styles/legend/Clippedmask_2_76.png" /> 76<br />\
    <img src="styles/legend/Clippedmask_2_77.png" /> 77<br />\
    <img src="styles/legend/Clippedmask_2_78.png" /> 78<br />\
    <img src="styles/legend/Clippedmask_2_79.png" /> 79<br />\
    <img src="styles/legend/Clippedmask_2_80.png" /> 80<br />\
    <img src="styles/legend/Clippedmask_2_81.png" /> 81<br />\
    <img src="styles/legend/Clippedmask_2_82.png" /> 82<br />\
    <img src="styles/legend/Clippedmask_2_83.png" /> 83<br />\
    <img src="styles/legend/Clippedmask_2_84.png" /> 84<br />\
    <img src="styles/legend/Clippedmask_2_85.png" /> 85<br />\
    <img src="styles/legend/Clippedmask_2_86.png" /> 86<br />\
    <img src="styles/legend/Clippedmask_2_87.png" /> 87<br />\
    <img src="styles/legend/Clippedmask_2_88.png" /> 88<br />\
    <img src="styles/legend/Clippedmask_2_89.png" /> 89<br />\
    <img src="styles/legend/Clippedmask_2_90.png" /> 90<br />\
    <img src="styles/legend/Clippedmask_2_91.png" /> 91<br />\
    <img src="styles/legend/Clippedmask_2_92.png" /> 92<br />\
    <img src="styles/legend/Clippedmask_2_93.png" /> 93<br />\
    <img src="styles/legend/Clippedmask_2_94.png" /> 94<br />\
    <img src="styles/legend/Clippedmask_2_95.png" /> 95<br />\
    <img src="styles/legend/Clippedmask_2_96.png" /> 96<br />\
    <img src="styles/legend/Clippedmask_2_97.png" /> 97<br />\
    <img src="styles/legend/Clippedmask_2_98.png" /> 98<br />\
    <img src="styles/legend/Clippedmask_2_99.png" /> 99<br />\
    <img src="styles/legend/Clippedmask_2_100.png" /> 100<br />\
    <img src="styles/legend/Clippedmask_2_101.png" /> 101<br />\
    <img src="styles/legend/Clippedmask_2_102.png" /> 102<br />\
    <img src="styles/legend/Clippedmask_2_103.png" /> 103<br />\
    <img src="styles/legend/Clippedmask_2_104.png" /> 104<br />\
    <img src="styles/legend/Clippedmask_2_105.png" /> 105<br />\
    <img src="styles/legend/Clippedmask_2_106.png" /> 106<br />\
    <img src="styles/legend/Clippedmask_2_107.png" /> 107<br />\
    <img src="styles/legend/Clippedmask_2_108.png" /> 108<br />\
    <img src="styles/legend/Clippedmask_2_109.png" /> 109<br />\
    <img src="styles/legend/Clippedmask_2_110.png" /> 110<br />\
    <img src="styles/legend/Clippedmask_2_111.png" /> 111<br />\
    <img src="styles/legend/Clippedmask_2_112.png" /> 112<br />\
    <img src="styles/legend/Clippedmask_2_113.png" /> 113<br />\
    <img src="styles/legend/Clippedmask_2_114.png" /> 114<br />\
    <img src="styles/legend/Clippedmask_2_115.png" /> 115<br />\
    <img src="styles/legend/Clippedmask_2_116.png" /> 116<br />\
    <img src="styles/legend/Clippedmask_2_117.png" /> 117<br />\
    <img src="styles/legend/Clippedmask_2_118.png" /> 118<br />\
    <img src="styles/legend/Clippedmask_2_119.png" /> 119<br />\
    <img src="styles/legend/Clippedmask_2_120.png" /> 120<br />\
    <img src="styles/legend/Clippedmask_2_121.png" /> 121<br />\
    <img src="styles/legend/Clippedmask_2_122.png" /> 122<br />\
    <img src="styles/legend/Clippedmask_2_123.png" /> 123<br />\
    <img src="styles/legend/Clippedmask_2_124.png" /> 124<br />\
    <img src="styles/legend/Clippedmask_2_125.png" /> 125<br />\
    <img src="styles/legend/Clippedmask_2_126.png" /> 126<br />\
    <img src="styles/legend/Clippedmask_2_127.png" /> 127<br />\
    <img src="styles/legend/Clippedmask_2_128.png" /> 128<br />\
    <img src="styles/legend/Clippedmask_2_129.png" /> 129<br />\
    <img src="styles/legend/Clippedmask_2_130.png" /> 130<br />\
    <img src="styles/legend/Clippedmask_2_131.png" /> 131<br />\
    <img src="styles/legend/Clippedmask_2_132.png" /> 132<br />\
    <img src="styles/legend/Clippedmask_2_133.png" /> 133<br />\
    <img src="styles/legend/Clippedmask_2_134.png" /> 134<br />\
    <img src="styles/legend/Clippedmask_2_135.png" /> 135<br />\
    <img src="styles/legend/Clippedmask_2_136.png" /> 136<br />\
    <img src="styles/legend/Clippedmask_2_137.png" /> 137<br />\
    <img src="styles/legend/Clippedmask_2_138.png" /> 138<br />\
    <img src="styles/legend/Clippedmask_2_139.png" /> 139<br />\
    <img src="styles/legend/Clippedmask_2_140.png" /> 140<br />\
    <img src="styles/legend/Clippedmask_2_141.png" /> 141<br />\
    <img src="styles/legend/Clippedmask_2_142.png" /> 142<br />\
    <img src="styles/legend/Clippedmask_2_143.png" /> 143<br />\
    <img src="styles/legend/Clippedmask_2_144.png" /> 144<br />\
    <img src="styles/legend/Clippedmask_2_145.png" /> 145<br />\
    <img src="styles/legend/Clippedmask_2_146.png" /> 146<br />\
    <img src="styles/legend/Clippedmask_2_147.png" /> 147<br />\
    <img src="styles/legend/Clippedmask_2_148.png" /> 148<br />\
    <img src="styles/legend/Clippedmask_2_149.png" /> 149<br />\
    <img src="styles/legend/Clippedmask_2_150.png" /> 150<br />\
    <img src="styles/legend/Clippedmask_2_151.png" /> 151<br />\
    <img src="styles/legend/Clippedmask_2_152.png" /> 152<br />\
    <img src="styles/legend/Clippedmask_2_153.png" /> 153<br />\
    <img src="styles/legend/Clippedmask_2_154.png" /> 154<br />\
    <img src="styles/legend/Clippedmask_2_155.png" /> 155<br />\
    <img src="styles/legend/Clippedmask_2_156.png" /> 156<br />\
    <img src="styles/legend/Clippedmask_2_157.png" /> 157<br />\
    <img src="styles/legend/Clippedmask_2_158.png" /> 158<br />\
    <img src="styles/legend/Clippedmask_2_159.png" /> 159<br />\
    <img src="styles/legend/Clippedmask_2_160.png" /> 160<br />\
    <img src="styles/legend/Clippedmask_2_161.png" /> 161<br />\
    <img src="styles/legend/Clippedmask_2_162.png" /> 162<br />\
    <img src="styles/legend/Clippedmask_2_163.png" /> 163<br />\
    <img src="styles/legend/Clippedmask_2_164.png" /> 164<br />\
    <img src="styles/legend/Clippedmask_2_165.png" /> 165<br />\
    <img src="styles/legend/Clippedmask_2_166.png" /> 166<br />\
    <img src="styles/legend/Clippedmask_2_167.png" /> 167<br />\
    <img src="styles/legend/Clippedmask_2_168.png" /> 168<br />\
    <img src="styles/legend/Clippedmask_2_169.png" /> 169<br />\
    <img src="styles/legend/Clippedmask_2_170.png" /> 170<br />\
    <img src="styles/legend/Clippedmask_2_171.png" /> 171<br />\
    <img src="styles/legend/Clippedmask_2_172.png" /> 172<br />\
    <img src="styles/legend/Clippedmask_2_173.png" /> 173<br />\
    <img src="styles/legend/Clippedmask_2_174.png" /> 174<br />\
    <img src="styles/legend/Clippedmask_2_175.png" /> 175<br />\
    <img src="styles/legend/Clippedmask_2_176.png" /> 176<br />\
    <img src="styles/legend/Clippedmask_2_177.png" /> 177<br />\
    <img src="styles/legend/Clippedmask_2_178.png" /> 178<br />\
    <img src="styles/legend/Clippedmask_2_179.png" /> 179<br />\
    <img src="styles/legend/Clippedmask_2_180.png" /> 180<br />\
    <img src="styles/legend/Clippedmask_2_181.png" /> 181<br />\
    <img src="styles/legend/Clippedmask_2_182.png" /> 182<br />\
    <img src="styles/legend/Clippedmask_2_183.png" /> 183<br />\
    <img src="styles/legend/Clippedmask_2_184.png" /> 184<br />\
    <img src="styles/legend/Clippedmask_2_185.png" /> 185<br />\
    <img src="styles/legend/Clippedmask_2_186.png" /> 186<br />\
    <img src="styles/legend/Clippedmask_2_187.png" /> 187<br />\
    <img src="styles/legend/Clippedmask_2_188.png" /> 188<br />\
    <img src="styles/legend/Clippedmask_2_189.png" /> 189<br />\
    <img src="styles/legend/Clippedmask_2_190.png" /> 190<br />\
    <img src="styles/legend/Clippedmask_2_191.png" /> 191<br />\
    <img src="styles/legend/Clippedmask_2_192.png" /> 192<br />\
    <img src="styles/legend/Clippedmask_2_193.png" /> 193<br />\
    <img src="styles/legend/Clippedmask_2_194.png" /> 194<br />\
    <img src="styles/legend/Clippedmask_2_195.png" /> 195<br />\
    <img src="styles/legend/Clippedmask_2_196.png" /> 196<br />\
    <img src="styles/legend/Clippedmask_2_197.png" /> 197<br />\
    <img src="styles/legend/Clippedmask_2_198.png" /> 198<br />\
    <img src="styles/legend/Clippedmask_2_199.png" /> 199<br />\
    <img src="styles/legend/Clippedmask_2_200.png" /> 200<br />\
    <img src="styles/legend/Clippedmask_2_201.png" /> 201<br />\
    <img src="styles/legend/Clippedmask_2_202.png" /> 202<br />\
    <img src="styles/legend/Clippedmask_2_203.png" /> 203<br />\
    <img src="styles/legend/Clippedmask_2_204.png" /> 204<br />\
    <img src="styles/legend/Clippedmask_2_205.png" /> 205<br />\
    <img src="styles/legend/Clippedmask_2_206.png" /> 206<br />\
    <img src="styles/legend/Clippedmask_2_207.png" /> 207<br />\
    <img src="styles/legend/Clippedmask_2_208.png" /> 208<br />\
    <img src="styles/legend/Clippedmask_2_209.png" /> 209<br />\
    <img src="styles/legend/Clippedmask_2_210.png" /> 210<br />\
    <img src="styles/legend/Clippedmask_2_211.png" /> 211<br />\
    <img src="styles/legend/Clippedmask_2_212.png" /> 212<br />\
    <img src="styles/legend/Clippedmask_2_213.png" /> 213<br />\
    <img src="styles/legend/Clippedmask_2_214.png" /> 214<br />\
    <img src="styles/legend/Clippedmask_2_215.png" /> 215<br />\
    <img src="styles/legend/Clippedmask_2_216.png" /> 216<br />\
    <img src="styles/legend/Clippedmask_2_217.png" /> 217<br />\
    <img src="styles/legend/Clippedmask_2_218.png" /> 218<br />\
    <img src="styles/legend/Clippedmask_2_219.png" /> 219<br />\
    <img src="styles/legend/Clippedmask_2_220.png" /> 220<br />\
    <img src="styles/legend/Clippedmask_2_221.png" /> 221<br />\
    <img src="styles/legend/Clippedmask_2_222.png" /> 222<br />\
    <img src="styles/legend/Clippedmask_2_223.png" /> 223<br />\
    <img src="styles/legend/Clippedmask_2_224.png" /> 224<br />\
    <img src="styles/legend/Clippedmask_2_225.png" /> 225<br />\
    <img src="styles/legend/Clippedmask_2_226.png" /> 226<br />\
    <img src="styles/legend/Clippedmask_2_227.png" /> 227<br />\
    <img src="styles/legend/Clippedmask_2_228.png" /> 228<br />\
    <img src="styles/legend/Clippedmask_2_229.png" /> 229<br />\
    <img src="styles/legend/Clippedmask_2_230.png" /> 230<br />\
    <img src="styles/legend/Clippedmask_2_231.png" /> 231<br />\
    <img src="styles/legend/Clippedmask_2_232.png" /> 232<br />\
    <img src="styles/legend/Clippedmask_2_233.png" /> 233<br />\
    <img src="styles/legend/Clippedmask_2_234.png" /> 234<br />\
    <img src="styles/legend/Clippedmask_2_235.png" /> 235<br />\
    <img src="styles/legend/Clippedmask_2_236.png" /> 236<br />\
    <img src="styles/legend/Clippedmask_2_237.png" /> 237<br />\
    <img src="styles/legend/Clippedmask_2_238.png" /> 238<br />\
    <img src="styles/legend/Clippedmask_2_239.png" /> 239<br />\
    <img src="styles/legend/Clippedmask_2_240.png" /> 240<br />\
    <img src="styles/legend/Clippedmask_2_241.png" /> 241<br />\
    <img src="styles/legend/Clippedmask_2_242.png" /> 242<br />\
    <img src="styles/legend/Clippedmask_2_243.png" /> 243<br />\
    <img src="styles/legend/Clippedmask_2_244.png" /> 244<br />\
    <img src="styles/legend/Clippedmask_2_245.png" /> 245<br />\
    <img src="styles/legend/Clippedmask_2_246.png" /> 246<br />\
    <img src="styles/legend/Clippedmask_2_247.png" /> 247<br />\
    <img src="styles/legend/Clippedmask_2_248.png" /> 248<br />\
    <img src="styles/legend/Clippedmask_2_249.png" /> 249<br />\
    <img src="styles/legend/Clippedmask_2_250.png" /> 250<br />\
    <img src="styles/legend/Clippedmask_2_251.png" /> 251<br />\
    <img src="styles/legend/Clippedmask_2_252.png" /> 252<br />\
    <img src="styles/legend/Clippedmask_2_253.png" /> 253<br />\
    <img src="styles/legend/Clippedmask_2_254.png" /> 254<br />\
    <img src="styles/legend/Clippedmask_2_255.png" /> 255<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Clippedmask_2.png",
            attributions: ' ',
            projection: 'EPSG:32748',
            alwaysInRange: true,
            imageExtent: [781140.000000, 9228750.000000, 802750.000000, 9243500.000000]
        })
    });

lyr_OSMStandard_0.setVisible(true);lyr_Kota_BandungADMNew_1.setVisible(true);lyr_Clippedmask_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Kota_BandungADMNew_1,lyr_Clippedmask_2];
lyr_Kota_BandungADMNew_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'LCODE': 'LCODE', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Kota_BandungADMNew_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'LCODE': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Kota_BandungADMNew_1.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'REMARK': 'no label', 'LCODE': 'no label', 'WADMKC': 'inline label - always visible', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Kota_BandungADMNew_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});