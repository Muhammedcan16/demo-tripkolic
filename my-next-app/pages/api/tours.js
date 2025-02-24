import { cities } from './cities';

const tours = [
  // ANTALYA TURLARI
  {
    id: 'ant_tour1',
    name: 'Luxury Yacht & Snorkel Turu',
    location: 'Antalya',
    theme: 'ant1', // Deniz & Lüks
    activities: ['ant_act1', 'ant_act2'], // Yat Turu, Dalış
    vehicles: ['ant_vh1'], // Lüks Yat
    startTime: '10:00',
    duration: 6,
    maxGroupSize: 8,
    price: 350,
    features: ['ant_ft1', 'ant_ft2', 'ant_ft3', 'ant_ft4', 'ant_ft5'], // Rehber, Dalış Ekipmanı, Şampanya, Gourmet Yemek, Transfer
    description: "Özel koyların keyfini çıkarın",
    images: ['yacht1.jpg', 'snorkel1.jpg']
  },
  {
    id: 'ant_tour2',
    name: 'Antik Kentler Rotası',
    location: 'Antalya',
    theme: 'ant2', // Tarih & Kültür
    activities: ['ant_act3', 'ant_act4'], // Antik Kent, Fotoğraf
    vehicles: ['ant_vh2'], // VIP Van
    startTime: '08:00',
    duration: 8,
    maxGroupSize: 12,
    price: 140,
    features: ['ant_ft1', 'ant_ft6', 'ant_ft7', 'ant_ft4'], // Rehber, Müze Giriş, Öğle Yemeği, Transfer
    description: "Aspendos ve Perge turu",
    images: ['aspendos1.jpg', 'perge1.jpg']
  },
  {
    id: 'ant_tour3',
    name: 'Köprülü Kanyon Rafting',
    location: 'Antalya',
    theme: 'ant3', // Macera & Spor
    activities: ['ant_act5', 'ant_act6'], // Rafting, Doğa Yürüyüşü
    vehicles: ['ant_vh3'], // Safari Jeep
    startTime: '07:30',
    duration: 10,
    maxGroupSize: 16,
    price: 85,
    features: ['ant_ft1', 'ant_ft8', 'ant_ft9', 'ant_ft4'], // Rehber, Rafting Ekipmanı, Mangal Keyfi, Transfer
    description: "Adrenalin dolu bir macera",
    images: ['rafting1.jpg', 'kanyon1.jpg']
  },
  // KAPADOKYA TURLARI
  {
    id: 'nvs_tour1',
    name: 'Kapadokya Balon Turu',
    location: 'Nevsehir',
    theme: 'nvs1', // Balon
    activities: ['nvs_act1', 'nvs_act2', 'nvs_act3'], // Balon, Fotoğraf, ATV Safari
    vehicles: ['nvs_vh1', 'nvs_vh2', 'nvs_vh3'], // Balon, Minibüs, ATV
    startTime: '05:00',
    duration: 3,
    maxGroupSize: 16,
    price: 200,
    features: ['Kahvalti', 'Transfer', 'Sertifika'],
    description: "Gunesin dogusunu gokyuzunden izleyin",
    images: ['balon1.jpg', 'balon2.jpg']
  },
  // ISTANBUL TURLARI
  {
    id: 'ist_tour1',
    name: 'VIP Boğaz Yat Turu',
    location: 'Istanbul',
    theme: 'ist1', // Boğaz & Lüks
    activities: ['ist_act1', 'ist_act2'], // Yat Turu, Akşam Yemeği
    vehicles: ['ist_vh1'], // Özel Yat
    startTime: '19:00',
    duration: 4,
    maxGroupSize: 8,
    price: 400,
    features: ['ist_ft1', 'ist_ft2', 'ist_ft3', 'ist_ft4', 'ist_ft5'], // Rehber, Gourmet Yemek, Canlı Müzik, Premium İçecek, Fotoğraf
    description: "Boğazın eşsiz manzarasında lüks akşam",
    images: ['bogaz_vip1.jpg', 'bogaz_vip2.jpg']
  },
  {
    id: 'ist_tour2',
    name: 'Tarihi Yarımada Klasik Tur',
    location: 'Istanbul',
    theme: 'ist2', // Tarihi
    activities: ['ist_act3', 'ist_act4'], // Müze Ziyareti, Tarihi Mekan
    vehicles: ['ist_vh2', 'ist_vh3'], // VIP Van, Tramvay
    startTime: '09:00',
    duration: 7,
    maxGroupSize: 15,
    price: 120,
    features: ['ist_ft1', 'ist_ft6', 'ist_ft7', 'ist_ft4'], // Rehber, Müze Giriş, Öğle Yemeği, Transfer
    description: "Sultanahmet ve çevresinin tarihi",
    images: ['sultanahmet1.jpg', 'ayasofya1.jpg']
  },
  {
    id: 'ist_tour3',
    name: 'Adalar Bisiklet Turu',
    location: 'Istanbul',
    theme: 'ist3', // Doğa & Aktivite
    activities: ['ist_act5', 'ist_act6'], // Bisiklet, Yüzme
    vehicles: ['ist_vh4', 'ist_vh5'], // Vapur, Bisiklet
    startTime: '08:30',
    duration: 8,
    maxGroupSize: 12,
    price: 80,
    features: ['ist_ft1', 'ist_ft8', 'ist_ft9', 'ist_ft4'], // Rehber, Bisiklet Kiralama, Piknik, Transfer
    description: "Büyükada'da pedal keyfi",
    images: ['adalar1.jpg', 'bisiklet1.jpg']
  },
  // IZMIR TURLARI
  {
    id: 'izm_tour1',
    name: 'Efes VIP Arkeoloji Turu',
    location: 'Izmir',
    theme: 'izm1', // Antik & Lüks
    activities: ['izm_act1', 'izm_act2'], // Arkeolojik Gezi, Şarap Tadımı
    vehicles: ['izm_vh1'], // VIP Van
    startTime: '08:00',
    duration: 6,
    maxGroupSize: 6,
    price: 300,
    features: ['izm_ft1', 'izm_ft2', 'izm_ft3', 'izm_ft4'], // Özel Rehber, VIP Giriş, Şarap Tadımı, Gourmet Yemek
    description: "Efes'in gizli kalmış köşeleri",
    images: ['efes_vip1.jpg', 'efes_vip2.jpg']
  },
  {
    id: 'izm_tour2',
    name: 'Alaçatı & Çeşme Turu',
    location: 'Izmir',
    theme: 'izm2', // Sahil & Eğlence
    activities: ['izm_act3', 'izm_act4'], // Plaj, Rüzgar Sörfü
    vehicles: ['izm_vh2'], // Minibüs
    startTime: '09:00',
    duration: 10,
    maxGroupSize: 15,
    price: 150,
    features: ['izm_ft1', 'izm_ft5', 'izm_ft6', 'izm_ft4'], // Rehber, Sörf Dersi, Plaj Seti, Transfer
    description: "Ege'nin en güzel koyları",
    images: ['alacati1.jpg', 'cesme1.jpg']
  },
  {
    id: 'izm_tour3',
    name: 'Foça Köy Pazarı Turu',
    location: 'Izmir',
    theme: 'izm3', // Yerel & Gastronomi
    activities: ['izm_act5', 'izm_act6'], // Pazar Gezisi, Yemek Workshop
    vehicles: ['izm_vh2'], // Minibüs
    startTime: '07:00',
    duration: 6,
    maxGroupSize: 10,
    price: 90,
    features: ['izm_ft1', 'izm_ft7', 'izm_ft8', 'izm_ft4'], // Rehber, Köy Kahvaltısı, Zeytinyağı Tadımı, Transfer
    description: "Yerel lezzetler ve köy pazarı",
    images: ['foca1.jpg', 'pazar1.jpg']
  },
  // TRABZON TURLARI
  {
    id: 'trb_tour1',
    name: 'Uzungol Turu',
    location: 'Trabzon',
    theme: 'trb1', // Doga
    activities: ['trb_act1', 'trb_act2'], // Yuruyus, Fotograf
    vehicles: ['trb_vh1'], // Jeep
    startTime: '07:00',
    duration: 10,
    maxGroupSize: 12,
    price: 160,
    features: ['Kahvalti', 'Ogle Yemegi', 'Transfer'],
    description: "Dogayla ic ice bir gun",
    images: ['uzungol1.jpg', 'uzungol2.jpg']
  },
  // BURSA TURLARI
  {
    id: 'brs_tour1',
    name: 'Uludağ Premium Kayak Deneyimi',
    location: 'Bursa',
    theme: 'brs1', // Kış Sporları
    activities: ['brs_act1', 'brs_act2'], // Kayak, Snowboard
    vehicles: ['brs_vh1', 'brs_vh2'], // Teleferik, VIP Van
    startTime: '08:00',
    duration: 8,
    maxGroupSize: 8,
    price: 350,
    features: ['brs_ft1', 'brs_ft2', 'brs_ft3', 'brs_ft4', 'brs_ft5'], // Rehber, Teleferik, Iskender Menu, Transfer, Kayak Ekipmanı
    description: "VIP kayak deneyimi ve özel ekipman kiralama",
    images: ['uludag_premium1.jpg', 'uludag_premium2.jpg']
  },
  {
    id: 'brs_tour2',
    name: 'Tarihi Bursa Kültür Turu',
    location: 'Bursa',
    theme: 'brs2', // Tarihi Yerler
    activities: ['brs_act3', 'brs_act4'], // Tarihi Mekan Ziyareti, Fotograf
    vehicles: ['brs_vh2', 'brs_vh3'], // VIP Van, Minibus
    startTime: '09:00',
    duration: 6,
    maxGroupSize: 15,
    price: 120,
    features: ['brs_ft1', 'brs_ft3', 'brs_ft4'], // Rehber, Iskender Menu, Transfer
    description: "Osmanlı'nın ilk başkentini keşfedin",
    images: ['bursa1.jpg', 'bursa2.jpg']
  },
  {
    id: 'brs_tour3',
    name: 'Cumalıkızık & Gölyazı Köy Turu',
    location: 'Bursa',
    theme: 'brs3', // Köy & Doğa
    activities: ['brs_act5', 'brs_act6'], // Köy Gezisi, Fotoğraf
    vehicles: ['brs_vh3'], // Minibüs
    startTime: '08:30',
    duration: 7,
    maxGroupSize: 12,
    price: 80,
    features: ['brs_ft1', 'brs_ft6', 'brs_ft4'], // Rehber, Köy Kahvaltısı, Transfer
    description: "UNESCO mirası köylerde nostaljik gezi",
    images: ['cumalikizik1.jpg', 'golyazi1.jpg']
  },
  {
    id: 'brs_tour4',
    name: 'Bursa Gastronomi Turu',
    location: 'Bursa',
    theme: 'brs4', // Gastronomi
    activities: ['brs_act7', 'brs_act8'], // Yemek Workshop, Çarşı Gezisi
    vehicles: ['brs_vh3'], // Minibüs
    startTime: '10:00',
    duration: 5,
    maxGroupSize: 10,
    price: 150,
    features: ['brs_ft1', 'brs_ft3', 'brs_ft7', 'brs_ft4'], // Rehber, İskender Menü, Kestane Şekeri Workshop, Transfer
    description: "Bursa'nın lezzetlerini keşfedin",
    images: ['gastronomi1.jpg', 'gastronomi2.jpg']
  },
  {
    id: 'brs_tour5',
    name: 'Uludağ Doğa Yürüyüşü',
    location: 'Bursa',
    theme: 'brs5', // Doğa & Spor
    activities: ['brs_act9', 'brs_act10'], // Trekking, Doğa Fotoğrafçılığı
    vehicles: ['brs_vh1', 'brs_vh3'], // Teleferik, Minibüs
    startTime: '07:30',
    duration: 6,
    maxGroupSize: 15,
    price: 90,
    features: ['brs_ft1', 'brs_ft2', 'brs_ft8', 'brs_ft4'], // Rehber, Teleferik, Piknik, Transfer
    description: "Uludağ'ın eşsiz doğasında yürüyüş",
    images: ['uludag_yaz1.jpg', 'uludag_yaz2.jpg']
  },
  {
    id: 'brs_tour6',
    name: 'Bursa Hamam & Spa Deneyimi',
    location: 'Bursa',
    theme: 'brs6', // Wellness
    activities: ['brs_act11', 'brs_act12'], // Hamam, Masaj
    vehicles: ['brs_vh2'], // VIP Van
    startTime: '11:00',
    duration: 4,
    maxGroupSize: 6,
    price: 200,
    features: ['brs_ft1', 'brs_ft9', 'brs_ft10', 'brs_ft4'], // Rehber, Hamam Seti, Masaj, Transfer
    description: "Tarihi hamamda sultan keyfi",
    images: ['hamam1.jpg', 'hamam2.jpg']
  },
  // MUGLA TURLARI
  {
    id: 'mgl_tour1',
    name: 'Fethiye 12 Adalar Turu',
    location: 'Mugla',
    theme: 'mgl1', // Deniz
    activities: ['mgl_act1', 'mgl_act2', 'mgl_act3'], // Tekne Turu, Yüzme, Dalış
    vehicles: ['mgl_vh1', 'mgl_vh2'], // Yat, Safari Jeepi
    startTime: '10:00',
    duration: 7,
    maxGroupSize: 18,
    price: 140,
    features: ['Ogle Yemegi', 'Icecek', 'Ekipman'],
    description: "Mavi yolculuk keyfi",
    images: ['fethiye1.jpg', 'fethiye2.jpg']
  },
  // RIZE TURLARI
  {
    id: 'rze_tour1',
    name: 'Ayder Yaylasi Turu',
    location: 'Rize',
    theme: 'rze1', // Yayla
    activities: ['rze_act1', 'rze_act2'], // Yuruyus, Fotograf
    vehicles: ['rze_vh1'], // Jeep
    startTime: '06:30',
    duration: 12,
    maxGroupSize: 8,
    price: 180,
    features: ['Kahvalti', 'Ogle Yemegi', 'Rehber'],
    description: "Yaylalarin serin havasinda",
    images: ['ayder1.jpg', 'ayder2.jpg']
  },
  // ANKARA TURLARI
  {
    id: 'ank_tour1',
    name: 'Anitkabir ve Müzeler Turu',
    location: 'Ankara',
    theme: 'ank1', // Tarihi ve Kültürel
    activities: ['ank_act1', 'ank_act2'], // Müze Ziyareti, Tarihi Mekan
    vehicles: ['ank_vh1', 'ank_vh2'], // VIP Van, Minibüs
    startTime: '09:00',
    duration: 6,
    maxGroupSize: 20,
    price: 100,
    features: ['ank_ft1', 'ank_ft2', 'ank_ft3', 'ank_ft4'], // Profesyonel Rehber, Muze Giris, Transfer, Ogle Yemegi
    description: "Baskentin tarihi ve kulturel zenginliklerini kesfet",
    images: ['anitkabir1.jpg', 'muzeler1.jpg']
  },
  // AYDIN TURLARI
  {
    id: 'ayd_tour1',
    name: 'Kusadasi & Efes Turu',
    location: 'Aydin',
    theme: 'ayd1', // Antik Kent & Deniz
    activities: ['ayd_act1', 'ayd_act2'], // Antik Kent Gezisi, Plaj
    vehicles: ['ayd_vh1', 'ayd_vh2'], // Minibüs, VIP Van
    startTime: '08:00',
    duration: 8,
    maxGroupSize: 15,
    price: 140,
    features: ['ayd_ft1', 'ayd_ft2', 'ayd_ft3', 'ayd_ft4'], // Rehber, Antik Kent Girisi, Yemek, Transfer
    description: "Antik tarih ve deniz bir arada",
    images: ['efes1.jpg', 'kusadasi1.jpg']
  },
  // ÇANAKKALE TURLARI
  {
    id: 'cnk_tour1',
    name: 'Gelibolu Tarihi Yarimada Turu',
    location: 'Canakkale',
    theme: 'cnk1', // Tarihi
    activities: ['cnk_act1', 'cnk_act2'], // Tarihi Alan Ziyareti, Müze
    vehicles: ['cnk_vh1', 'cnk_vh2'], // Minibüs, Feribot
    startTime: '07:30',
    duration: 10,
    maxGroupSize: 20,
    price: 160,
    features: ['cnk_ft1', 'cnk_ft2', 'cnk_ft3', 'cnk_ft4'], // Rehber, Tarihi Alan Girisi, Yemek, Transfer
    description: "Tarihe yolculuk",
    images: ['gelibolu1.jpg', 'sehitlik1.jpg']
  },
  // GAZİANTEP TURLARI
  {
    id: 'gzn_tour1',
    name: 'Gaziantep Lezzet Turu',
    location: 'Gaziantep',
    theme: 'gzn1', // Gastronomi
    activities: ['gzn_act1', 'gzn_act2'], // Yemek Workshop, Çarşı Gezisi
    vehicles: ['gzn_vh1'], // VIP Van
    startTime: '09:00',
    duration: 6,
    maxGroupSize: 12,
    price: 180,
    features: ['gzn_ft1', 'gzn_ft2', 'gzn_ft3', 'gzn_ft4'], // Rehber, Baklava Workshop, Mutfak Muzesi, Transfer
    description: "Dunyanin en onemli mutfaklarindan birini kesfet",
    images: ['baklava1.jpg', 'mutfak1.jpg']
  },
  // MARDİN TURLARI
  {
    id: 'mrd_tour1',
    name: 'Mardin Kultur Turu',
    location: 'Mardin',
    theme: 'mrd1', // Kültürel
    activities: ['mrd_act1', 'mrd_act2'], // Tarihi Mekan, El Sanatları
    vehicles: ['mrd_vh1'], // Minibüs
    startTime: '08:30',
    duration: 7,
    maxGroupSize: 15,
    price: 130,
    features: ['mrd_ft1', 'mrd_ft2', 'mrd_ft3', 'mrd_ft4'], // Rehber, Telkari Workshop, Ikindi Kahvesi, Transfer
    description: "Mezopotamya'nin kadim sehri",
    images: ['mardin1.jpg', 'telkari1.jpg']
  },
  // ŞANLIURFA TURLARI
  {
    id: 'urf_tour1',
    name: 'Gobeklitepe & Balikligol Turu',
    location: 'Sanliurfa',
    theme: 'urf1', // Tarihi & Kültürel
    activities: ['urf_act1', 'urf_act2'], // Arkeolojik Alan, Müze
    vehicles: ['urf_vh1', 'urf_vh2'], // VIP Van, Minibüs
    startTime: '08:00',
    duration: 9,
    maxGroupSize: 16,
    price: 170,
    features: ['urf_ft1', 'urf_ft2', 'urf_ft3', 'urf_ft4'], // Rehber, Sira Gecesi, Cigkofte Workshop, Transfer
    description: "Insanligin baslangic noktasi",
    images: ['gobeklitepe1.jpg', 'balikligol1.jpg']
  },
  // KONYA TURLARI
  {
    id: 'kny_tour1',
    name: 'Mevlana ve Mistik Tur',
    location: 'Konya',
    theme: 'kny1', // Kültürel & Mistik
    activities: ['kny_act1', 'kny_act2'], // Müze Ziyareti, Sema Gösterisi
    vehicles: ['kny_vh1'], // VIP Van
    startTime: '10:00',
    duration: 5,
    maxGroupSize: 20,
    price: 120,
    features: ['kny_ft1', 'kny_ft2', 'kny_ft3', 'kny_ft4'], // Rehber, Sema Gosterisi, Etli Ekmek, Transfer
    description: "Mevlana'nin sehrinde mistik bir yolculuk",
    images: ['mevlana1.jpg', 'sema1.jpg']
  },
  // HATAY TURLARI
  {
    id: 'hty_tour1',
    name: 'Hatay Gastronomi Turu',
    location: 'Hatay',
    theme: 'hty1', // Gastronomi
    activities: ['hty_act1', 'hty_act2'], // Yemek Workshop, Çarşı Gezisi
    vehicles: ['hty_vh1'], // VIP Van
    startTime: '09:30',
    duration: 6,
    maxGroupSize: 12,
    price: 160,
    features: ['hty_ft1', 'hty_ft2', 'hty_ft3', 'hty_ft4'], // Rehber, Kunefe Workshop, Mozaik Muzesi, Transfer
    description: "UNESCO Gastronomi sehrinde lezzet duraklari",
    images: ['kunefe1.jpg', 'mozaik1.jpg']
  },
  // KARS TURLARI
  {
    id: 'krs_tour1',
    name: 'Ani Harabeleri Turu',
    location: 'Kars',
    theme: 'krs1', // Tarihi
    activities: ['krs_act1', 'krs_act2'], // Antik Kent, Fotoğraf
    vehicles: ['krs_vh1', 'krs_vh2'], // Minibüs, Doğu Ekspresi
    startTime: '08:00',
    duration: 8,
    maxGroupSize: 15,
    price: 140,
    features: ['krs_ft1', 'krs_ft2', 'krs_ft3', 'krs_ft4'], // Rehber, Kas Peyniri Tadimi, Transfer, Tarihi Tren
    description: "Ipek Yolunun kadim sehri",
    images: ['ani1.jpg', 'kars1.jpg']
  },
  // ERZURUM TURLARI
  {
    id: 'ezr_tour1',
    name: 'Palandoken Kayak Turu',
    location: 'Erzurum',
    theme: 'ezr1', // Kış Sporları
    activities: ['ezr_act1', 'ezr_act2'], // Kayak, Snowboard
    vehicles: ['ezr_vh1', 'ezr_vh2'], // Teleferik, VIP Van
    startTime: '08:30',
    duration: 7,
    maxGroupSize: 10,
    price: 220,
    features: ['ezr_ft1', 'ezr_ft2', 'ezr_ft3', 'ezr_ft4'], // Rehber, Kayak Ekipmani, Cag Kebap, Transfer
    description: "Kar kalitesi ve pistleriyle unlu Palandoken",
    images: ['palandoken1.jpg', 'kayak1.jpg']
  },
  // ESKİŞEHİR TURLARI
  {
    id: 'esk_tour1',
    name: 'Odunpazari & Porsuk Turu',
    location: 'Eskisehir',
    theme: 'esk1', // Kültürel
    activities: ['esk_act1', 'esk_act2'], // Şehir Turu, Müze
    vehicles: ['esk_vh1', 'esk_vh2'], // Tramvay, Gondol
    startTime: '10:00',
    duration: 6,
    maxGroupSize: 20,
    price: 110,
    features: ['esk_ft1', 'esk_ft2', 'esk_ft3', 'esk_ft4'], // Rehber, Gondol, Met Helvasi, Transfer
    description: "Ogrenci sehrinin rengarenk sokaklari",
    images: ['odunpazari1.jpg', 'porsuk1.jpg']
  },
  // ADIYAMAN TURLARI
  {
    id: 'ady_tour1',
    name: 'Nemrut Dagi Gundogumu Turu',
    location: 'Adiyaman',
    theme: 'ady1', // Tarihi & Doğa
    activities: ['ady_act1', 'ady_act2'], // Tarihi Alan, Gündoğumu
    vehicles: ['ady_vh1'], // Jeep
    startTime: '03:30',
    duration: 12,
    maxGroupSize: 12,
    price: 190,
    features: ['ady_ft1', 'ady_ft2', 'ady_ft3', 'ady_ft4'], // Profesyonel Rehber, Gunes Dogumu Kahvaltisi, Transfer, Fotograf
    description: "Dunyanin en etkileyici gundogumu manzarasi",
    images: ['nemrut1.jpg', 'nemrut2.jpg']
  },
  // AFYON TURLARI
  {
    id: 'afn_tour1',
    name: 'Termal & Tarih Turu',
    location: 'Afyonkarahisar',
    theme: 'afn1', // Sağlık & Tarih
    activities: ['afn_act1', 'afn_act2'], // Termal, Kale Ziyareti
    vehicles: ['afn_vh1'], // VIP Van
    startTime: '09:00',
    duration: 6,
    maxGroupSize: 15,
    price: 140,
    features: ['afn_ft1', 'afn_ft2', 'afn_ft3', 'afn_ft4'], // Termal Havuz, Ogle Yemegi, Transfer, Hamam Seti
    description: "Sifali sularda wellness deneyimi",
    images: ['termal1.jpg', 'kale1.jpg']
  },
  // DENİZLİ TURLARI
  {
    id: 'dnz_tour1',
    name: 'Pamukkale & Hierapolis Turu',
    location: 'Denizli',
    theme: 'dnz1', // Doğa & Tarih
    activities: ['dnz_act1', 'dnz_act2'], // Travertenler, Antik Kent
    vehicles: ['dnz_vh1', 'dnz_vh2'], // VIP Van, Minibüs
    startTime: '08:30',
    duration: 7,
    maxGroupSize: 20,
    price: 150,
    features: ['dnz_ft1', 'dnz_ft2', 'dnz_ft3', 'dnz_ft4'], // Rehber, Travertenler Girisi, Termal Havuz, Transfer
    description: "Beyaz cennetin efsanevi sulari",
    images: ['pamukkale1.jpg', 'hierapolis1.jpg']
  },
  // KARABÜK TURLARI
  {
    id: 'krb_tour1',
    name: 'Safranbolu Konaklar Turu',
    location: 'Karabuk',
    theme: 'krb1', // Kültürel & Mimari
    activities: ['krb_act1', 'krb_act2'], // Konak Ziyareti, El Sanatları
    vehicles: ['krb_vh1'], // Minibüs
    startTime: '09:30',
    duration: 6,
    maxGroupSize: 15,
    price: 120,
    features: ['krb_ft1', 'krb_ft2', 'krb_ft3', 'krb_ft4'], // Rehber, Safranbolu Evi, Lokum Yapimi, Transfer
    description: "Osmanli mimarisinin yasayan muzesi",
    images: ['safranbolu1.jpg', 'konak1.jpg']
  },
  // ORDU TURLARI
  {
    id: 'ord_tour1',
    name: 'Boztepe & Perşembe Yaylası Turu',
    location: 'Ordu',
    theme: 'ord1', // Doğa & Yayla
    activities: ['ord_act1', 'ord_act2'], // Teleferik, Yayla
    vehicles: ['ord_vh1', 'ord_vh2'], // Teleferik, Minibüs
    startTime: '09:00',
    duration: 8,
    maxGroupSize: 15,
    price: 130,
    features: ['ord_ft1', 'ord_ft2', 'ord_ft3', 'ord_ft4'], // Rehber, Findik Hasadi, Teleferik, Transfer
    description: "Karadeniz'in zirvesinde yayla keyfi",
    images: ['boztepe1.jpg', 'yayla1.jpg']
  }
];

