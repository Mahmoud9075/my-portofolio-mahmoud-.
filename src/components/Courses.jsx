import { BookOpen, MapPin, Calendar, Award } from "lucide-react";
import { useLang } from "@/i18n";

export const Courses = () => {
  const { t } = useLang();

  const coursesData = [
    {
      title: "Database Fundamentals",
      institution: "Mahara Tac",
      description:
        "This course introduces the fundamentals of databases, focusing on data organization, normalization techniques (1NF, 2NF, 3NF), and Microsoft Access for creating tables, forms, queries, and reports.",
      dates: "09/2024 – 09/2024",
      location: "Online",
    },
    {
      title: "Front end development Course",
      institution: "ARRAY Academy",
      description:
        "Completed a comprehensive training program at ARRAY Academy, mastering HTML, CSS, and JavaScript for building interactive web interfaces. Gained expertise in Bootstrap for responsive design and React for creating dynamic, component-based applications, enhancing my ability to develop modern, user-focused web solutions.",
      dates: "07/2023 – 09/2024",
      location: "Cairo, Egypt",
    },
    {
      title: "Introduction To Banking",
      institution: "CFI",
      description:
        "Understanding of banking principles, covering types of banks, regulations, financial products, and their economic roles.",
      dates: "08/2022 – 09/2022",
      location: "Online",
    },
  ];

  return (
    <section id="courses" className="py-20 bg-secondary/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            {t("courses.title.1")} <span className="text-primary">{t("courses.title.2")}</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            {t("courses.subtitle")}
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {coursesData.map((course, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-primary/30 rounded-l-2xl"></div>

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {course.title}
                    </h3>
                  </div>

                  <div className="flex items-center space-x-2 mb-4">
                    <Award className="w-5 h-5 text-primary" />
                    <h4 className="text-xl font-medium text-foreground/90">
                      {course.institution}
                    </h4>
                  </div>

                  <p className="text-foreground/70 leading-relaxed mb-6 text-start">
                    {course.description}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
                    <div className="flex items-center space-x-2 text-foreground/70">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{course.dates}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-foreground/70">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-medium">{course.location}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:ml-6">
                  <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold border text-green-500 border-green-300 ">
                    <Award className="w-4 h-4 mr-2" />
                    {t("courses.completed")}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center p-6 bg-card/30 rounded-2xl border border-border/30">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="text-foreground/70 font-medium">{t("courses.stats.completed")}</div>
          </div>
          <div className="text-center p-6 bg-card/30 rounded-2xl border border-border/30">
            <div className="text-3xl font-bold text-primary mb-2">2+</div>
            <div className="text-foreground/70 font-medium">{t("courses.stats.years")}</div>
          </div>
          <div className="text-center p-6 bg-card/30 rounded-2xl border border-border/30">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-foreground/70 font-medium">{t("courses.stats.rate")}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
