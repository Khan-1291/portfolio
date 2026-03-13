import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
  { icon: Github, href: "https://github.com/khan-1291", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/zohaib-khan", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:zohaibkhaneduawkum@gmail.com", label: "Email" }
];

  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-2xl font-bold gradient-text">ZK.</span>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Building digital experiences
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg glass hover:bg-indigo-500/20 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1"
          >
            © {currentYear} Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Zohaib Khan
          </motion.div>
        </div>
      </div>
    </footer>
  );
};