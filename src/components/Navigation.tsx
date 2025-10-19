import { useLanguage } from "@/contexts/LanguageContext";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Button
              variant="ghost"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-bold text-lg hover:text-primary transition-colors"
            >
              Portfolio
            </Button>
            <div className="hidden md:flex items-center gap-4">
              <Button variant="ghost" onClick={() => scrollToSection("about")}>
                {t("nav_about")}
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("skills")}>
                {t("nav_skills")}
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("contact")}>
                {t("nav_contact")}
              </Button>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};
