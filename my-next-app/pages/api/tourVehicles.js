import { cities } from './cities';

const cityVehicles = {
  'Adana': [
    { id: 'adn_vh1', name: 'Klimalı Minibüs' },
    { id: 'adn_vh2', name: 'Nehir Teknesi' },
    { id: 'adn_vh3', name: 'Bisiklet' }
  ],
  'Adıyaman': [
    { id: 'ady_vh1', name: '4x4 Jeep' },
    { id: 'ady_vh2', name: 'Minibüs' },
    { id: 'ady_vh3', name: 'ATV' }
  ],
  'Afyonkarahisar': [
    { id: 'afn_vh1', name: 'Lüks Minibüs' },
    { id: 'afn_vh2', name: 'Bisiklet' },
    { id: 'afn_vh3', name: 'Golf Arabası' }
  ],
  'Ağrı': [
    { id: 'agr_vh1', name: '4x4 Arazi Aracı' },
    { id: 'agr_vh2', name: 'Minibüs' },
    { id: 'agr_vh3', name: 'Kamp Aracı' }
  ],
  'Amasya': [
    { id: 'ams_vh1', name: 'Klasik Otomobil' },
    { id: 'ams_vh2', name: 'Elektrikli Bisiklet' },
    { id: 'ams_vh3', name: 'Minibüs' }
  ],
  'Ankara': [
    { id: 'ank_vh1', name: 'VIP Van' },
    { id: 'ank_vh2', name: 'Lüks Sedan' },
    { id: 'ank_vh3', name: 'Elektrikli Scooter' }
  ],
  'Antalya': [
    { id: 'ant_vh1', name: 'Tekne' },
    { id: 'ant_vh2', name: 'Safari Jeepi' },
    { id: 'ant_vh3', name: 'Lüks Minibüs' },
    { id: 'ant_vh4', name: 'Golf Arabası' }
  ],
  'Artvin': [
    { id: 'art_vh1', name: '4x4 Jeep' },
    { id: 'art_vh2', name: 'Minibüs' },
    { id: 'art_vh3', name: 'Kano' }
  ],
  'Aydın': [
    { id: 'ayd_vh1', name: 'Safari Jeepi' },
    { id: 'ayd_vh2', name: 'Minibüs' },
    { id: 'ayd_vh3', name: 'ATV' }
  ],
  'Balıkesir': [
    { id: 'blk_vh1', name: 'Tekne' },
    { id: 'blk_vh2', name: 'Minibüs' },
    { id: 'blk_vh3', name: 'Bisiklet' }
  ],
  'Bilecik': [
    { id: 'blc_vh1', name: 'Minibüs' },
    { id: 'blc_vh2', name: 'Klasik Otomobil' },
    { id: 'blc_vh3', name: 'Bisiklet' }
  ],
  'Bingöl': [
    { id: 'bng_vh1', name: '4x4 Arazi Aracı' },
    { id: 'bng_vh2', name: 'Minibüs' },
    { id: 'bng_vh3', name: 'ATV' }
  ],
  'Bitlis': [
    { id: 'btl_vh1', name: '4x4 Jeep' },
    { id: 'btl_vh2', name: 'Minibüs' },
    { id: 'btl_vh3', name: 'Tekne' }
  ],
  'Bolu': [
    { id: 'blu_vh1', name: 'Kayak Transfer Aracı' },
    { id: 'blu_vh2', name: '4x4 Jeep' },
    { id: 'blu_vh3', name: 'Minibüs' }
  ],
  'Burdur': [
    { id: 'brd_vh1', name: 'Safari Jeepi' },
    { id: 'brd_vh2', name: 'Tekne' },
    { id: 'brd_vh3', name: 'Minibüs' }
  ],
  'Bursa': [
    { id: 'brs_vh1', name: 'Teleferik' },
    { id: 'brs_vh2', name: 'VIP Van' },
    { id: 'brs_vh3', name: 'Nostaljik Tramvay' }
  ],
  'Çanakkale': [
    { id: 'cnk_vh1', name: 'Feribot' },
    { id: 'cnk_vh2', name: 'Minibüs' },
    { id: 'cnk_vh3', name: 'Bisiklet' }
  ],
  'Çankırı': [
    { id: 'cnr_vh1', name: 'Minibüs' },
    { id: 'cnr_vh2', name: '4x4 Jeep' },
    { id: 'cnr_vh3', name: 'ATV' }
  ],
  'Çorum': [
    { id: 'crm_vh1', name: 'Minibüs' },
    { id: 'crm_vh2', name: 'Safari Jeepi' },
    { id: 'crm_vh3', name: 'Bisiklet' }
  ],
  'Denizli': [
    { id: 'dnz_vh1', name: 'Golf Arabası' },
    { id: 'dnz_vh2', name: 'Minibüs' },
    { id: 'dnz_vh3', name: 'Elektrikli Scooter' }
  ],
  'Diyarbakır': [
    { id: 'dyb_vh1', name: 'Klasik Otomobil' },
    { id: 'dyb_vh2', name: 'Minibüs' },
    { id: 'dyb_vh3', name: 'Bisiklet' }
  ],
  'Edirne': [
    { id: 'edr_vh1', name: 'Fayton' },
    { id: 'edr_vh2', name: 'Minibüs' },
    { id: 'edr_vh3', name: 'Bisiklet' }
  ],
  'Elazığ': [
    { id: 'elz_vh1', name: 'Minibüs' },
    { id: 'elz_vh2', name: 'Tekne' },
    { id: 'elz_vh3', name: '4x4 Jeep' }
  ],
  'Erzincan': [
    { id: 'ezc_vh1', name: 'Rafting Botu' },
    { id: 'ezc_vh2', name: '4x4 Jeep' },
    { id: 'ezc_vh3', name: 'Minibüs' }
  ],
  'Erzurum': [
    { id: 'ezr_vh1', name: 'Kayak Transfer Aracı' },
    { id: 'ezr_vh2', name: 'Minibüs' },
    { id: 'ezr_vh3', name: 'Snowmobile' }
  ],
  'Eskişehir': [
    { id: 'esk_vh1', name: 'Nostaljik Tramvay' },
    { id: 'esk_vh2', name: 'Gondol' },
    { id: 'esk_vh3', name: 'Bisiklet' }
  ],
  'Gaziantep': [
    { id: 'gzn_vh1', name: 'VIP Van' },
    { id: 'gzn_vh2', name: 'Klasik Otomobil' },
    { id: 'gzn_vh3', name: 'Elektrikli Scooter' }
  ],
  'Giresun': [
    { id: 'grs_vh1', name: 'Tekne' },
    { id: 'grs_vh2', name: '4x4 Jeep' },
    { id: 'grs_vh3', name: 'Minibüs' }
  ],
  'Gümüşhane': [
    { id: 'gmh_vh1', name: '4x4 Jeep' },
    { id: 'gmh_vh2', name: 'Minibüs' },
    { id: 'gmh_vh3', name: 'ATV' }
  ],
  'Hakkari': [
    { id: 'hkr_vh1', name: '4x4 Arazi Aracı' },
    { id: 'hkr_vh2', name: 'Minibüs' },
    { id: 'hkr_vh3', name: 'Rafting Botu' }
  ],
  'Hatay': [
    { id: 'hty_vh1', name: 'VIP Van' },
    { id: 'hty_vh2', name: 'Klasik Otomobil' },
    { id: 'hty_vh3', name: 'Bisiklet' }
  ],
  'Iğdır': [
    { id: 'igr_vh1', name: '4x4 Jeep' },
    { id: 'igr_vh2', name: 'Minibüs' },
    { id: 'igr_vh3', name: 'ATV' }
  ],
  'Isparta': [
    { id: 'isp_vh1', name: 'Safari Jeepi' },
    { id: 'isp_vh2', name: 'Minibüs' },
    { id: 'isp_vh3', name: 'Bisiklet' }
  ],
  'Istanbul': [
    { id: 'ist_vh1', name: 'Yat' },
    { id: 'ist_vh2', name: 'VIP Van' },
    { id: 'ist_vh3', name: 'Nostaljik Tramvay' },
    { id: 'ist_vh4', name: 'Elektrikli Scooter' }
  ],
  'Izmir': [
    { id: 'izm_vh1', name: 'Tekne' },
    { id: 'izm_vh2', name: 'Nostaljik Tramvay' },
    { id: 'izm_vh3', name: 'VIP Van' },
    { id: 'izm_vh4', name: 'Bisiklet' }
  ],
  'Kahramanmaraş': [
    { id: 'kmr_vh1', name: 'Minibüs' },
    { id: 'kmr_vh2', name: '4x4 Jeep' },
    { id: 'kmr_vh3', name: 'ATV' }
  ],
  'Karabük': [
    { id: 'krb_vh1', name: 'Nostaljik Otomobil' },
    { id: 'krb_vh2', name: 'Minibüs' },
    { id: 'krb_vh3', name: 'Bisiklet' }
  ],
  'Karaman': [
    { id: 'krm_vh1', name: '4x4 Jeep' },
    { id: 'krm_vh2', name: 'Minibüs' },
    { id: 'krm_vh3', name: 'ATV' }
  ],
  'Kars': [
    { id: 'krs_vh1', name: 'Doğu Ekspresi' },
    { id: 'krs_vh2', name: '4x4 Jeep' },
    { id: 'krs_vh3', name: 'Atlı Kızak' }
  ],
  'Kastamonu': [
    { id: 'kst_vh1', name: '4x4 Jeep' },
    { id: 'kst_vh2', name: 'Minibüs' },
    { id: 'kst_vh3', name: 'ATV' }
  ],
  'Kayseri': [
    { id: 'kys_vh1', name: 'Kayak Transfer Aracı' },
    { id: 'kys_vh2', name: 'VIP Van' },
    { id: 'kys_vh3', name: 'Bisiklet' }
  ],
  'Kırıkkale': [
    { id: 'krk_vh1', name: 'Minibüs' },
    { id: 'krk_vh2', name: '4x4 Jeep' },
    { id: 'krk_vh3', name: 'Bisiklet' }
  ],
  'Kırklareli': [
    { id: 'krl_vh1', name: 'Safari Jeepi' },
    { id: 'krl_vh2', name: 'Minibüs' },
    { id: 'krl_vh3', name: 'ATV' }
  ],
  'Kırşehir': [
    { id: 'krs_vh1', name: 'Minibüs' },
    { id: 'krs_vh2', name: 'Bisiklet' },
    { id: 'krs_vh3', name: '4x4 Jeep' }
  ],
  'Kilis': [
    { id: 'kls_vh1', name: 'Minibüs' },
    { id: 'kls_vh2', name: 'Klasik Otomobil' },
    { id: 'kls_vh3', name: 'Bisiklet' }
  ],
  'Kocaeli': [
    { id: 'koc_vh1', name: 'VIP Van' },
    { id: 'koc_vh2', name: 'Tekne' },
    { id: 'koc_vh3', name: 'ATV' }
  ],
  'Konya': [
    { id: 'kny_vh1', name: 'VIP Van' },
    { id: 'kny_vh2', name: 'Klasik Otomobil' },
    { id: 'kny_vh3', name: 'Bisiklet' },
    { id: 'kny_vh4', name: 'Fayton' }
  ],
  'Kütahya': [
    { id: 'kut_vh1', name: 'Minibüs' },
    { id: 'kut_vh2', name: 'Nostaljik Tramvay' },
    { id: 'kut_vh3', name: 'Bisiklet' }
  ],
  'Malatya': [
    { id: 'mlt_vh1', name: '4x4 Jeep' },
    { id: 'mlt_vh2', name: 'Minibüs' },
    { id: 'mlt_vh3', name: 'Bisiklet' }
  ],
  'Manisa': [
    { id: 'man_vh1', name: 'Safari Jeepi' },
    { id: 'man_vh2', name: 'Minibüs' },
    { id: 'man_vh3', name: 'ATV' }
  ],
  'Mardin': [
    { id: 'mrd_vh1', name: 'Elektrikli Minibüs' },
    { id: 'mrd_vh2', name: 'Klasik Otomobil' },
    { id: 'mrd_vh3', name: 'Fayton' }
  ],
  'Mersin': [
    { id: 'mer_vh1', name: 'Tekne' },
    { id: 'mer_vh2', name: 'VIP Van' },
    { id: 'mer_vh3', name: 'Bisiklet' }
  ],
  'Muğla': [
    { id: 'mgl_vh1', name: 'Yat' },
    { id: 'mgl_vh2', name: 'Safari Jeepi' },
    { id: 'mgl_vh3', name: 'Golf Arabası' },
    { id: 'mgl_vh4', name: 'Elektrikli Scooter' }
  ],
  'Muş': [
    { id: 'mus_vh1', name: '4x4 Jeep' },
    { id: 'mus_vh2', name: 'Minibüs' },
    { id: 'mus_vh3', name: 'ATV' }
  ],
  'Nevşehir': [
    { id: 'nvs_vh1', name: 'ATV' },
    { id: 'nvs_vh2', name: 'Klasik Otomobil' },
    { id: 'nvs_vh3', name: 'At' },
    { id: 'nvs_vh4', name: 'Golf Arabası' }
  ],
  'Niğde': [
    { id: 'nig_vh1', name: '4x4 Jeep' },
    { id: 'nig_vh2', name: 'Minibüs' },
    { id: 'nig_vh3', name: 'ATV' }
  ],
  'Ordu': [
    { id: 'ord_vh1', name: 'Teleferik' },
    { id: 'ord_vh2', name: 'Minibüs' },
    { id: 'ord_vh3', name: '4x4 Jeep' }
  ],
  'Osmaniye': [
    { id: 'osm_vh1', name: '4x4 Jeep' },
    { id: 'osm_vh2', name: 'Minibüs' },
    { id: 'osm_vh3', name: 'ATV' }
  ],
  'Rize': [
    { id: 'rze_vh1', name: '4x4 Jeep' },
    { id: 'rze_vh2', name: 'Minibüs' },
    { id: 'rze_vh3', name: 'Zip Line' }
  ],
  'Sakarya': [
    { id: 'skr_vh1', name: 'VIP Van' },
    { id: 'skr_vh2', name: 'ATV' },
    { id: 'skr_vh3', name: 'Bisiklet' }
  ],
  'Samsun': [
    { id: 'sam_vh1', name: 'Nostaljik Tramvay' },
    { id: 'sam_vh2', name: 'Minibüs' },
    { id: 'sam_vh3', name: 'Bisiklet' }
  ],
  'Siirt': [
    { id: 'srt_vh1', name: '4x4 Jeep' },
    { id: 'srt_vh2', name: 'Minibüs' },
    { id: 'srt_vh3', name: 'ATV' }
  ],
  'Sinop': [
    { id: 'snp_vh1', name: 'Tekne' },
    { id: 'snp_vh2', name: 'Minibüs' },
    { id: 'snp_vh3', name: 'Bisiklet' }
  ],
  'Sivas': [
    { id: 'svs_vh1', name: 'Nostaljik Tramvay' },
    { id: 'svs_vh2', name: 'Minibüs' },
    { id: 'svs_vh3', name: '4x4 Jeep' }
  ],
  'Şanlıurfa': [
    { id: 'urf_vh1', name: 'VIP Van' },
    { id: 'urf_vh2', name: 'Klasik Otomobil' },
    { id: 'urf_vh3', name: 'Fayton' }
  ],
  'Şırnak': [
    { id: 'srn_vh1', name: '4x4 Jeep' },
    { id: 'srn_vh2', name: 'Minibüs' },
    { id: 'srn_vh3', name: 'ATV' }
  ],
  'Tekirdağ': [
    { id: 'tkr_vh1', name: 'Minibüs' },
    { id: 'tkr_vh2', name: 'Bisiklet' },
    { id: 'tkr_vh3', name: 'Golf Arabası' }
  ],
  'Tokat': [
    { id: 'tkt_vh1', name: 'Minibüs' },
    { id: 'tkt_vh2', name: '4x4 Jeep' },
    { id: 'tkt_vh3', name: 'Bisiklet' }
  ],
  'Trabzon': [
    { id: 'trb_vh1', name: 'Teleferik' },
    { id: 'trb_vh2', name: '4x4 Jeep' },
    { id: 'trb_vh3', name: 'Minibüs' }
  ],
  'Tunceli': [
    { id: 'tnc_vh1', name: '4x4 Jeep' },
    { id: 'tnc_vh2', name: 'Rafting Botu' },
    { id: 'tnc_vh3', name: 'Minibüs' }
  ],
  'Uşak': [
    { id: 'usk_vh1', name: 'Minibüs' },
    { id: 'usk_vh2', name: '4x4 Jeep' },
    { id: 'usk_vh3', name: 'ATV' }
  ],
  'Van': [
    { id: 'van_vh1', name: 'Tekne' },
    { id: 'van_vh2', name: 'Minibüs' },
    { id: 'van_vh3', name: '4x4 Jeep' }
  ],
  'Yalova': [
    { id: 'ylv_vh1', name: 'VIP Van' },
    { id: 'ylv_vh2', name: 'Tekne' },
    { id: 'ylv_vh3', name: 'Bisiklet' }
  ],
  'Yozgat': [
    { id: 'yzg_vh1', name: 'Minibüs' },
    { id: 'yzg_vh2', name: '4x4 Jeep' },
    { id: 'yzg_vh3', name: 'ATV' }
  ],
  'Zonguldak': [
    { id: 'zng_vh1', name: 'Minibüs' },
    { id: 'zng_vh2', name: '4x4 Jeep' },
    { id: 'zng_vh3', name: 'Tekne' }
  ],
  'default': [
    { id: 'def_vh1', name: 'Minibüs' },
    { id: 'def_vh2', name: 'Bisiklet' },
    { id: 'def_vh3', name: '4x4 Jeep' },
    { id: 'def_vh4', name: 'Elektrikli Scooter' }
  ]
};

export default function handler(req, res) {
  const { location } = req.query;

  if (!location) {
    return res.status(400).json({ message: "Location is required" });
  }

  // Şehir adını büyük harfle başlatıp geri kalanını küçük harf yapma
  const formattedLocation = location.charAt(0).toUpperCase() + location.slice(1).toLowerCase();

  // Şehir için özel araçlar varsa onları, yoksa varsayılan araçları döndür
  const vehicles = cityVehicles[formattedLocation] || cityVehicles['default'];

  res.status(200).json(vehicles);
} 