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
    en: "Building responsive interfaces with React, HTML, CSS, JavaScript, Tailwind, and Bootstrap.",
    ar: "بناء واجهات متجاوبة باستخدام React وHTML وCSS وJavaScript وTailwind وBootstrap.",
  },
  "about.card2.title": { en: "Web Development", ar: "تطوير الويب" },
  "about.card2.desc": {
    en: "Building responsive interfaces with React, HTML, CSS, JavaScript, Tailwind, and Bootstrap.",
    ar: "بناء واجهات متجاوبة باستخدام React وHTML وCSS وJavaScript وTailwind وBootstrap.",
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

  // Contact
  "contact.title.1": { en: "Get In", ar: "تواصل" },
  "contact.title.2": { en: "Touch", ar: "معي" },
  "contact.subtitle": {
    en: "Have a project or want to collaborate?",
    ar: "عندك مشروع أو حابب نتعاون؟ تواصل معي.",
  },
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

  // Not Found
  "notfound.message": { en: "Page not found", ar: "الصفحة غير موجودة" },
  "notfound.goHome": { en: "Go Home", ar: "العودة للرئيسية" },
};

const LangContext = createContext(null);
export const useLang = () => useContext(LangContext);

export function LangProvider({ children }) {
  // ✅ ثبّت اللغة على الإنجليزية دائماً
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    try {
      // نكتب "en" في التخزين المحلي حتى لو كان القديم "ar"
      localStorage.setItem("lang", lang);
    } catch {}
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
