import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Facebook,
  MessageSquare,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const TO_EMAIL = "mahmoudibrahim9075@gmail.com";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      toast({
        title: "من فضلك اكمل الحقول",
        description: "الاسم والبريد والرسالة مطلوبين.",
        variant: "destructive",
      });
      return;
    }

    if (!isValidEmail(email)) {
      toast({
        title: "البريد غير صحيح",
        description: "راجع صيغة البريد الإلكتروني وحاول مرة أخرى.",
        variant: "destructive",
      });
      return;
    }

    const subject = `New message from ${name} via Portfolio`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    // رابط Gmail Compose
    const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      TO_EMAIL
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // رابط mailto كـ fallback
    const mailtoHref = `mailto:${TO_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // جرّب فتح Gmail في تبويب جديد؛ لو اتمنع (null) حوّل لـ mailto في نفس التبويب
    const win = window.open(gmailHref, "_blank", "noopener,noreferrer");
    if (!win) {
      window.location.href = mailtoHref;
    }

    toast({
      title: "Message Prepared!",
      description:
        "Hello, I will get back to you soon. Thank you for your message ❤️",
      variant: "success",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: TO_EMAIL,
      href: `mailto:${TO_EMAIL}`,
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      value: "+20 102 351 4568",
      href: "tel:+201023514568",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      value: "Alexandria, Egypt",
      href: "https://maps.google.com/?q=Alexandria,Egypt",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "WhatsApp",
      value: "+20 102 351 4568",
      href: "https://wa.me/201023514568",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      href: "https://www.linkedin.com/in/mahmoud-ibrahim-2076a836b/",
      label: "LinkedIn",
    },
    {
      icon: <Github size={24} />,
      href: "https://github.com/Mahmoud9075",
      label: "GitHub",
    },
    {
      icon: <Facebook size={24} />,
      href: "https://www.facebook.com/share/1FsVvKeMzj/?mibextid=wwXIfr",
      label: "Facebook",
    },
    {
      icon: <Instagram size={24} />,
      href: "https://www.instagram.com/midoo4091?igsh=cWFvZnkzMnd4MjE4",
      label: "Instagram",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I&apos;m always open to discussing new opportunities.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Card: Contact info + socials */}
          <div className="space-y-8 bg-card/50 backdrop-blur-sm border border-border/50 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <User className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">
                Contact Information
              </h3>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground/90 text-lg text-left">
                      {info.title}
                    </h4>
                    <a
                      href={info.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm break-all"
                      target={info.href.startsWith("http") ? "_blank" : "_self"}
                      rel={
                        info.href.startsWith("http")
                          ? "noopener noreferrer"
                          : ""
                      }
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-border/50">
              <h4 className="text-xl font-semibold text-foreground mb-4 text-left">
                Connect With Me
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-200 hover:scale-110 shadow-sm"
                    aria-label={social.label}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card: form */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">
                Send a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-foreground/80 text-left"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-shadow duration-200 shadow-sm"
                  placeholder="Mahmoud Ibrahim"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-foreground/80 text-left"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-shadow duration-200 shadow-sm"
                  placeholder="mahmoudibrahim9075@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-foreground/80 text-left"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-shadow duration-200 shadow-sm resize-none"
                  placeholder="Hello, I'd like to discuss..."
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 py-3 text-base"
                )}
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
