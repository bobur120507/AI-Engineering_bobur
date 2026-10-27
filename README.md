# AI Engineering — Boburning shaxsiy ta’lim platformasi

**Machine Learning → Deep Learning → LLM → AI Engineer** yo‘nalishida, matematikani tushunib va mustaqil tajriba qilib o‘rganish uchun o‘zbekcha veb-platforma.

Bu repozitoriydagi avvalgi Python o‘quv fayllari saqlangan. Veb-saytning to‘liq manba kodi **[`website/`](website/)** ichida. Saytni ishga tushirish uchun Python, API kaliti, `.env` fayli, bulut akkaunti yoki bazani qo‘lda yaratish kerak emas.

> **Tez boshlash:** Node.js **24 yoki yangiroq** va Git o‘rnatilgan bo‘lsa, repozitoriyni yuklab oling va `npm start` bajaring. Oddiy mahalliy rejimda `npm install` ham shart emas.

## Nima uchun yaratilgan?

Platforma boshlovchini kurslar ro‘yxati bilan cheklamaydi: qanday tartibda o‘qish, qaysi matematikani tushunish, qanday mashq qilish va natijani qanday tekshirishni bir joyga yig‘adi.

- ML asoslarini DLdan oldin o‘rganasiz.
- Formulani qo‘lda hisoblab, laboratoriyada tekshirasiz, keyin NumPy/PyTorchda takrorlaysiz.
- CV va NLP bo‘yicha kichik, tugatish mumkin bo‘lgan loyihalar qilasiz.
- Kurs narxi, oldingi bilimlar va sertifikat shartlarini farqlaysiz.
- Tajriba va xatolarni yozib, keyingi qaroringizni dalilga asoslay olasiz.

Bu tayyor AI o‘qituvchi yoki ishga kirish kafolati emas. Mashq kodi brauzerda bajarilmaydi; Python vazifalari o‘zingizning muhitingizda ishlanadi.

## O‘rnatish va ishga tushirish

### 1. Kerakli dasturlar

