import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: Mail,
      label: t("contact_email"),
      value: "example@email.com",
      link: "mailto:example@email.com",
      color: "primary",
    },
    {
      icon: Github,
      label: t("contact_github"),
      value: "github.com/username",
      link: "https://github.com",
      color: "primary",
    },
    {
      icon: Linkedin,
      label: t("contact_linkedin"),
      value: "linkedin.com/in/username",
      link: "https://linkedin.com",
      color: "accent",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("contact_title")}</h2>
          <p className="text-lg text-muted-foreground">{t("contact_description")}</p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className={`p-6 hover:shadow-lg transition-all duration-300 animate-fade-in border-${method.color}/20 hover:border-${method.color}/40 group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className={`p-4 rounded-full bg-${method.color}/10 group-hover:bg-${method.color}/20 transition-colors`}>
                  <method.icon className={`w-6 h-6 text-${method.color}`} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{method.label}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{method.value}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(method.link, "_blank")}
                    className={`border-${method.color}/20 hover:border-${method.color} hover:bg-${method.color}/10`}
                  >
                    {t("hero_cta")}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
