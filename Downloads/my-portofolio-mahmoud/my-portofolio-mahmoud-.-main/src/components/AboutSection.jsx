import { Code, Building, Award } from "lucide-react";
import { useLang } from "@/i18n";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { LineReveal } from "@/components/LineReveal";

export const AboutSection = () => {
  const { t } = useLang();
  const headingRef = useScrollReveal();
  const card1Ref = useScrollReveal({ threshold: 0.2 });
  const card2Ref = useScrollReveal({ threshold: 0.2 });
  const card3Ref = useScrollReveal({ threshold: 0.2 });

  return (
    <section
      id="about"
      className="py-24 px-4 relative scroll-mt-28 md:scroll-mt-32"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 
          ref={headingRef}
          className="text-3xl md:text-4xl font-bold mb-12 text-center opacity-0 anim-reveal"
        >
          {t("about.title")} <span className="text-primary">{t("about.me")}</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <div className="flex justify-center lg:order-2">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 shadow-2xl">
                {/* ضع الصورة في: public/me/mahmoud-ibrahim.jpg */}
                <img
                  src="/me/mahmoud ibrahim.jpg"
                  alt={t("about.photo.alt")}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = "/api/placeholder/320/320"; }}
                />
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-80" aria-hidden="true" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/60 rounded-full" aria-hidden="true" />
              </div>
              {/* Background decoration */}
              <div className="absolute -z-10 top-4 left-4 w-80 h-80 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent" aria-hidden="true" />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 lg:order-1 text-center lg:text-start">
            <h3 className="text-2xl font-semibold">
              {t("about.role")}
            </h3>

            <div className="text-muted-foreground leading-relaxed opacity-0 anim-reveal-1">
              <LineReveal text={t("about.description")} split="sentence" baseDelay={0.05} step={0.09} />
            </div>
          </div>
        </div>

        {/* Skills/Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div 
            ref={card1Ref}
            className="gradient-border p-6 card-hover opacity-0 anim-reveal"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">{t("about.card1.title")}</h4>
                <p className="text-muted-foreground">
                  {t("about.card1.desc")}
                </p>
              </div>
            </div>
          </div>

          <div 
            ref={card2Ref}
            className="gradient-border p-6 card-hover opacity-0 anim-reveal-1"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Building className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">{t("about.card2.title")}</h4>
                <p className="text-muted-foreground">
                  {t("about.card2.desc")}
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div 
            ref={card3Ref}
            className="gradient-border p-6 card-hover opacity-0 anim-reveal-2"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">{t("about.card3.title")}</h4>
                <p className="text-muted-foreground">
                  {t("about.card3.desc")}
                </p>
              </div>
            </div>
          </div>
          {/* لو مش عايز البطاقة الثالثة، احذفها واحذف Import Award */}
        </div>
      </div>
    </section>
  );
};
