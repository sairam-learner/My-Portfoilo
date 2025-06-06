import AOS from 'aos';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiCode, FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease' });

    const projectsData = [
      {
        id: 1,
        title: 'Library Management System',
        description:
          'Java-based system for managing books, members, and due dates with real-time updates.',
        image:
          'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg',
        tags: ['Java', 'MySQL', 'OOP'],
        demoLink: '#',
        codeLink: 'https://github.com/sairam-learner/library-management-system',
        category: 'backend',
      },
      {
        id: 2,
        title: 'Amazona – MERN E-Commerce',
        description:
          'MERN stack e-commerce app with product management, orders, authentication, and payment.',
        image:
          'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg',
        tags: ['MERN', 'MongoDB', 'React', 'Node.js'],
        demoLink: '#',
        codeLink: 'https://github.com/sairam-learner/amazona',
        category: 'fullstack',
      },
      {
        id: 3,
        title: 'IoT Smart Home Automation',
        description:
          'Bluetooth and IoT-based home automation system using Raspberry Pi Pico W and sensors.',
        image:
          'https://images.pexels.com/photos/5079100/pexels-photo-5079100.jpeg',
        tags: ['IoT', 'Python', 'Pico W', 'Bluetooth'],
        demoLink: '#',
        codeLink: 'https://github.com/sairam-learner/smart-home-iot',
        category: 'fullstack',
      },
      {
        id: 4,
        title: 'Hotel Booking System',
        description:
          'Java, Spring Boot, and React based full-stack app for hotel search, booking, and admin control.',
        image:
          'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
        tags: ['Java', 'Spring Boot', 'React', 'MySQL'],
        demoLink: '#',
        codeLink: 'https://github.com/sairam-learner/hotel-booking-system',
        category: 'fullstack',
      },
      {
        id: 5,
        title: 'Real-time Voice Translator',
        description:
          'Live speech translation tool using AI with support for multiple languages and audio output.',
        image:
          'https://images.pexels.com/photos/3651657/pexels-photo-3651657.jpeg',
        tags: ['Speech', 'Translation', 'Python', 'AI'],
        demoLink: '#',
        codeLink: 'https://github.com/sairam-learner/voice-translator',
        category: 'frontend',
      },
      {
        id: 6,
        title: 'E-commerce Sales Analytics Dashboard',
        description:
          'Interactive dashboard with ML regression & visualizations for Amazon sales data using Python + Power BI.',
        image:
          'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg',
        tags: ['Data Analytics', 'Machine Learning', 'Power BI', 'Python'],
        demoLink: '#',
        codeLink: 'https://github.com/sairam-learner/sales-analytics-dashboard',
        category: 'fullstack',
      },
    ];

    setProjects(projectsData);
    setFilteredProjects(projectsData);
  }, []);

  useEffect(() => {
    setFilteredProjects(
      filter === 'all'
        ? projects
        : projects.filter((p) => p.category === filter)
    );
  }, [filter, projects]);

  const filters = [
    { name: 'All Projects', value: 'all' },
    { name: 'Frontend', value: 'frontend' },
    { name: 'Backend', value: 'backend' },
    { name: 'Full Stack', value: 'fullstack' },
  ];

  return (
    <section
      id="projects"
      className="section-padding bg-gray-50 dark:bg-gray-800"
    >
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          My Projects
        </h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Real-world projects showcasing my development skills
        </p>

        <div
          className="flex flex-wrap justify-center gap-4 mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {filters.map((item) => (
            <button
              key={item.value}
              onClick={() => setFilter(item.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === item.value
                  ? 'bg-primary-500 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="project-card card overflow-hidden"
                data-aos="fade-up"
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-end space-x-3">
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                        >
                          <FiExternalLink className="w-5 h-5 text-white" />
                        </a>
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                        >
                          <FiGithub className="w-5 h-5 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* GitHub CTA */}
        <div
          className="text-center mt-12"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <a
            href="https://github.com/sairam-learner"
            target="_blank"
            rel="noreferrer"
            className="btn bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 inline-flex items-center"
          >
            <FiCode className="mr-2" /> View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

