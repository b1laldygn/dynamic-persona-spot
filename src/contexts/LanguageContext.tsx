import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "tr" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  tr: {
    hero_greeting: "Merhaba, Ben",
    hero_title: "Siber Güvenlik & Yenilenebilir Enerji Meraklısı",
    hero_description: "17 yaşında, teknoloji ve sürdürülebilir gelecek için tutkulu bir öğrenci",
    hero_cta: "Benimle İletişime Geç",
    nav_about: "Hakkımda",
    nav_skills: "Beceriler",
    nav_contact: "İletişim",
    about_title: "Hakkımda",
    about_text: "17 yaşında, siber güvenlik ve yenilenebilir enerji alanlarında uzmanlaşmak isteyen tutkulu bir öğrenciyim. Teknolojinin gücünü kullanarak hem dijital dünyayı daha güvenli hale getirmek, hem de sürdürülebilir bir gelecek inşa etmek için çalışıyorum. Kendimi sürekli geliştiriyor, yeni teknolojileri öğreniyor ve gerçek dünya problemlerine çözümler üretmeye odaklanıyorum.",
    interests_title: "İlgi Alanlarım",
    cyber_security: "Siber Güvenlik",
    cyber_desc: "Ağ güvenliği, penetrasyon testleri ve güvenli yazılım geliştirme",
    renewable_energy: "Yenilenebilir Enerji",
    renewable_desc: "Güneş enerjisi, akıllı şebeke sistemleri ve enerji verimliliği",
    skills_title: "Beceriler & Yetenekler",
    skill_security: "Güvenlik Araçları",
    skill_programming: "Programlama",
    skill_energy: "Enerji Sistemleri",
    skill_tools: "Geliştirme Araçları",
    contact_title: "İletişime Geçin",
    contact_description: "Projeler, işbirlikleri veya sorularınız için benimle iletişime geçebilirsiniz.",
    contact_email: "E-posta",
    contact_github: "GitHub",
    contact_linkedin: "LinkedIn",
  },
  en: {
    hero_greeting: "Hello, I'm",
    hero_title: "Cyber Security & Renewable Energy Enthusiast",
    hero_description: "A 17-year-old student passionate about technology and sustainable future",
    hero_cta: "Get in Touch",
    nav_about: "About",
    nav_skills: "Skills",
    nav_contact: "Contact",
    about_title: "About Me",
    about_text: "I'm a passionate 17-year-old student aspiring to specialize in cyber security and renewable energy. I work to make the digital world more secure using the power of technology while building a sustainable future. I constantly improve myself, learn new technologies, and focus on creating solutions to real-world problems.",
    interests_title: "My Interests",
    cyber_security: "Cyber Security",
    cyber_desc: "Network security, penetration testing, and secure software development",
    renewable_energy: "Renewable Energy",
    renewable_desc: "Solar energy, smart grid systems, and energy efficiency",
    skills_title: "Skills & Abilities",
    skill_security: "Security Tools",
    skill_programming: "Programming",
    skill_energy: "Energy Systems",
    skill_tools: "Development Tools",
    contact_title: "Get in Touch",
    contact_description: "Feel free to reach out for projects, collaborations, or any questions.",
    contact_email: "Email",
    contact_github: "GitHub",
    contact_linkedin: "LinkedIn",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("tr");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "tr" ? "en" : "tr"));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.tr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
