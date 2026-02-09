// src/i18n.jsx
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const DICT = {
  // Navbar + Footer
  "nav.home": { en: "Home", ar: "الرئيسية" },
  "nav.about": { en: "About", ar: "نبذة" },
  "nav.skills": { en: "Skills", ar: "المهارات" },
  "nav.educations": { en: "Educations", ar: "التعليم" },
  "nav.courses": { en: "Courses", ar: "الدورات" },
  "nav.projects": { en: "Projects", ar: "المشاريع" },
  "nav.contact": { en: "Contact", ar: "تواصل" },
  "footer.copy": {
    en: "Built with passion by Mahmoud Ibrahim © 2025",
    ar: "بُني بشغف بواسطة محمود إبراهيم © ٢٠٢٥",
  },

  // Hero
  "hero.title.1": { en: "Hi, I'm", ar: "مرحبًا، أنا" },
  "hero.title.2": { en: "Mahmoud", ar: "محمود" },
  "hero.title.3": { en: "Ibrahim", ar: "إبراهيم" },
  "hero.subtitle": {
    en: "I create stellar web experiences with modern technologies.",
    ar: "أصنع تجارب ويب مميّزة باستخدام تقنيات حديثة.",
  },
  "hero.subtitle2": {
    en: "Specializing in front-end development, I build interfaces that are both beautiful and functional.",
    ar: "أختص بتطوير الواجهات الأمامية وأبني واجهات جميلة وعملية في نفس الوقت.",
  },
  "hero.viewWork": { en: "View My Work", ar: "شاهد أعمالي" },
  "hero.download": { en: "Download CV", ar: "تحميل السيرة الذاتية" },
  "hero.scroll": { en: "Scroll", ar: "اسحب لأسفل" },

  // Hero CV Modal
  "hero.cv.title":      { en: "Download CV", ar: "تنزيل السيرة الذاتية" },
  "hero.cv.subtitle":   { en: "Are you sure you want to download the CV?", ar: "هل تريد تنزيل السيرة الذاتية؟" },
  "hero.cv.confirmBtn": { en: "Confirm", ar: "تأكيد" },
  "hero.cv.cancelBtn":  { en: "Cancel", ar: "إلغاء" },

  // About
  "about.title": { en: "About", ar: "نبذة" },
  "about.me": { en: "Me", ar: "عني" },
  "about.role": {
    en: "Front end developer | React.js | Next.js |",
    ar: "مطوّر واجهات أمامية | React.js | Next.js |",
  },
  "about.description": {
    en: "I'm a Front-End developer who loves building smooth, fast, and engaging user experiences. I turn ideas into clean, modern UIs using the latest web technologies. Great design is about both looks and how users interact with the product. I'm improving through real projects and hands-on training, and I'm excited to join a team that values creativity and innovation.",
    ar: "أنا مطوّر واجهات أمامية أعشق بناء تجارب استخدام سلسة وسريعة وجذّابة. أحوّل الأفكار إلى واجهات حديثة ونظيفة باستخدام أحدث تقنيات الويب. التصميم الجيد يهتم بالمظهر وطريقة تفاعل المستخدم. أطور مهاراتي عبر مشاريع حقيقية وتدريب عملي، ومتحمس للانضمام إلى فريق يقدّر الإبداع والابتكار.",
  },
  "about.card1.title": { en: "Web Development", ar: "تطوير الويب" },
"about.card1.desc": {
  en: "Building responsive interfaces with React.js, Next.js, HTML, CSS, JavaScript, Tailwind, and Bootstrap.",
  ar: "بناء واجهات متجاوبة باستخدام React.js و Next.js و HTML و CSS و JavaScript و Tailwind و Bootstrap.",
},
  "about.card2.title": { en: "Performance & Speed", ar: "الأداء والسرعة" },
"about.card2.desc": {
  en: "Fast loading and smooth performance with Next.js optimization and modern best practices.",
  ar: "تحميل سريع وأداء سلس مع تحسينات Next.js وأفضل الممارسات الحديثة.",
},
  "about.photo.alt": { en: "Mahmoud Ibrahim", ar: "محمود إبراهيم" },
  "about.card3.title": { en: "Quality & Craft", ar: "الجودة والإتقان" },
  "about.card3.desc": {
    en: "Attention to accessibility, performance, and clean code with a focus on user‑centric design.",
    ar: "اهتمام بإتاحة الاستخدام والأداء وكود نظيف مع تركيز على تصميم متمحور حول المستخدم.",
  },

  // Skills
  "skills.title.1": { en: "My", ar: "مهاراتي" },
  "skills.title.2": { en: "Skills", ar: "المهارات" },
  "skills.subtitle": {
    en: "Technologies and tools I work with to bring ideas to life",
    ar: "التقنيات والأدوات التي أستخدمها لتحويل الأفكار إلى واقع",
  },
  "skills.filter.all": { en: "All", ar: "الكل" },
  "skills.filter.frontend": { en: "Frontend", ar: "الواجهات الأمامية" },
  "skills.filter.tools": { en: "Tools", ar: "أدوات" },

  // Education
  "education.title.1": { en: "My", ar: "رحلتي" },
  "education.title.2": { en: "Education", ar: "التعليم" },
  "education.subtitle": {
    en: "My educational journey and professional development experiences",
    ar: "رحلتي التعليمية وتجارب التطوير المهني",
  },
  "education.item.1.title": {
    en: "Software Development",
    ar: "تطوير البرمجيات",
  },
  "education.item.1.institution": {
    en: "Borg Al Arab Technological University",
    ar: "جامعة برج العرب التكنولوجية",
  },
  "education.item.1.dates": {
    en: "09/2022 – 07/2026",
    ar: "09/2022 – 07/2026",
  },
  "education.item.1.location": {
    en: "Alexandria, Borg El Arab, Egypt",
    ar: "الإسكندرية، برج العرب، مصر",
  },
  "education.item.2.title": {
    en: "Front-End Developer | React.js | Next.js |",
    ar: "مطوّر واجهات أمامية | React.js | Next.js |",
  },
  "education.item.2.institution": {
    en: "Route Academy",
    ar: "Route Academy",
  },
  "education.item.2.dates": {
    en: "03/2025 – 10/2025",
    ar: "03/2025 – 10/2025",
  },
  "education.item.2.location": {
    en: "Egypt, Cairo",
    ar: "مصر، القاهرة",
  },
  "education.item.3.title": {
    en: "Freelancing",
    ar: "العمل الحر",
  },
  "education.item.3.institution": {
    en: "Information Technology Industry Development Agency (ITIDA)",
    ar: "هيئة تنمية صناعة تكنولوجيا المعلومات (إيتيدا)",
  },
  "education.item.3.dates": {
    en: "06/2024 – 09/2025",
    ar: "06/2024 – 09/2025",
  },
  "education.item.3.location": {
    en: "Online",
    ar: "أونلاين",
  },
  "education.item.4.title": {
    en: "Front-End (React.js)",
    ar: "الواجهات الأمامية (React.js)",
  },
  "education.item.4.institution": {
    en: "DevWave",
    ar: "DevWave",
  },
  "education.item.4.dates": {
    en: "Training for a month",
    ar: "تدريب لمدة شهر",
  },
  "education.item.4.location": {
    en: "Online",
    ar: "أونلاين",
  },

  // Courses
  "courses.title.1": { en: "Professional", ar: "دورات" },
  "courses.title.2": { en: "Courses", ar: "احترافية" },
  "courses.subtitle": {
    en: "Continuous learning and skill development",
    ar: "تعلم مستمر وتطوير مهارات",
  },
  "courses.completed": { en: "Completed", ar: "مكتملة" },
  "courses.stats.completed": { en: "Courses Completed", ar: "الدورات المكتملة" },
  "courses.stats.years": { en: "Years of Learning", ar: "سنوات من التعلم" },
  "courses.stats.rate": { en: "Success Rate", ar: "معدل النجاح" },
  "courses.item.1.title": {
    en: "Database Fundamentals",
    ar: "أساسيات قواعد البيانات",
  },
  "courses.item.1.institution": {
    en: "Mahara Tac",
    ar: "مهارة تك",
  },
  "courses.item.1.description": {
    en: "This course introduces the fundamentals of databases, focusing on data organization, normalization techniques (1NF, 2NF, 3NF), and Microsoft Access for creating tables, forms, queries, and reports.",
    ar: "هذه الدورة تعرّف بأساسيات قواعد البيانات مع التركيز على تنظيم البيانات وتقنيات التطبيع (1NF, 2NF, 3NF)، واستخدام Microsoft Access لإنشاء الجداول والنماذج والاستعلامات والتقارير.",
  },
  "courses.item.1.dates": {
    en: "09/2024 – 09/2024",
    ar: "09/2024 – 09/2024",
  },
  "courses.item.1.location": {
    en: "Online",
    ar: "أونلاين",
  },
  "courses.item.2.title": {
    en: "Front-End Development Course",
    ar: "دورة تطوير واجهات أمامية",
  },
  "courses.item.2.institution": {
    en: "ARRAY Academy",
    ar: "ARRAY Academy",
  },
  "courses.item.2.description": {
    en: "Completed a comprehensive training program at ARRAY Academy, mastering HTML, CSS, and JavaScript for building interactive web interfaces. Gained expertise in Bootstrap for responsive design and React for creating dynamic, component-based applications, enhancing my ability to develop modern, user-focused web solutions.",
    ar: "أنهيت برنامجًا تدريبيًا متكاملًا في ARRAY Academy، أتقنت من خلاله HTML وCSS وJavaScript لبناء واجهات ويب تفاعلية، واكتسبت خبرة في Bootstrap للتصميم المتجاوب وReact لبناء تطبيقات ديناميكية تعتمد على المكوّنات، مما عزّز قدرتي على تطوير حلول ويب عصرية ومتمحورة حول المستخدم.",
  },
  "courses.item.2.dates": {
    en: "07/2023 – 09/2024",
    ar: "07/2023 – 09/2024",
  },
  "courses.item.2.location": {
    en: "Cairo, Egypt",
    ar: "القاهرة، مصر",
  },
  "courses.item.3.title": {
    en: "Introduction To Banking",
    ar: "مقدمة في العمل المصرفي",
  },
  "courses.item.3.institution": {
    en: "CFI",
    ar: "CFI",
  },
  "courses.item.3.description": {
    en: "Understanding of banking principles, covering types of banks, regulations, financial products, and their economic roles.",
    ar: "فهم مبادئ العمل المصرفي، مع تغطية لأنواع البنوك، واللوائح المنظمة، والمنتجات المالية، ودورها في الاقتصاد.",
  },
  "courses.item.3.dates": {
    en: "08/2022 – 09/2022",
    ar: "08/2022 – 09/2022",
  },
  "courses.item.3.location": {
    en: "Online",
    ar: "أونلاين",
  },

  // Projects
  "projects.title.1": { en: "Featured", ar: "أبرز" },
  "projects.title.2": { en: "Projects", ar: "المشاريع" },
  "projects.subtitle": {
    en: "Recent projects crafted with attention to detail",
    ar: "مشاريع حديثة بعناية واهتمام بالتفاصيل",
  },
  "projects.stats.completed": { en: "Completed Projects", ar: "مشاريع مكتملة" },
  "projects.stats.live": { en: "Live Projects", ar: "مشاريع مباشرة" },
  "projects.stats.tech": { en: "Technologies Used", ar: "التقنيات المستخدمة" },
  "projects.viewAll": { en: "View All Projects", ar: "عرض كل المشاريع" },
  "projects.desc.amazon": {
    en: "Amazon Clone: A full-featured e-commerce web app built with React, Firebase, and Stripe. It offers an Amazon-like experience with user authentication, dynamic product listings, shopping cart, and secure online payments — all in a modern, responsive design.",
    ar: "نسخة مشابهة لموقع أمازون، تطبيق تجارة إلكترونية متكامل مبني باستخدام React وFirebase وStripe. يقدّم تجربة قريبة من أمازون مع تسجيل دخول للمستخدمين، عرض ديناميكي للمنتجات، سلة مشتريات، وطرق دفع إلكترونية آمنة في واجهة حديثة ومتجاوبة.",
  },
  "projects.desc.loginSystem": {
    en: "As a Front-End Developer, I built a modern web project using HTML, CSS, JavaScript & Bootstrap. It includes essential pages: Login, Registration, and Welcome, with a clean UI and localStorage support for temporary user data. Project Features: 1-Login Page 2-Registration Page 3-Welcome Page after Login 4-Clean and easy-to-use UI.",
    ar: "كمطوّر واجهات أمامية قمت ببناء مشروع ويب حديث باستخدام HTML وCSS وJavaScript وBootstrap. يحتوي المشروع على صفحات أساسية: تسجيل الدخول، التسجيل، وصفحة ترحيب بعد تسجيل الدخول، مع واجهة نظيفة ودعم تخزين localStorage للبيانات المؤقتة. مميزات المشروع: صفحة تسجيل دخول، صفحة تسجيل، صفحة ترحيب بعد الدخول، وواجهة بسيطة وسهلة الاستخدام.",
  },
  "projects.desc.decor": {
    en: "A responsive décor platform that allows users to browse the latest interior designs and easily choose what suits them. The project focuses on providing a smooth user experience and a modern interface, with light/dark mode support for comfortable browsing across all devices.",
    ar: "منصة ديكور متجاوبة تتيح للمستخدمين تصفّح أحدث تصميمات الديكور الداخلي واختيار ما يناسبهم بسهولة. يركّز المشروع على تقديم تجربة مستخدم سلسة وواجهة حديثة، مع دعم الوضعين الليلي والنهاري لتصفح مريح على مختلف الأجهزة.",
  },
  "projects.desc.weather": {
    en: "A fully responsive weather app built with HTML, CSS, and JavaScript. It fetches real-time weather data and shows temperature, conditions, humidity, and wind speed in a clean, user-friendly interface that works smoothly on all devices.",
    ar: "تطبيق طقس متجاوب بالكامل مبني باستخدام HTML وCSS وJavaScript. يجلب بيانات الطقس الفعلية ويعرض درجة الحرارة، حالة الجو، الرطوبة، وسرعة الرياح في واجهة نظيفة وسهلة الاستخدام تعمل بسلاسة على جميع الأجهزة.",
  },
  "projects.desc.hagogah": {
    en: "A web-based platform designed for showcasing and managing car sales. Provides a user-friendly interface to browse through a variety of car models, view detailed specifications, and compare options with filtering capabilities.",
    ar: "منصة ويب مخصّصة لعرض وإدارة بيع السيارات. توفّر واجهة سهلة الاستخدام لتصفّح مجموعة من موديلات السيارات، مع عرض المواصفات بالتفصيل، وإمكانية المقارنة بين الخيارات باستخدام فلاتر مخصّصة.",
  },
  "projects.desc.healthcare": {
    en: "A responsive healthcare platform designed to manage patient information with ease. Built with Next.js, JavaScript, and Tailwind CSS, delivering a modern, secure, and user-friendly web application for healthcare needs.",
    ar: "منصة رعاية صحية متجاوبة مصممة لإدارة بيانات المرضى بسهولة. تم بناؤها باستخدام Next.js وJavaScript وTailwind CSS لتقديم تطبيق ويب حديث وآمن وسهل الاستخدام يلبي احتياجات قطاع الرعاية الصحية.",
  },

  // Contact
  "contact.title.1": { en: "Get In", ar: "تواصل" },
  "contact.title.2": { en: "Touch", ar: "معي" },
  "contact.subtitle": {
    en: "Have a project or want to collaborate?",
    ar: "عندك مشروع أو حابب نتعاون؟ تواصل معي.",
  },
  "contact.info.title": { en: "Contact Information", ar: "معلومات التواصل" },
  "contact.send.title": { en: "Send a Message", ar: "أرسل رسالة" },
  "contact.connect": { en: "Connect With Me", ar: "تواصل معي على" },
  "contact.info.email": { en: "Email", ar: "البريد الإلكتروني" },
  "contact.info.phone": { en: "Phone", ar: "الهاتف" },
  "contact.info.location": { en: "Location", ar: "الموقع" },
  "contact.info.whatsapp": { en: "WhatsApp", ar: "واتساب" },
  "contact.form.name": { en: "Your Name", ar: "اسمك" },
  "contact.form.email": { en: "Your Email", ar: "بريدك الإلكتروني" },
  "contact.form.message": { en: "Your Message", ar: "رسالتك" },
  "contact.form.placeholder.name": { en: "Mahmoud Ibrahim", ar: "محمود إبراهيم" },
  "contact.form.placeholder.email": { en: "example@email.com", ar: "example@email.com" },
  "contact.form.placeholder.message": { en: "Hello, I'd like to discuss...", ar: "مرحبًا، أود مناقشة..." },
  "contact.form.send": { en: "Send Message", ar: "إرسال الرسالة" },

  // Toasts
  "toast.fill": { en: "Please fill in all fields", ar: "من فضلك اكمل الحقول" },
  "toast.email.invalid": { en: "Invalid email address", ar: "البريد الإلكتروني غير صحيح" },
  "toast.prepared.title": { en: "Message Prepared!", ar: "تم تجهيز الرسالة!" },
  "toast.prepared.desc": { en: "I'll get back to you soon. Thank you ❤️", ar: "سأتواصل معك قريبًا. شكرًا لك ❤️" },
  "toast.fill.desc": {
    en: "Name, email, and message are required.",
    ar: "الاسم والبريد والرسالة مطلوبة.",
  },
  "toast.email.invalid.desc": {
    en: "Please check your email format and try again.",
    ar: "راجع صيغة البريد الإلكتروني وحاول مرة أخرى.",
  },

  // Footer
  "footer.quickNav": { en: "Quick Navigation", ar: "روابط سريعة" },
  "footer.getInTouch": { en: "Get in Touch", ar: "تواصل معي" },
  "footer.location": { en: "Alexandria, Egypt", ar: "الإسكندرية، مصر" },
  "footer.whatsappLabel": { en: "WhatsApp:", ar: "واتساب:" },

  // Not Found
  "notfound.message": { en: "Page not found", ar: "الصفحة غير موجودة" },
  "notfound.goHome": { en: "Go Home", ar: "العودة للرئيسية" },
};

const LangContext = createContext(null);
export const useLang = () => useContext(LangContext);

export function LangProvider({ children }) {
  // ✅ نسمح بتغيير اللغة + نحفظ آخر اختيار في المتصفّح
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("lang") || "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // تجاهل أي خطأ في التخزين المحلي
    }
  }, [lang]);

  const t = useMemo(
    () => (key) => {
      const entry = DICT[key];
      if (!entry) return key;
      // لما اللغة ثابتة EN، ده يرجّع النسخة الإنجليزية دائماً
      return entry[lang] ?? entry.en ?? key;
    },
    [lang]
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function Text({ k, as: Tag = "span", ...rest }) {
  const { t } = useLang();
  return <Tag {...rest}>{t(k)}</Tag>;
}
