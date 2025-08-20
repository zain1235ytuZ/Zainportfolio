import { Code, Database, Globe, Smartphone, Trophy, Users, Coffee, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const specialties = [
    {
      icon: Code,
      title: "Frontend",
      description: "React, TypeScript, Tailwind CSS",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Database,
      title: "Backend",
      description: "Django, Python, PostgreSQL",
      gradient: "from-emerald-500 to-emerald-600",
      bgGradient: "from-emerald-50 to-emerald-100",
      iconColor: "text-emerald-600",
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "RESTful APIs, GraphQL, WebSockets",
      gradient: "from-violet-500 to-violet-600",
      bgGradient: "from-violet-50 to-violet-100",
      iconColor: "text-violet-600",
    },
    {
      icon: Smartphone,
      title: "Mobile & PWA",
      description: "Responsive Design, Progressive Web Apps",
      gradient: "from-pink-500 to-pink-600",
      bgGradient: "from-pink-50 to-pink-100",
      iconColor: "text-pink-600",
    },
  ];

  const stats = [
    { icon: Trophy, label: "Projects Completed", value: "15+", color: "text-yellow-600" },
    { icon: Users, label: "Happy Clients", value: "8+", color: "text-blue-600" },
    { icon: Coffee, label: "Cups of Coffee", value: "∞", color: "text-amber-600" },
    { icon: Heart, label: "Lines of Code", value: "10K+", color: "text-red-500" },
  ];

  return (
    <section id="about" className="py-20 gradient-surface relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-violet-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-80 h-80 bg-gradient-to-l from-pink-400/10 to-blue-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial={false}
          animate="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-white/20"
            >
              <Heart className="w-5 h-5 text-red-500" />
              <span className="text-slate-700 font-medium">About Me</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 heading-modern">
              Crafting Digital{" "}
              <span className="text-gradient">Experiences</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Passionate about technology and always eager to learn new skills that push the boundaries of what's possible
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Content Section */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-slate-900 heading-modern">
                  Hi, I'm a{" "}
                  <span className="text-gradient">Full Stack Developer</span>
                </h3>

                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Currently pursuing my Bachelor's in Computer Science (BSCS), I'm passionate about creating
                    innovative web solutions that make a real difference. My journey in tech started with curiosity
                    and has evolved into a deep love for both frontend and backend development.
                  </p>
                  <p>
                    I specialize in building modern, responsive web applications using React for dynamic user
                    interfaces and Django for robust backend systems. I believe in writing clean, maintainable
                    code and staying up-to-date with the latest industry trends and best practices.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                    projects, or sharing my knowledge with the developer community.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center p-4"
                  >
                    <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                    <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Specialties Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {specialties.map((specialty, index) => (
                <motion.div
                  key={specialty.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, 1, -1, 0],
                    transition: { duration: 0.3 }
                  }}
                  className={`card-elevated p-8 text-center bg-gradient-to-br ${specialty.bgGradient} group cursor-pointer`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${specialty.gradient}
                                shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300`}
                  >
                    <specialty.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                    {specialty.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {specialty.description}
                  </p>

                  {/* Hover effect overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-8 md:p-12 max-w-4xl mx-auto"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 heading-modern">
                Let's Build Something{" "}
                <span className="text-gradient">Amazing Together</span>
              </h3>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                I'm always excited to work on new projects and collaborate with fellow developers.
                Whether you have a project in mind or just want to connect, I'd love to hear from you.
              </p>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