- **Node.js 24+**, npm bilan: [rasmiy yuklash sahifasi](https://nodejs.org/en/download).
- **Git**: [rasmiy o‘rnatish sahifasi](https://git-scm.com/downloads).
- Zamonaviy brauzer.

Versiyalarni tekshiring:

```bash
node --version
npm --version
git --version
```

`node --version` kamida `v24` bilan boshlansin. Node.js 18/20 uchun yangilash kerak: loyiha Node ichidagi SQLite modulidan foydalanadi.

### 2. Yuklab olish

```bash
git clone https://github.com/bobur120507/AI-Engineering_bobur.git
cd AI-Engineering_bobur
```

### 3. Ishga tushirish

```bash
npm start
```

Brauzerda **[http://localhost:3000](http://localhost:3000)** ni oching.

Server birinchi ishga tushganda `website/.local-data/learning.sqlite` bazasini avtomatik yaratadi. Qo‘shimcha sozlash yoki ma’lumot kiritish kerak emas. Serverni to‘xtatish: **Ctrl+C**.

Windows PowerShell, macOS va Linux uchun shu buyruqlar ishlatiladi. Node bo‘lsa, muqobil ravishda:

```bash
node website/scripts/start.mjs
```

Agar 3000-port band bo‘lsa:

```bash
npm start -- --port 3001
```

So‘ng [http://localhost:3001](http://localhost:3001) ni oching.

> **Internet haqida:** lokal dastur va laboratoriyalar tashqi API chaqirmaydi. Kurs havolalari, tashqi shriftlar va Git orqali birinchi yuklash internetdan foydalanadi. Shrift yuklanmasa tizim shrifti ishlatiladi.

## Nimalar qila oladi?

| Bo‘lim | Imkoniyat |
| --- | --- |
| **Yo‘l xaritasi** | ML → DL → LLM → AI muhandisligi; Python tayyorgarligi ML ichida, matematika va mustaqil mezonlar bilan. |
| **Kurslar** | 12 ta kurs/manbani provayder, oldingi bilimlar, CV/NLP qamrovi va sertifikat bo‘yicha filtrlash; 3 tagacha yonma-yon taqqoslash. |
| **Matematika** | Formulalar, sonli misollar va bosqichlarga bog‘langan tushuntirishlar. |
| **Laboratoriya** | Regressiya uchun vazn, siljish va o‘qish tezligini o‘zgartirish; MSE va gradientni kuzatish; matritsa ko‘paytmasi, zanjir qoidasi va attention misollari. |
| **Haftalik reja** | Haftalik 4/8/12/20 soatni o‘qish, matematika, kod va takrorlashga taqsimlash; bajarilgan mashg‘ulotlarni belgilash. |
| **Mustaqil mashqlar** | 4 ta topshiriq, ishora, boshlang‘ich kod, izohli yechim va yakunlash mezonlari. |
| **Bilimni tekshirish** | ML → DL → LLM → muhandislik o‘tishlari uchun 9 ta sonli savol, javob izohi va bilim bo‘shliqlariga tavsiyalar. |
| **Tajriba kundaligi** | Ma’lumot, gipoteza, parametr, o‘lchov, xato va xulosalarni yozish va tahrirlash. |
| **Loyihalar** | NumPy regressiyasi, kamera/CV baholash, NLP tasniflash va RAG yordamchisi. |
| **Sertifikatlar** | AWS, NVIDIA va Microsoft yo‘llari; rasmiy materiallar, bepul/pulli qismlar, oldingi bilim va tayyorlov belgilari. |
| **Natijalarim** | Bosqichlar bo‘yicha natija, qaydlar, JSON zaxira eksport/importi. |

Sayt interfeysi o‘zbekcha. Ko‘pchilik tashqi kurslar inglizcha; provider va sertifikatlarning rasmiy nomlari asl shaklda saqlanadi.

## Foydalanish qo‘llanmasi

### Birinchi kun

1. **Yo‘l xaritasi → Rejani sozlash** bo‘limida Python darajangiz va haftalik vaqtingizni tanlang.
2. ML bosqichidagi birinchi tugallanmagan vazifadan boshlang.
3. **Kurslar** sahifasida tegishli kursni oching. Kursni ochish uni avtomatik tugatmaydi.
4. **Matematika** va **Laboratoriya** orqali tushunchani tekshiring.
5. Vazifani mustaqil bajarganingizdan keyin belgilang.

### Matematikani chuqur o‘rganish

Masalan, regressiya uchun:

1. `ŷ = wx + b` va MSE ma’nosini tushuning.
2. `x=[1,2]`, `y=[2,4]`, `w=1`, `b=0` bilan qo‘lda hisoblang.
3. Laboratoriyada `η=0.1`, `b` o‘zgarmas holatda **1 qadam** bosing.
4. MSE `2.5 → 0.625`, yangi vazn `w=1.5` chiqishini tekshiring.
5. Shu hisobni **Mustaqil mashqlar**dagi NumPy vazifasi bilan qaytaring.

Ishoradan keyin ham ishlashga harakat qiling; yechimni faqat o‘z urinishlaringiz bilan solishtirish uchun oching.

### Haftalik tartib

**Haftalik reja**da dushanba sanasini tanlab, rejani yarating. Belgilar saqlanadi. Vaqt sozlamasini o‘zgartirish oldingi rejani o‘chirmaydi; istasangiz, o‘sha haftani qayta tuzish tugmasidan foydalaning. Jadval avtomatik bildirishnoma yubormaydi.

### Bilimni tekshirish

Sonni nuqta yoki vergul bilan kiriting: `2.5` yoki `2,5`. Natija qaysi tushunchani takrorlash kerakligini ko‘rsatadi. Uch savolni to‘g‘ri yechish butun mavzuni yoki professional imtihonni o‘zlashtirish kafolati emas.

### Tajribalarni yozish

Har tajribada ma’lumot bo‘linishi va boshlang‘ich modelni yozing. Keyin faqat bir o‘zgaruvchini o‘zgartirib, metrikani solishtiring. Tasodifiy yaxshilanishni isbotlangan natija deb qabul qilmang; xatolar va cheklovlarni ham qayd eting.

## Ma’lumot qayerda saqlanadi?

| Rejim | Saqlash va kirish |
| --- | --- |
| **`npm start` — mahalliy rejim** | Bitta mahalliy profil, kompyuteringizdagi SQLite bazasi va brauzer nusxasi. Login talab qilinmaydi. Faqat `127.0.0.1` orqali tinglaydi; tarmoqqa ochilmaydi. |
| **Asl shaxsiy joylangan sayt** | ChatGPT orqali himoyalangan kirish va foydalanuvchiga tegishli D1 yozuvi. Bir akkauntdagi qurilmalar orasida natijalar saqlanadi. |

**Mahalliy variantni GitHubdan yuklash avtomatik ravishda jonli sayt akkauntingizga ulab qo‘ymaydi.** Bu rejim uchun `.env`, D1 yoki ChatGPT sozlash talab qilinmaydi, lekin u qurilmalar orasida avtomatik sinxronlashmaydi. Boshqa qurilmaga o‘tish uchun JSON zaxira eksport/importidan foydalaning yoki mavjud shaxsiy saytga kiring.

Brauzerda ko‘rsatiladigan saqlash paneli mahalliy profil va akkaunt rejimini ajratadi. Bir vaqtdagi eskirgan yozish urinishlari versiya tekshiruvi bilan rad etiladi.

### Zaxira va tiklash

- **Natijalarim → Natijalarni yuklab olish:** kurslar, belgilar, qaydlar, haftalar, mashqlar va tajribalarni JSON faylga saqlaydi.
- **Natijalarim → Zaxirani yuklash:** format tekshiriladi; tasdiqlagach joriy nusxa almashtiriladi.
- Mahalliy bazani to‘liq nusxalash uchun serverni **Ctrl+C** bilan to‘xtating, so‘ng `website/.local-data/` papkasini nusxalang.
- Bu papka, `.env` va baza fayllari Gitga kiritilmaydi. Shaxsiy zaxira JSON fayllarini ham repoga yubormang.

Eski brauzer ma’lumotlari yoki zaxiralar yangi bo‘limlar uchun bo‘sh holat qo‘shib o‘qiladi.

## Tekshirish

```bash
npm test
```

Tashqi paketlarni o‘rnatmasdan quyidagilar tekshiriladi:

- matematika hisoblari va haftalik vaqt yig‘indisi;
- zaxira formati va oldingi natijalarni saqlash;
- akkaunt yozuvlarini ajratish va eski versiya to‘qnashuvlari;
- ikki qurilma holatini taqlid qilgan sinxronlash va oflayn nusxa;
- yangi mahalliy baza, statik fayllar, ma’lumotni yozish va server qayta ishga tushgandan keyin o‘qish;
- begona manba so‘rovlari va papka tashqarisidagi fayllarni ochish rad etilishi.

## Repozitoriy tuzilishi

```text
AI-Engineering_bobur/
├── README.md                 # Asosiy qo‘llanma
├── package.json              # npm start / npm test
├── requirements.txt          # Avvalgi Python o‘quv muhiti
└── website/
    ├── public/               # O‘zbekcha interfeys, kurslar va laboratoriya
    ├── scripts/start.mjs     # Node versiyasini tekshirish
    ├── scripts/standalone-server.mjs
    ├── lib/learning-store.mjs # Saqlash, validatsiya, versiya nazorati
    ├── app/                  # Asl joylangan server yo‘llari va ChatGPT kirishi
    ├── db/                   # D1 schema
    ├── drizzle/              # Baza migratsiyalari
    ├── tests/                # Funksional testlar
    └── .local-data/           # Avtomatik yaratiladi, Gitga kiritilmaydi
```

### Kodni o‘zgartirish

Mahalliy rejimda `website/public/` fayllarini tahrirlang va brauzerni yangilang. Qayta yig‘ish talab qilinmaydi. Server kodini tahrirlasangiz, `npm start`ni qayta ishga tushiring.

To‘liq Vinext/Cloudflare variantining tuzilishi va ishlashi [`website/README.md`](website/README.md) ichida saqlangan. Bu rivojlantirish muhiti uchun alohida bog‘liqliklar kerak; oddiy foydalanish yo‘li **`npm start`** bo‘lib qoladi. GitHub Pages faqat statik hosting: ushbu saytning saqlash API va SQLite/D1 qismini o‘zi ishlata olmaydi.

## Muhim chegaralar

- Kursni tugatish belgisi professional sertifikat olinganini bildirmaydi.
- Sertifikat tayyorlovidagi narx va mavjudlik 2026-yil 26-oktabrda tekshirilgan; to‘lashdan oldin rasmiy sahifani qayta ko‘ring. AWS ML Specialty va Microsoft AI-102 yopilgan yo‘llar sifatida ko‘rsatilgan, amaldagi muqobillari alohida berilgan.
- Mahalliy serverga maxsus login qo‘shilmagan, chunki u faqat shu kompyuterga bog‘langan. Uni proksi, tunnel yoki tashqi tarmoq orqali ochish uchun alohida autentifikatsiya va hosting sozlamalari kerak.
- Tashqi API kalitlarini, shaxsiy tajribalarni va baza fayllarini GitHubga yuklamang.

**O‘rganish usuli:** tushuncha → qo‘lda hisob → mustaqil kod → baholash → xulosa.
