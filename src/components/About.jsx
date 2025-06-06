import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FiDownload } from 'react-icons/fi';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          About Me
        </h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Get to know me and my background
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* About Image */}
          <div className="relative" data-aos="fade-right" data-aos-delay="200">
            <div className="w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://files09.oaiusercontent.com/file-1uyzVoubk45atkar41PzWg?se=2025-05-25T10%3A13%3A30Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dpublic_image_2.jpg&sig=Z/8wwv4cCaxQNTZ%2BXnArcfKGVdxrDcalUvMRcNvftBA%3D"
                alt="Professional headshot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500 dark:bg-primary-600 rounded-lg hidden md:block"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary-500 dark:bg-secondary-600 rounded-lg hidden md:block"></div>
          </div>

          {/* About Content */}
          <div data-aos="fade-left" data-aos-delay="300">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Web Developer & Software Enthusiast
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Hello! I'm Molugu Sairam, a passionate web developer and software
              enthusiast with a solid foundation in Java, JavaScript, and
              Python. I enjoy building efficient and impactful solutions using
              technologies like React, Node.js, Express.js, and MongoDB.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Currently pursuing a B.Tech in Computer Science at Malla Reddy
              University with a CGPA of 9.35, my journey in tech has been
              enriched by projects like a Library Management System in Java and
              an E-commerce MERN application named Amazona.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Outside of coding, I love gardening, cooking, and volunteering.
              I've actively participated in cultural events, NSS activities, and
              served as a class representative and event coordinator —
              experiences that strengthened my leadership, teamwork, and
              communication skills.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn btn-primary">
                Get in Touch
              </a>
              <a
                href="/resume.pdf"
                className="btn bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 inline-flex items-center"
              >
                <FiDownload className="mr-2" /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
