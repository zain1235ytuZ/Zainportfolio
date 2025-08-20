import { Heart, ArrowUp, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  const technologies = [
    { name: 'React & TypeScript', icon: '⚛️' },
    { name: 'Django & Python', icon: '🐍' },
    { name: 'PostgreSQL & APIs', icon: '🐘' },
    { name: 'Tailwind CSS', icon: '🎨' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/zain1235ytuZ', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/zain-ali-2a5844306/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Subtle background elements */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-cyan-500 to-emerald-500 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-7xl mx-auto"
          >
            {/* Main Footer Content */}
            <div className="grid lg:grid-cols-4 gap-12 mb-16">
              {/* Brand Section */}
              <motion.div variants={itemVariants} className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center"
                  >
                    <Sparkles className="w-5 h-5 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white heading-modern">
                    Zain Ali
                  </h3>
                </div>
                <p className="text-white/70 leading-relaxed text-lg mb-8 max-w-md">
                  Full stack developer passionate about creating innovative solutions
                  with modern web technologies. Currently pursuing BSCS and always eager to learn.
                </p>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('http') ? "_blank" : undefined}
                      rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 glass-dark rounded-xl flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-white/20 group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div variants={itemVariants}>
                <h4 className="text-xl font-bold text-white mb-6 heading-modern">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Technologies */}
              <motion.div variants={itemVariants}>
                <h4 className="text-xl font-bold text-white mb-6 heading-modern">Technologies</h4>
                <ul className="space-y-3">
                  {technologies.map((tech, index) => (
                    <motion.li
                      key={tech.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 text-white/70"
                    >
                      <span className="text-lg">{tech.icon}</span>
                      <span>{tech.name}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Bottom Section */}
            <motion.div
              variants={itemVariants}
              className="border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0"
            >
              <div className="flex items-center justify-center md:justify-start space-x-2 text-white/70">
                <span>Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                >
                  <Heart className="w-4 h-4 text-red-500" />
                </motion.div>
                <span>by a passionate developer</span>
              </div>

              <div className="flex items-center space-x-6">
                <p className="text-white/60 text-center md:text-left">
                  &copy; {new Date().getFullYear()} Zain Ali. All rights reserved.
                </p>

                {/* Scroll to Top */}
                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 glass-dark rounded-full flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-white/20 group"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
