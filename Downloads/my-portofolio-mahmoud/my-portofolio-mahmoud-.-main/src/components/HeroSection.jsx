import { ArrowDown } from "lucide-react";
import { useState } from "react";
import { useLang } from "@/i18n";
import { LineReveal } from "@/components/LineReveal";

export const HeroSection = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { t, lang } = useLang();
  
  // اختر الأنيميشن بناءً على اللغة
  const isArabic = lang === "ar";
  const titleClass1 = "opacity-0 animate-fade-in";
  const titleClass2 = isArabic ? "text-primary opacity-0 anim-slide-in-right-1" : "text-primary opacity-0 animate-fade-in-delay-1";
  const titleClass3 = isArabic ? "text-gradient ml-2 opacity-0 anim-slide-in-right-2" : "text-gradient ml-2 opacity-0 animate-fade-in-delay-2";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className={titleClass1}>{t("hero.title.1")}</span>
            <span className={titleClass2}>
              {" "}{t("hero.title.2")}
            </span>
            <span className={titleClass3}>
              {" "}{t("hero.title.3")}
            </span>
          </h1>

          <div className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 anim-reveal-3">
            <LineReveal
              text={`${t("hero.subtitle")} ${t("hero.subtitle2")}`}
              split="sentence"
              baseDelay={0.15}
              step={0.12}
            />
          </div>

          <div className="pt-4 flex items-center justify-center gap-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              {t("hero.viewWork")}
            </a>

            <button
              onClick={() => setShowConfirm(true)}
              className="cosmic-button"
            >
              {t("hero.download")}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="animate-bounce flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">{t("hero.scroll")}</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </div>

      {/* Confirm Modal */}
      {showConfirm && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-modal-title"
        >
          <div className="bg-card p-6 rounded-lg shadow-xl w-80 text-center">
            <h3 id="cv-modal-title" className="text-lg font-semibold mb-4">
              {t("hero.cv.title")}
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              {t("hero.cv.subtitle")}
            </p>

            <div className="flex justify-center gap-4">
              {/* Confirm Download */}
              <a
                href="/cv/CV-Mahmoud-Ibrahim-Deif.pdf"
                download="CV Mahmoud Ibrahim Deif.pdf"
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:scale-105 transition"
              >
                {t("hero.cv.confirmBtn")}
              </a>

              {/* Cancel */}
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:scale-105 transition"
              >
                {t("hero.cv.cancelBtn")}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
