import AOS from 'aos';
import { useEffect } from 'react';
import {
  FiCode,
  FiDatabase,
  FiGlobe,
  FiLayout,
  FiServer,
  FiTrello,
} from 'react-icons/fi';

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const skillCategories = [
    {
      icon: <FiLayout />,
      title: 'Frontend Development',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'React.js', level: 80 },
        // You can add more frontend if needed
      ],
    },
    {
      icon: <FiServer />,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 70 },
        { name: 'Spring Boot', level: 70 },
        { name: 'Python', level: 60 },
        { name: 'Java', level: 85 },
      ],
    },
    {
      icon: <FiDatabase />,
      title: 'Databases',
      skills: [
        { name: 'MongoDB', level: 75 },
        { name: 'MySQL', level: 70 },
        { name: 'SQL', level: 70 },
        // Firebase was not listed in your resume, so removed
      ],
    },
    {
      icon: <FiCode />,
      title: 'Version Control & Other Skills',
      skills: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'Salesforce Platform', level: 65 },
        { name: 'Postman', level: 70 },
        { name: 'Responsive Design', level: 85 },
        // UI/UX design and testing are not specifically listed, so omitted
      ],
    },
    {
      icon: <FiGlobe />,
      title: 'Languages',
      skills: [
        { name: 'English', level: 95 },
        { name: 'Hindi', level: 80 },
        { name: 'Telugu', level: 85 },
        // Spanish and French were removed since not listed in your resume
      ],
    },
    {
      icon: <FiTrello />,
      title: 'Tools',
      skills: [
        { name: 'VS Code', level: 95 },
        { name: 'Salesforce Platform', level: 65 },
        { name: 'Postman', level: 70 },
        // Adobe XD, Figma, Webpack omitted since not in resume
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          My Skills
        </h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Here are my technical skills and expertise
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="card p-6 hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={150 + idx * 50}
            >
              <div className="flex items-center mb-6">
                <span className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4">
                  {category.icon}
                </span>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 skill-progress-bar"
                        style={{
                          width: `${skill.level}%`,
                          '--progress': `${skill.level}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
