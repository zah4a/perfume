/* ═══════════════════════════════════════════════════════════════
   ZAHA — لیستا عطران  (تەنها ئەڤ فایلە دەستکاری بکە)
   ═══════════════════════════════════════════════════════════════

   بۆ زێدەکرنا عطرەکێ: یەک بلۆکا {...} کۆپی بکە، و ڤان خانەیان بگۆڕە.
   ئاگاداربە: پشتی هەر بلۆکەکێ کۆما (,) هەبیت، ژبلی یا دوماهیێ.

     cat      = بەش:  "men" (پیاوان)  یان  "women" (ئافرەتان)
     name     = ناڤێ عطری
     brand    = براند (دشێی بهێلی بەتال: "")
     size     = قەبارە، وەک "100ml"
     price    = نرخ، وەک "45,000 IQD"  (ئەگەر بەتال بیت: «نرخ ب پەیوەندیێ»)
     desc     = وەسفا عطری، دشێی درێژ بیت
     notes    = بۆنێن سەرەکی، وەک ["Oud","Vanilla","Musk"]  (دشێی بەتال بهێلی: [])
     img      = وێنەیا سەرەکی، وەک "images/sauvage.jpg"
     imgs     = وێنەیێن زێدە (ئارەزوومەندانە)، وەک ["images/sauvage-2.jpg"]
     tag      = نیشانەیەکا بچووک، وەک "New" یان "Best seller" (دشێی بەتال بیت: "")
     featured = true  ←  دێ د بەشا «هەلبژارتیێن مە» دا ل پەڕا سەرەکی دیار بیت  (یان false)
     stock    = true  ←  بەردەستە
                false ←  عطر دێ قفل بیت و بنڤیسیت «تەمام بوو»، و کەس نەشێت داخواز بکەت

   عطرەکێ بسڕمەوە؟ هەمان بلۆک بسڕەوە.
   وێنەیان بخە د ناڤ فۆڵدەرێ images دا (ناڤێ وێنەی بێ ڤالا و بێ جهێ بیت).
   ═══════════════════════════════════════════════════════════════ */

const WHATSAPP = "9647509316163";

const PRICE = "30,000 IQD";
const PRICE2 = "45,000 IQD";
const PRICE3 = "25,000 IQD";
const PRICE4 = "35,000 IQD";
const PRICE5 = "40,000 IQD";
const PRICE6 = "42,000 IQD";
const PRICE7 = "32,000 IQD";
const PRICE8 = "37,000 IQD";
const PRICE9 = "38,000 IQD";
const PRICE10 = "43,000 IQD";
const PRICE11 = "55,000 IQD";
const PRICE12 = "57,000 IQD";
const PRICE13 = "70,000 IQD";
const PRICE14 = "65,000 IQD";
const PRICE15 = "67,000 IQD";
const PRICE16 = "62,000 IQD";
const PRICE17 = "34,000 IQD";
const PRICE18 = "80,000 IQD";
const PRICE19 = "120,000 IQD";

/* هەر عطرەک ب ناڤێ خۆ ل ژێر سەرنڤیسەکێ دیارە.
   بۆ سڕینا عطرەکێ: ژ خەتا «// ✂ ... START» هەتا «// ✂ ... END» هەمووی بسڕەوە،
   پاشان وێنەیا وی ژی ژ فۆڵدەرێ images بسڕەوە. */

