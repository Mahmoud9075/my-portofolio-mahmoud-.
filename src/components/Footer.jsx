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

export const Footer = () => {
  const socialLinks = [
    {
      icon: <Github size={22} />,
      href: "https://github.com/Mahmoud9075",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={22} />,
      href: "https://www.linkedin.com/in/mahmoud-ibrahim-2076a836b/",
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
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Educations", href: "#educations" },
    { name: "Courses", href: "#courses" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="py-16 px-4 bg-gradient-to-br from-card/30 via-card/50 to-card/30 backdrop-blur-md border-t border-border/50 relative text-foreground">
      <div className="container mx-auto max-w-7xl">
        {/* Top Section: Logo/Name and Social Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 pb-8 border-b border-border/30">
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
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg"
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
              Quick Navigation
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 text-left">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium hover:underline underline-offset-4"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground/90 mb-6 text-left">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center text-muted-foreground">
                <MapPin size={18} className="mr-3 text-primary/80 flex-shrink-0" /> 
                Alexandria, Egypt
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
                  WhatsApp: +20 102 351 4568
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Centered Text and Scroll to Top */}
        <div className="border-t border-border/30 pt-10 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex justify-center items-center text-muted-foreground w-full mb-4 sm:mb-0">
            <span>Built with passion by Mahmoud Ibrahim © 2025</span>
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
