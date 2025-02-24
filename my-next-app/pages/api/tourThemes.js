import { cities } from './cities';

const cityThemes = {
  'Adana': [
    { id: 'adn1', name: 'Gastronomi Turu' },
    { id: 'adn2', name: 'Seyhan Nehri Turu' },
    { id: 'adn3', name: 'Varda Köprüsü Turu' },
    { id: 'adn4', name: 'Merkez Parkı Turu' }
  ],
  'Adıyaman': [
    { id: 'ady1', name: 'Nemrut Dağı Turu' },
    { id: 'ady2', name: 'Perre Antik Kenti' },
    { id: 'ady3', name: 'Cendere Köprüsü' }
  ],
  'Afyonkarahisar': [
    { id: 'afn1', name: 'Termal Tesisler Turu' },
    { id: 'afn2', name: 'Frig Vadisi Turu' },
    { id: 'afn3', name: 'Afyon Kalesi Turu' }
  ],
  'Ağrı': [
    { id: 'agr1', name: 'Ağrı Dağı Turu' },
    { id: 'agr2', name: 'İshak Paşa Sarayı' },
    { id: 'agr3', name: 'Meteor Çukuru' }
  ],
  'Amasya': [
    { id: 'ams1', name: 'Kral Kaya Mezarları' },
    { id: 'ams2', name: 'Yalıboyu Evleri' },
    { id: 'ams3', name: 'Amasya Kalesi' }
  ],
  'Ankara': [
    { id: 'ank1', name: 'Anıtkabir Turu' },
    { id: 'ank2', name: 'Kale Turu' },
    { id: 'ank3', name: 'Müzeler Turu' },
    { id: 'ank4', name: 'Kızılay-Tunalı Turu' }
  ],
  'Antalya': [
    { id: 'ant1', name: 'Kaleiçi Turu' },
    { id: 'ant2', name: 'Plaj Turu' },
    { id: 'ant3', name: 'Antik Kentler Turu' },
    { id: 'ant4', name: 'Köprülü Kanyon' }
  ],
  'Artvin': [
    { id: 'art1', name: 'Karagöl Turu' },
    { id: 'art2', name: 'Borçka Karagöl' },
    { id: 'art3', name: 'Artvin Kalesi' }
  ],
  'Aydın': [
    { id: 'ayd1', name: 'Kuşadası Turu' },
    { id: 'ayd2', name: 'Didim Antik Kent' },
    { id: 'ayd3', name: 'Afrodisias Turu' }
  ],
  'Balıkesir': [
    { id: 'blk1', name: 'Cunda Adası Turu' },
    { id: 'blk2', name: 'Avşa Adası Turu' },
    { id: 'blk3', name: 'Kaz Dağları Turu' }
  ],
  'Bilecik': [
    { id: 'blc1', name: 'Osmanlı Kuruluş Turu' },
    { id: 'blc2', name: 'Şeyh Edebali Türbesi' },
    { id: 'blc3', name: 'Orhan Gazi Camii' }
  ],
  'Bingöl': [
    { id: 'bng1', name: 'Yüzen Ada Turu' },
    { id: 'bng2', name: 'Hesarek Dağı' },
    { id: 'bng3', name: 'Kös Kaplıcaları' }
  ],
  'Bitlis': [
    { id: 'btl1', name: 'Nemrut Krater Gölü' },
    { id: 'btl2', name: 'Bitlis Kalesi' },
    { id: 'btl3', name: 'El Aman Hanı' }
  ],
  'Bolu': [
    { id: 'blu1', name: 'Abant Gölü Turu' },
    { id: 'blu2', name: 'Gölcük Turu' },
    { id: 'blu3', name: 'Yedigöller Turu' }
  ],
  'Burdur': [
    { id: 'brd1', name: 'Salda Gölü Turu' },
    { id: 'brd2', name: 'Sagalassos Antik Kenti' },
    { id: 'brd3', name: 'İnsuyu Mağarası' }
  ],
  'Bursa': [
    { id: 'brs1', name: 'Uludağ Turu' },
    { id: 'brs2', name: 'Tarihi Çarşı Turu' },
    { id: 'brs3', name: 'Kaplıca Turu' },
    { id: 'brs4', name: 'Cumalıkızık Köyü' }
  ],
  'Çanakkale': [
    { id: 'cnk1', name: 'Gelibolu Tarihi Turu' },
    { id: 'cnk2', name: 'Troya Antik Kenti' },
    { id: 'cnk3', name: 'Bozcaada Turu' },
    { id: 'cnk4', name: 'Assos Turu' }
  ],
  'Çankırı': [
    { id: 'cnr1', name: 'Tuz Mağarası Turu' },
    { id: 'cnr2', name: 'Çankırı Kalesi' },
    { id: 'cnr3', name: 'Tarihi Çarşı' }
  ],
  'Çorum': [
    { id: 'crm1', name: 'Hattuşaş Turu' },
    { id: 'crm2', name: 'Alacahöyük Turu' },
    { id: 'crm3', name: 'İskilip Turu' }
  ],
  'Denizli': [
    { id: 'dnz1', name: 'Pamukkale Travertenleri' },
    { id: 'dnz2', name: 'Hierapolis Antik Kenti' },
    { id: 'dnz3', name: 'Laodikya Turu' }
  ],
  'Diyarbakır': [
    { id: 'dyb1', name: 'Surlar Turu' },
    { id: 'dyb2', name: 'On Gözlü Köprü' },
    { id: 'dyb3', name: 'Hevsel Bahçeleri' }
  ],
  'Edirne': [
    { id: 'edr1', name: 'Selimiye Camii Turu' },
    { id: 'edr2', name: 'Tarihi Çarşı Turu' },
    { id: 'edr3', name: 'Saraylar Turu' }
  ],
  'Elazığ': [
    { id: 'elz1', name: 'Harput Kalesi' },
    { id: 'elz2', name: 'Hazar Gölü Turu' },
    { id: 'elz3', name: 'Tarihi Harput' }
  ],
  'Erzincan': [
    { id: 'ezc1', name: 'Girlevik Şelalesi' },
    { id: 'ezc2', name: 'Kemaliye Turu' },
    { id: 'ezc3', name: 'Termal Tesisler' }
  ],
  'Erzurum': [
    { id: 'ezr1', name: 'Palandöken Turu' },
    { id: 'ezr2', name: 'Çifte Minareli Medrese' },
    { id: 'ezr3', name: 'Tortum Şelalesi' }
  ],
  'Eskişehir': [
    { id: 'esk1', name: 'Odunpazarı Turu' },
    { id: 'esk2', name: 'Porsuk Turu' },
    { id: 'esk3', name: 'Sazova Parkı' },
    { id: 'esk4', name: 'Müzeler Turu' }
  ],
  'Gaziantep': [
    { id: 'gzn1', name: 'Gastronomi Turu' },
    { id: 'gzn2', name: 'Zeugma Müzesi' },
    { id: 'gzn3', name: 'Kale ve Çarşı' },
    { id: 'gzn4', name: 'Bakırcılar Çarşısı' }
  ],
  'Giresun': [
    { id: 'grs1', name: 'Giresun Adası' },
    { id: 'grs2', name: 'Kümbet Yaylası' },
    { id: 'grs3', name: 'Giresun Kalesi' }
  ],
  'Gümüşhane': [
    { id: 'gmh1', name: 'Karaca Mağarası' },
    { id: 'gmh2', name: 'Tarihi Konaklar' },
    { id: 'gmh3', name: 'Santa Harabeleri' }
  ],
  'Hakkari': [
    { id: 'hkr1', name: 'Cilo Dağı Turu' },
    { id: 'hkr2', name: 'Zap Vadisi' },
    { id: 'hkr3', name: 'Meydan Medresesi' }
  ],
  'Hatay': [
    { id: 'hty1', name: 'Antakya Turu' },
    { id: 'hty2', name: 'St. Pierre Kilisesi' },
    { id: 'hty3', name: 'Mozaik Müzesi' }
  ],
  'Iğdır': [
    { id: 'igr1', name: 'Ağrı Dağı Manzarası' },
    { id: 'igr2', name: 'Tuzluca Tuz Mağaraları' },
    { id: 'igr3', name: 'Meteor Çukuru' }
  ],
  'Isparta': [
    { id: 'isp1', name: 'Gül Bahçeleri Turu' },
    { id: 'isp2', name: 'Eğirdir Gölü' },
    { id: 'isp3', name: 'Davraz Kayak Merkezi' }
  ],
  'Istanbul': [
    { id: 'ist1', name: 'Boğaz Turu' },
    { id: 'ist2', name: 'Tarihi Yarımada' },
    { id: 'ist3', name: 'Adalar Turu' },
    { id: 'ist4', name: 'Saraylar Turu' },
    { id: 'ist5', name: 'Alışveriş Turu' }
  ],
  'Izmir': [
    { id: 'izm1', name: 'Efes Antik Kenti' },
    { id: 'izm2', name: 'Kordon Turu' },
    { id: 'izm3', name: 'Çeşme-Alaçatı' },
    { id: 'izm4', name: 'Bergama Turu' }
  ],
  'Kahramanmaraş': [
    { id: 'kmr1', name: 'Tarihi Çarşı Turu' },
    { id: 'kmr2', name: 'Germenicia Antik Kenti' },
    { id: 'kmr3', name: 'Dondurma Tadım Turu' }
  ],
  'Karabük': [
    { id: 'krb1', name: 'Safranbolu Evleri' },
    { id: 'krb2', name: 'Kristal Teras' },
    { id: 'krb3', name: 'Yenice Ormanları' }
  ],
  'Karaman': [
    { id: 'kar1', name: 'Karaman Kalesi' },
    { id: 'kar2', name: 'Taşkale Köyü' },
    { id: 'kar3', name: 'Manazan Mağaraları' }
  ],
  'Kars': [
    { id: 'krs1', name: 'Ani Harabeleri' },
    { id: 'krs2', name: 'Kars Kalesi' },
    { id: 'krs3', name: 'Baltık Mimarisi Turu' }
  ],
  'Kastamonu': [
    { id: 'kst1', name: 'Ilgaz Dağı Turu' },
    { id: 'kst2', name: 'Tarihi Konaklar' },
    { id: 'kst3', name: 'Kastamonu Kalesi' }
  ],
  'Kayseri': [
    { id: 'kys1', name: 'Erciyes Dağı Turu' },
    { id: 'kys2', name: 'Tarihi Çarşı' },
    { id: 'kys3', name: 'Sultan Sazlığı' }
  ],
  'Kırıkkale': [
    { id: 'krk1', name: 'Çeşnigir Köprüsü' },
    { id: 'krk2', name: 'Hasandede Türbesi' },
    { id: 'krk3', name: 'Tarihi Çarşı' }
  ],
  'Kırklareli': [
    { id: 'krl1', name: 'Dupnisa Mağarası' },
    { id: 'krl2', name: 'İğneada Longoz' },
    { id: 'krl3', name: 'Demirköy Kalesi' }
  ],
  'Kırşehir': [
    { id: 'krs1', name: 'Cacabey Medresesi' },
    { id: 'krs2', name: 'Ahi Evran Külliyesi' },
    { id: 'krs3', name: 'Seyfe Gölü' }
  ],
  'Kilis': [
    { id: 'kls1', name: 'Tarihi Çarşı' },
    { id: 'kls2', name: 'Ravanda Kalesi' },
    { id: 'kls3', name: 'Zeytinyağı Fabrikaları' }
  ],
  'Kocaeli': [
    { id: 'koc1', name: 'Tarihi Saat Kulesi' },
    { id: 'koc2', name: 'Kartepe Kayak' },
    { id: 'koc3', name: 'Maşukiye Turu' }
  ],
  'Konya': [
    { id: 'kny1', name: 'Mevlana Müzesi' },
    { id: 'kny2', name: 'Sema Gösterisi' },
    { id: 'kny3', name: 'Çatalhöyük' },
    { id: 'kny4', name: 'Selçuklu Eserleri' }
  ],
  'Kütahya': [
    { id: 'kut1', name: 'Çini Atölyeleri' },
    { id: 'kut2', name: 'Aizanoi Antik Kenti' },
    { id: 'kut3', name: 'Kütahya Kalesi' }
  ],
  'Malatya': [
    { id: 'mlt1', name: 'Aslantepe Höyüğü' },
    { id: 'mlt2', name: 'Kayısı Bahçeleri' },
    { id: 'mlt3', name: 'Battalgazi Turu' }
  ],
  'Manisa': [
    { id: 'mns1', name: 'Spil Dağı Turu' },
    { id: 'mns2', name: 'Sardes Antik Kenti' },
    { id: 'mns3', name: 'Kula Peribacaları' }
  ],
  'Mardin': [
    { id: 'mrd1', name: 'Eski Mardin Turu' },
    { id: 'mrd2', name: 'Deyrulzafaran Manastırı' },
    { id: 'mrd3', name: 'Kasımiye Medresesi' },
    { id: 'mrd4', name: 'Midyat Konakları' }
  ],
  'Mersin': [
    { id: 'mrs1', name: 'Kızkalesi Turu' },
    { id: 'mrs2', name: 'Cennet Cehennem' },
    { id: 'mrs3', name: 'Tarsus Antik Kent' }
  ],
  'Muğla': [
    { id: 'mgl1', name: 'Fethiye Tekne Turu' },
    { id: 'mgl2', name: 'Bodrum Kalesi' },
    { id: 'mgl3', name: 'Ölüdeniz Plajı' },
    { id: 'mgl4', name: 'Marmaris Turu' }
  ],
  'Muş': [
    { id: 'mus1', name: 'Muş Ovası Turu' },
    { id: 'mus2', name: 'Malazgirt Ovası' },
    { id: 'mus3', name: 'Varto Kaplıcaları' }
  ],
  'Nevşehir': [
    { id: 'nvs1', name: 'Balon Turu' },
    { id: 'nvs2', name: 'Yeraltı Şehirleri' },
    { id: 'nvs3', name: 'Peri Bacaları' },
    { id: 'nvs4', name: 'Göreme Açık Hava' }
  ],
  'Niğde': [
    { id: 'nig1', name: 'Aladağlar Turu' },
    { id: 'nig2', name: 'Gümüşler Manastırı' },
    { id: 'nig3', name: 'Niğde Kalesi' }
  ],
  'Ordu': [
    { id: 'ord1', name: 'Boztepe Turu' },
    { id: 'ord2', name: 'Yason Burnu' },
    { id: 'ord3', name: 'Perşembe Yaylası' }
  ],
  'Osmaniye': [
    { id: 'osm1', name: 'Karatepe Milli Parkı' },
    { id: 'osm2', name: 'Kastabala Antik Kenti' },
    { id: 'osm3', name: 'Zorkun Yaylası' }
  ],
  'Rize': [
    { id: 'rze1', name: 'Ayder Yaylası' },
    { id: 'rze2', name: 'Çay Bahçeleri' },
    { id: 'rze3', name: 'Kaçkar Dağları' },
    { id: 'rze4', name: 'Fırtına Vadisi' }
  ],
  'Sakarya': [
    { id: 'skr1', name: 'Sapanca Gölü' },
    { id: 'skr2', name: 'Karasu Plajı' },
    { id: 'skr3', name: 'Taraklı Evleri' }
  ],
  'Samsun': [
    { id: 'sms1', name: 'Bandırma Vapuru' },
    { id: 'sms2', name: 'Amazon Köyü' },
    { id: 'sms3', name: 'Amisos Tepesi' }
  ],
  'Siirt': [
    { id: 'srt1', name: 'Tillo Kalesi' },
    { id: 'srt2', name: 'Veysel Karani Türbesi' },
    { id: 'srt3', name: 'Botan Vadisi' }
  ],
  'Sinop': [
    { id: 'snp1', name: 'Sinop Kalesi' },
    { id: 'snp2', name: 'Tarihi Cezaevi' },
    { id: 'snp3', name: 'Hamsilos Koyu' }
  ],
  'Sivas': [
    { id: 'svs1', name: 'Divriği Ulu Cami' },
    { id: 'svs2', name: 'Gök Medrese' },
    { id: 'svs3', name: 'Kangal Balıklı Çermik' }
  ],
  'Şanlıurfa': [
    { id: 'urf1', name: 'Göbeklitepe Turu' },
    { id: 'urf2', name: 'Balıklıgöl' },
    { id: 'urf3', name: 'Harran Evleri' },
    { id: 'urf4', name: 'Hz. İbrahim Rotası' }
  ],
  'Şırnak': [
    { id: 'srn1', name: 'Cudi Dağı' },
    { id: 'srn2', name: 'Mem u Zin Türbesi' },
    { id: 'srn3', name: 'Finik Antik Kenti' }
  ],
  'Tekirdağ': [
    { id: 'tkr1', name: 'Rakoczi Müzesi' },
    { id: 'tkr2', name: 'Şarköy Bağları' },
    { id: 'tkr3', name: 'Kumbağ Plajları' }
  ],
  'Tokat': [
    { id: 'tkt1', name: 'Tokat Kalesi' },
    { id: 'tkt2', name: 'Ballıca Mağarası' },
    { id: 'tkt3', name: 'Tarihi Konaklar' }
  ],
  'Trabzon': [
    { id: 'trb1', name: 'Sümela Manastırı' },
    { id: 'trb2', name: 'Uzungöl Turu' },
    { id: 'trb3', name: 'Ayasofya Camii' },
    { id: 'trb4', name: 'Zigana Geçidi' }
  ],
  'Tunceli': [
    { id: 'tnc1', name: 'Munzur Vadisi' },
    { id: 'tnc2', name: 'Peri Suyu' },
    { id: 'tnc3', name: 'Halvori Gözeleri' }
  ],
  'Uşak': [
    { id: 'usk1', name: 'Blaundus Antik Kenti' },
    { id: 'usk2', name: 'Ulubey Kanyonu' },
    { id: 'usk3', name: 'Tarihi Evler' }
  ],
  'Van': [
    { id: 'van1', name: 'Van Kalesi' },
    { id: 'van2', name: 'Akdamar Adası' },
    { id: 'van3', name: 'Van Gölü Turu' },
    { id: 'van4', name: 'Van Kedisi Evi' }
  ],
  'Yalova': [
    { id: 'ylv1', name: 'Termal Kaplıcalar' },
    { id: 'ylv2', name: 'Yürüyen Köşk' },
    { id: 'ylv3', name: 'Sudüşen Şelalesi' }
  ],
  'Yozgat': [
    { id: 'yzg1', name: 'Çamlık Milli Parkı' },
    { id: 'yzg2', name: 'Kazankaya Kanyonu' },
    { id: 'yzg3', name: 'Basilica Therma' }
  ],
  'Zonguldak': [
    { id: 'zng1', name: 'Maden Müzesi' },
    { id: 'zng2', name: 'Gökgöl Mağarası' },
    { id: 'zng3', name: 'Kapuz Plajı' }
  ],
  'default': [
    { id: 'def1', name: 'Şehir Merkezi Turu' },
    { id: 'def2', name: 'Kültür ve Tarih Turu' },
    { id: 'def3', name: 'Doğa ve Fotoğraf Turu' },
    { id: 'def4', name: 'Yerel Lezzetler Turu' }
  ]
};

export default function handler(req, res) {
  const { location } = req.query;

  if (!location) {
    return res.status(400).json({ message: "Location is required" });
  }

  // Şehir adını büyük harfle başlatıp geri kalanını küçük harf yapma
  const formattedLocation = location.charAt(0).toUpperCase() + location.slice(1).toLowerCase();

  // Şehir için özel temalar varsa onları, yoksa varsayılan temaları döndür
  const themes = cityThemes[formattedLocation] || cityThemes['default'];

  res.status(200).json(themes);
} 