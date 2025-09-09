import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { useLang } from "@/i18n";

export const Education = () => {
  const { t } = useLang();

  const educationData = [
    {
      title: "Software Development",
      institution: "Borg Al Arab Technological University",
      dates: "09/2022 – 07/2026",
      location: "Alexandria, Borg El Arab, Egypt",
    },
    {
      title: "front end developer | React.js | Next.js | ",
      institution: "Route Academy",
      dates: "3/2025 – 10/2025",
      location: "Egypt, Cairo",
    },
    {
      title: "Freelancing",
      institution: "Information Technology Industry Development Agency (ITIDA)",
      dates: "6/2024 – 9/2025",
      location: "Online",
    },
    {
      title: " Front end(React.js)",
      institution: "DevWave  ",
      dates: "Training for a month",
      location: "Online",
    },
  ];

  return (
    <section id="educations" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            {t("education.title.1")} <span className="text-primary">{t("education.title.2")}</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            {t("education.subtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-primary/30 rounded-l-2xl"></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="flex items-center space-x-3 mb-2 md:mb-0">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {edu.title}
                  </h3>
                </div>
              </div>

              <h4 className="text-xl font-medium text-foreground/90 mb-4 text-start">
                {edu.institution}
              </h4>

              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-2 text-foreground/70">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{edu.dates}</span>
                </div>
                <div className="flex items-center space-x-2 text-foreground/70">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">{edu.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
