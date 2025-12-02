import {
  AboutSection,
  BlogSection,
  ContactSection,
  HeroSection,
  ProjectSection,
} from "@/sections";

export default function HomePage() {
  return (
    <main className="bg-bglight dark:bg-bgdark min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