const PRODUCTS = [

  /* ═══════════════ MEN | پیاوان ═══════════════ */

  // ✂ SECRET (Ozareej) — START
  {cat:"men", name:"Secret", brand:"Ozareej", size:"", price:PRICE,
   desc:"", notes:[], img:"images/secret-ozareej.jpg", imgs:[], tag:"", featured:true, stock:true},
  // ✂ SECRET (Ozareej) — END

  // ✂ MAJESTIC (MPF) — START
  {cat:"men", name:"Majestic", brand:"MPF", size:"100ml", price:PRICE,
   desc:"", notes:[], img:"images/majestic-mpf.jpg", imgs:[], tag:"", featured:true, stock:true},
  // ✂ MAJESTIC (MPF) — END

  // ✂ INVICTO VICTORIOUS ELIXIR (Fragrance World) — START
  {cat:"men", name:"Invicto Victorious Elixir", brand:"Fragrance World", size:"100ml", price:PRICE,
   desc:"", notes:[], img:"images/invicto-victorious-elixir.jpg", imgs:[], tag:"", featured:true, stock:true},
  // ✂ INVICTO VICTORIOUS ELIXIR (Fragrance World) — END

  // ✂ GRANDEUR (Fragrance World) — START
  {cat:"men", name:"Grandeur", brand:"Fragrance World", size:"80ml", price:PRICE,
   desc:"", notes:[], img:"images/grandeur-fragrance-world.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ GRANDEUR (Fragrance World) — END

  // ✂ MALIK AL RIMAL FIRE (Rimal Al Khaleej) — START
  {cat:"men", name:"Malik Al Rimal Fire | ملك الرمال", brand:"Rimal Al Khaleej", size:"100ml", price:PRICE2,
   desc:"", notes:[], img:"images/malik-al-rimal-fire.jpg", imgs:[], tag:"", featured:true, stock:true},
  // ✂ MALIK AL RIMAL FIRE (Rimal Al Khaleej) — END

  // ✂ MALIK AL RIMAL IMPERIAL (Rimal Al Khaleej) — START
  {cat:"men", name:"Malik Al Rimal Imperial | ملك الرمال", brand:"Rimal Al Khaleej", size:"100ml", price:PRICE2,
   desc:"", notes:[], img:"images/malik-al-rimal-imperial.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ MALIK AL RIMAL IMPERIAL (Rimal Al Khaleej) — END

  // ✂ MALIK AL RIMAL NOIR (Rimal Al Khaleej) — START
  {cat:"men", name:"Malik Al Rimal Noir | ملك الرمال", brand:"Rimal Al Khaleej", size:"100ml", price:PRICE2,
   desc:"", notes:[], img:"images/malik-al-rimal-noir.jpg", imgs:[], tag:"", featured:true, stock:true},
  // ✂ MALIK AL RIMAL NOIR (Rimal Al Khaleej) — END

  // ✂ AJWAD (Lattafa) — START
  {cat:"men", name:"Ajwad | أجود", brand:"Lattafa", size:"60ml", price:PRICE2,
   desc:"", notes:[], img:"images/ajwad-lattafa.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ AJWAD (Lattafa) — END

  // ✂ EMBELLISH — START
  {cat:"men", name:"Embellish", brand:"", size:"", price:PRICE2,
   desc:"", notes:[], img:"images/embellish.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ EMBELLISH — END


  /* ═══════════════ WOMEN | ئافرەتان ═══════════════ */

  // ✂ TOHFA — تحفة — START
  {cat:"women", name:"Tohfa | تحفة", brand:"", size:"120ml", price:PRICE,
   desc:"Comes with a free mini deo.", notes:[], img:"images/tohfa.jpg", imgs:[], tag:"Free deo", featured:true, stock:true},
  // ✂ TOHFA — تحفة — END

  // ✂ LADIES TALKS — نواعم (Ozareej) — START
  {cat:"women", name:"Ladies Talks Intense | نواعم", brand:"Ozareej", size:"100ml", price:PRICE,
   desc:"", notes:[], img:"images/ladies-talks-ozareej.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ LADIES TALKS — نواعم (Ozareej) — END

  // ✂ MELINA (For Women) — START
  {cat:"women", name:"Melina", brand:"", size:"80ml", price:PRICE,
   desc:"", notes:[], img:"images/melina.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ MELINA (For Women) — END

  // ✂ MANGO TOUCH (Dar Al-Misk) — START
  {cat:"women", name:"Mango Touch", brand:"Dar Al-Misk", size:"100ml", price:PRICE2,
   desc:"", notes:["Mango"], img:"images/mango-touch.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ MANGO TOUCH (Dar Al-Misk) — END

  // ✂ YARA (Lattafa) — START
  {cat:"women", name:"Yara | يارا", brand:"Lattafa", size:"100ml", price:PRICE2,
   desc:"", notes:[], img:"images/yara-lattafa.jpg", imgs:[], tag:"", featured:true, stock:true},
  // ✂ YARA (Lattafa) — END

  // ✂ FATIMA (Zimaya) — START
  {cat:"women", name:"Fatima | فاطمة", brand:"Zimaya", size:"100ml", price:PRICE2,
   desc:"", notes:[], img:"images/fatima-zimaya.jpg", imgs:[], tag:"", featured:true, stock:true},
  // ✂ FATIMA (Zimaya) — END

  // ✂ MALIKAT AL RIMAL MAJESTY (Rimal Al Khaleej) — START
  {cat:"women", name:"Malikat Al Rimal Majesty | ملكة الرمال", brand:"Rimal Al Khaleej", size:"100ml", price:PRICE2,
   desc:"", notes:[], img:"images/malikat-al-rimal-majesty.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ MALIKAT AL RIMAL MAJESTY (Rimal Al Khaleej) — END

  // ✂ LAMSAT HARIR (Arabiyat) — START
  {cat:"women", name:"Lamsat Harir | لمسة حرير", brand:"Arabiyat", size:"100ml", price:PRICE3,
   desc:"Comes with a free deodorant.", notes:[], img:"images/lamsat-harir.jpg", imgs:[], tag:"Free deo", featured:false, stock:true},
  // ✂ LAMSAT HARIR (Arabiyat) — END

  // ✂ AL FARIS (Arabiyat) — START
  {cat:"men", name:"Al Faris | الفارس", brand:"Arabiyat", size:"100ml", price:PRICE3,
   desc:"Comes with a free deodorant.", notes:[], img:"images/al-faris.jpg", imgs:[], tag:"Free deo", featured:false, stock:true},
  // ✂ AL FARIS (Arabiyat) — END

  // ✂ OUD AL LAYL — START
  {cat:"men", name:"Oud Al Layl | عود الليل", brand:"", size:"100ml", price:PRICE3,
   desc:"Comes with a free deodorant.", notes:["Oud"], img:"images/oud-al-layl.jpg", imgs:[], tag:"Free deo", featured:false, stock:true},
  // ✂ OUD AL LAYL — END

  // ✂ AVANTI (Mesk Al Abeer) — START
  {cat:"women", name:"Avanti", brand:"Mesk Al Abeer", size:"100ml", price:PRICE4,
   desc:"", notes:[], img:"images/avanti.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ AVANTI (Mesk Al Abeer) — END

  // ✂ EUROPA (MPF) — START
  {cat:"women", name:"Europa", brand:"MPF", size:"100ml", price:PRICE4,
   desc:"", notes:[], img:"images/europa.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ EUROPA (MPF) — END

  // ✂ ROSE VANLINE (Dar Al-Misk) — START
  {cat:"women", name:"Rose Vanline", brand:"Dar Al-Misk", size:"100ml", price:PRICE4,
   desc:"", notes:[], img:"images/rose-vanline.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ ROSE VANLINE (Dar Al-Misk) — END

  // ✂ ONLY PURPLE — START
  {cat:"women", name:"Only Purple", brand:"", size:"100ml", price:PRICE4,
   desc:"", notes:[], img:"images/only-purple.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ ONLY PURPLE — END

  // ✂ ONLY PINK — START
  {cat:"women", name:"Only Pink", brand:"", size:"100ml", price:PRICE4,
   desc:"", notes:[], img:"images/only-pink.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ ONLY PINK — END

  // ✂ NOW (Rave) — START
  {cat:"men", name:"Now", brand:"Rave", size:"", price:PRICE4,
   desc:"", notes:[], img:"images/now-rave.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ NOW (Rave) — END

  // ✂ AQUA PURA — START
  {cat:"men", name:"Aqua Pura", brand:"", size:"70ml", price:PRICE4,
   desc:"", notes:[], img:"images/aqua-pura.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ AQUA PURA — END

  // ✂ ROOH DUBAI (Mesk Al Abeer) — START
  {cat:"men", name:"Rooh Dubai | روح دبي", brand:"Mesk Al Abeer", size:"", price:PRICE5,
   desc:"", notes:[], img:"images/rooh-dubai.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ ROOH DUBAI (Mesk Al Abeer) — END

  // ✂ ROSE PARIS (Rimal Al Khaleej) — START
  {cat:"women", name:"Rose Paris | روز باريس", brand:"Rimal Al Khaleej", size:"100ml", price:PRICE5,
   desc:"", notes:["Rose"], img:"images/rose-paris.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ ROSE PARIS (Rimal Al Khaleej) — END

  // ✂ LAIL MALAKI INTENSE — START
  {cat:"men", name:"Lail Malaki Intense | ليل ملكي", brand:"", size:"100ml", price:PRICE5,
   desc:"", notes:[], img:"images/lail-malaki-intense.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ LAIL MALAKI INTENSE — END

  // ✂ VICTORIA VELVET BLACK (Mesk Al Khaleej) — START
  {cat:"women", name:"Victoria Velvet Black | فيكتوريا", brand:"Mesk Al Khaleej", size:"100ml", price:PRICE5,
   desc:"", notes:[], img:"images/victoria-velvet-black.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ VICTORIA VELVET BLACK (Mesk Al Khaleej) — END

  // ✂ JEAN LOWE VERDE AURA (Maison Alhambra) — START
  {cat:"men", name:"Jean Lowe Verde Aura", brand:"Maison Alhambra", size:"100ml", price:PRICE6,
   desc:"", notes:[], img:"images/jean-lowe-verde-aura.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ JEAN LOWE VERDE AURA (Maison Alhambra) — END

  // ✂ JEAN LOWE SUMMER VIBES (Maison Alhambra) — START
  {cat:"men", name:"Jean Lowe Summer Vibes", brand:"Maison Alhambra", size:"100ml", price:PRICE6,
   desc:"", notes:[], img:"images/jean-lowe-summer-vibes.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ JEAN LOWE SUMMER VIBES (Maison Alhambra) — END

  // ✂ JEAN LOWE FANTASME (Maison Alhambra) — START
  {cat:"men", name:"Jean Lowe Fantasme", brand:"Maison Alhambra", size:"100ml", price:PRICE6,
   desc:"", notes:[], img:"images/jean-lowe-fantasme.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ JEAN LOWE FANTASME (Maison Alhambra) — END

  // ✂ NOW WOMEN (Rave) — START
  {cat:"women", name:"Now Women", brand:"Rave", size:"", price:PRICE,
   desc:"", notes:[], img:"images/now-women-rave.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ NOW WOMEN (Rave) — END

  // ✂ CANARI VANILLA CANDY (Shams Perfumes) — START
  {cat:"women", name:"Canari Vanilla Candy", brand:"Shams Perfumes", size:"100ml", price:PRICE7,
   desc:"", notes:["Vanilla"], img:"images/canari-vanilla-candy.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ CANARI VANILLA CANDY (Shams Perfumes) — END

  // ✂ CANARI MARSHMALLOW (Shams Perfumes) — START
  {cat:"women", name:"Canari Marshmallow", brand:"Shams Perfumes", size:"100ml", price:PRICE7,
   desc:"", notes:[], img:"images/canari-marshmallow.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ CANARI MARSHMALLOW (Shams Perfumes) — END

  // ✂ VULCAN BAIE (French Avenue) — START
  {cat:"women", name:"Vulcan Baie", brand:"French Avenue", size:"", price:PRICE8,
   desc:"", notes:[], img:"images/vulcan-baie.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ VULCAN BAIE (French Avenue) — END

  // ✂ AYLUL FOR HER — START
  {cat:"women", name:"Aylul For Her", brand:"", size:"90ml", price:PRICE8,
   desc:"", notes:[], img:"images/aylul-for-her.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ AYLUL FOR HER — END

  // ✂ ANA ABIYEDH (Lattafa) — START
  {cat:"women", name:"Ana Abiyedh | أنا الأبيض", brand:"Lattafa", size:"60ml", price:PRICE9,
   desc:"", notes:[], img:"images/ana-abiyedh.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ ANA ABIYEDH (Lattafa) — END

  // ✂ MAYAR (Lattafa) — START
  {cat:"women", name:"Mayar | ميار", brand:"Lattafa", size:"", price:PRICE10,
   desc:"", notes:[], img:"images/mayar-lattafa.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ MAYAR (Lattafa) — END

  // ✂ AMBER D'OR (French Avenue) — START
  {cat:"women", name:"Amber D'or", brand:"French Avenue", size:"100ml", price:PRICE11,
   desc:"", notes:["Amber"], img:"images/amber-dor.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ AMBER D'OR (French Avenue) — END

  // ✂ HAWAS ICE (Rasasi) — START
  {cat:"men", name:"Hawas Ice | هوس", brand:"Rasasi", size:"100ml", price:PRICE11,
   desc:"", notes:[], img:"images/hawas-ice.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ HAWAS ICE (Rasasi) — END

  // ✂ MARMARA (French Avenue) — START
  {cat:"men", name:"Marmara", brand:"French Avenue", size:"", price:PRICE11,
   desc:"", notes:[], img:"images/marmara.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ MARMARA (French Avenue) — END

  // ✂ HAWAS BLACK (Rasasi) — START
  {cat:"men", name:"Hawas Black | هوس", brand:"Rasasi", size:"100ml", price:PRICE12,
   desc:"", notes:[], img:"images/hawas-black.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ HAWAS BLACK (Rasasi) — END

  // ✂ BONAPARTE (Collection Prestige) — START
  {cat:"men", name:"Bonaparte", brand:"Collection Prestige", size:"50ml", price:PRICE13,
   desc:"", notes:[], img:"images/bonaparte.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ BONAPARTE (Collection Prestige) — END

  // ✂ MEGARA (Maison Alhambra) — START
  {cat:"men", name:"Megara", brand:"Maison Alhambra", size:"50ml", price:PRICE14,
   desc:"", notes:[], img:"images/megara.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ MEGARA (Maison Alhambra) — END

  // ✂ CLUB DE NUIT MALEKA (Armaf) — START
  {cat:"women", name:"Club de Nuit Maleka", brand:"Armaf", size:"105ml", price:PRICE14,
   desc:"", notes:[], img:"images/club-de-nuit-maleka.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ CLUB DE NUIT MALEKA (Armaf) — END

  // ✂ KHAMRAH QAHWA (Lattafa) — START
  {cat:"men", name:"Khamrah Qahwa | خمرة قهوة", brand:"Lattafa", size:"", price:PRICE2,
   desc:"", notes:["Coffee"], img:"images/khamrah-qahwa.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ KHAMRAH QAHWA (Lattafa) — END

  // ✂ KHAMRAH (Lattafa) — START
  {cat:"men", name:"Khamrah | خمرة", brand:"Lattafa", size:"", price:PRICE2,
   desc:"", notes:[], img:"images/khamrah.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ KHAMRAH (Lattafa) — END

  // ✂ 9PM REBEL (Afnan) — START
  {cat:"men", name:"9 PM Rebel", brand:"Afnan", size:"100ml", price:PRICE2,
   desc:"", notes:[], img:"images/9pm-rebel.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ 9PM REBEL (Afnan) — END

  // ✂ CLUB DE NUIT URBAN MAN ELIXIR (Armaf) — START
  {cat:"men", name:"Club de Nuit Urban Man Elixir", brand:"Armaf", size:"105ml", price:PRICE15,
   desc:"", notes:[], img:"images/club-de-nuit-urban-man-elixir.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ CLUB DE NUIT URBAN MAN ELIXIR (Armaf) — END

  // ✂ CLUB DE NUIT INTENSE MAN (Armaf) — START
  {cat:"men", name:"Club de Nuit Intense Man", brand:"Armaf", size:"105ml", price:PRICE16,
   desc:"", notes:[], img:"images/club-de-nuit-intense-man.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ CLUB DE NUIT INTENSE MAN (Armaf) — END

  // ✂ PHILOS PURA (Maison Alhambra) — START
  {cat:"women", name:"Philos Pura", brand:"Maison Alhambra", size:"100ml", price:PRICE17,
   desc:"", notes:[], img:"images/philos-pura.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ PHILOS PURA (Maison Alhambra) — END

  // ✂ RAYHAAN OBSIDIAN — START
  {cat:"men", name:"Rayhaan Obsidian", brand:"Rayhaan", size:"", price:PRICE5,
   desc:"", notes:[], img:"images/rayhaan-obsidian.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ RAYHAAN OBSIDIAN — END

  // ✂ RAYHAAN TERRA — START
  {cat:"men", name:"Rayhaan Terra", brand:"Rayhaan", size:"", price:PRICE5,
   desc:"", notes:[], img:"images/rayhaan-terra.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ RAYHAAN TERRA — END

  // ✂ RAYHAAN LION — START
  {cat:"men", name:"Rayhaan Lion", brand:"Rayhaan", size:"100ml", price:PRICE5,
   desc:"", notes:[], img:"images/rayhaan-lion.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ RAYHAAN LION — END

  // ✂ RAYHAAN ELIXIR — START
  {cat:"men", name:"Rayhaan Elixir", brand:"Rayhaan", size:"", price:PRICE5,
   desc:"", notes:[], img:"images/rayhaan-elixir.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ RAYHAAN ELIXIR — END

  // ✂ RAYHAAN PRETTY IN PINK — START
  {cat:"women", name:"Rayhaan Pretty in Pink", brand:"Rayhaan", size:"", price:PRICE5,
   desc:"", notes:[], img:"images/rayhaan-pretty-in-pink.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ RAYHAAN PRETTY IN PINK — END

  // ✂ HERSH 55° — START
  {cat:"men", name:"Hersh 55°", brand:"Hersh", size:"100ml", price:PRICE18,
   desc:"", notes:[], img:"images/hersh-55.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ HERSH 55° — END

  // ✂ HERSH LAHAB — START
  {cat:"men", name:"Hersh Lahab | لهب", brand:"Hersh", size:"100ml", price:PRICE18,
   desc:"", notes:[], img:"images/hersh-lahab.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ HERSH LAHAB — END

  // ✂ HERSH MEHWAR — START
  {cat:"women", name:"Hersh Mehwar | محور", brand:"Hersh", size:"100ml", price:PRICE18,
   desc:"", notes:[], img:"images/hersh-mehwar.jpg", imgs:[], tag:"", featured:false, stock:true},
  // ✂ HERSH MEHWAR — END

  // ✂ ROSES VANILLE (Mancera) — START
  {cat:"women", name:"Roses Vanille", brand:"Mancera", size:"120ml", price:PRICE19,
   desc:"", notes:["Rose","Vanilla"], img:"images/roses-vanille-mancera.jpg", imgs:[], tag:"", featured:false, stock:true}
  // ✂ ROSES VANILLE (Mancera) — END

];
