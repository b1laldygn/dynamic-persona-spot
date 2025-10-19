import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap } from "lucide-react";
import cyberBg from "@/assets/cyber-security-bg.jpg";
import energyBg from "@/assets/renewable-energy-bg.jpg";

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background images */}
      <div className="absolute inset-0">
        <div 
          className="absolute left-0 top-0 w-1/2 h-full opacity-30 dark:opacity-20"
          style={{
            backgroundImage: `url(${cyberBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0))',
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0))'
          }}
        />
        <div 
          className="absolute right-0 top-0 w-1/2 h-full opacity-30 dark:opacity-20"
          style={{
            backgroundImage: `url(${energyBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: 'linear-gradient(to left, rgba(0,0,0,0.8), rgba(0,0,0,0))',
            WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.8), rgba(0,0,0,0))'
          }}
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary animate-scale-in">
            <Shield className="w-4 h-4" />
            {t("hero_greeting")}
            <Zap className="w-4 h-4 text-accent" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-glow to-accent">
              Cyber Security
            </span>
            <br />
            <span className="text-foreground">& Renewable Energy</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            {t("hero_description")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 group"
            >
              {t("hero_cta")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="border-accent/20 hover:border-accent hover:bg-accent/10"
            >
              {t("nav_about")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
