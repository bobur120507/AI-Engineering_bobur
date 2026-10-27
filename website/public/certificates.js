'use strict';
const CERTIFICATIONS = [
  {
    "id": "nvidia",
    "provider": "NVIDIA",
    "title": "Generativ AI va LLM sertifikati",
    "official": "NVIDIA-Certified Associate: Generative AI LLMs (NCA-GENL)",
    "status": "Amaldagi boshlang‘ich daraja",
    "stage": "3-bosqich LLMdan keyin, RAG loyihasi bilan",
    "cost": "Imtihon: 125 AQSh dollari; tayyorlov va hisoblash xarajatlari alohida.",
    "duration": "1 soat · inglizcha · sertifikat 2 yil amal qiladi",
    "prereq": "Generativ AI va LLM asoslari. Bu rejada avval ML, DL va LLM bosqichlarini o‘ting.",
    "coverage": "CV: DL ochiq mashqlari orqali poydevor. NLP/LLM: prompt, modelni baholash, RAG va ilovaga ulash.",
    "legacy": "Professional NCP-GENL ham bor; siz uchun hozir boshlang‘ich NCA-GENL tanlandi. DLI kursini tugatish sertifikati NCA imtihon sertifikati bilan bir xil emas.",
    "source": "https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-associate/",
    "oldSource": null,
    "resources": [
      {
        "title": "NVIDIA: ochiq DL amaliy kursi",
        "url": "https://github.com/NVDLI/fundamentals-of-deep-learning",
        "price": "Ochiq material; hisoblash muhiti alohida",
        "desc": "PyTorch, neyron tarmoqlar, CNN va transfer learning mashqlari."
      },
      {
        "title": "NVIDIA: imtihon mavzulari va tavsiya etilgan o‘qish",
        "url": "https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-associate/",
        "price": "Mavzular va o‘qish ro‘yxati ochiq",
        "desc": "Core ML, ma’lumot tahlili, tajriba, dasturlash va ishonchli AI bo‘yicha bilim bo‘shliqlarini toping."
      },
      {
        "title": "NVIDIA: generativ AI o‘quv yo‘llari",
        "url": "https://www.nvidia.com/en-us/learn/learning-path/generative-ai-llm/",
        "price": "Pulli kurslar ham bor; har kurs narxini tekshiring",
        "desc": "LLM ilovalari va RAG bo‘yicha qo‘shimcha amaliy tayyorgarlik."
      }
    ],
    "tasks": [
      {
        "id": "cert-nv-study",
        "text": "NVIDIA mavzularini DL/LLM bilimlarim bilan solishtirdim.",
        "detail": "Ochiq materialdan mashq bajaring; tushunilmagan mavzularni qaydlarga yozing."
      },
      {
        "id": "cert-nv-project",
        "text": "RAG yoki kichik LLM ilovasini baholadim.",
        "detail": "Ma’lumotni tayyorlash, javob sifati va xatolarni izohlang."
      },
      {
        "id": "cert-nv-ready",
        "text": "Rasmiy talablar va imtihon shartlarini ko‘rib chiqdim.",
        "detail": "Bu belgi tayyorgarlik holati; imtihondan o‘tganingizni yoki sertifikat berilganini bildirmaydi."
      }
    ]
  },
  {
    "id": "aws",
    "provider": "AWS",
    "title": "AWS: Machine Learning muhandisligi",
    "official": "AWS Certified Machine Learning Engineer – Associate",
    "status": "Amaldagi yo‘l · yangilangan beta imtihon",
    "stage": "4-bosqich AI muhandisligi va AWS amaliyotidan keyin",
    "cost": "Yangilangan beta: 75 AQSh dollari; avvalgi versiya: 150 dollar. Versiya, til va narxni rasmiy sahifada tekshiring.",
    "duration": "Associate daraja · sertifikat 3 yil amal qiladi",
    "prereq": "ML/MLOps poydevori va AWS xizmatlari bilan amaliy tajriba. Provayder taxminan bir yillik tegishli tajribani ko‘zda tutadi.",
    "coverage": "CV/NLP: muayyan modeldan ko‘ra ma’lumot, o‘qitish, foydalanishga chiqarish va kuzatuv. Yangilangan yo‘lda GenAI, RAG va agentlar ham bor.",
    "legacy": "AWS Machine Learning – Specialty imtihoni uchun oxirgi kun 2026-yil 31-mart bo‘lgan. Shu sabab yangi tayyorgarlik uchun Engineer – Associate yo‘li berildi. Inglizcha MLA-C01 uchun oxirgi kun 2026-yil 28-sentabr bo‘lgan.",
    "source": "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    "oldSource": "https://aws.amazon.com/certification/certified-machine-learning-specialty/",
    "resources": [
      {
        "title": "AWS Skill Builder: rasmiy tayyorlov rejasi",
        "url": "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
        "price": "Bepul materiallar va pulli obuna imkoniyatlari",
        "desc": "Joriy imtihon versiyasiga mos qo‘llanma va tayyorlov rejasini shu sahifadan oching. Eski C01 rejasini yangi beta bilan aralashtirmang."
      },
      {
        "title": "AWS: bepul imtihon tayyorlov materiallari",
        "url": "https://aws.amazon.com/certification/certification-prep/",
        "price": "Ayrim kurslar va savol to‘plamlari bepul",
        "desc": "To‘liq amaliy imtihon va ayrim laboratoriyalar obuna talab qilishi mumkin."
      },
      {
        "title": "AWS Skill Builder: o‘quv markazi",
        "url": "https://skillbuilder.aws/",
        "price": "Bepul va pulli materiallar mavjud",
        "desc": "SageMaker AI va AWS ML xizmatlari bo‘yicha bilim bo‘shliqlariga mos mashqlar tanlang. Bulut resurslari xarajati alohida."
      }
    ],
    "tasks": [
      {
        "id": "cert-aws-guide",
        "text": "Amaldagi AWS versiyasi va mavzularini tekshirdim.",
        "detail": "Imtihon sahifasida beta holati, til va rasmiy qo‘llanmani ko‘ring."
      },
      {
        "id": "cert-aws-lab",
        "text": "AWSda bitta kichik ML ish jarayonini mashq qildim.",
        "detail": "Ma’lumot → o‘qitish → modelni chiqarish → kuzatuv. Resurslar xarajatini hisobga oling."
      },
      {
        "id": "cert-aws-ready",
        "text": "Rasmiy savollar orqali bilim bo‘shliqlarini tekshirdim.",
        "detail": "Tayyorlovni tugatish sertifikat olindi degani emas; haqiqiy sertifikat uchun rasmiy imtihon talab etiladi."
      }
    ]
  },
  {
    "id": "azure",
    "provider": "Microsoft",
    "title": "Azure: AI ilovalari va agentlar",
    "official": "Microsoft Certified: Azure AI Apps and Agents Developer Associate (AI-103)",
    "status": "AI-102 yopilgan · joriy yo‘l AI-103",
    "stage": "4-bosqich AI muhandisligi va Azure amaliyotidan keyin",
    "cost": "Microsoft Learn mustaqil materiallari bepul. Imtihon pulli; yakuniy narx topshiriladigan mamlakat yoki hududga bog‘liq. Azure resurslari alohida.",
    "duration": "O‘rta daraja · Python va Microsoft Foundry",
    "prereq": "Python ilovalari, umumiy AI, generativ AI va Azure xizmatlari bilan amaliy tanishlik.",
    "coverage": "CV: tasvir bilan ishlash. NLP: matn tahlili va axborot ajratish. LLM: generativ AI va agentik yechimlar.",
    "legacy": "Siz aytgan Microsoft Certified: Azure AI Engineer Associate (AI-102) 2026-yil 30-iyunda yopilgan. Uning tarixiy nomi saqlandi; yangi tayyorgarlik uchun AI-103 yo‘li va joriy qo‘llanma berildi.",
    "source": "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-apps-and-agents-developer-associate/",
    "oldSource": "https://learn.microsoft.com/en-us/credentials/support/retired-certification-exams",
    "resources": [
      {
        "title": "Microsoft: AI-103 o‘quv va sertifikat yo‘li",
        "url": "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-apps-and-agents-developer-associate/",
        "price": "Mustaqil o‘rganish; imtihon alohida pulli",
        "desc": "Prepare for the exam bo‘limidan joriy Learn modullari va mashqlarni oching."
      },
      {
        "title": "Microsoft: AI-103 imtihon qo‘llanmasi",
        "url": "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103",
        "price": "Rasmiy qo‘llanma va manbalar bepul",
        "desc": "AI yechimini boshqarish, generativ AI va agentlar, CV, matn tahlili va axborot ajratishni ketma-ket o‘rganing."
      }
    ],
    "tasks": [
      {
        "id": "cert-az-guide",
        "text": "AI-103 qo‘llanmasini ko‘rib, Learn mavzularini rejalashtirdim.",
        "detail": "AI-102 uchun yopilgan imtihonga tayyorlanish o‘rniga joriy mavzularni tekshiring."
      },
      {
        "id": "cert-az-project",
        "text": "Azureda bitta kichik AI ilovasini baholadim.",
        "detail": "Hujjat qidiruvi, matn tahlili yoki agent. Sifat, kirish huquqlari va xarajatni o‘lchang."
      },
      {
        "id": "cert-az-ready",
        "text": "Rasmiy mashq baholashi va zaif mavzularni ko‘rib chiqdim.",
        "detail": "Practice Assessment sahifasi akkaunt talab qilishi mumkin. Yakuniy sertifikat faqat rasmiy talablar bajarilganda beriladi."
      }
    ]
  }
];
