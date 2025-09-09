// src/pages/Home.jsx
import React from "react";

import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";

import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { Education } from "../components/Education";

// ✅ لو عايز ترجع الـ Experience بعدين:
// import { Experience } from "../components/Experience";

// ✅ لو عايز ترجع صفحة Courses (لازم يكون الملف موجود):
// import { Courses } from "../components/Courses";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <Education />

        {/* رجّع أي صفحة تفك التعليق لو الملف موجود */}
        {/* <Courses /> */}
        {/* <Experience /> */}

        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
