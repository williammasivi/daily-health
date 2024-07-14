import React from 'react';

const Apropos = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-md rounded-lg p-6 md:p-12">
          <h1 className="text-3xl font-bold text-blue-500 mb-6 text-center">À propos de Daily Health</h1>
          <p className="text-gray-700 text-lg mb-4">
            Bienvenue chez Daily Health, votre source principale pour tout ce qui concerne la santé et le bien-être. Nous sommes dévoués à vous fournir les informations et les services les plus fiables et les plus à jour, avec un accent sur la qualité, la fiabilité et l'innovation.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            Fondée en 2020 par une équipe passionnée de professionnels de la santé, Daily Health a parcouru un long chemin depuis ses débuts. Lorsque nous avons commencé, notre passion pour la promotion de la santé et du bien-être nous a poussés à faire des recherches approfondies et à développer une plateforme conviviale pour offrir les meilleures ressources à notre communauté.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            Nous espérons que vous appréciez nos services autant que nous prenons plaisir à vous les offrir. Si vous avez des questions ou des commentaires, n'hésitez pas à nous contacter.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            Merci de nous avoir choisis comme partenaire de votre santé.
          </p>
          <div className="mt-8 text-center">
            <a href="/contact" className="text-blue-500 underline hover:text-blue-700 transition-colors duration-300">
              Contactez-nous aux :            <br />
              +243 971760538 <br />
             +243 851760538
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apropos;
