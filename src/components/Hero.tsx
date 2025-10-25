import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "../images/my img.jpg";

const Hero = () => {
  const scrollToWork = () => {
    const workSection = document.getElementById("projects");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    try {
      // Create a temporary anchor element
      const link = document.createElement('a');
      // Point to the PDF in the public folder
      link.href = '/Zaincv.pdf';
      // Set the download attribute with filename
      link.download = 'Zain_CV.pdf';
      // Append to body (required for Firefox)
      document.body.appendChild(link);
      // Trigger the download
      link.click();
      // Clean up
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading CV:', error);
      // Fallback to opening in a new tab if download fails
      window.open('/Zaincv.pdf', '_blank');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center justify-center gradient-mesh"
    >
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-violet-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-pink-400/20 to-blue-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-3/4 left-1/2 w-64 h-64 bg-gradient-to-r from-violet-400/20 to-pink-400/20 rounded-full blur-3xl"
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className={`absolute w-2 h-2 bg-blue-400 rounded-full blur-sm`}
            style={{
              top: `${20 + i * 10}%`,
              left: `${15 + i * 12}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >

          {/* Enhanced Typography */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-white/20"
            >
              <Sparkles className="w-5 h-5 text-blue-500" />
              <span className="text-slate-700 font-medium">Available for work</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </motion.div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
          >
            <span className="block text-slate-900 heading-modern">
              Hi, I'm{" "}
              <motion.span
                className="text-gradient"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Zain Ali
              </motion.span>
            </span>
            <motion.span
              className="block text-gradient heading-modern mt-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Full Stack Developer
            </motion.span>
          </motion.h1>

          {/* Moved Profile Image under the name */}
          <motion.div
            variants={itemVariants}
            className="relative w-48 h-48 mx-auto mb-8 mt-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 rounded-full"
            >
              <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 blur-md opacity-60" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white"
            >
              <img
                src={profileImage}
                alt="Zain Ali - Full Stack Developer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://via.placeholder.com/500x500?text=Profile+Image";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent" />
            </motion.div>

            {/* Floating status indicator */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-3 border-white shadow-lg flex items-center justify-center"
            >
              <div className="w-2 h-2 bg-white rounded-full" />
            </motion.div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            BSCS Student passionate about creating{" "}
            <span className="text-gradient font-semibold">innovative web solutions</span>{" "}
            with modern technologies like React, Django, and cutting-edge design principles.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <motion.button
              onClick={scrollToWork}
              className="btn-primary group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3">
                <span>View My Work</span>
                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowDown size={20} />
                </motion.div>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-violet-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                animate={{}}
              />
            </motion.button>

            <motion.button
              onClick={handleDownloadCV}
              className="btn-secondary group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3">
                <Download size={20} />
                <span>Download CV</span>
              </span>
            </motion.button>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: Github, href: "https://github.com/zain1235ytuZ", label: "GitHub", color: "hover:text-slate-900" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/zain-ali-2a5844306/", label: "LinkedIn", color: "hover:text-blue-600" },
              { icon: Mail, href: "mailto:your.email@example.com", label: "Email", color: "hover:text-red-500" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? "_blank" : undefined}
                rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className={`p-4 text-slate-600 ${social.color} glass-card rounded-xl transition-all duration-300 group`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToWork}
          className="glass-card p-3 text-slate-600 hover:text-blue-600 transition-all duration-300 rounded-full"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
          aria-label="Scroll to projects section"
        >
          <ArrowDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
