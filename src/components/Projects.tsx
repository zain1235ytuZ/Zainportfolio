import { ExternalLink, Github, Server, Smartphone, Globe, Briefcase, Star, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React frontend and Django backend. Features include user authentication, product catalog, shopping cart, and payment integration.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Django', 'PostgreSQL', 'Stripe API'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Full Stack',
      featured: true,
      status: 'Completed'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, team workspaces, and progress tracking. Built with modern React patterns and Django REST framework.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Django REST', 'WebSockets', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Web App',
      featured: true,
      status: 'Completed'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization, scheduling features, and multi-platform integration using modern web technologies.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'D3.js', 'Django', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Dashboard',
      featured: false,
      status: 'Completed'
    },
    {
      title: 'Learning Management System',
      description: 'Comprehensive LMS platform with course creation, student progress tracking, quiz system, and video streaming capabilities for educational institutions.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Django', 'PostgreSQL', 'AWS S3'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Education',
      featured: false,
      status: 'Completed'
    },
    {
      title: 'Real Estate Platform',
      description: 'Property listing and management platform with advanced search filters, virtual tours, and appointment scheduling system for real estate professionals.',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Django', 'Google Maps API', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Business',
      featured: true,
      status: 'In Development'
    },
    {
      title: 'Weather Forecast App',
      description: 'Interactive weather application with location-based forecasts, historical data, and beautiful UI animations. Features responsive design and PWA capabilities.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Weather API', 'PWA', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Mobile',
      featured: false,
      status: 'Completed'
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Full Stack':
        return <Server className="w-4 h-4" />;
      case 'Mobile':
        return <Smartphone className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'In Development':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

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

  return (
    <section id="projects" className="py-20 gradient-surface relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-violet-400/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 270, 180, 90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-l from-pink-400/5 to-emerald-400/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
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
              <Briefcase className="w-5 h-5 text-violet-500" />
              <span className="text-slate-700 font-medium">Featured Work</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 heading-modern">
              Recent{" "}
              <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work in full stack development, featuring modern technologies and innovative solutions
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className={`group card-elevated overflow-hidden relative ${
                  project.featured ? 'md:col-span-1 xl:col-span-1' : ''
                }`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500
                               text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1"
                  >
                    <Star className="w-3 h-3" />
                    <span>Featured</span>
                  </motion.div>
                )}

                {/* Image Container */}
                <div className="relative overflow-hidden h-56">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category & Status Badges */}
                  <div className="absolute top-4 right-4 space-y-2">
                    <div className="glass-card rounded-full px-3 py-1 flex items-center space-x-1">
                      {getCategoryIcon(project.category)}
                      <span className="text-xs font-medium text-slate-700">{project.category}</span>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </div>
                  </div>

                  {/* Hover Actions */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-4 left-4 right-4 flex space-x-3 opacity-0 group-hover:opacity-100"
                  >
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 glass-card text-center py-2 px-4 text-white text-sm font-medium
                                 hover:bg-white/20 transition-all duration-300 rounded-lg"
                    >
                      <ExternalLink className="w-4 h-4 mx-auto mb-1" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 glass-card text-center py-2 px-4 text-white text-sm font-medium
                                 hover:bg-white/20 transition-all duration-300 rounded-lg"
                    >
                      <Github className="w-4 h-4 mx-auto mb-1" />
                      Source
                    </motion.a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600
                                 transition-colors heading-modern flex items-center justify-between">
                    {project.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform
                                           translate-x-0 group-hover:translate-x-1 translate-y-0 group-hover:-translate-y-1
                                           transition-all duration-300" />
                  </h3>

                  <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium
                                   group-hover:bg-blue-50 group-hover:text-blue-700 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  initial={false}
                />
              </motion.div>
            ))}
          </div>

          {/* View More Projects CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 max-w-2xl mx-auto"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4 heading-modern">
                Interested in seeing more?
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                These are just a few highlights. Check out my GitHub for more projects and contributions.
              </p>
              <motion.a
                href="https://github.com/zain1235ytuZ"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
                <span>View All Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
