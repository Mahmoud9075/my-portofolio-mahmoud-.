import { cn } from "@/lib/utils";
import { Menu, X, Languages } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { useLang } from "@/i18n";

// ✅ عناصر النافبار دايمًا إنجليزي (من غير Courses)
const navItems = [
  { key: "nav.home",       href: "#hero" },
  { key: "nav.about",      href: "#about" },
  { key: "nav.skills",     href: "#skills" },
  { key: "nav.educations", href: "#educations" },
  { key: "nav.projects",   href: "#projects" },
  { key: "nav.contact",    href: "#contact" },
];

// ✅ اللغات المتاحة في الموقع
const LANG_OPTIONS = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
];

export const Navbar = () => {
  const { t, lang, setLang } = useLang();

  const brandFirst = "Mahmoud";
  const brandLast  = "Ibrahim";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (isMenuOpen) setIsMenuOpen(false);
    };
    const handleActiveLink = () => {
      const sections = navItems.map((item) => ({
        id: item.href.substring(1),
        element: document.getElementById(item.href.substring(1)),
      }));
      let found = false;
      for (const s of sections) {
        if (s.element) {
          const r = s.element.getBoundingClientRect();
          if (r.top <= 100 && r.bottom >= 100) {
            setActiveLink(`#${s.id}`);
            found = true;
            break;
          }
        }
      }
      if (!found) setActiveLink("#hero");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scroll", handleActiveLink, { passive: true });
    handleActiveLink();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleActiveLink);
    };
  }, [isMenuOpen]);

  const handleSelectLang = (code) => {
    setLang(code);
    setIsLangOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
          onClick={() => {
            setActiveLink("#hero");
            setIsMenuOpen(false);
          }}
        >
          <span className="relative z-10 font-bold">
            <span className="text-glow text-foreground text-2xl">{brandFirst}</span>{" "}
            {brandLast}
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center space-x-8">
            {navItems.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-foreground/80 hover:text-primary transition-colors duration-300 opacity-0 anim-slide-in-right",
                  activeLink === item.href &&
                    "text-primary after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-primary"
                )}
                style={{
                  animationDelay: `${0.3 + idx * 0.08}s`,
                }}
                onClick={() => setActiveLink(item.href)}
              >
                {t(item.key)}
              </a>
            ))}
          </div>

          {/* ✅ زر تغيير اللغة - سطح المكتب */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen((prev) => !prev)}
              className="p-2 rounded-full hover:bg-primary/10 text-foreground flex items-center gap-1 transition-colors duration-200"
              aria-label="Change language"
            >
              <Languages size={18} />
              <span className="text-xs font-medium uppercase">{lang}</span>
            </button>
            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-lg border border-border/60 bg-background shadow-lg z-[80]">
                {LANG_OPTIONS.map((option) => (
                  <button
                    key={option.code}
                    onClick={() => handleSelectLang(option.code)}
                    className={cn(
                      "w-full px-3 py-2 text-left text-sm hover:bg-primary/10 flex items-center justify-between",
                      lang === option.code && "text-primary font-semibold"
                    )}
                  >
                    <span>{option.label}</span>
                    <span className="text-[10px] uppercase text-muted-foreground ml-2">
                      {option.code}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          {/* ✅ لغة للموبايل (أيقونة فقط) */}
          <button
            onClick={() => setIsLangOpen((prev) => !prev)}
            className="p-2 rounded-full hover:bg-primary/10 text-foreground flex items-center justify-center transition-colors duration-200"
            aria-label="Change language"
          >
            <Languages size={20} />
          </button>
          <ThemeToggle />
          {!isMenuOpen && (
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="p-2 text-foreground hover:bg-primary/10 rounded-full transition-colors duration-300 relative z-[60]"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              <Menu size={24} />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[55] md:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <div
            className={cn(
              "absolute top-0 right-0 h-screen w-80 max-w-[85vw] bg-background border-l border-border/50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out",
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            )}
          >
            <div className="flex items-center justify-between p-4 border-b border-border/30 min-h-[70px]">
              <a
                href="#hero"
                className="text-lg font-bold text-primary flex items-center"
                onClick={() => { setActiveLink("#hero"); setIsMenuOpen(false); }}
              >
                <span className="text-glow text-foreground">{brandFirst}</span>{" "}
                <span className="text-primary ml-1">{brandLast}</span>
              </a>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-foreground hover:text-primary hover:bg-primary/10 rounded-full transition-colors duration-200 ml-4"
                aria-label="Close Sidebar"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 py-6 px-4 overflow-y-auto">
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center w-full px-4 py-3 rounded-lg text-left text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-200 group",
                      activeLink === item.href && "text-primary bg-primary/10 font-medium shadow-sm"
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      setActiveLink(item.href);
                      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                  >
                    <span className="flex-1 text-sm font-medium">
                      {t(item.key)}
                    </span>
                    {activeLink === item.href && <div className="w-2 h-2 bg-primary rounded-full animate-pulse ml-3" />}
                  </a>
                ))}
              </nav>
            </div>

            <div className="p-4 border-t border-border/30 bg-card/30">
              {/* ✅ اختيار اللغة داخل قائمة الموبايل */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-muted-foreground">
                  Language
                </span>
                <div className="flex flex-wrap gap-1 justify-end">
                  {LANG_OPTIONS.map((option) => (
                    <button
                      key={option.code}
                      onClick={() => handleSelectLang(option.code)}
                      className={cn(
                        "px-2 py-1 rounded-full text-[10px] uppercase border border-border/60",
                        lang === option.code
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background text-muted-foreground hover:bg-primary/10"
                      )}
                    >
                      {option.code}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-muted-foreground">
                  Theme
                </span>
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                </div>
              </div>

              <div className="text-xs text-muted-foreground/70 text-center">
                {t("footer.copy")}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
