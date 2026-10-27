'use strict';
const COURSES = [
  {
    "id": "python",
    "order": 0,
    "title": "CS50: Python dasturlashga kirish",
    "short": "Python dasturlashga kirish",
    "provider": "Harvard / CS50",
    "mark": "CS",
    "color": "red",
    "level": "Boshlang‘ich",
    "prereq": "Dasturlash tajribasi shart emas. ML bosqichi ichida kerakli Python mavzularini o‘rganing.",
    "ml": "ML bilimi kerak emas",
    "cv": "Bevosita o‘tilmaydi",
    "nlp": "Bevosita o‘tilmaydi",
    "topics": [
      "Python"
    ],
    "cert": "Bepul sertifikat",
    "certType": "free",
    "certNote": "Har bir topshiriq va yakuniy loyiha kamida 70% baholansa, CS50 sertifikati bepul beriladi. Shaxsni tasdiqlovchi edX sertifikati alohida pulli.",
    "role": "Python zarur bo‘lsa",
    "hours": "32–60 soat: amaliyot bilan taxmin",
    "url": "https://cs50.harvard.edu/python/",
    "source": "https://cs50.harvard.edu/python/certificate/",
    "summary": "Funksiyalar, fayllar, kutubxonalar, xatolarni topish va tekshirish. Dastur yoza olmasangiz, birinchi ML bosqichida shu tayyorgarlikni bajaring.",
    "originalTitle": "CS50’s Introduction to Programming with Python",
    "stage": "ml",
    "optional": true,
    "language": "Inglizcha"
  },
  {
    "id": "kml",
    "order": 1,
    "title": "Mashinaviy o‘rganishga kirish",
    "short": "Mashinaviy o‘rganishga kirish",
    "provider": "Kaggle",
    "mark": "k",
    "color": "blue",
    "level": "Python asoslari",
    "prereq": "Pythonning asosiy buyruqlari, funksiyalar va jadvallar bilan ishlash.",
    "ml": "ML asoslarini o‘rgatadi",
    "cv": "Umumiy ML poydevori",
    "nlp": "Umumiy ML poydevori",
    "topics": [
      "ML"
    ],
    "cert": "Bepul sertifikat",
    "certType": "free",
    "certNote": "Kaggle sahifasida sertifikat olish uchun taxminan 3 soat va bepul kirish ko‘rsatilgan. Akkaunt ochib, kurs mashqlarini bajaring.",
    "role": "Asosiy kurs",
    "hours": "3 soat: provayder bahosi",
    "url": "https://www.kaggle.com/learn/intro-to-machine-learning",
    "source": "https://www.kaggle.com/learn/intro-to-machine-learning/course",
    "summary": "Model, tekshirish to‘plami, ortiqcha moslashish va tasodifiy o‘rmonlar bilan tanishing. Bu qisqa kirish; matematik va mustaqil amaliy mashqlar yo‘l xaritasida alohida bor.",
    "originalTitle": "Intro to Machine Learning",
    "stage": "ml",
    "optional": false,
    "language": "Inglizcha"
  },
  {
    "id": "google",
    "order": 1.1,
    "title": "Mashinaviy o‘rganish: tezkor asosiy kurs",
    "short": "Google: ML asoslari",
    "provider": "Google",
    "mark": "G",
    "color": "multi",
    "level": "Python va asosiy matematika",
    "prereq": "Python, NumPy/pandas, algebra va oddiy statistika. Vektor va matritsalarni takrorlang; ayrim chuqur mavzular uchun hosila foydali.",
    "ml": "ML asoslarini o‘rgatadi",
    "cv": "Baholash va ma’lumot poydevori",
    "nlp": "LLM haqida kirish mavzusi",
    "topics": [
      "ML",
      "NLP"
    ],
    "cert": "Sertifikat yo‘q",
    "certType": "none",
    "certNote": "Google bu mustaqil ta’lim kurslari uchun rasmiy sertifikat yoki akademik kredit bermasligini aniq bildiradi.",
    "role": "Tanlangan asosiy mavzular",
    "hours": "To‘liq kurs 15 soat: provayder",
    "url": "https://developers.google.com/machine-learning/crash-course",
    "source": "https://support.google.com/machinelearningeducation/answer/9155264",
    "extraSource": "https://developers.google.com/machine-learning/crash-course/prereqs-and-prework",
    "summary": "Yo‘qotish funksiyasi, gradient bo‘yicha tushish, klassifikatsiya va ma’lumot tayyorlashni o‘rganing. Formulalarni faqat ko‘rib chiqmay, kichik sonlar bilan hisoblang.",
    "originalTitle": "Machine Learning Crash Course",
    "stage": "ml",
    "optional": false,
    "language": "Inglizcha"
  },
  {
    "id": "kdl",
    "order": 2,
    "title": "Chuqur o‘rganishga kirish",
    "short": "Chuqur o‘rganishga kirish",
    "provider": "Kaggle",
    "mark": "k",
    "color": "blue",
    "level": "ML poydevori",
    "prereq": "Kaggle ML kursi yoki model, ma’lumot ajratish va baholash bo‘yicha teng bilim.",
    "ml": "Avval ML poydevori kerak",
    "cv": "Neyron tarmoqlar poydevori",
    "nlp": "Neyron tarmoqlar poydevori",
    "topics": [
      "ML",
      "DL"
    ],
    "cert": "Bepul sertifikat",
    "certType": "free",
    "certNote": "Kaggle sahifasida sertifikat uchun taxminan 4 soat va bepul ta’lim ko‘rsatilgan. Amaliy mashqlarni yakunlang.",
    "role": "Asosiy kirish kursi",
    "hours": "4 soat: provayder bahosi",
    "url": "https://www.kaggle.com/learn/intro-to-deep-learning",
    "source": "https://www.kaggle.com/learn/intro-to-deep-learning",
    "summary": "Neyron, qatlam, o‘qitish va muntazamlashtirish bilan tanishing. Keras misollari tushuncha uchun; keyin asosiy amaliy ishlar PyTorchda davom etadi.",
    "originalTitle": "Intro to Deep Learning",
    "stage": "dl",
    "optional": false,
    "language": "Inglizcha"
  },
  {
    "id": "torch",
    "order": 2.1,
    "title": "PyTorch: asoslarni o‘rganish",
    "short": "PyTorch asoslari",
    "provider": "PyTorch",
    "mark": "P",
    "color": "orange",
    "level": "Python va DL asoslari",
    "prereq": "Rasmiy qo‘llanma Python va chuqur o‘rganish bilan boshlang‘ich tanishlikni kutadi. Avval DL kirish mavzularini o‘ting.",
    "ml": "ML va boshlang‘ich DL kerak",
    "cv": "Kiyim rasmlarini klassifikatsiya qilish",
    "nlp": "O‘qitish usullari keyin NLPga o‘tadi",
    "topics": [
      "DL",
      "CV"
    ],
    "cert": "E’lon qilinmagan",
    "certType": "unlisted",
    "certNote": "Rasmiy qo‘llanmada yakunlash sertifikati e’lon qilinmagan. Natijangizni mustaqil yozilgan kod orqali ko‘rsating.",
    "role": "Asosiy amaliy qo‘llanma",
    "hours": "8–16 soat: amaliyot bilan taxmin",
    "url": "https://docs.pytorch.org/tutorials/beginner/basics/intro.html",
    "source": "https://docs.pytorch.org/tutorials/beginner/basics/intro.html",
    "summary": "Tensor, ma’lumot yuklagich, avtomatik hosila, optimizatsiya va modelni saqlash. O‘qitish siklini tushunib, keyin namunaga qaramasdan qayta yozing.",
    "originalTitle": "Learn the Basics",
    "stage": "dl",
    "optional": false,
    "language": "Inglizcha"
  },
  {
    "id": "fastai",
    "order": 2.2,
    "title": "Dasturchilar uchun amaliy chuqur o‘rganish",
    "short": "fast.ai: amaliy chuqur o‘rganish",
    "provider": "fast.ai",
    "mark": "f",
    "color": "green",
    "level": "Python bilan erkin ishlash",
    "prereq": "Provayder taxminan bir yillik dasturlash va maktab matematikasini tavsiya qiladi. Bu yo‘lda avval ML va oddiy DL bilimlarini mustahkamlang.",
    "ml": "Rasmiy ML sharti yo‘q; bu rejada ML oldin",
    "cv": "CNN va tayyor modelni moslashtirish",
    "nlp": "Matn ustida amaliy modellar",
    "topics": [
      "CV",
      "NLP",
      "DL"
    ],
    "cert": "E’lon qilinmagan",
    "certType": "unlisted",
    "certNote": "Kurs sahifasida yakunlash sertifikati e’lon qilinmagan. Amaliy loyiha bilimni ko‘rsatishning asosiy yo‘li bo‘ladi.",
    "role": "Tanlangan DL va CV darslari",
    "hours": "9 ta ~90 daqiqalik dars + amaliyot",
    "url": "https://course.fast.ai/",
    "source": "https://course.fast.ai/",
    "summary": "Birinchi qismdagi 1, 2, 3, 5 va 8-darslar: model qurish, asoslar va konvolyutsiya. Material 2022-yilgi; kod farqlansa, kutubxonaning joriy hujjatini tekshiring.",
    "originalTitle": "Practical Deep Learning for Coders",
    "stage": "dl",
    "optional": false,
    "language": "Inglizcha"
  },
  {
    "id": "kcv",
    "order": 2.3,
    "title": "Kompyuter ko‘rishi",
    "short": "Kaggle: kompyuter ko‘rishi",
    "provider": "Kaggle",
    "mark": "k",
    "color": "blue",
    "level": "Boshlang‘ich DL",
    "prereq": "Kaggle DL kursi yoki neyron tarmoq o‘qitish haqida teng bilim.",
    "ml": "ML va boshlang‘ich DL kerak",
    "cv": "CNN va tasvirni o‘zgartirib ko‘paytirish",
    "nlp": "Bevosita o‘tilmaydi",
    "topics": [
      "CV"
    ],
    "cert": "Bepul sertifikat",
    "certType": "free",
    "certNote": "Kaggle sahifasida sertifikat uchun taxminan 4 soat va bepul ta’lim ko‘rsatilgan. Bu kursni yakunlash sertifikatidir.",
    "role": "Ixtiyoriy CV takrori",
    "hours": "4 soat: provayder bahosi",
    "url": "https://www.kaggle.com/learn/computer-vision",
    "source": "https://www.kaggle.com/learn/computer-vision",
    "summary": "Tasvir klassifikatsiyasi va konvolyutsion tarmoqlarga qisqa kirish. Kamera tizimini chuqur baholash uchun yo‘l xaritasidagi CV loyihasini ham bajaring.",
    "originalTitle": "Computer Vision",
    "stage": "dl",
    "optional": true,
    "language": "Inglizcha"
  },
  {
    "id": "hf",
    "order": 3,
    "title": "Katta til modellari kursi",
    "short": "Hugging Face: LLM kursi",
    "provider": "Hugging Face",
    "mark": "🤗",
    "color": "yellow",
    "level": "Python va boshlang‘ich DL",
    "prereq": "Pythonni yaxshi bilish. Provayder avval boshlang‘ich DL kursini tavsiya qiladi; PyTorch yoki TensorFlow bilan tanishlik yordam beradi.",
    "ml": "ML va DL poydevori tavsiya etiladi",
    "cv": "Alohida CV yo‘nalishi yo‘q",
    "nlp": "Tokenlash, transformer va modelni moslashtirish",
    "topics": [
      "NLP",
      "DL",
      "LLM"
    ],
    "cert": "Bob imtihonlari / cheklangan",
    "certType": "limited",
    "certNote": "Kurs kirish sahifasi butun kurs sertifikatini va’da qilmaydi, lekin ayrim boblarda sertifikat imtihoni mavjud. Bob sertifikati va to‘liq kurs sertifikatini aralashtirmang.",
    "role": "Asosiy LLM kursi: 1–4-boblar",
    "hours": "Har bobga 6–8 soat: provayder",
    "url": "https://huggingface.co/learn/llm-course/en/chapter1/1",
    "source": "https://huggingface.co/learn/llm-course/en/chapter1/11",
    "extraSource": "https://huggingface.co/learn/llm-course/en/chapter1/1",
    "summary": "Tokenlash, transformer tuzilishi va tayyor til modelini moslashtirish. Dastlab 1–4-boblarni bajaring; keyingi boblar ma’lumot, tokenizator va an’anaviy NLPni kengaytiradi.",
    "originalTitle": "LLM Course",
    "stage": "llm",
    "optional": false,
    "language": "Inglizcha"
  },
  {
    "id": "csai",
    "order": 4.3,
    "title": "CS50: Python orqali sun’iy intellektga kirish",
    "short": "CS50: sun’iy intellekt",
    "provider": "Harvard / CS50",
    "mark": "CS",
    "color": "red",
    "level": "Tajribali Python",
    "prereq": "CS50x yoki kamida bir yil Python tajribasi. Katta dasturlash topshiriqlari bor; mutlaq boshlovchi uchun birinchi kurs emas.",
    "ml": "MLni kengroq AI ichida o‘rgatadi",
    "cv": "Neyron tarmoq va tasvirni tanish loyihasi",
    "nlp": "Til va sintaktik tahlil",
    "topics": [
      "ML",
      "CV",
      "NLP"
    ],
    "cert": "Bepul sertifikat",
    "certType": "free",
    "certNote": "Har bir loyiha kamida 70% baholansa, CS50 sertifikati bepul beriladi. Shaxsni tasdiqlovchi edX sertifikati alohida pulli.",
    "role": "Ixtiyoriy bilimni kengaytirish",
    "hours": "7 hafta, haftasiga 10–30 soat: provayder",
    "url": "https://cs50.harvard.edu/ai/",
    "source": "https://cs50.harvard.edu/ai/certificate/",
    "summary": "Qidiruv, noaniqlik, o‘rganish va til tushunchalarini kengaytiring. Asosiy yo‘lga qo‘shimcha; rejadagi vaqtga bu kursning barcha topshiriqlari kiritilmagan.",
    "originalTitle": "CS50’s Introduction to Artificial Intelligence with Python",
    "stage": "engineer",
    "optional": true,
    "language": "Inglizcha"
  },
  {
    "id": "d2l",
    "order": 1.2,
    "title": "Chuqur o‘rganishga sho‘ng‘ish: matematika va modellar",
    "originalTitle": "Dive into Deep Learning",
    "short": "D2L: matematika va modellar",
    "provider": "D2L.ai",
    "mark": "∑",
    "color": "violet",
    "stage": "ml",
    "level": "Algebra va Python",
    "prereq": "Oddiy algebra va Python. Dastlab ma’lumot, chiziqli algebra, hosila va ehtimollik bo‘limlarini o‘rganing.",
    "ml": "ML va DLni matematika bilan tushuntiradi",
    "cv": "CNN va tasvir modellari",
    "nlp": "Diqqat mexanizmi va transformerlar",
    "topics": [
      "Math",
      "ML",
      "DL",
      "CV",
      "NLP"
    ],
    "cert": "E’lon qilinmagan",
    "certType": "unlisted",
    "certNote": "Ochiq kitob sahifasida yakunlash sertifikati e’lon qilinmagan. Matematik va kod mashqlari uchun qo‘shimcha manba.",
    "role": "Barcha bosqichlar uchun matematik manba",
    "optional": false,
    "hours": "Tanlangan bo‘limlar: reja ichida",
    "url": "https://d2l.ai/",
    "source": "https://www.d2l.ai/chapter_preliminaries/index.html",
    "summary": "Vektorlar, matritsalar, hosilalar va ehtimollikni kod bilan bog‘lang. Butun kitobni birdan tugatish shart emas; har bosqichga mos bo‘limlarni o‘qing.",
    "language": "Inglizcha"
  },
  {
    "id": "agents",
    "order": 4.1,
    "title": "AI agentlarini yaratish kursi",
    "originalTitle": "Hugging Face Agents Course",
    "short": "Hugging Face: AI agentlari",
    "provider": "Hugging Face",
    "mark": "🤗",
    "color": "yellow",
    "stage": "engineer",
    "level": "Python va LLM asoslari",
    "prereq": "Python va katta til modellari bo‘yicha boshlang‘ich bilim. Bepul Hugging Face akkaunti kerak.",
    "ml": "Bu rejada ML → DL → LLMdan keyin",
    "cv": "Asosiy yo‘nalish emas",
    "nlp": "LLM, vositalar va agentlar",
    "topics": [
      "NLP",
      "LLM",
      "Engineering"
    ],
    "cert": "Bepul sertifikat",
    "certType": "free",
    "certNote": "Asoslar sertifikati: 1-bo‘limni tugatib, testdan kamida 80% olish kerak. To‘liq yakunlash sertifikati uchun qo‘shimcha amaliy topshiriq va yakuniy sinov talab etiladi; jarayon bepul.",
    "role": "1-bo‘lim asosiy; qolganlari qo‘shimcha",
    "optional": false,
    "hours": "Har bobga 3–4 soat: provayder",
    "url": "https://huggingface.co/learn/agents-course/en/unit0/introduction",
    "source": "https://huggingface.co/learn/agents-course/en/unit1/get-your-certificate",
    "extraSource": "https://huggingface.co/learn/agents-course/en/unit0/introduction",
    "summary": "Agentning vosita chaqiruvi, kuzatuvi va ish jarayonini tushuning. Avval sodda RAG tizimi, keyin kerak bo‘lsa nazoratlangan agent. Bepul kurs tashqi API yoki GPU xarajatlarini qoplamaydi.",
    "language": "Inglizcha"
  },
  {
    "id": "fsdl",
    "order": 4,
    "title": "LLM ilovalarini to‘liq yaratish",
    "originalTitle": "Full Stack LLM Bootcamp",
    "short": "FSDL: LLM ilovalarini yaratish",
    "provider": "Full Stack Deep Learning",
    "mark": "F",
    "color": "green",
    "stage": "engineer",
    "level": "Python va LLM bilan tanishlik",
    "prereq": "Provayder Python tajribasini kutadi. ML, server yoki interfeys yaratish tajribasi foydali.",
    "ml": "Kursning o‘zi qat’iy ML sharti qo‘ymaydi",
    "cv": "Asosiy yo‘nalish emas",
    "nlp": "LLM ilovalari va foydalanishga chiqarish",
    "topics": [
      "LLM",
      "NLP",
      "Engineering"
    ],
    "cert": "E’lon qilinmagan",
    "certType": "unlisted",
    "certNote": "Bepul yozuvlar sahifasida yakunlash sertifikati va’da qilinmagan. Asosiy natija — ishlaydigan va baholanadigan loyiha.",
    "role": "Tanlangan muhandislik ma’ruzalari",
    "optional": false,
    "hours": "Tanlangan ma’ruzalar va amaliyot",
    "url": "https://fullstackdeeplearning.com/llm-bootcamp/",
    "source": "https://fullstackdeeplearning.com/llm-bootcamp/",
    "summary": "LLM ilovalarini loyihalash, foydalanuvchi tajribasi va foydalanishga chiqarish tamoyillari. Yozuvlar 2023-yilgi; API va kutubxona buyruqlarini joriy rasmiy hujjatdan tekshiring.",
    "language": "Inglizcha"
  }
];
const PYTHON_TASKS = [
  {
    "id": "py1",
    "text": "CSV faylni o‘qib, sinflar sonini hisoblaydigan dastur yozing.",
    "detail": "Funksiya, sikl va xatolarni ushlashni mustaqil ishlating."
  },
  {
    "id": "py2",
    "text": "Kerakli CS50 Python darslari va mashqlarini bajaring.",
    "detail": "32 soat — boshlang‘ich tayyorgarlik uchun taxmin; to‘liq kurs ko‘proq vaqt olishi mumkin.",
    "course": "python",
    "partial": true
  },
  {
    "id": "py3",
    "text": "Tasvirni massivga aylantirib, shaklini tekshiring va grafik chizing.",
    "detail": "NumPy o‘lchamlari va Matplotlib bilan ishlang. Google tayyorgarlik manbasidan foydalaning."
  }
];
const STAGES = [
  {
    "id": "ml",
    "name": "Machine Learning — mashinaviy o‘rganish",
    "tag": "01 · ASOSIY POYDEVOR",
    "color": "green",
    "hours": 72,
    "desc": "Noldan boshlang: model nimani o‘rganadi va natijani qanday to‘g‘ri tekshiramiz?",
    "courses": [
      "python",
      "kml",
      "google",
      "d2l"
    ],
    "math": [
      "Vektor, matritsa, skalyar ko‘paytma va normaning ma’nosi.",
      "O‘rtacha, dispersiya, shartli ehtimollik va Bayes qoidasi.",
      "Hosila, gradient, MSE va logistika uchun yo‘qotish funksiyasi."
    ],
    "outcome": "Chiziqli regressiyani NumPyda yozib, sklearn natijasi bilan solishtira olasiz.",
    "tasks": [
      {
        "id": "m-math",
        "text": "Vektor, matritsa va ehtimollikni sonli misollarda tushuntiring.",
        "detail": "D2L tayyorgarlik bo‘limlarini o‘qing. Uchta matritsa ko‘paytmasini qo‘lda va NumPyda tekshiring."
      },
      {
        "id": "ml1",
        "text": "Kaggle: mashinaviy o‘rganishga kirish kursini tugating.",
        "detail": "Barcha mashqlarni bajaring va tekshirish natijangizni izohlang.",
        "course": "kml"
      },
      {
        "id": "ml2",
        "text": "Google kursida yo‘qotish, gradient, klassifikatsiya va ma’lumot mavzularini o‘ting.",
        "detail": "Tanlangan mavzular. Har formula uchun belgilar, o‘lchamlar va oddiy misol yozing.",
        "course": "google",
        "partial": true
      },
      {
        "id": "m-gradient",
        "text": "Chiziqli regressiya va gradient bo‘yicha tushishni NumPyda yozing.",
        "detail": "MSE hosilasini qo‘lda chiqaring; sonli hosila bilan tekshiring. Tayyor regressiya funksiyasini bu mashqda ishlatmang."
      },
      {
        "id": "ml3",
        "text": "Ma’lumotni o‘qitish, tekshirish va yakuniy sinov qismlariga ajrating.",
        "detail": "Bir-biriga juda o‘xshash kadrlar bir necha qismga tushmasin. Ma’lumot sizib chiqishiga misol toping."
      },
      {
        "id": "ml4",
        "text": "Aniqlik ulushi, qamrov va xatolar matritsasini izohlang.",
        "detail": "Precision va recallni qo‘lda hisoblang. Noyob hodisalarda umumiy to‘g‘ri javob ulushi nega chalg‘itishini tushuntiring."
      },
      {
        "id": "m-baseline",
        "text": "Oddiy model va daraxt/o‘rmon modelini bir xil bo‘linishda solishtiring.",
        "detail": "sklearn orqali regressiya yoki klassifikatsiya. Kross-validatsiya, standartlash va muntazamlashtirishni sinang."
      },
      {
        "id": "m-explain",
        "text": "Birinchi bosqichni daftarsiz tushuntiring.",
        "detail": "Chiziqli va logistik regressiya farqi, ortiqcha moslashish, model murakkabligi va baholash usulini izohlang."
      }
    ]
  },
  {
    "id": "dl",
    "name": "Deep Learning — chuqur o‘rganish",
    "tag": "02 · NEYRON TARMOQLAR",
    "color": "blue",
    "hours": 96,
    "desc": "Neyron tarmoqni ichidan tushuning; kompyuter ko‘rishi bilan amalda tekshiring.",
    "courses": [
      "kdl",
      "torch",
      "fastai",
      "kcv",
      "d2l"
    ],
    "math": [
      "Zanjir qoidasi va ko‘p o‘zgaruvchili hosila.",
      "Matritsa o‘lchamlari, orqaga tarqatish va gradientni tekshirish.",
      "Konvolyutsiya, aktivatsiya, cross-entropy va muntazamlashtirish."
    ],
    "outcome": "Kichik tarmoqni o‘qitib, xatolarini va gradient oqimini tushuntira olasiz.",
    "tasks": [
      {
        "id": "d-math",
        "text": "Ikki qatlamli kichik tarmoq uchun hosilani qo‘lda chiqaring.",
        "detail": "Zanjir qoidasini chizing. NumPydagi sonli gradient va PyTorch autograd natijasini solishtiring."
      },
      {
        "id": "dl1",
        "text": "Kaggle: chuqur o‘rganishga kirish kursini tugating.",
        "detail": "Qatlam, aktivatsiya, o‘qitish va muntazamlashtirishni o‘rganing.",
        "course": "kdl"
      },
      {
        "id": "dl2",
        "text": "PyTorch asoslari qo‘llanmasini bajaring.",
        "detail": "Tensor → ma’lumot yuklagich → model → hosila → optimizatsiya → saqlash.",
        "course": "torch"
      },
      {
        "id": "dl3",
        "text": "Kichik klassifikatorni o‘qitib, xatolarini tahlil qiling.",
        "detail": "O‘qitish siklini qayta yozing, o‘qitish/tekshirish yo‘qotishini solishtiring va saqlangan modelni qayta yuklang."
      },
      {
        "id": "cv1",
        "text": "fast.ai birinchi qismidagi 1, 2, 3, 5 va 8-darslarni bajaring.",
        "detail": "Bu tanlangan darslar: amaliy model, asoslar va konvolyutsiya. Butun kurs yakunlandi degani emas.",
        "course": "fastai",
        "partial": true
      },
      {
        "id": "d-cnn",
        "text": "Kichik tasvirda konvolyutsiyani qo‘lda va kodda hisoblang.",
        "detail": "3×3 filtr, qadam va chetlarni to‘ldirishni tushuntiring. Chiqish o‘lchamini oldindan hisoblang."
      },
      {
        "id": "cv2",
        "text": "Kamera hodisasini baholash loyihasini bajaring.",
        "detail": "Ochiq yoki ruxsatli ma’lumot; kamera/kun bo‘yicha ajratish; boshlang‘ich model; precision va recall."
      },
      {
        "id": "cv3",
        "text": "Yorug‘lik, masofa va fon bo‘yicha xatolarni solishtiring.",
        "detail": "Plakat/ekran kabi qiyin salbiy misollarni kiriting. Ko‘rsatilgan qurilmada kechikishni o‘lchang."
      }
    ]
  },
  {
    "id": "llm",
    "name": "LLM — katta til modellari",
    "tag": "03 · TIL VA TRANSFORMERLAR",
    "color": "violet",
    "hours": 88,
    "desc": "NLP asoslaridan attention va transformerga; keyin tayyor modelni moslashtirishga o‘ting.",
    "courses": [
      "hf",
      "d2l"
    ],
    "math": [
      "Shartli ehtimollik, logarifm va cross-entropy.",
      "Embedding, skalyar ko‘paytma, softmax va attention o‘lchamlari.",
      "Q, K, V matritsalari va keyingi token ehtimoli."
    ],
    "outcome": "Oddiy til modelini va tayyor transformerni taqqoslab, cheklovlarini tushuntirasiz.",
    "tasks": [
      {
        "id": "l-math",
        "text": "Softmax va attentionni kichik matritsalar bilan qo‘lda hisoblang.",
        "detail": "QKᵀ/√dₖ hisobini, softmaxni va V bilan ko‘paytirishni ko‘rsating. Har qadamning o‘lchamini yozing."
      },
      {
        "id": "l-token",
        "text": "Tokenlash va sodda ikki-tokenli bog‘lanish til modelini yozing.",
        "detail": "Token lug‘ati, keyingi token ehtimoli va cross-entropy. Kichik korpusda NumPy bilan tekshiring."
      },
      {
        "id": "nlp1",
        "text": "Hugging Face LLM kursining 1–4-boblarini bajaring.",
        "detail": "Transformer, tokenizator, tayyor modelni moslashtirish va saqlashni o‘rganing.",
        "course": "hf",
        "partial": true
      },
      {
        "id": "nlp2",
        "text": "Murojaat matnlarini tasniflash loyihasini bajaring.",
        "detail": "TF-IDF + logistik regressiyani kichik ko‘p tilli transformer bilan alohida sinov to‘plamida solishtiring."
      },
      {
        "id": "nlp3",
        "text": "Har sinfdagi xatolar va ishlash tezligini tahlil qiling.",
        "detail": "Macro-F1, precision/recall va kechikishni yozing. O‘zbekcha matn uchun cheklovlarni aniq ko‘rsating."
      },
      {
        "id": "l-choice",
        "text": "Prompt, RAG va modelni qo‘shimcha o‘qitish qachon kerakligini izohlang.",
        "detail": "Bir xil vazifa uchun uch usulning ma’lumot, baholash, vaqt va xarajat talablarini solishtiring."
      }
    ]
  },
  {
    "id": "engineer",
    "name": "AI Engineer — AI muhandisligi",
    "tag": "04 · ISHLAYDIGAN TIZIM",
    "color": "orange",
    "hours": 72,
    "desc": "Modeldan foydali, tekshiriladigan va qayta ishga tushiriladigan ilovaga o‘ting.",
    "courses": [
      "fsdl",
      "agents",
      "csai"
    ],
    "math": [
      "Vektorlar yaqinligi va qidiruv sifati.",
      "Baholash to‘plami, foizlar va o‘lchovdagi noaniqlik.",
      "Kechikish taqsimoti, token hisobi va so‘rov xarajati."
    ],
    "outcome": "Manbali javob beruvchi kichik RAG xizmatini API, tekshiruv va kuzatuv bilan tayyorlaysiz.",
    "tasks": [
      {
        "id": "e-fsdl",
        "text": "FSDL ma’ruzalaridan LLM tizimi va foydalanishga chiqarish tamoyillarini o‘rganing.",
        "detail": "Tanlangan ma’ruzalar. 2023-yilgi kod o‘rniga joriy rasmiy API hujjatlarini tekshiring.",
        "course": "fsdl",
        "partial": true
      },
      {
        "id": "e-agents",
        "text": "AI agentlari kursining 1-bo‘limini bajaring.",
        "detail": "Vosita chaqiruvi va kuzatuvni tushuntiring. Asoslar sertifikati uchun rasmiy test talabi kamida 80%.",
        "course": "agents",
        "partial": true
      },
      {
        "id": "e-rag",
        "text": "Manbalar bilan javob beradigan kichik RAG yordamchisini quring.",
        "detail": "Hujjatni qismlash → vektorlash → qidirish → javob. Kamida 30 qo‘lda tekshirilgan savol bilan baholang."
      },
      {
        "id": "ship1",
        "text": "ML/CV va NLP tajribalarini tushunarli yo‘riqnoma bilan tayyorlang.",
        "detail": "Ma’lumot versiyasi, ajratish usuli, muhit, buyruqlar, o‘lchovlar va cheklovlarni yozing."
      },
      {
        "id": "ship2",
        "text": "Bitta modelni kichik FastAPI xizmatiga ulang.",
        "detail": "Kirish ma’lumotini tekshirish, saqlangan modelni yuklash va o‘lchangan misol qo‘shing."
      },
      {
        "id": "e-tests",
        "text": "Xato kiritish va noto‘g‘ri javob holatlarini tekshiring.",
        "detail": "Bo‘sh savol, manbasiz javob, zararli hujjat ko‘rsatmasi va ruxsatsiz vosita chaqiruvini sinang."
      },
      {
        "id": "e-monitor",
        "text": "Sifat, kechikish va so‘rov xarajatini qayd eting.",
        "detail": "Bir xil baholash to‘plamida tizim versiyalarini solishtiring. API kalitlarini kodga yozmang; vaqt chegarasi va xato qaydlarini qo‘shing."
      },
      {
        "id": "ship3",
        "text": "Natijalarni kodga qaramasdan tushuntiring.",
        "detail": "Boshlang‘ich model, eng katta xatolar, tanlovlar va keyingi tajribani izohlang. AI muhandisligi doimiy amaliyot bilan rivojlanadi."
      }
    ]
  }
];
const PROJECTS = [
  {
    "id": "regression",
    "label": "01 · MACHINE LEARNING",
    "title": "Regressiyani noldan yozish",
    "subtitle": "Formula → NumPy → tayyor kutubxona bilan tekshirish.",
    "color": "green",
    "stage": "ML bosqichi ichida",
    "hours": 16,
    "tasks": [
      "m-gradient",
      "m-baseline"
    ],
    "steps": [
      "Kichik ochiq jadval oling; o‘qitish va sinov qismlarini ajrating. Ma’lumotdagi miqyosni tekshiring.",
      "MSE va uning hosilasini chiqarib, gradient bo‘yicha tushishni NumPyda yozing. O‘qish tezligini o‘zgartirib natijani kuzating.",
      "sklearn modeli bilan bir xil bo‘linishda solishtiring; xatolar va tanlangan parametrlarni izohlang."
    ],
    "deliverable": "Hosila hisoblari, qayta bajariladigan daftar va model natijalari jadvali."
  },
  {
    "id": "cv",
    "label": "02 · DEEP LEARNING / CV",
    "title": "Kamera modelini dalil bilan baholash",
    "subtitle": "Kichik tasvir klassifikatori yoki telefon ishlatish holati.",
    "color": "blue",
    "stage": "ML asoslari va DL o‘qitish siklidan keyin",
    "hours": 20,
    "tasks": [
      "cv2",
      "cv3"
    ],
    "steps": [
      "Ochiq yoki foydalanishga ruxsatli tasvirlar oling. Ko‘rilmagan kamera yoki kunni sinov uchun ajrating.",
      "Oddiy model bilan boshlang, keyin tayyor tarmoqni moslashtiring. Bir vaqtning o‘zida ko‘p model qo‘shmang.",
      "Xira yorug‘lik, kichik obyekt va plakat/ekranlardagi xatolarni tekshiring. Precision, recall va aniq qurilmadagi kechikishni yozing."
    ],
    "deliverable": "Tajriba daftari, xatolar galereyasi, xatolar matritsasi va model tavsifi."
  },
  {
    "id": "nlp",
    "label": "03 · LLM / NLP",
    "title": "Murojaat matnlarini yo‘naltirish",
    "subtitle": "O‘zbekcha/inglizcha matnlarni bir nechta sinfga ajrating.",
    "color": "violet",
    "stage": "DL va Hugging Face 1–4-boblaridan keyin",
    "hours": 16,
    "tasks": [
      "nlp2",
      "nlp3"
    ],
    "steps": [
      "Ochiq yoki ruxsatli matn to‘plami tanlang. Takrorlarni tozalab, yakuniy sinov qismini ajrating.",
      "TF-IDF + logistik regressiyani kichik tayyor ko‘p tilli model bilan solishtiring.",
      "Macro-F1, sinflar bo‘yicha aniqlik va kamida 20 xatoni tahlil qiling. Ikki model tezligini bir xil qurilmada o‘lchang."
    ],
    "deliverable": "Modellar taqqoslanishi, xatolar tahlili, saqlangan model va tokenizator."
  },
  {
    "id": "rag",
    "label": "04 · AI MUHANDISLIGI",
    "title": "Hujjatlardan javob topadigan yordamchi",
    "subtitle": "Manba keltiradigan, bilmasa aytadigan kichik RAG tizimi.",
    "color": "orange",
    "stage": "LLM asoslaridan keyin",
    "hours": 28,
    "tasks": [
      "e-rag",
      "e-monitor"
    ],
    "steps": [
      "Kichik ochiq yoki ruxsatli hujjatlar to‘plamini indekslang; kamida 30 baholash savolini alohida saqlang.",
      "Qidirilgan qismlar asosida javob yarating va manbasini ko‘rsating. Ishonchli manba topilmasa, noaniqlikni bildiring.",
      "API, tekshiruvlar va xato qaydlarini qo‘shing. Qidiruv sifati, javobning manbaga mosligi, tezlik va so‘rov xarajatini o‘lchang."
    ],
    "deliverable": "Ishga tushirish yo‘riqnomasi, baholash natijalari, kichik API va tizim cheklovlari."
  }
];
const MATH_TOPICS = [
  {
    "stage": "ml",
    "title": "ML: vektor, ehtimollik va hosila",
    "formula": "ŷ = wᵀx + b;   L = (1/n) Σ(ŷᵢ − yᵢ)²",
    "explain": "x — belgilar vektori, w — o‘rganiladigan vaznlar, b — siljish. MSE bashorat xatosining kvadratini o‘rtachalaydi. Gradient yo‘qotishni qaysi yo‘nalishda o‘zgartirishini ko‘rsatadi.",
    "practice": "x = [1, 2], y = [2, 4], b = 0, w = 1 uchun L = 2,5 va dL/dw = −5. η = 0,1 bilan yangi w = 1,5; yangi L = 0,625.",
    "check": "Har bir belgi va matritsa o‘lchamini tushuntiring. Keyin hosilani qo‘lda va sonli usulda bir xil nuqtada tekshiring.",
    "task": "m-gradient"
  },
  {
    "stage": "dl",
    "title": "DL: zanjir qoidasi va orqaga tarqatish",
    "formula": "dL/dw = (dL/da) · (da/dz) · (dz/dw)",
    "explain": "z = wx + b, a = z², L = (a − y)² deb oling. Yakuniy xatoning vaznga bog‘liqligi oradagi o‘zgarishlar ko‘paytmasi orqali topiladi. Katta tarmoqlarda ham shu tamoyil ishlaydi.",
    "practice": "x = 2, w = 1, b = 0, y = 1: z = 2, a = 4, L = 9. dL/dw = 6 × 4 × 2 = 48. Shu misolni PyTorch autograd bilan tekshiring.",
    "check": "Natijani yodlash emas: hisoblash grafigini chizib, har qadamning hosilasini ko‘rsating.",
    "task": "d-math"
  },
  {
    "stage": "llm",
    "title": "LLM: softmax va attention",
    "formula": "Attention(Q, K, V) = softmax(QKᵀ / √dₖ) V",
    "explain": "Q — so‘rov, K — kalit, V — qiymat matritsalari. Skalyar ko‘paytma moslik ballarini beradi; softmax ularni musbat va yig‘indisi 1 bo‘lgan og‘irliklarga aylantiradi.",
    "practice": "Q va K o‘lchami (2, 2), V o‘lchami (2, 3) bo‘lsin. QKᵀ → (2, 2), qatorlar bo‘yicha softmax → (2, 2), yakuniy natija → (2, 3). Keyin sonlar qo‘yib hisoblang.",
    "check": "√dₖ bilan masshtablash ma’nosini, maskalashni va bir tokenning qaysi tokenga qarayotganini tushuntiring.",
    "task": "l-math"
  },
  {
    "stage": "engineer",
    "title": "AI muhandisligi: qidiruv va o‘lchov",
    "formula": "cos(u, v) = (u · v) / (‖u‖ ‖v‖)",
    "explain": "Nol bo‘lmagan vektorlar uchun kosinus o‘xshashligi yo‘nalish yaqinligini o‘lchaydi. Yaqin vektor hali to‘g‘ri javob kafolati emas: qidiruv va yakuniy javob alohida baholanadi.",
    "practice": "u = [1, 0], v = [1, 1] uchun cos(u, v) = 1/√2 ≈ 0,707. 30 savolli baholashda qidiruv kerakli hujjatni topganmi va javob manbaga mosmi — ikkalasini yozing.",
    "check": "O‘rtacha kechikish bilan p95 farqini tushuntiring. Kichik baholash to‘plamidagi foizlarni mutlaq aniqlik deb qabul qilmang.",
    "task": "e-monitor"
  }
];
