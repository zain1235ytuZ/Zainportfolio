import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Settings, Award, TrendingUp, Zap } from 'lucide-react';

const Skills = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'React', level: 90, icon: '⚛️' },
        { name: 'TypeScript', level: 85, icon: '🔷' },
        { name: 'JavaScript', level: 95, icon: '💛' },
        { name: 'Tailwind CSS', level: 90, icon: '🎨' },
        { name: 'HTML/CSS', level: 95, icon: '🌐' },
      ],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
    },
    {
      title: 'Backend Development',
      icon: Database,
      skills: [
        { name: 'Django', level: 88, icon: '🌟' },
        { name: 'Python', level: 90, icon: '🐍' },
        { name: 'PostgreSQL', level: 82, icon: '🐘' },
        { name: 'REST APIs', level: 85, icon: '🔗' },
        { name: 'GraphQL', level: 75, icon: '📊' },
      ],
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-50 to-teal-50',
      borderColor: 'border-emerald-200',
    },
    {
      title: 'Tools & Technologies',
      icon: Settings,
      skills: [
        { name: 'Git/GitHub', level: 90, icon: '🔧' },
        { name: 'Docker', level: 78, icon: '🐳' },
        { name: 'AWS', level: 70, icon: '☁️' },
        { name: 'Linux', level: 80, icon: '🐧' },
        { name: 'VS Code', level: 95, icon: '💻' },
      ],
      gradient: 'from-violet-500 to-purple-500',
      bgGradient: 'from-violet-50 to-purple-50',
      borderColor: 'border-violet-200',
    }
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 gradient-mesh relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-violet-400/10 to-blue-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-l from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"
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
          <motion.div
            variants={cardVariants}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-white/20"
            >
              <TrendingUp className="w-5 h-5 text-blue-500" />
              <span className="text-slate-700 font-medium">Skills & Expertise</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 heading-modern">
              Technical{" "}
              <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Technologies and tools I use to bring innovative ideas to life with modern, scalable solutions
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="card-elevated bg-white/80 backdrop-blur-sm p-8 relative overflow-hidden group"
              >
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient}
                                shadow-lg flex items-center justify-center mr-4 group-hover:shadow-xl transition-all duration-300`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-900 heading-modern">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={skillVariants}
                      className="group/skill"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="text-slate-700 font-medium group-hover/skill:text-slate-900 transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-slate-500 text-sm font-semibold">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative">
                        <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full relative`}
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{
                              duration: 1.5,
                              delay: categoryIndex * 0.2 + skillIndex * 0.1,
                              ease: "easeOut",
                            }}
                          >
                            {/* Shimmer effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                              animate={{ x: ['-100%', '200%'] }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 3,
                                ease: "easeInOut",
                              }}
                            />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Background decoration */}
                <div className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br ${category.gradient}
                                opacity-5 rounded-full blur-xl group-hover:opacity-10 transition-opacity duration-300`} />
              </motion.div>
            ))}
          </div>

          {/* Achievements Section */}
          <motion.div
            variants={cardVariants}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-8 md:p-12 max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center mb-6">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500
                             shadow-lg flex items-center justify-center"
                >
                  <Award className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 heading-modern">
                Continuous{" "}
                <span className="text-gradient">Learning</span>
              </h3>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                I'm constantly expanding my skill set and staying up-to-date with the latest technologies.
                Currently diving deep into Next.js, GraphQL, and cloud architectures to build even better solutions.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {['Next.js', 'Prisma', 'AWS Lambda', 'Redis', 'Microservices'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-violet-50 border border-blue-200/50
                               text-slate-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
