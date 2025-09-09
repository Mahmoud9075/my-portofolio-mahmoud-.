import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { useLang } from "@/i18n";

// ✅ عناصر النافبار دايمًا إنجليزي
const navItems = [
  { key: "nav.home",       href: "#hero" },
  { key: "nav.about",      href: "#about" },
  { key: "nav.skills",     href: "#skills" },
  { key: "nav.educations", href: "#educations" },
  { key: "nav.courses",    href: "#courses" },
  { key: "nav.projects",   href: "#projects" },
  { key: "nav.contact",    href: "#contact" },
];

// دالة تقرا النسخة الإنجليزية مباشرة (من غير التأثر بـ lang)
const EN_LABELS = {
  "nav.home": "Home",
  "nav.about": "About",
  "nav.skills": "Skills",
  "nav.educations": "Educations",
  "nav.courses": "Courses",
  "nav.projects": "Projects",
  "nav.contact": "Contact",
};

export const Navbar = () => {
  // بنستخدم useLang لو محتاجينه لأجزاء تانية (زي الفوتر)،
  // لكن اسم البراند وعناصر النافبار هنخليها دايمًا إنجليزي.
  const { t } = useLang();

  // اسم البراند إنجليزي دائمًا
  const brandFirst = "Mahmoud";
  const brandLast  = "Ibrahim";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
          if (r.top <= 100 && r.bottom >= 100) { setActiveLink(`#${s.id}`); found = true; break; }
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
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-foreground/80 hover:text-primary transition-colors duration-300",
                  activeLink === item.href &&
                    "text-primary after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-primary"
                )}
                onClick={() => setActiveLink(item.href)}
              >
                {EN_LABELS[item.key] ?? item.key}
              </a>
            ))}
          </div>

          {/* Theme only */}
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
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
                      {EN_LABELS[item.key] ?? item.key}
                    </span>
                    {activeLink === item.href && <div className="w-2 h-2 bg-primary rounded-full animate-pulse ml-3" />}
                  </a>
                ))}
              </nav>
            </div>

            <div className="p-4 border-t border-border/30 bg-card/30">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-muted-foreground">
                  Theme
                </span>
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                </div>
              </div>

              {/* Footer (لو عايزها إنجليزي دايمًا بدّلها لنص ثابت) */}
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
