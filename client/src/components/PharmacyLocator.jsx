import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const PharmacyLocator = () => {
  const [pharmacies, setPharmacies] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // This is where you would fetch pharmacies data from an API
    // Example: 
    // fetch('https://api.example.com/pharmacies')
    //   .then(response => response.json())
    //   .then(data => setPharmacies(data));
    
    // For demonstration purposes, let's use some mock data
    const mockData = [
      { name: 'Pharmacy A', lat: 51.51, lng: -0.1, address: '123 Main St', phone: '123-456-7890', services: 'Open 24 hours', image: 'https://via.placeholder.com/150' },
      { name: 'Pharmacy B', lat: 51.52, lng: -0.11, address: '456 Elm St', phone: '987-654-3210', services: 'Free Delivery', image: 'https://via.placeholder.com/150' },
      { name: 'Pharmacy C', lat: 51.53, lng: -0.12, address: '789 Oak St', phone: '555-555-5555', services: 'Covid-19 Testing', image: 'https://via.placeholder.com/150' },
    ];
    setPharmacies(mockData);
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Header Section */}
      <header className="relative mb-8">
        <img src="https://via.placeholder.com/800x200" alt="Header" className="w-full h-56 object-cover rounded-lg shadow-md" />
        <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center rounded-lg">
          <h2 className="text-3xl font-bold text-white">Localisation des Pharmacies</h2>
        </div>
        <p className="mt-4 text-center text-gray-700">Trouvez facilement les pharmacies à proximité de chez vous.</p>
      </header>

      {/* Introduction Text */}
      <section className="text-lg my-4">
        <p>
          Bienvenue sur notre plateforme de localisation des pharmacies. Ici, vous pouvez trouver les pharmacies à proximité, consulter leurs informations et obtenir des détails sur les services qu'elles offrent.
        </p>
        <p>
          Pour commencer, sélectionnez une pharmacie sur la carte ci-dessous pour afficher des informations supplémentaires.
        </p>
      </section>

      {/* Pharmacies List */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        {pharmacies.map((pharmacy, index) => (
          <div key={index} className="bg-white p-4 shadow-lg rounded-lg hover:bg-gray-100 transition duration-300 ease-in-out">
            <img src={pharmacy.image} alt={pharmacy.name} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">{pharmacy.name}</h3>
            <p className="text-gray-700"><strong>Adresse:</strong> {pharmacy.address}</p>
            <p className="text-gray-700"><strong>Téléphone:</strong> {pharmacy.phone}</p>
            <p className="text-gray-700"><strong>Services:</strong> {pharmacy.services}</p>
          </div>
        ))}
      </section>

      {/* Placeholder for the map */}
      {/* <section className="mb-8">
        <MapContainer center={[51.505, -0.09]} zoom={13} className="h-96 rounded-lg shadow-md">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {pharmacies.map((pharmacy, index) => (
            <Marker key={index} position={[pharmacy.lat, pharmacy.lng]}>
              <Popup>{pharmacy.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </section> */}

      {/* Image Gallery */}
      <section className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Galerie d'Images</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {pharmacies.map((pharmacy, index) => (
            <img
              key={index}
              src={pharmacy.image}
              alt={`Gallery ${index}`}
              className="w-full h-32 object-cover rounded-lg cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out"
              onClick={() => handleImageClick(pharmacy.image)}
            />
          ))}
        </div>
      </section>

      {/* Modal for Image Preview */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-2xl w-full">
            <button className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2" onClick={closeModal}>X</button>
            <img src={selectedImage} alt="Preview" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section className="bg-gray-100 p-4 rounded-lg shadow-md mt-8">
        <h3 className="text-2xl font-bold mb-2">Contactez-nous</h3>
        <p className="text-gray-700">Pour toute question ou assistance, veuillez nous contacter à <a href="mailto:contact@pharmacylocator.com" className="text-blue-500 underline">contact@pharmacylocator.com</a>.</p>
      </section>

      {/* Services Section */}
      <section className="mt-8 p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-2">Nos Services</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Localisation des pharmacies proches de vous</li>
          <li>Consultation des services offerts par chaque pharmacie</li>
          <li>Informations de contact détaillées</li>
          <li>Service de rappel de médicaments</li>
        </ul>
      </section>
    </div>
  );
};

export default PharmacyLocator;
