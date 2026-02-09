import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { useLang } from "@/i18n";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { LineReveal } from "@/components/LineReveal";

export const Education = () => {
  const { t } = useLang();
  const headingRef = useScrollReveal();

  const educationData = [
    {
      titleKey: "education.item.1.title",
      institutionKey: "education.item.1.institution",
      datesKey: "education.item.1.dates",
      locationKey: "education.item.1.location",
    },
    {
      titleKey: "education.item.2.title",
      institutionKey: "education.item.2.institution",
      datesKey: "education.item.2.dates",
      locationKey: "education.item.2.location",
    },
    {
      titleKey: "education.item.3.title",
      institutionKey: "education.item.3.institution",
      datesKey: "education.item.3.dates",
      locationKey: "education.item.3.location",
    },
    {
      titleKey: "education.item.4.title",
      institutionKey: "education.item.4.institution",
      datesKey: "education.item.4.dates",
      locationKey: "education.item.4.location",
    },
  ];

  return (
    <section id="educations" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 
            ref={headingRef}
            className="text-4xl font-bold mb-4 opacity-0 anim-reveal"
          >
            {t("education.title.1")} <span className="text-primary">{t("education.title.2")}</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto opacity-0 anim-reveal-1">
            <LineReveal text={t("education.subtitle")} split="sentence" baseDelay={0.1} step={0.15} />
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 opacity-0 anim-reveal"
              style={{
                animationDelay: `${index * 0.12}s`,
              }}
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-primary/30 rounded-l-2xl"></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="flex items-center space-x-3 mb-2 md:mb-0">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {t(edu.titleKey)}
                  </h3>
                </div>
              </div>

              <h4 className="text-xl font-medium text-foreground/90 mb-4 text-start">
                {t(edu.institutionKey)}
              </h4>

              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-2 text-foreground/70">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{t(edu.datesKey)}</span>
                </div>
                <div className="flex items-center space-x-2 text-foreground/70">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">{t(edu.locationKey)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
