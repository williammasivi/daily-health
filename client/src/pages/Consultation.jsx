import React, { useState, useEffect } from 'react';
import OnlineConsultation from '../components/OnlineConsultation';

const Consultation = () => {
  const [theme, setTheme] = useState('light');

  const images = [
    {
      src: '/public/346773a34104f1ab2c20f6feb9af3ee5.jpg',
      alt: 'Doctor on a video call'
    },
    {
      src: '/public/47f2725d4031899607d4153b0906d34b.jpg',
      alt: 'Medical professional using a laptop'
    },
    {
      src: '/public/4c27de92f9dc23dacba03c701ee5f084.jpg',
      alt: 'Patient having an online consultation'
    },
    {
      src: '/public/medium-shot-doctor-taking-selfie.jpg',
      alt: 'Patient having an online consultation'
    },
    {
      src: '/public/6654b5160eb528293a84963801635ecc.jpg',
      alt: 'Patient having an online consultation'
    },
    {
      src: '/public/914a2755470857613ba052b5dc45bdd5.jpg',
      alt: 'Patient having an online consultation'
    },
  ];

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [theme]);

  return (
    <div className={`flex flex-col min-h-screen ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="flex justify-end p-4">
        <button
          className={`px-4 py-2 rounded-md z-10 ${theme === 'dark' ? 'bg-gray-200 text-gray-800' : 'bg-gray-800 text-white'} transition duration-300 ease-in-out transform hover:scale-105`}
          onClick={toggleTheme}
        >
          {theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
        </button>
      </div>

      <div className="flex flex-col items-center justify-center flex-1 px-4">
        <h1 className="text-3xl font-bold mb-6 animate-fade-in">Bienvenue à la consultation en ligne</h1>

        <div className={`animate-scale-in ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          <OnlineConsultation />
        </div>

        <p className="text-lg text-gray-600 mt-4 leading-relaxed hover:text-gray-800 transition duration-300">
          Merci de nous faire confiance pour vos besoins de consultation en ligne.
        </p>
        <p className="text-lg text-gray-600 mt-2 leading-relaxed hover:text-gray-800 transition duration-300">
          Notre équipe de professionnels de santé est là pour vous fournir les meilleurs soins possibles, directement depuis le confort de votre maison.
        </p>
        <p className="text-lg text-gray-600 mt-2 leading-relaxed hover:text-gray-800 transition duration-300">
          Avec nos consultations en ligne, vous pouvez rapidement entrer en contact avec des médecins qualifiés pour discuter de vos symptômes, obtenir des conseils médicaux, et même des prescriptions si nécessaire.
        </p>

        <div className="mt-10 w-4/5">
          <h2 className="text-2xl font-semibold mb-4 animate-fade-in">Galerie d'images médicales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div key={index} className={`overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105`}>
                <img src={image.src} alt={image.alt} className="object-cover w-full h-48 transition duration-300 ease-in-out transform hover:scale-110" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 w-4/5">
          <h2 className="text-2xl font-semibold mb-4 animate-fade-in">Nos Services</h2>
          <ul className="list-disc list-inside">
            <li className="text-lg text-gray-600 mt-2 leading-relaxed hover:text-gray-800 transition duration-300">
              Consultation médicale en ligne avec des médecins généralistes et spécialistes.
            </li>
            <li className="text-lg text-gray-600 mt-2 leading-relaxed hover:text-gray-800 transition duration-300">
              Conseils médicaux personnalisés et prescriptions en ligne.
            </li>
            <li className="text-lg text-gray-600 mt-2 leading-relaxed hover:text-gray-800 transition duration-300">
              Gestion de vos dossiers médicaux en ligne.
            </li>
            <li className="text-lg text-gray-600 mt-2 leading-relaxed hover:text-gray-800 transition duration-300">
              Rappels de médicaments et suivi de vos traitements.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
