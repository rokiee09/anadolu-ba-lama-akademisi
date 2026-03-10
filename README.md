# Anadolu Baglama Akademisi

Baglama kursu, online dersler, blog, ogrenci portali ve basvuru toplama akislarini iceren `Next.js + Tailwind + Supabase hazir` web projesi.

## Calisma Modlari

### 1. Demo mod

Hicbir anahtar girmeden proje calisir.

- iletisim formu yerel dosyaya kayit eder
- ogrenci girisi demo cookie ile acilir
- portal akisi test edilebilir
- demo basvurular `http://localhost:3000/basvurular` sayfasinda gorulur

### 2. Canli mod

Supabase baglandiginda ayni proje gercek veritabanina ve auth sistemine gecer.

- iletisim formu `course_leads` tablosuna yazar
- ogrenci girisi `Supabase Auth` ile calisir
- portal ileride ogrenciye ozel iceriklerle genisletilebilir

## Baslatma

```bash
npm install
npm run dev
```

Tarayicida `http://localhost:3000` adresini acin.

## Demo Akislari

### Form testi

1. `Iletisim` sayfasina gidin.
2. Formu doldurup gonderin.
3. Kaydin demo modunda yerlestigini gormek icin `basvurular` sayfasini acin.

### Portal testi

1. `Ogrenci Girisi` sayfasina gidin.
2. Gecerli bir e-posta ve en az 6 karakterli sifre girin.
3. Supabase bagli degilse otomatik demo oturumu acilir.
4. `Portal` sayfasinda oturumlu akis gorunur.

## Supabase Ile Canliya Gecis

`web/.env.local` dosyasi olusturun:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

Ardindan `supabase-schema.sql` dosyasini Supabase SQL Editor icinde calistirin.

Bu dosya su tabloları hazirlar:

- `course_leads`
- `student_profiles`
- `lesson_progress`

## Komutlar

```bash
npm run dev
npm run lint
npm run build
```
