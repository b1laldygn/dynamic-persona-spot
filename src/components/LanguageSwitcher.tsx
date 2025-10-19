import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleLanguage}
      className="rounded-full border-accent/20 hover:border-accent hover:bg-accent/10 transition-all duration-300 relative group"
    >
      <Languages className="h-5 w-5 transition-transform group-hover:scale-110" />
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        {language.toUpperCase()}
      </span>
      <span className="sr-only">Toggle language</span>
    </Button>
  );
};
