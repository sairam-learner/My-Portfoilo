import {
  FiGithub,
  FiHeart,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Portfolio</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              I'm Molugu Sairam, a web developer passionate about building
              modern, responsive websites and applications focused on clean
              design, functionality, and great user experience.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/sairam-learner"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FiGithub className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/molugu-sairam-a520a2306/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FiLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FiTwitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FiInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>Hyderabad, India</li>
              <li>molugusairam143@gmail.com</li>
              <li>+91 8465832032</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Molugu Sairam. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
            Made with <FiHeart className="mx-1 text-red-500" /> using React &
            Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
