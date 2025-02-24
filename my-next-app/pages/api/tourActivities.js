import { cities } from './cities';

const cityActivities = {
  'Adana': [
    { id: 'adn_act1', name: 'Kebap Workshop' },
    { id: 'adn_act2', name: 'Tekne Gezisi' },
    { id: 'adn_act3', name: 'Şalgam Yapımı' }
  ],
  'Adıyaman': [
    { id: 'ady_act1', name: 'Gün Doğumu İzleme' },
    { id: 'ady_act2', name: 'Fotoğraf Turu' },
    { id: 'ady_act3', name: 'Arkeoloji Gezisi' }
  ],
  'Afyonkarahisar': [
    { id: 'afn_act1', name: 'Hamam Keyfi' },
    { id: 'afn_act2', name: 'Sucuk Yapımı' },
    { id: 'afn_act3', name: 'Termal Havuz' }
  ],
  'Ağrı': [
    { id: 'agr_act1', name: 'Dağcılık' },
    { id: 'agr_act2', name: 'Doğa Fotoğrafçılığı' },
    { id: 'agr_act3', name: 'Kamp' }
  ],
  'Amasya': [
    { id: 'ams_act1', name: 'Elma Bahçesi Gezisi' },
    { id: 'ams_act2', name: 'Tarihi Evlerde Konaklama' },
    { id: 'ams_act3', name: 'Gece Işıklandırma Turu' }
  ],
  'Ankara': [
    { id: 'ank_act1', name: 'Müze Gezisi' },
    { id: 'ank_act2', name: 'Alışveriş Turu' },
    { id: 'ank_act3', name: 'Kale Manzara Keyfi' }
  ],
  'Antalya': [
    { id: 'ant_act1', name: 'Plaj Aktiviteleri' },
    { id: 'ant_act2', name: 'Su Sporları' },
    { id: 'ant_act3', name: 'Yamaç Paraşütü' },
    { id: 'ant_act4', name: 'Rafting' }
  ],
  'Artvin': [
    { id: 'art_act1', name: 'Trekking' },
    { id: 'art_act2', name: 'Yaban Hayatı Gözlemi' },
    { id: 'art_act3', name: 'Kano' }
  ],
  'Aydın': [
    { id: 'ayd_act1', name: 'Antik Kent Gezisi' },
    { id: 'ayd_act2', name: 'Zeytin Hasadı' },
    { id: 'ayd_act3', name: 'İncir Bahçesi Turu' }
  ],
  'Balıkesir': [
    { id: 'blk_act1', name: 'Deniz Aktiviteleri' },
    { id: 'blk_act2', name: 'Zeytinyağı Tadımı' },
    { id: 'blk_act3', name: 'Doğa Yürüyüşü' }
  ],
  'Bilecik': [
    { id: 'blc_act1', name: 'Tarihi Gezi' },
    { id: 'blc_act2', name: 'Seramik Workshop' },
    { id: 'blc_act3', name: 'Köy Kahvaltısı' }
  ],
  'Bingöl': [
    { id: 'bng_act1', name: 'Yayla Gezisi' },
    { id: 'bng_act2', name: 'Bal Üretimi' },
    { id: 'bng_act3', name: 'Kaplıca' }
  ],
  'Bitlis': [
    { id: 'btl_act1', name: 'Kayak' },
    { id: 'btl_act2', name: 'El Sanatları' },
    { id: 'btl_act3', name: 'Göl Turu' }
  ],
  'Bolu': [
    { id: 'blu_act1', name: 'Kayak' },
    { id: 'blu_act2', name: 'Göl Aktiviteleri' },
    { id: 'blu_act3', name: 'Doğa Yürüyüşü' },
    { id: 'blu_act4', name: 'Mengen Mutfak Turu' }
  ],
  'Burdur': [
    { id: 'brd_act1', name: 'Göl Aktiviteleri' },
    { id: 'brd_act2', name: 'Antik Kent Gezisi' },
    { id: 'brd_act3', name: 'Mağara Keşfi' }
  ],
  'Bursa': [
    { id: 'brs_act1', name: 'Kayak' },
    { id: 'brs_act2', name: 'Hamam Keyfi' },
    { id: 'brs_act3', name: 'İpek Alışverişi' },
    { id: 'brs_act4', name: 'Teleferik' }
  ],
  'Çanakkale': [
    { id: 'cnk_act1', name: 'Tarihi Alan Gezisi' },
    { id: 'cnk_act2', name: 'Ada Turu' },
    { id: 'cnk_act3', name: 'Şarap Tadımı' }
  ],
  'Çankırı': [
    { id: 'cnr_act1', name: 'Tuz Mağarası Terapisi' },
    { id: 'cnr_act2', name: 'Yöresel Yemek Workshop' },
    { id: 'cnr_act3', name: 'Kale Tırmanışı' }
  ],
  'Çorum': [
    { id: 'crm_act1', name: 'Arkeoloji Turu' },
    { id: 'crm_act2', name: 'Leblebi Yapımı' },
    { id: 'crm_act3', name: 'Kale Gezisi' }
  ],
  'Denizli': [
    { id: 'dnz_act1', name: 'Travertenlerde Yürüyüş' },
    { id: 'dnz_act2', name: 'Antik Havuz Keyfi' },
    { id: 'dnz_act3', name: 'Tekstil Alışverişi' }
  ],
  'Diyarbakır': [
    { id: 'dyb_act1', name: 'Sur Gezisi' },
    { id: 'dyb_act2', name: 'Gastronomi Turu' },
    { id: 'dyb_act3', name: 'Karpuz Hasadı' }
  ],
  'Edirne': [
    { id: 'edr_act1', name: 'Tarihi Cami Turu' },
    { id: 'edr_act2', name: 'Tava Ciğer Workshop' },
    { id: 'edr_act3', name: 'Meriç Nehri Turu' }
  ],
  'Elazığ': [
    { id: 'elz_act1', name: 'Harput Kalesi Turu' },
    { id: 'elz_act2', name: 'Cağ Kebap Workshop' },
    { id: 'elz_act3', name: 'Hazar Gölü Aktiviteleri' }
  ],
  'Erzincan': [
    { id: 'ezc_act1', name: 'Rafting' },
    { id: 'ezc_act2', name: 'Tulum Peyniri Yapımı' },
    { id: 'ezc_act3', name: 'Doğa Yürüyüşü' }
  ],
  'Erzurum': [
    { id: 'ezr_act1', name: 'Kayak' },
    { id: 'ezr_act2', name: 'Cağ Kebap Workshop' },
    { id: 'ezr_act3', name: 'Tarihi Medrese Turu' }
  ],
  'Eskişehir': [
    { id: 'esk_act1', name: 'Gondol Turu' },
    { id: 'esk_act2', name: 'Lületaşı Workshop' },
    { id: 'esk_act3', name: 'Bisiklet Turu' }
  ],
  'Gaziantep': [
    { id: 'gzn_act1', name: 'Baklava Workshop' },
    { id: 'gzn_act2', name: 'Mutfak Müzesi' },
    { id: 'gzn_act3', name: 'Bakırcılar Çarşısı' }
  ],
  'Giresun': [
    { id: 'grs_act1', name: 'Fındık Hasadı' },
    { id: 'grs_act2', name: 'Yayla Safari' },
    { id: 'grs_act3', name: 'Ada Turu' }
  ],
  'Gümüşhane': [
    { id: 'gmh_act1', name: 'Mağara Keşfi' },
    { id: 'gmh_act2', name: 'Dağ Tırmanışı' },
    { id: 'gmh_act3', name: 'Pestil Köme Yapımı' }
  ],
  'Hakkari': [
    { id: 'hkr_act1', name: 'Dağ Tırmanışı' },
    { id: 'hkr_act2', name: 'Rafting' },
    { id: 'hkr_act3', name: 'Doğa Fotoğrafçılığı' }
  ],
  'Hatay': [
    { id: 'hty_act1', name: 'Gastronomi Turu' },
    { id: 'hty_act2', name: 'Mozaik Müzesi' },
    { id: 'hty_act3', name: 'İnanç Turu' }
  ],
  'Iğdır': [
    { id: 'igr_act1', name: 'Ağrı Dağı Tırmanışı' },
    { id: 'igr_act2', name: 'Kayısı Bahçesi' },
    { id: 'igr_act3', name: 'Doğa Fotoğrafçılığı' }
  ],
  'Isparta': [
    { id: 'isp_act1', name: 'Gül Hasadı' },
    { id: 'isp_act2', name: 'Lavanta Bahçeleri' },
    { id: 'isp_act3', name: 'Kayak' }
  ],
  'Kahramanmaraş': [
    { id: 'kmr_act1', name: 'Dondurma Yapımı' },
    { id: 'kmr_act2', name: 'Kale Turu' },
    { id: 'kmr_act3', name: 'Çarşı Gezisi' }
  ],
  'Karabük': [
    { id: 'krb_act1', name: 'Konak Turu' },
    { id: 'krb_act2', name: 'El Sanatları' },
    { id: 'krb_act3', name: 'Cam Teras' }
  ],
  'Karaman': [
    { id: 'krm_act1', name: 'Mağara Turu' },
    { id: 'krm_act2', name: 'Tarihi Çarşı' },
    { id: 'krm_act3', name: 'Kale Gezisi' }
  ],
  'Kars': [
    { id: 'krs_act1', name: 'Kars Gravyer Yapımı' },
    { id: 'krs_act2', name: 'Ani Harabeleri' },
    { id: 'krs_act3', name: 'Kış Sporları' }
  ],
  'Kastamonu': [
    { id: 'kst_act1', name: 'Ilgaz Kayak' },
    { id: 'kst_act2', name: 'Tarihi Konak Turu' },
    { id: 'kst_act3', name: 'Gastronomi Turu' }
  ],
  'Kayseri': [
    { id: 'kys_act1', name: 'Erciyes Kayak' },
    { id: 'kys_act2', name: 'Pastırma Yapımı' },
    { id: 'kys_act3', name: 'Yeraltı Şehri' }
  ],
  'Kırıkkale': [
    { id: 'krk_act1', name: 'Silah Müzesi' },
    { id: 'krk_act2', name: 'Doğa Yürüyüşü' },
    { id: 'krk_act3', name: 'Kültür Turu' }
  ],
  'Kırklareli': [
    { id: 'krl_act1', name: 'Longoz Ormanları' },
    { id: 'krl_act2', name: 'Şarap Tadımı' },
    { id: 'krl_act3', name: 'Mağara Keşfi' }
  ],
  'Kırşehir': [
    { id: 'krs_act1', name: 'Termal Banyo' },
    { id: 'krs_act2', name: 'Ahi Kültürü Turu' },
    { id: 'krs_act3', name: 'Müze Gezisi' }
  ],
  'Kilis': [
    { id: 'kls_act1', name: 'Gastronomi Turu' },
    { id: 'kls_act2', name: 'Üzüm Bağları' },
    { id: 'kls_act3', name: 'Tarihi Çarşı' }
  ],
  'Istanbul': [
    { id: 'ist_act1', name: 'Tekne Gezisi' },
    { id: 'ist_act2', name: 'Müze Ziyareti' },
    { id: 'ist_act3', name: 'Fotoğraf Turu' },
    { id: 'ist_act4', name: 'Yemek Workshop' },
    { id: 'ist_act5', name: 'Alışveriş' }
  ],
  'Izmir': [
    { id: 'izm_act1', name: 'Plaj Aktiviteleri' },
    { id: 'izm_act2', name: 'Antik Kent Gezisi' },
    { id: 'izm_act3', name: 'Şarap Tadımı' },
    { id: 'izm_act4', name: 'Sörf' }
  ],
  'Kapadokya': [
    { id: 'cap_act1', name: 'Balon' },
    { id: 'cap_act2', name: 'ATV Safari' },
    { id: 'cap_act3', name: 'At Binme' },
    { id: 'cap_act4', name: 'Çömlek Yapımı' }
  ],
  'Trabzon': [
    { id: 'trb_act1', name: 'Yayla Gezisi' },
    { id: 'trb_act2', name: 'Doğa Yürüyüşü' },
    { id: 'trb_act3', name: 'Horon Kursu' }
  ],
  'Çanakkale': [
    { id: 'cnk_act1', name: 'Tarihi Alan Gezisi' },
    { id: 'cnk_act2', name: 'Şarap Tadımı' },
    { id: 'cnk_act3', name: 'Dalış' }
  ],
  'Muğla': [
    { id: 'mgl_act1', name: 'Tekne Turu' },
    { id: 'mgl_act2', name: 'Dalış' },
    { id: 'mgl_act3', name: 'Rüzgar Sörfü' },
    { id: 'mgl_act4', name: 'Paraşüt' }
  ],
  'Rize': [
    { id: 'rze_act1', name: 'Çay Toplama' },
    { id: 'rze_act2', name: 'Yayla Safari' },
    { id: 'rze_act3', name: 'Zip Line' }
  ],
  'Şanlıurfa': [
    { id: 'urf_act1', name: 'Arkeoloji Turu' },
    { id: 'urf_act2', name: 'Sıra Gecesi' },
    { id: 'urf_act3', name: 'Çarşı Gezisi' }
  ],
  'Van': [
    { id: 'van_act1', name: 'Tekne Turu' },
    { id: 'van_act2', name: 'Kahvaltı Keyfi' },
    { id: 'van_act3', name: 'Kedi Evi Ziyareti' }
  ],
  'Kocaeli': [
    { id: 'koc_act1', name: 'Kartepe Kayak' },
    { id: 'koc_act2', name: 'Maşukiye Turu' },
    { id: 'koc_act3', name: 'Seka Park Aktiviteleri' }
  ],
  'Konya': [
    { id: 'kny_act1', name: 'Sema Gösterisi' },
    { id: 'kny_act2', name: 'Etliekmek Workshop' },
    { id: 'kny_act3', name: 'Müze Gezisi' },
    { id: 'kny_act4', name: 'İnanç Turu' }
  ],
  'Kütahya': [
    { id: 'kut_act1', name: 'Çini Workshop' },
    { id: 'kut_act2', name: 'Antik Kent Gezisi' },
    { id: 'kut_act3', name: 'Termal Aktiviteler' }
  ],
  'Malatya': [
    { id: 'mlt_act1', name: 'Kayısı Hasadı' },
    { id: 'mlt_act2', name: 'Aslantepe Gezisi' },
    { id: 'mlt_act3', name: 'Darende Turu' }
  ],
  'Manisa': [
    { id: 'man_act1', name: 'Mesir Macunu Yapımı' },
    { id: 'man_act2', name: 'Spil Dağı Turu' },
    { id: 'man_act3', name: 'Üzüm Hasadı' }
  ],
  'Mardin': [
    { id: 'mrd_act1', name: 'Taş İşçiliği Workshop' },
    { id: 'mrd_act2', name: 'Manastır Turu' },
    { id: 'mrd_act3', name: 'Telkari Workshop' },
    { id: 'mrd_act4', name: 'Gastronomi Turu' }
  ],
  'Mersin': [
    { id: 'mer_act1', name: 'Narenciye Bahçeleri' },
    { id: 'mer_act2', name: 'Antik Kent Gezisi' },
    { id: 'mer_act3', name: 'Plaj Aktiviteleri' }
  ],
  'Muğla': [
    { id: 'mgl_act1', name: 'Tekne Turu' },
    { id: 'mgl_act2', name: 'Yamaç Paraşütü' },
    { id: 'mgl_act3', name: 'Dalış' },
    { id: 'mgl_act4', name: 'Kite Sörf' }
  ],
  'Muş': [
    { id: 'mus_act1', name: 'Yayla Gezisi' },
    { id: 'mus_act2', name: 'Malazgirt Turu' },
    { id: 'mus_act3', name: 'Doğa Yürüyüşü' }
  ],
  'Nevşehir': [
    { id: 'nvs_act1', name: 'Balon Turu' },
    { id: 'nvs_act2', name: 'Çömlek Workshop' },
    { id: 'nvs_act3', name: 'Şarap Tadımı' },
    { id: 'nvs_act4', name: 'ATV Safari' }
  ],
  'Niğde': [
    { id: 'nig_act1', name: 'Dağcılık' },
    { id: 'nig_act2', name: 'Manastır Gezisi' },
    { id: 'nig_act3', name: 'Elma Hasadı' }
  ],
  'Ordu': [
    { id: 'ord_act1', name: 'Teleferik Turu' },
    { id: 'ord_act2', name: 'Fındık Hasadı' },
    { id: 'ord_act3', name: 'Yayla Safari' }
  ],
  'Osmaniye': [
    { id: 'osm_act1', name: 'Zorkun Yaylası' },
    { id: 'osm_act2', name: 'Karatepe Gezisi' },
    { id: 'osm_act3', name: 'Doğa Yürüyüşü' }
  ],
  'Rize': [
    { id: 'rze_act1', name: 'Çay Toplama' },
    { id: 'rze_act2', name: 'Yayla Safari' },
    { id: 'rze_act3', name: 'Rafting' },
    { id: 'rze_act4', name: 'Zip Line' }
  ],
  'Sakarya': [
    { id: 'skr_act1', name: 'Sapanca Turu' },
    { id: 'skr_act2', name: 'Doğa Sporları' },
    { id: 'skr_act3', name: 'Köy Kahvaltısı' }
  ],
  'Samsun': [
    { id: 'sam_act1', name: 'Amazon Köyü' },
    { id: 'sam_act2', name: 'Plaj Aktiviteleri' },
    { id: 'sam_act3', name: 'Kızılırmak Deltası' }
  ],
  'Siirt': [
    { id: 'srt_act1', name: 'Tillo Gezisi' },
    { id: 'srt_act2', name: 'Pervari Balı Tadımı' },
    { id: 'srt_act3', name: 'Doğa Yürüyüşü' }
  ],
  'Sinop': [
    { id: 'snp_act1', name: 'Hamsilos Turu' },
    { id: 'snp_act2', name: 'Tekne Gezisi' },
    { id: 'snp_act3', name: 'Kale Gezisi' }
  ],
  'Sivas': [
    { id: 'svs_act1', name: 'Kangal Köpeği Çiftliği' },
    { id: 'svs_act2', name: 'Balıklı Kaplıca' },
    { id: 'svs_act3', name: 'Medrese Turu' }
  ],
  'Şanlıurfa': [
    { id: 'urf_act1', name: 'Göbeklitepe Turu' },
    { id: 'urf_act2', name: 'Sıra Gecesi' },
    { id: 'urf_act3', name: 'Çiğköfte Workshop' },
    { id: 'urf_act4', name: 'Balıklıgöl Gezisi' }
  ],
  'Şırnak': [
    { id: 'srn_act1', name: 'Cudi Dağı Tırmanışı' },
    { id: 'srn_act2', name: 'Kaplıca Keyfi' },
    { id: 'srn_act3', name: 'Tarihi Cizre Turu' }
  ],
  'Tekirdağ': [
    { id: 'tkr_act1', name: 'Şarap Tadımı' },
    { id: 'tkr_act2', name: 'Plaj Aktiviteleri' },
    { id: 'tkr_act3', name: 'Köfte Workshop' }
  ],
  'Tokat': [
    { id: 'tkt_act1', name: 'Yazmacılık Workshop' },
    { id: 'tkt_act2', name: 'Ballıca Mağarası' },
    { id: 'tkt_act3', name: 'Bağ Bozumu' }
  ],
  'Trabzon': [
    { id: 'trb_act1', name: 'Sümela Manastırı' },
    { id: 'trb_act2', name: 'Uzungöl Aktiviteleri' },
    { id: 'trb_act3', name: 'Hamsi Festivali' },
    { id: 'trb_act4', name: 'Yayla Safari' }
  ],
  'Tunceli': [
    { id: 'tnc_act1', name: 'Rafting' },
    { id: 'tnc_act2', name: 'Dağ Keçisi Gözlemi' },
    { id: 'tnc_act3', name: 'Munzur Vadisi' }
  ],
  'Uşak': [
    { id: 'usk_act1', name: 'Antik Kent Gezisi' },
    { id: 'usk_act2', name: 'Halı Dokuma' },
    { id: 'usk_act3', name: 'Kanyon Turu' }
  ],
  'Van': [
    { id: 'van_act1', name: 'Van Gölü Turu' },
    { id: 'van_act2', name: 'Kahvaltı Workshop' },
    { id: 'van_act3', name: 'Van Kedisi Evi' },
    { id: 'van_act4', name: 'Akdamar Adası' }
  ],
  'Yalova': [
    { id: 'ylv_act1', name: 'Termal Banyo' },
    { id: 'ylv_act2', name: 'Arboretum Gezisi' },
    { id: 'ylv_act3', name: 'Karaca Arboretumu' }
  ],
  'Yozgat': [
    { id: 'yzg_act1', name: 'Termal Aktiviteler' },
    { id: 'yzg_act2', name: 'Çamlık Turu' },
    { id: 'yzg_act3', name: 'Yöresel Mutfak' }
  ],
  'Zonguldak': [
    { id: 'zng_act1', name: 'Maden Müzesi' },
    { id: 'zng_act2', name: 'Mağara Keşfi' },
    { id: 'zng_act3', name: 'Plaj Aktiviteleri' }
  ],
  'default': [
    { id: 'def_act1', name: 'Şehir Turu' },
    { id: 'def_act2', name: 'Fotoğraf Çekimi' },
    { id: 'def_act3', name: 'Yerel Mutfak' },
    { id: 'def_act4', name: 'Doğa Yürüyüşü' }
  ]
};

export default function handler(req, res) {
  const { location } = req.query;

  if (!location) {
    return res.status(400).json({ message: "Location is required" });
  }

  // Şehir adını büyük harfle başlatıp geri kalanını küçük harf yapma
  const formattedLocation = location.charAt(0).toUpperCase() + location.slice(1).toLowerCase();

  // Şehir için özel aktiviteler varsa onları, yoksa varsayılan aktiviteleri döndür
  const activities = cityActivities[formattedLocation] || cityActivities['default'];

  res.status(200).json(activities);
} 