const tourData = [
  // İSTANBUL
  {
    id: 1,
    name: 'Historical Peninsula Tour',
    location: 'Istanbul',
    theme: 'Cultural',
    activities: ['Walking Tour', 'Museum Visits', 'Historical Sites'],
    vehicles: ['Walking', 'Tourist Bus'],
    startTime: '09:00',
    duration: 8,
    maxGroupSize: 15,
    price: 80,
    features: ['Professional Guide', 'Museum Tickets', 'Lunch Included'],
    description: 'Visit Hagia Sophia, Blue Mosque, Topkapi Palace, and Grand Bazaar',
    imageUrl: '/tours/istanbul-historical.jpg'
  },
  {
    id: 2,
    name: 'Bosphorus Dinner Cruise',
    location: 'Istanbul',
    theme: 'Romantic',
    activities: ['Boat Tour', 'Dinner', 'Live Music'],
    vehicles: ['Cruise Ship'],
    startTime: '19:30',
    duration: 4,
    maxGroupSize: 100,
    price: 120,
    features: ['Dinner', 'Live Entertainment', 'Hotel Transfer'],
    description: 'Evening cruise with Turkish cuisine and entertainment',
    imageUrl: '/tours/bosphorus-cruise.jpg'
  },

  // ANTALYA
  {
    id: 3,
    name: 'Ancient Cities Tour',
    location: 'Antalya',
    theme: 'Historical',
    activities: ['Archaeological Sites', 'Swimming', 'Photography'],
    vehicles: ['Minibus'],
    startTime: '08:00',
    duration: 10,
    maxGroupSize: 12,
    price: 90,
    features: ['Professional Guide', 'Lunch', 'Entry Tickets'],
    description: 'Visit Perge, Aspendos, and Side ancient cities',
    imageUrl: '/tours/antalya-ancient.jpg'
  },
  {
    id: 4,
    name: 'Boat Trip to Kekova',
    location: 'Antalya',
    theme: 'Adventure',
    activities: ['Swimming', 'Snorkeling', 'Sunbathing'],
    vehicles: ['Yacht'],
    startTime: '09:30',
    duration: 8,
    maxGroupSize: 20,
    price: 70,
    features: ['Lunch', 'Snorkeling Equipment', 'Hotel Transfer'],
    description: 'Full-day boat tour to sunken city of Kekova',
    imageUrl: '/tours/kekova-tour.jpg'
  },

  // CAPPADOCIA (NEVŞEHİR)
  {
    id: 5,
    name: 'Hot Air Balloon Tour',
    location: 'Nevsehir',
    theme: 'Adventure',
    activities: ['Balloon Flight', 'Photography'],
    vehicles: ['Hot Air Balloon'],
    startTime: '05:00',
    duration: 3,
    maxGroupSize: 16,
    price: 200,
    features: ['Breakfast', 'Certificate', 'Hotel Transfer'],
    description: 'Sunrise balloon flight over Cappadocia',
    imageUrl: '/tours/cappadocia-balloon.jpg'
  },
  {
    id: 6,
    name: 'Red Valley Hiking',
    location: 'Nevsehir',
    theme: 'Nature',
    activities: ['Hiking', 'Cave Visits', 'Sunset Watching'],
    vehicles: ['Walking'],
    startTime: '14:00',
    duration: 4,
    maxGroupSize: 10,
    price: 45,
    features: ['Professional Guide', 'Water', 'Snacks'],
    description: 'Afternoon hiking tour in Red and Rose Valleys',
    imageUrl: '/tours/red-valley.jpg'
  },

  // İZMİR
  {
    id: 7,
    name: 'Ephesus & Virgin Mary House',
    location: 'Izmir',
    theme: 'Cultural',
    activities: ['Archaeological Tour', 'Religious Sites'],
    vehicles: ['Bus'],
    startTime: '08:30',
    duration: 9,
    maxGroupSize: 25,
    price: 85,
    features: ['Professional Guide', 'Lunch', 'Entry Tickets'],
    description: 'Full day tour of ancient Ephesus and Virgin Mary House',
    imageUrl: '/tours/ephesus-tour.jpg'
  },
  {
    id: 8,
    name: 'Çeşme Beach Tour',
    location: 'Izmir',
    theme: 'Beach',
    activities: ['Swimming', 'Beach Activities', 'Water Sports'],
    vehicles: ['Minibus'],
    startTime: '09:00',
    duration: 8,
    maxGroupSize: 15,
    price: 60,
    features: ['Beach Equipment', 'Lunch', 'Hotel Transfer'],
    description: 'Day trip to beautiful beaches of Çeşme',
    imageUrl: '/tours/cesme-beach.jpg'
  },

  // MUĞLA
  {
    id: 9,
    name: '12 Islands Boat Tour',
    location: 'Mugla',
    theme: 'Adventure',
    activities: ['Swimming', 'Snorkeling', 'Cave Exploration'],
    vehicles: ['Yacht'],
    startTime: '10:00',
    duration: 8,
    maxGroupSize: 30,
    price: 75,
    features: ['Lunch', 'Drinks', 'Swimming Equipment'],
    description: 'Full day boat tour around Göcek islands',
    imageUrl: '/tours/12-islands.jpg'
  },
  {
    id: 10,
    name: 'Dalyan River Tour',
    location: 'Mugla',
    theme: 'Nature',
    activities: ['Boat Trip', 'Mud Bath', 'Beach Visit'],
    vehicles: ['River Boat'],
    startTime: '09:00',
    duration: 7,
    maxGroupSize: 20,
    price: 65,
    features: ['Lunch', 'Mud Bath Entry', 'Hotel Transfer'],
    description: 'Visit Dalyan River, mud baths and Iztuzu Beach',
    imageUrl: '/tours/dalyan-tour.jpg'
  },

  // TRABZON
  {
    id: 11,
    name: 'Uzungöl Nature Tour',
    location: 'Trabzon',
    theme: 'Nature',
    activities: ['Lake Visit', 'Mountain Views', 'Village Tour'],
    vehicles: ['Minibus'],
    startTime: '09:00',
    duration: 6,
    maxGroupSize: 15,
    price: 55,
    features: ['Professional Guide', 'Lunch', 'Tea Break'],
    description: 'Visit to beautiful Uzungöl lake and surrounding villages',
    imageUrl: '/tours/uzungol.jpg'
  },
  {
    id: 12,
    name: 'Sumela Monastery Tour',
    location: 'Trabzon',
    theme: 'Cultural',
    activities: ['Monastery Visit', 'Mountain Hiking'],
    vehicles: ['Minibus', 'Walking'],
    startTime: '08:30',
    duration: 7,
    maxGroupSize: 12,
    price: 70,
    features: ['Professional Guide', 'Entry Tickets', 'Lunch'],
    description: 'Visit to historic Sumela Monastery in the mountains',
    imageUrl: '/tours/sumela-tour.jpg'
  },

  // BURSA
  {
    id: 13,
    name: 'Uludağ Mountain Tour',
    location: 'Bursa',
    theme: 'Nature',
    activities: ['Cable Car', 'Mountain Activities', 'Photography'],
    vehicles: ['Cable Car', 'Minibus'],
    startTime: '09:00',
    duration: 8,
    maxGroupSize: 20,
    price: 80,
    features: ['Cable Car Tickets', 'Lunch', 'Professional Guide'],
    description: 'Full day tour to Uludağ Mountain with cable car ride',
    imageUrl: '/tours/uludag-tour.jpg'
  },
  {
    id: 14,
    name: 'Historical Bursa Tour',
    location: 'Bursa',
    theme: 'Cultural',
    activities: ['Mosque Visits', 'Market Tour', 'City Walking'],
    vehicles: ['Walking', 'Minibus'],
    startTime: '09:30',
    duration: 6,
    maxGroupSize: 15,
    price: 50,
    features: ['Professional Guide', 'Lunch', 'Entry Tickets'],
    description: 'Visit historical sites including Green Mosque and Grand Mosque',
    imageUrl: '/tours/bursa-historical.jpg'
  }
];

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  let filteredTours = [...tourData];
  const {
    location,
    theme,
    activities,
    vehicles,
    maxPrice,
    maxDuration,
    minGroupSize
  } = req.query;

  // Location Filter
  if (location) {
    filteredTours = filteredTours.filter(
      tour => tour.location.toLowerCase().includes(location.toLowerCase())
    );
  }

  // Theme Filter
  if (theme) {
    filteredTours = filteredTours.filter(
      tour => tour.theme === theme
    );
  }

  // Activities Filter
  if (activities) {
    const requestedActivities = activities.split(',');
    filteredTours = filteredTours.filter(tour =>
      requestedActivities.every(activity => tour.activities.includes(activity))
    );
  }

  // Vehicles Filter
  if (vehicles) {
    const requestedVehicles = vehicles.split(',');
    filteredTours = filteredTours.filter(tour =>
      requestedVehicles.every(vehicle => tour.vehicles.includes(vehicle))
    );
  }

  // Price Filter
  if (maxPrice) {
    filteredTours = filteredTours.filter(
      tour => tour.price <= parseInt(maxPrice)
    );
  }

  // Duration Filter
  if (maxDuration) {
    filteredTours = filteredTours.filter(
      tour => tour.duration <= parseInt(maxDuration)
    );
  }

  // Group Size Filter
  if (minGroupSize) {
    filteredTours = filteredTours.filter(
      tour => tour.maxGroupSize >= parseInt(minGroupSize)
    );
  }

  res.status(200).json({
    success: true,
    total: filteredTours.length,
    tours: filteredTours
  });
} 