import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  Briefcase,
  MapPin,
  Phone,
  Facebook,
  Instagram,
} from "lucide-react";
import { useLang } from "@/i18n";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Footer = () => {
  const { t } = useLang();
  const headingRef = useScrollReveal();
  const socialLinks = [
    {
      icon: <Github size={22} />,
      href: "https://github.com/Mahmoud9075",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={22} />,
      href: "http://linkedin.com/in/mahmoudibrahim-webdeveloper",
      label: "LinkedIn",
    },
    {
      icon: <Facebook size={22} />,
      href: "https://www.facebook.com/share/1FsVvKeMzj/?mibextid=wwXIfr",
      label: "Facebook",
    },
    {
      icon: <Instagram size={22} />,
      href: "https://www.instagram.com/midoo4091?igsh=cWFvZnkzMnd4MjE4",
      label: "Instagram",
    },
    {
      icon: <Mail size={22} />,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=mahmoudibrahim9075@gmail.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { key: "nav.home", href: "#hero" },
    { key: "nav.about", href: "#about" },
    { key: "nav.skills", href: "#skills" },
    { key: "nav.educations", href: "#educations" },
    { key: "nav.projects", href: "#projects" },
    { key: "nav.contact", href: "#contact" },
  ];

  return (
    <footer className="py-16 px-4 bg-gradient-to-br from-card/30 via-card/50 to-card/30 backdrop-blur-md border-t border-border/50 relative text-foreground">
      <div className="container mx-auto max-w-7xl">
        {/* Top Section: Logo/Name and Social Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 pb-8 border-b border-border/30 opacity-0 anim-reveal">
          <a
            href="#hero"
            className="text-3xl font-bold text-primary flex items-center group mb-6 sm:mb-0"
          >
            <Briefcase
              size={30}
              className="mr-3 transition-transform duration-300 group-hover:rotate-[-15deg]"
            />
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Mahmoud Ibrahim
            </span>
          </a>
          <div className="flex space-x-3">
            {socialLinks.map((social, idx) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg opacity-0 anim-reveal"
                style={{
                  animationDelay: `${0.2 + idx * 0.08}s`,
                }}
                aria-label={social.label}
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Middle Section: Quick Links and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-foreground/90 mb-6 text-left">
              {t("footer.quickNav")}
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 text-left">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium hover:underline underline-offset-4"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground/90 mb-6 text-left">
              {t("footer.getInTouch")}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center text-muted-foreground">
                <MapPin size={18} className="mr-3 text-primary/80 flex-shrink-0" /> 
                {t("footer.location")}
              </li>
              <li className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-200">
                <Mail size={18} className="mr-3 text-primary/80 flex-shrink-0" />
                <a href="mailto:mahmoudibrahim9075@gmail.com">
                  mahmoudibrahim9075@gmail.com
                </a>
              </li>
              <li className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-200">
                <Phone size={18} className="mr-3 text-primary/80 flex-shrink-0" /> 
                <a href="tel:+201023514568">+20 102 351 4568</a>
              </li>
              <li className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-200">
                <Phone size={18} className="mr-3 text-green-500 flex-shrink-0" /> 
                <a href="https://wa.me/201023514568" target="_blank" rel="noopener noreferrer">
                  {t("footer.whatsappLabel")} +20 102 351 4568
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Centered Text and Scroll to Top */}
        <div className="border-t border-border/30 pt-10 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex justify-center items-center text-muted-foreground w-full mb-4 sm:mb-0">
            <span>{t("footer.copy")}</span>
          </div>

          <a
            href="#hero"
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110 hover:shadow-md shadow-sm"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
