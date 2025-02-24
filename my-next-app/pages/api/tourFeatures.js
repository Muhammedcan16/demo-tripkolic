import { cities } from './cities';

const cityFeatures = {
  'Adana': [
    { id: 'adn_ft1', name: 'Rehber' },
    { id: 'adn_ft2', name: 'Yemek' },
    { id: 'adn_ft3', name: 'Transfer' },
    { id: 'adn_ft4', name: 'Kebap Workshop' }
  ],
  'Adiyaman': [
    { id: 'ady_ft1', name: 'Profesyonel Rehber' },
    { id: 'ady_ft2', name: 'Gunes Dogumu Kahvaltisi' },
    { id: 'ady_ft3', name: 'Transfer' },
    { id: 'ady_ft4', name: 'Fotograf Cekimi' }
  ],
  'Afyonkarahisar': [
    { id: 'afn_ft1', name: 'Termal Havuz' },
    { id: 'afn_ft2', name: 'Ogle Yemegi' },
    { id: 'afn_ft3', name: 'Transfer' },
    { id: 'afn_ft4', name: 'Hamam Seti' }
  ],
  'Agri': [
    { id: 'agr_ft1', name: 'Profesyonel Rehber' },
    { id: 'agr_ft2', name: 'Dagcilik Ekipmani' },
    { id: 'agr_ft3', name: 'Transfer' },
    { id: 'agr_ft4', name: 'Yuksek Irtifa Sigortasi' }
  ],
  'Amasya': [
    { id: 'ams_ft1', name: 'Rehber' },
    { id: 'ams_ft2', name: 'Elma Sekeri Ikrami' },
    { id: 'ams_ft3', name: 'Transfer' },
    { id: 'ams_ft4', name: 'Yerel Kostum Deneyimi' }
  ],
  'Ankara': [
    { id: 'ank_ft1', name: 'Profesyonel Rehber' },
    { id: 'ank_ft2', name: 'Muze Giris' },
    { id: 'ank_ft3', name: 'Transfer' },
    { id: 'ank_ft4', name: 'Ogle Yemegi' }
  ],
  'Antalya': [
    { id: 'ant_ft1', name: 'Rehber' },
    { id: 'ant_ft2', name: 'Dalis Ekipmani' },
    { id: 'ant_ft3', name: 'Ogle Yemegi' },
    { id: 'ant_ft4', name: 'Transfer' },
    { id: 'ant_ft5', name: 'Sigorta' }
  ],
  'Artvin': [
    { id: 'art_ft1', name: 'Rehber' },
    { id: 'art_ft2', name: 'Trekking Ekipmani' },
    { id: 'art_ft3', name: 'Yemek' },
    { id: 'art_ft4', name: 'Transfer' }
  ],
  'Aydin': [
    { id: 'ayd_ft1', name: 'Rehber' },
    { id: 'ayd_ft2', name: 'Antik Kent Girisi' },
    { id: 'ayd_ft3', name: 'Yemek' },
    { id: 'ayd_ft4', name: 'Transfer' }
  ],
  'Balikesir': [
    { id: 'blk_ft1', name: 'Rehber' },
    { id: 'blk_ft2', name: 'Tekne Turu' },
    { id: 'blk_ft3', name: 'Yemek' },
    { id: 'blk_ft4', name: 'Transfer' }
  ],
  'Istanbul': [
    { id: 'ist_ft1', name: 'Rehber' },
    { id: 'ist_ft2', name: 'Yemek' },
    { id: 'ist_ft3', name: 'Muzik' },
    { id: 'ist_ft4', name: 'WiFi' },
    { id: 'ist_ft5', name: 'Fotograf Cekimi' }
  ],
  'Izmir': [
    { id: 'izm_ft1', name: 'Rehber' },
    { id: 'izm_ft2', name: 'Muze Giris' },
    { id: 'izm_ft3', name: 'Ogle Yemegi' },
    { id: 'izm_ft4', name: 'Transfer' }
  ],
  'Kars': [
    { id: 'krs_ft1', name: 'Rehber' },
    { id: 'krs_ft2', name: 'Kas Peyniri Tadimi' },
    { id: 'krs_ft3', name: 'Transfer' },
    { id: 'krs_ft4', name: 'Tarihi Tren Yolculugu' }
  ],
  'Kastamonu': [
    { id: 'kst_ft1', name: 'Rehber' },
    { id: 'kst_ft2', name: 'Kanyon Aktiviteleri' },
    { id: 'kst_ft3', name: 'Yemek' },
    { id: 'kst_ft4', name: 'Transfer' }
  ],
  'Mugla': [
    { id: 'mgl_ft1', name: 'Rehber' },
    { id: 'mgl_ft2', name: 'Dalis Ekipmani' },
    { id: 'mgl_ft3', name: 'Yemek' },
    { id: 'mgl_ft4', name: 'Icecek' },
    { id: 'mgl_ft5', name: 'Transfer' }
  ],
  'Nevsehir': [
    { id: 'nvs_ft1', name: 'Kahvalti' },
    { id: 'nvs_ft2', name: 'Transfer' },
    { id: 'nvs_ft3', name: 'Sigorta' },
    { id: 'nvs_ft4', name: 'Sertifika' }
  ],
  'Rize': [
    { id: 'rze_ft1', name: 'Rehber' },
    { id: 'rze_ft2', name: 'Cay Toplama Deneyimi' },
    { id: 'rze_ft3', name: 'Yayla Kahvaltisi' },
    { id: 'rze_ft4', name: 'Transfer' }
  ],
  'Sanliurfa': [
    { id: 'urf_ft1', name: 'Rehber' },
    { id: 'urf_ft2', name: 'Sira Gecesi' },
    { id: 'urf_ft3', name: 'Cigkofte Workshop' },
    { id: 'urf_ft4', name: 'Transfer' }
  ],
  'Trabzon': [
    { id: 'trb_ft1', name: 'Rehber' },
    { id: 'trb_ft2', name: 'Kahvalti' },
    { id: 'trb_ft3', name: 'Ogle Yemegi' },
    { id: 'trb_ft4', name: 'Transfer' }
  ],
  'Van': [
    { id: 'van_ft1', name: 'Rehber' },
    { id: 'van_ft2', name: 'Van Kahvaltisi' },
    { id: 'van_ft3', name: 'Tekne Turu' },
    { id: 'van_ft4', name: 'Transfer' }
  ],
  'Bilecik': [
    { id: 'blc_ft1', name: 'Rehber' },
    { id: 'blc_ft2', name: 'Osmanli Kostumu' },
    { id: 'blc_ft3', name: 'Yemek' },
    { id: 'blc_ft4', name: 'Transfer' }
  ],
  'Bingol': [
    { id: 'bng_ft1', name: 'Rehber' },
    { id: 'bng_ft2', name: 'Bal Tadimi' },
    { id: 'bng_ft3', name: 'Yemek' },
    { id: 'bng_ft4', name: 'Transfer' }
  ],
  'Bitlis': [
    { id: 'btl_ft1', name: 'Rehber' },
    { id: 'btl_ft2', name: 'Kayak Ekipmani' },
    { id: 'btl_ft3', name: 'Yemek' },
    { id: 'btl_ft4', name: 'Transfer' }
  ],
  'Bolu': [
    { id: 'blu_ft1', name: 'Rehber' },
    { id: 'blu_ft2', name: 'Mengen Yemek Workshop' },
    { id: 'blu_ft3', name: 'Doga Yuruyusu' },
    { id: 'blu_ft4', name: 'Transfer' }
  ],
  'Burdur': [
    { id: 'brd_ft1', name: 'Rehber' },
    { id: 'brd_ft2', name: 'Sagalassos Giris' },
    { id: 'brd_ft3', name: 'Yemek' },
    { id: 'brd_ft4', name: 'Transfer' }
  ],
  'Bursa': [
    { id: 'brs_ft1', name: 'Rehber' },
    { id: 'brs_ft2', name: 'Teleferik' },
    { id: 'brs_ft3', name: 'Iskender Menu' },
    { id: 'brs_ft4', name: 'Transfer' }
  ],
  'Canakkale': [
    { id: 'cnk_ft1', name: 'Rehber' },
    { id: 'cnk_ft2', name: 'Tarihi Alan Girisi' },
    { id: 'cnk_ft3', name: 'Yemek' },
    { id: 'cnk_ft4', name: 'Transfer' }
  ],
  'Cankiri': [
    { id: 'cnr_ft1', name: 'Rehber' },
    { id: 'cnr_ft2', name: 'Tuz Magarasi' },
    { id: 'cnr_ft3', name: 'Yemek' },
    { id: 'cnr_ft4', name: 'Transfer' }
  ],
  'Corum': [
    { id: 'crm_ft1', name: 'Rehber' },
    { id: 'crm_ft2', name: 'Antik Kent Girisi' },
    { id: 'crm_ft3', name: 'Leblebi Tadimi' },
    { id: 'crm_ft4', name: 'Transfer' }
  ],
  'Denizli': [
    { id: 'dnz_ft1', name: 'Rehber' },
    { id: 'dnz_ft2', name: 'Travertenler Girisi' },
    { id: 'dnz_ft3', name: 'Termal Havuz' },
    { id: 'dnz_ft4', name: 'Transfer' }
  ],
  'Diyarbakir': [
    { id: 'dyb_ft1', name: 'Rehber' },
    { id: 'dyb_ft2', name: 'Sur Turu' },
    { id: 'dyb_ft3', name: 'Cigerpide' },
    { id: 'dyb_ft4', name: 'Transfer' }
  ],
  'Duzce': [
    { id: 'dzc_ft1', name: 'Rehber' },
    { id: 'dzc_ft2', name: 'Rafting Ekipmani' },
    { id: 'dzc_ft3', name: 'Yemek' },
    { id: 'dzc_ft4', name: 'Transfer' }
  ],
  'Edirne': [
    { id: 'edr_ft1', name: 'Rehber' },
    { id: 'edr_ft2', name: 'Tava Ciger' },
    { id: 'edr_ft3', name: 'Badem Ezmesi' },
    { id: 'edr_ft4', name: 'Transfer' }
  ],
  'Elazig': [
    { id: 'elz_ft1', name: 'Rehber' },
    { id: 'elz_ft2', name: 'Harput Kalesi' },
    { id: 'elz_ft3', name: 'Yemek' },
    { id: 'elz_ft4', name: 'Transfer' }
  ],
  'Erzincan': [
    { id: 'ezc_ft1', name: 'Rehber' },
    { id: 'ezc_ft2', name: 'Tulum Peyniri' },
    { id: 'ezc_ft3', name: 'Rafting' },
    { id: 'ezc_ft4', name: 'Transfer' }
  ],
  'Erzurum': [
    { id: 'ezr_ft1', name: 'Rehber' },
    { id: 'ezr_ft2', name: 'Kayak Ekipmani' },
    { id: 'ezr_ft3', name: 'Cag Kebap' },
    { id: 'ezr_ft4', name: 'Transfer' }
  ],
  'Eskisehir': [
    { id: 'esk_ft1', name: 'Rehber' },
    { id: 'esk_ft2', name: 'Gondol' },
    { id: 'esk_ft3', name: 'Met Helvasi' },
    { id: 'esk_ft4', name: 'Transfer' }
  ],
  'Gaziantep': [
    { id: 'gzn_ft1', name: 'Rehber' },
    { id: 'gzn_ft2', name: 'Baklava Workshop' },
    { id: 'gzn_ft3', name: 'Mutfak Muzesi' },
    { id: 'gzn_ft4', name: 'Transfer' }
  ],
  'Giresun': [
    { id: 'grs_ft1', name: 'Rehber' },
    { id: 'grs_ft2', name: 'Findik Hasadi' },
    { id: 'grs_ft3', name: 'Ada Turu' },
    { id: 'grs_ft4', name: 'Transfer' }
  ],
  'Gumushane': [
    { id: 'gmh_ft1', name: 'Rehber' },
    { id: 'gmh_ft2', name: 'Magara Turu' },
    { id: 'gmh_ft3', name: 'Pestil Kome' },
    { id: 'gmh_ft4', name: 'Transfer' }
  ],
  'Hakkari': [
    { id: 'hkr_ft1', name: 'Rehber' },
    { id: 'hkr_ft2', name: 'Dagcilik' },
    { id: 'hkr_ft3', name: 'Yemek' },
    { id: 'hkr_ft4', name: 'Transfer' }
  ],
  'Hatay': [
    { id: 'hty_ft1', name: 'Rehber' },
    { id: 'hty_ft2', name: 'Kunefe Workshop' },
    { id: 'hty_ft3', name: 'Mozaik Muzesi' },
    { id: 'hty_ft4', name: 'Transfer' }
  ],
  'default': [
    { id: 'def_ft1', name: 'Rehber' },
    { id: 'def_ft2', name: 'Transfer' },
    { id: 'def_ft3', name: 'Yemek' },
    { id: 'def_ft4', name: 'Sigorta' }
  ],
  'Igdir': [
    { id: 'igr_ft1', name: 'Rehber' },
    { id: 'igr_ft2', name: 'Kayisi Bahcesi' },
    { id: 'igr_ft3', name: 'Yemek' },
    { id: 'igr_ft4', name: 'Transfer' }
  ],
  'Isparta': [
    { id: 'isp_ft1', name: 'Rehber' },
    { id: 'isp_ft2', name: 'Gul Bahcesi' },
    { id: 'isp_ft3', name: 'Gul Suyu Yapimi' },
    { id: 'isp_ft4', name: 'Transfer' }
  ],
  'Kahramanmaras': [
    { id: 'kmr_ft1', name: 'Rehber' },
    { id: 'kmr_ft2', name: 'Dondurma Yapimi' },
    { id: 'kmr_ft3', name: 'Yemek' },
    { id: 'kmr_ft4', name: 'Transfer' }
  ],
  'Karabuk': [
    { id: 'krb_ft1', name: 'Rehber' },
    { id: 'krb_ft2', name: 'Safranbolu Evi' },
    { id: 'krb_ft3', name: 'Lokum Yapimi' },
    { id: 'krb_ft4', name: 'Transfer' }
  ],
  'Karaman': [
    { id: 'krm_ft1', name: 'Rehber' },
    { id: 'krm_ft2', name: 'Tarihi Degirmen' },
    { id: 'krm_ft3', name: 'Yemek' },
    { id: 'krm_ft4', name: 'Transfer' }
  ],
  'Kayseri': [
    { id: 'kys_ft1', name: 'Rehber' },
    { id: 'kys_ft2', name: 'Manti Workshop' },
    { id: 'kys_ft3', name: 'Pastirma Yapimi' },
    { id: 'kys_ft4', name: 'Transfer' }
  ],
  'Kirikkale': [
    { id: 'krk_ft1', name: 'Rehber' },
    { id: 'krk_ft2', name: 'Silah Muzesi' },
    { id: 'krk_ft3', name: 'Yemek' },
    { id: 'krk_ft4', name: 'Transfer' }
  ],
  'Kirklareli': [
    { id: 'krl_ft1', name: 'Rehber' },
    { id: 'krl_ft2', name: 'Hardaliye Yapimi' },
    { id: 'krl_ft3', name: 'Yemek' },
    { id: 'krl_ft4', name: 'Transfer' }
  ],
  'Kirsehir': [
    { id: 'krs_ft1', name: 'Rehber' },
    { id: 'krs_ft2', name: 'Ahi Evran Muzesi' },
    { id: 'krs_ft3', name: 'Yemek' },
    { id: 'krs_ft4', name: 'Transfer' }
  ],
  'Kilis': [
    { id: 'kls_ft1', name: 'Rehber' },
    { id: 'kls_ft2', name: 'Uzum Pestili' },
    { id: 'kls_ft3', name: 'Yemek' },
    { id: 'kls_ft4', name: 'Transfer' }
  ],
  'Kocaeli': [
    { id: 'koc_ft1', name: 'Rehber' },
    { id: 'koc_ft2', name: 'Pismanic Bisikleti' },
    { id: 'koc_ft3', name: 'Yemek' },
    { id: 'koc_ft4', name: 'Transfer' }
  ],
  'Konya': [
    { id: 'kny_ft1', name: 'Rehber' },
    { id: 'kny_ft2', name: 'Sema Gosterisi' },
    { id: 'kny_ft3', name: 'Etli Ekmek' },
    { id: 'kny_ft4', name: 'Transfer' }
  ],
  'Kutahya': [
    { id: 'kut_ft1', name: 'Rehber' },
    { id: 'kut_ft2', name: 'Cini Workshop' },
    { id: 'kut_ft3', name: 'Yemek' },
    { id: 'kut_ft4', name: 'Transfer' }
  ],
  'Malatya': [
    { id: 'mlt_ft1', name: 'Rehber' },
    { id: 'mlt_ft2', name: 'Kayisi Hasadi' },
    { id: 'mlt_ft3', name: 'Yemek' },
    { id: 'mlt_ft4', name: 'Transfer' }
  ],
  'Manisa': [
    { id: 'man_ft1', name: 'Rehber' },
    { id: 'man_ft2', name: 'Mesir Macunu' },
    { id: 'man_ft3', name: 'Yemek' },
    { id: 'man_ft4', name: 'Transfer' }
  ],
  'Mardin': [
    { id: 'mrd_ft1', name: 'Rehber' },
    { id: 'mrd_ft2', name: 'Telkari Workshop' },
    { id: 'mrd_ft3', name: 'Ikindi Kahvesi' },
    { id: 'mrd_ft4', name: 'Transfer' }
  ],
  'Mersin': [
    { id: 'mrs_ft1', name: 'Rehber' },
    { id: 'mrs_ft2', name: 'Tantuni Workshop' },
    { id: 'mrs_ft3', name: 'Cennet Cehennem' },
    { id: 'mrs_ft4', name: 'Transfer' }
  ],
  'Mus': [
    { id: 'mus_ft1', name: 'Rehber' },
    { id: 'mus_ft2', name: 'Malazgirt Ovasi' },
    { id: 'mus_ft3', name: 'Yemek' },
    { id: 'mus_ft4', name: 'Transfer' }
  ],
  'Nigde': [
    { id: 'nig_ft1', name: 'Rehber' },
    { id: 'nig_ft2', name: 'Gumusler Manastiri' },
    { id: 'nig_ft3', name: 'Yemek' },
    { id: 'nig_ft4', name: 'Transfer' }
  ],
  'Ordu': [
    { id: 'ord_ft1', name: 'Rehber' },
    { id: 'ord_ft2', name: 'Findik Hasadi' },
    { id: 'ord_ft3', name: 'Teleferik' },
    { id: 'ord_ft4', name: 'Transfer' }
  ],
  'Osmaniye': [
    { id: 'osm_ft1', name: 'Rehber' },
    { id: 'osm_ft2', name: 'Yerfistigi Hasadi' },
    { id: 'osm_ft3', name: 'Yemek' },
    { id: 'osm_ft4', name: 'Transfer' }
  ],
  'Siirt': [
    { id: 'srt_ft1', name: 'Rehber' },
    { id: 'srt_ft2', name: 'Pervari Bali' },
    { id: 'srt_ft3', name: 'Büryan Kebabi' },
    { id: 'srt_ft4', name: 'Transfer' }
  ],
  'Sinop': [
    { id: 'snp_ft1', name: 'Rehber' },
    { id: 'snp_ft2', name: 'Tarihi Cezaevi' },
    { id: 'snp_ft3', name: 'Manti Workshop' },
    { id: 'snp_ft4', name: 'Transfer' }
  ],
  'Sirnak': [
    { id: 'srn_ft1', name: 'Rehber' },
    { id: 'srn_ft2', name: 'Cudi Dagi' },
    { id: 'srn_ft3', name: 'Yemek' },
    { id: 'srn_ft4', name: 'Transfer' }
  ],
  'Sivas': [
    { id: 'svs_ft1', name: 'Rehber' },
    { id: 'svs_ft2', name: 'Kangal Kopegi' },
    { id: 'svs_ft3', name: 'Balikli Kaplica' },
    { id: 'svs_ft4', name: 'Transfer' }
  ],
  'Tekirdag': [
    { id: 'tkr_ft1', name: 'Rehber' },
    { id: 'tkr_ft2', name: 'Kofte Workshop' },
    { id: 'tkr_ft3', name: 'Sarap Tadimi' },
    { id: 'tkr_ft4', name: 'Transfer' }
  ],
  'Tokat': [
    { id: 'tkt_ft1', name: 'Rehber' },
    { id: 'tkt_ft2', name: 'Yazma Workshop' },
    { id: 'tkt_ft3', name: 'Yemek' },
    { id: 'tkt_ft4', name: 'Transfer' }
  ],
  'Tunceli': [
    { id: 'tnc_ft1', name: 'Rehber' },
    { id: 'tnc_ft2', name: 'Rafting' },
    { id: 'tnc_ft3', name: 'Yemek' },
    { id: 'tnc_ft4', name: 'Transfer' }
  ],
  'Usak': [
    { id: 'usk_ft1', name: 'Rehber' },
    { id: 'usk_ft2', name: 'Hali Dokuma' },
    { id: 'usk_ft3', name: 'Tarhana Yapimi' },
    { id: 'usk_ft4', name: 'Transfer' }
  ],
  'Yalova': [
    { id: 'ylv_ft1', name: 'Rehber' },
    { id: 'ylv_ft2', name: 'Termal Havuz' },
    { id: 'ylv_ft3', name: 'Yemek' },
    { id: 'ylv_ft4', name: 'Transfer' }
  ],
  'Yozgat': [
    { id: 'yzg_ft1', name: 'Rehber' },
    { id: 'yzg_ft2', name: 'Testi Kebabi' },
    { id: 'yzg_ft3', name: 'Yemek' },
    { id: 'yzg_ft4', name: 'Transfer' }
  ],
  'Zonguldak': [
    { id: 'zng_ft1', name: 'Rehber' },
    { id: 'zng_ft2', name: 'Maden Muzesi' },
    { id: 'zng_ft3', name: 'Yemek' },
    { id: 'zng_ft4', name: 'Transfer' }
  ]
};

export default function handler(req, res) {
  const { location } = req.query;

  if (!location) {
    return res.status(400).json({ message: "Location is required" });
  }

  // Şehir adını büyük harfle başlatıp geri kalanını küçük harf yapma
  const formattedLocation = location.charAt(0).toUpperCase() + location.slice(1).toLowerCase();

  // Şehir için özel özellikler varsa onları, yoksa varsayılan özellikleri döndür
  const features = cityFeatures[formattedLocation] || cityFeatures['default'];

  res.status(200).json(features);
} 