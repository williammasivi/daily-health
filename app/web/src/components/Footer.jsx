import { FaWhatsapp, FaLinkedin, FaTelegram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="dark:text-gray-300 text-white py-6 bg-gradient-to-r from-gray-700 via-gray-900 to-gray-800 mt-32">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-semibold">Projet chef-d'œuvre</h3>
          <p className="text-xs mt-1">Révolutionner la gestion de la santé en ligne</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://wa.me/tonnumero" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors duration-300">
            <FaWhatsapp size={20} />
          </a>
          <a href="https://www.linkedin.com/in/tonprofil" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-colors duration-300">
            <FaLinkedin size={20} />
          </a>
          <a href="https://t.me/tonnomutilisateur" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-300">
            <FaTelegram size={20} />
          </a>
          <a href="mailto:tonemail@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition-colors duration-300">
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
      <div className="text-center mt-4 border-t border-gray-600 dark:text-gray-300">
        <p className="text-xs">© 2024 daily-health. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
