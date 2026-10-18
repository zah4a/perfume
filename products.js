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
   desc:"", notes:[], img:"images/jean-lowe-fantasme.jpg", imgs:[], tag:"", featured:false, stock:true}
  // ✂ JEAN LOWE FANTASME (Maison Alhambra) — END

];
