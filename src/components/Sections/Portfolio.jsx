import IntroSection from "./IntroSection";
import AboutSection from "./AboutSection";
import EducationSection from "./EducationSection";
import ServicesSection from "./ServicesSection";
import SkillSection from "./SkillSection";
import ProjectsSection from "./ProjectsSection";
import CertificatesSection from "./CertificatesSection";
import ContactsSection from "./ContactsSection";
import { motion } from "framer-motion";

import "./portfolio.css";

export default function Portfolio() {
  return (
    <main>
      <IntroSection />
      <AboutSection />
      <EducationSection />
      <ServicesSection />
      <SkillSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactsSection />
    </main>
  );
}
