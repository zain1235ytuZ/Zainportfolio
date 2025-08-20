import { GraduationCap, Award, BookOpen, Calendar, Trophy, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
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

  const achievements = [
    { text: "Dean's List for Academic Excellence", icon: "🎓" },
    { text: "1st Place in University Hackathon 2023", icon: "🏆" },
    { text: "Computer Science Society Vice President", icon: "👥" },
    { text: "Google Developer Student Clubs Member", icon: "🚀" },
  ];

  const coursework = [
    { text: "Data Structures & Algorithms", icon: "📊" },
    { text: "Web Development Technologies", icon: "🌐" },
    { text: "Database Management Systems", icon: "💾" },
    { text: "Software Engineering Principles", icon: "⚙️" },
  ];

  const certifications = [
    {
      title: "React Development",
      description: "Advanced React Patterns & Best Practices",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      title: "Django Mastery",
      description: "Full Stack Django Development",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
    },
    {
      title: "Cloud Computing",
      description: "AWS Solutions Architecture",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
    },
  ];

  return (
    <section id="education" className="py-20 gradient-surface relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 120, 240, 360],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-violet-400/10 to-blue-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 240, 120, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-l from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial={false}
          animate="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-6xl mx-auto"
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
              <GraduationCap className="w-5 h-5 text-blue-500" />
              <span className="text-slate-700 font-medium">Education & Learning</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 heading-modern">
              Academic{" "}
              <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              My academic journey and continuous learning path in computer science and technology
            </p>
          </motion.div>

          {/* Main Education Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="card-elevated p-8 mb-12 relative overflow-hidden group"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex-shrink-0 mb-6 lg:mb-0"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
              </motion.div>

              <div className="flex-grow">
                <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 heading-modern">
                      Bachelor of Science in Computer Science
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold mb-2">University Name</p>
                  </div>
                  <div className="flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4 text-slate-600" />
                    <span className="text-slate-700 font-medium">2022 - 2026</span>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Currently pursuing my bachelor's degree with a focus on software engineering,
                  web development, and computer systems. Maintaining a strong academic record while
                  actively participating in coding competitions and tech societies.
                </p>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-violet-500/5 rounded-full blur-2xl" />
          </motion.div>

          {/* Achievements and Coursework */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Achievements */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="card-elevated p-8 group"
            >
              <div className="flex items-center space-x-4 mb-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <Award className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-900 heading-modern">Achievements</h3>
              </div>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-emerald-50 transition-colors group/item"
                  >
                    <span className="text-2xl">{achievement.icon}</span>
                    <span className="text-slate-700 group-hover/item:text-emerald-700 transition-colors">
                      {achievement.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Coursework */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="card-elevated p-8 group"
            >
              <div className="flex items-center space-x-4 mb-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <BookOpen className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-900 heading-modern">Key Coursework</h3>
              </div>

              <div className="space-y-4">
                {coursework.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-orange-50 transition-colors group/item"
                  >
                    <span className="text-2xl">{course.icon}</span>
                    <span className="text-slate-700 group-hover/item:text-orange-700 transition-colors">
                      {course.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Certifications */}
          <motion.div
            variants={itemVariants}
            className="card-elevated p-8 md:p-12"
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 heading-modern">
                Continuous Learning &{" "}
                <span className="text-gradient">Certifications</span>
              </h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Staying updated with the latest technologies and best practices in the industry
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, 1, -1, 0],
                    transition: { duration: 0.3 }
                  }}
                  className={`text-center p-6 rounded-2xl bg-gradient-to-br ${cert.bgGradient} border border-white/50 group cursor-pointer`}
                >
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${cert.gradient}
                                  shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300`}>
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {cert.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
