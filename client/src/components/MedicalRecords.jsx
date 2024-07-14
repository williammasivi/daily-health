import React from 'react';
import DarkModeToggle from './ThemeToggle';

const MedicalRecords = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Dossier Médical Électronique</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Votre Santé, Notre Priorité</h3>
          <p className="text-gray-700">
            Bienvenue sur votre dossier médical électronique. Ici, vous trouverez toutes les informations concernant votre santé et vos traitements en cours. Ce système sécurisé et moderne vous permet d'accéder à vos données de manière confidentielle et pratique.
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Consultations Récentes</h3>
          <p className="text-gray-700">
            Consultez les détails de vos visites médicales les plus récentes. Vous pouvez retrouver les comptes-rendus des consultations, les recommandations des médecins, ainsi que les prescriptions en cours.
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Résultats d'Examens</h3>
          <p className="text-gray-700">
            Retrouvez ici les résultats détaillés de vos analyses et examens médicaux. Ces informations vous permettent de suivre l'évolution de votre santé au fil du temps et de prendre des décisions éclairées avec votre médecin.
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Suivi des Traitements</h3>
          <p className="text-gray-700">
            Gardez une trace de vos traitements en cours, y compris les médicaments prescrits et les instructions associées. Assurez-vous de respecter votre plan de traitement pour optimiser votre rétablissement et votre bien-être.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MedicalRecords;

