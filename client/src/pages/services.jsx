import React from 'react';

const Service = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-gray-900">
      <div className="container mx-auto p-4 text-center flex-grow">
        <h1 className="text-4xl font-bold mb-6 animate-fade-in">Nos Services</h1>
        <p className="text-lg mb-8 animate-fade-in">
          Découvrez les services que nous offrons pour vous aider à gérer votre santé.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="relative group">
            <img src="/consultation.jpg" alt="Consultation médicale" className="w-full h-48 object-cover rounded-md shadow-md transform transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xl">Consultation médicale</p>
            </div>
          </div>
          <div className="relative group">
            <img src="/medication-reminder.jpg" alt="Rappel de médication" className="w-full h-48 object-cover rounded-md shadow-md transform transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xl">Rappel de médication</p>
            </div>
          </div>
          <div className="relative group">
            <img src="/pharmacy-location.jpg" alt="Localisation de pharmacies" className="w-full h-48 object-cover rounded-md shadow-md transform transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xl">Localisation de pharmacies</p>
            </div>
          </div>
          <div className="relative group">
            <img src="/medical-records.jpg" alt="Gestion de dossiers médicaux" className="w-full h-48 object-cover rounded-md shadow-md transform transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xl">Gestion de dossiers médicaux</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="p-4 text-center bg-gray-200">
        <p className="text-sm text-gray-700">© 2024 Daily Health. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Service;
