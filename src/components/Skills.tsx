import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Shield, Zap, Terminal } from "lucide-react";

export const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      icon: Shield,
      title: t("skill_security"),
      skills: ["Kali Linux", "Wireshark", "Metasploit", "Burp Suite", "Nmap"],
      color: "primary",
    },
    {
      icon: Code,
      title: t("skill_programming"),
      skills: ["Python", "JavaScript", "TypeScript", "React", "Node.js"],
      color: "primary",
    },
    {
      icon: Zap,
      title: t("skill_energy"),
      skills: ["Solar Power", "Grid Analysis", "Energy Monitoring", "IoT Systems"],
      color: "accent",
    },
    {
      icon: Terminal,
      title: t("skill_tools"),
      skills: ["Git", "Docker", "Linux", "VS Code", "Arduino"],
      color: "accent",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("skills_title")}</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`p-6 hover:shadow-lg transition-all duration-300 animate-fade-in border-${category.color}/20 hover:border-${category.color}/40 group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg bg-${category.color}/10 group-hover:bg-${category.color}/20 transition-colors`}>
                  <category.icon className={`w-6 h-6 text-${category.color}`} />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="hover:scale-105 transition-transform cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
