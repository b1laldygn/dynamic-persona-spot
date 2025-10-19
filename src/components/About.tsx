import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Shield, Zap } from "lucide-react";

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("about_title")}</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 hover:shadow-lg transition-all duration-300 animate-fade-in border-primary/20 hover:border-primary/40">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("about_text")}
            </p>
          </Card>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 animate-fade-in">{t("interests_title")}</h3>
            
            <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in border-primary/20 hover:border-primary/40 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{t("cyber_security")}</h4>
                  <p className="text-muted-foreground">{t("cyber_desc")}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in border-accent/20 hover:border-accent/40 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{t("renewable_energy")}</h4>
                  <p className="text-muted-foreground">{t("renewable_desc")}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
