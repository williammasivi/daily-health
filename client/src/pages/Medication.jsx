import React from 'react';
import MedicationReminder from '../components/MedicationReminder';

const Medication = () => {
  return (
    <div className="medication-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 bg-gray-50 dark:bg-gray-900">
      <section className="mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4 text-center">
          Bienvenue à la section Médication
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
          Bienvenue dans notre section dédiée à la médication. Ici, nous nous engageons à vous fournir les informations les plus récentes et précises sur les traitements et les médicaments essentiels à votre santé. Que vous recherchiez des conseils sur la gestion de vos médicaments ou des informations spécifiques sur les traitements recommandés, vous êtes au bon endroit.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Nos Services
        </h3>
        <ul className="list-disc pl-4 text-lg text-gray-700 dark:text-gray-300 space-y-2">
          <li className="mb-2">
            <strong>Consultations Expertes:</strong> Nos professionnels de la santé sont disponibles pour répondre à toutes vos questions sur vos médicaments et traitements.
          </li>
          <li className="mb-2">
            <strong>Ressources Informatives:</strong> Accédez à une bibliothèque complète d'articles et de guides pratiques sur diverses conditions médicales et leurs traitements.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Dernières Actualités
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
          Restez à jour avec les dernières avancées dans le domaine médical et les nouveaux traitements disponibles. Explorez nos articles et nos avis d'experts pour découvrir ce qui pourrait être pertinent pour vous ou vos proches.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Galerie d'Images
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <img src="/public/1a7929b4cb81245bdc882bfe2f1760a3.jpg" alt="Medication Image 1" className="rounded-lg shadow-md w-full h-48 object-cover" />
          <img src="/public/346773a34104f1ab2c20f6feb9af3ee5.jpg" alt="Medication Image 2" className="rounded-lg shadow-md w-full h-48 object-cover" />
          <img src="/public/47f2725d4031899607d4153b0906d34b.jpg" alt="Medication Image 3" className="rounded-lg shadow-md w-full h-48 object-cover" />
          <img src="/public/4c27de92f9dc23dacba03c701ee5f084.jpg" alt="Medication Image 4" className="rounded-lg shadow-md w-full h-48 object-cover" />
          <img src="/public/6654b5160eb528293a84963801635ecc.jpg" alt="Medication Image 5" className="rounded-lg shadow-md w-full h-48 object-cover" />
          <img src="/public/685e4b4dc7e00480f7d5756cb54f3acf.jpg" alt="Medication Image 6" className="rounded-lg shadow-md w-full h-48 object-cover" />
          <img src="/public/914a2755470857613ba052b5dc45bdd5.jpg" alt="Medication Image 7" className="rounded-lg shadow-md w-full h-48 object-cover" />
          <img src="/public/black-woman-with-stethoscope.jpg" alt="Medication Image 8" className="rounded-lg shadow-md w-full h-48 object-cover" />
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Contact
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
          Besoin de plus d'informations spécifiques ou d'une consultation personnalisée ? N'hésitez pas à nous contacter pour discuter de vos besoins en matière de santé. Nous sommes là pour vous aider à chaque étape de votre parcours médical.
        </p>
      </section>
      
      <MedicationReminder />
    </div>
  );
};

export default Medication;
