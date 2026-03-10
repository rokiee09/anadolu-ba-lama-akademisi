export const academy = {
  name: "Anadolu Baglama Akademisi",
  tagline: "Anadolu'nun sesini modern bir egitim deneyimiyle bulusturuyoruz.",
  heroTitle: "Baglama egitimiyle Anadolu'nun ezgilerine yolculuk.",
  heroDescription:
    "Baglamanin ustalari burada yetisir. Anadolu kulturu, modern egitim tasarimi ve muzik odakli dijital deneyimi tek bir akademi platformunda bulusturuyoruz.",
  heroHighlights: [
    "Yuz yuze ve online hibrit egitim",
    "Canli repertuvar ve turku odakli program",
    "Deneme dersi ve seviye analizi ile dogru baslangic",
  ],
  stats: [
    { value: "200+", label: "Yetisen ogrenci" },
    { value: "20 yil", label: "Baglama egitimi deneyimi" },
    { value: "48 ders", label: "Hazir online video modulu" },
    { value: "4.9/5", label: "Ogrenci memnuniyeti" },
  ],
};

export const homeSections = {
  features: [
    "Ucretsiz deneme dersi ile ilk temasi riske atmadan kurun.",
    "Online ve yuz yuze egitimi ayni marka altinda sunun.",
    "Blog ve YouTube icerikleriyle Google trafigi toplayin.",
    "Ogrenci portali ile video, PDF ve odev akisini yonetin.",
  ],
  pillars: [
    ["Saz Kursu", "Baslangic, orta ve ileri seviyeler icin net program akisi."],
    ["Online Dersler", "Vimeo ya da benzeri video altyapisina uygun modul yapisi."],
    ["SEO ve Icerik", "Blog + YouTube entegrasyonu ile organik ogrenci cekme modeli."],
    ["Donusum", "WhatsApp, form ve deneme dersi CTA'lariyla basvuru toplama."],
  ],
};

export const designAccents = [
  "Ustalik",
  "Gelenek",
  "Sanat",
  "Muzik",
] as const;

export const courseLevels = [
  {
    slug: "baslangic",
    title: "Baslangic Seviyesi",
    subtitle: "Sazi ilk kez eline alan ogrenciler icin dogru temel atilir.",
    duration: "8 hafta",
    lessonFormat: "Haftada 2 ders",
    price: "2.900 TL / ay",
    items: ["Saz tutusu", "Temel ritimler", "Basit turkuler", "Nota okuma"],
  },
  {
    slug: "orta-seviye",
    title: "Orta Seviye",
    subtitle: "Ritim duygusu gelisen ogrenciler repertuvar ve teknik kazanir.",
    duration: "10 hafta",
    lessonFormat: "Haftada 2 ders",
    price: "3.600 TL / ay",
    items: ["Akor gecisleri", "Usul calismalari", "Sag-sol el koordinasyonu", "Canli eser analizi"],
  },
  {
    slug: "ileri-seviye",
    title: "Ileri Seviye",
    subtitle: "Sahneye, kayda ve profesyonel yoruma hazirlik yapilir.",
    duration: "12 hafta",
    lessonFormat: "Haftada 2 ders + atolyeler",
    price: "4.800 TL / ay",
    items: ["Ileri tezene", "Solo yorum", "Performans repertuvari", "Kayit hazirligi"],
  },
] as const;

export const weeklySchedule = [
  { day: "Pazartesi", group: "Baslangic grubu", time: "19:00 - 20:30", mode: "Studyo" },
  { day: "Carsamba", group: "Orta seviye", time: "19:30 - 21:00", mode: "Studyo" },
  { day: "Cumartesi", group: "Cocuklar programi", time: "13:00 - 14:30", mode: "Studyo" },
  { day: "Pazar", group: "Online toplu ders", time: "20:00 - 21:15", mode: "Canli" },
] as const;

export const instructors = [
  {
    name: "Ümmet ARDINÇ",
    title: "Kurucu Egitmen",
    summary:
      "Konservatuvar temelli baglama egitimiyle sahne deneyimini bir araya getiren ogretim modeli.",
    bullets: [
      "20 yillik baglama ve repertuvar deneyimi",
      "200'den fazla ogrenci ile birebir calisma",
      "Canli performans, repertuvar ve usul odakli anlatim",
    ],
  },
] as const;

export const testimonials = [
  {
    name: "Elif K.",
    level: "Baslangic ogrencisi",
    quote: "3 ay icinde ilk turkumu caldim ve ritim duygum ciddi sekilde gelisti.",
  },
  {
    name: "Yusuf T.",
    level: "Online ders ogrencisi",
    quote: "Video dersler ve PDF notlar sayesinde calisma disiplinim oturdu.",
  },
  {
    name: "Zeynep A.",
    level: "Orta seviye ogrencisi",
    quote: "Sadece eser ezberlemek degil, duzgun calmayi da ogrendim.",
  },
] as const;

