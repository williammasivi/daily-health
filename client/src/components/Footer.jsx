import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-6 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">
            Contactez-nous :{' '}
            <a
              href="mailto:contact@dailyhealth.com"
              className="underline hover:text-gray-200 transition-colors duration-300"
            >
              contact@dailyhealth.com
            </a>
          </p>
          <p className="text-sm">
            Téléphone :{' '}
            <a href="tel:+1234567890" className="underline hover:text-gray-200 transition-colors duration-300">
              +243971760538
            </a>
          </p>
        </div>
        <div className="text-center mb-4 md:mb-0">
          <ul className="flex justify-center space-x-6">
            <li>
              <a href="/" className="text-white hover:text-gray-200 underline transition-colors duration-300">
                Accueil
              </a>
            </li>
            <li>
              <a href="/about" className="text-white hover:text-gray-200 underline transition-colors duration-300">
                À propos
              </a>
            </li>
            <li>
              <a href="/services" className="text-white hover:text-gray-200 underline transition-colors duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="/blog" className="text-white hover:text-gray-200 underline transition-colors duration-300">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-right">
          <p className="text-sm">
            © 2024 Daily Health. Tous droits réservés.{' '}
            <a href="/privacy" className="underline hover:text-gray-200 transition-colors duration-300">
              Politique de confidentialité
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