export const blogPosts = [
  {
    slug: "baglama-nasil-ogrenilir",
    title: "Baglama nasil ogrenilir?",
    excerpt:
      "Baslangic asamasinda dogru plan, ritim calismasi ve repertuvar secimi neden kritik?",
    category: "Baslangic",
    readTime: "6 dk",
    content: [
      "Baglama ogrenirken en sik yapilan hata, tek basina hizli eser gecmeye calismaktir.",
      "Dogru oturus, tutus ve tezene acisi daha ilk haftalarda oturursa ileride teknik sorunlar azalir.",
      "Duzenli bir program; kisa ama tekrarli calisma, ritim duygusunu ve hafizayi daha hizli guclendirir.",
    ],
  },
  {
    slug: "saz-akort-nasil-yapilir",
    title: "Saz akort nasil yapilir?",
    excerpt:
      "Yeni baslayanlar icin temel akort mantigi ve kulaga dayali kontrol adimlari.",
    category: "Teknik",
    readTime: "5 dk",
    content: [
      "Akort, iyi bir ton ve dogru egzersiz icin temel kosuldur.",
      "Yeni ogrenciler icin dijital tuner ile kulak egitimini birlikte surdurmek en saglikli yoldur.",
      "Yanlis akortla calismak, parmak hafizasini da bozdugu icin her dersten once kontrol edilmelidir.",
    ],
  },
  {
    slug: "yeni-baslayanlar-icin-saz-secimi",
    title: "Yeni baslayanlar icin saz secimi",
    excerpt:
      "Ilk baglamada govde, sap rahatligi ve tel hissi neden fiyattan daha onemli olabilir?",
    category: "Ekipman",
    readTime: "7 dk",
    content: [
      "Ilk enstrumanda ergonomi, motivasyonu direkt etkiler.",
      "Yeni baslayan biri icin asiri sert tel hissi ya da kontrolu zor bir sap gelisimi yavaslatabilir.",
      "Bu nedenle enstruman seciminde kullanicinin eli, boyu ve hedef repertuvari birlikte degerlendirilmelidir.",
    ],
  },
] as const;

export const lessonModules = [
  {
    slug: "baglama-tanima",
    title: "Baglama Tanima",
    duration: "18 dk",
    description: "Enstrumanin bolumleri, ekipmanlar ve ders oncesi hazirlik adimlari.",
    assets: ["Video", "PDF", "Ses egzersizi"],
  },
  {
    slug: "tutus-teknikleri",
    title: "Tutus Teknikleri",
    duration: "24 dk",
    description: "Dogru oturus, sap tutusu ve tezene acisi ile saglam temel olusturma.",
    assets: ["Video", "Checklist", "Pratik plani"],
  },
  {
    slug: "temel-ritimler",
    title: "Temel Ritimler",
    duration: "31 dk",
    description: "Baslangic usulleri ve calismayi hizlandiran sayma teknikleri.",
    assets: ["Video", "Metronom plani", "PDF"],
  },
  {
    slug: "ilk-turkuler",
    title: "Ilk Turkuler",
    duration: "28 dk",
    description: "Kolaydan zora eser secimi ile ogrencinin ilk repertuvar basamagi.",
    assets: ["Video", "Nota", "Yavaslatilmis ses kaydi"],
  },
] as const;

export const featuredSongs = [
  {
    title: "Uzun Ince Bir Yoldayim",
    level: "Baslangic - Orta",
    assets: ["Video", "Nota PDF"],
  },
  {
    title: "Mihriban",
    level: "Orta Seviye",
    assets: ["Video", "Parmak pozisyonu"],
  },
  {
    title: "Canakkale Turkusu",
    level: "Orta - Ileri",
    assets: ["Video", "Nota PDF"],
  },
] as const;

export const videoFeature = {
  title: "Baglama nasil ogrenilir?",
  description:
    "Tanitim videosu, YouTube icerikleri ve web sitesi arasindaki trafik akisini destekleyen vitrin bolumu.",
  stats: [
    { label: "YouTube odakli trafik", value: "SEO + Video" },
    { label: "Video ders mantigi", value: "Kisa ve net" },
    { label: "CTA", value: "Deneme dersi" },
  ],
};

export const products = [
  { name: "Ogrenci baglamasi", price: "5.900 TL", description: "Yeni baslayanlar icin rahat calimli model." },
  { name: "Profesyonel baglama", price: "14.500 TL", description: "Sahne ve kayit odakli ust sinif model." },
  { name: "Tel seti", price: "280 TL", description: "Net ton ve rahat hissiyat icin secili set." },
  { name: "Mizrap ve kilif", price: "190 TL", description: "Gunluk kullanim ve tasima icin tamamlayici urunler." },
] as const;

export const portalSections = [
  {
    title: "Bu hafta",
    value: "4 ders",
    description: "Canli dersler ve kayit tekrarlarini tek panelde takip edin.",
  },
  {
    title: "Egzersiz kutuphanesi",
    value: "26 icerik",
    description: "Video, PDF ve ses dosyalari seviye bazli duzenlendi.",
  },
  {
    title: "Gonderilen odevler",
    value: "12 odev",
    description: "Performans videolari ve egitmen geri bildirimleri arsivlenir.",
  },
] as const;
