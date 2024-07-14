import React, { useState, useEffect, useRef } from 'react';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    avatar: null,
  });
  const [inscriptionSuccess, setInscriptionSuccess] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const fileInputRef = useRef(null);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);

    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) {
      setFormData(savedUser);
      setAvatarPreview(savedUser.avatar);
      setUserLoggedIn(true);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, avatar: URL.createObjectURL(file) });
    setAvatarPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données soumises :', formData);

    const user = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      avatar: avatarPreview,
    };

    localStorage.setItem('user', JSON.stringify(user));

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      avatar: null,
    });

    setAvatarPreview(null);
    setInscriptionSuccess(true);
    setShowForm(false);
    setUserLoggedIn(true);
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
  };

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={`min-h-screen flex flex-col justify-between transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto p-4 text-center flex-grow">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold mb-6 animate-fade-in">Bienvenue sur Daily Health</h1>
          {userLoggedIn && (
  <div className="relative">
  {avatarPreview ? (
    <img
      src={avatarPreview}
      alt="User Avatar"
      className="h-12 w-12 rounded-full object-cover cursor-pointer hover:bg-gray-200"
      onClick={handleAvatarClick}
    />
  ) : (
    <div
      className="h-12 w-12 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-200"
      onClick={handleAvatarClick}
    >
      <span className="text-xl font-bold">
        {formData.firstName.charAt(0).toUpperCase()}
        {formData.lastName.charAt(0).toUpperCase()}
      </span>
    </div>
  )}
  <input
    type="file"
    ref={fileInputRef}
    id="avatar"
    name="avatar"
    accept="image/*"
    onChange={handleAvatarChange}
    className="hidden"
  />
</div>


          )}
        </div>
        <p className="text-lg mb-8 animate-fade-in">
          Votre application de santé en ligne pour des consultations médicales, des rappels de médication, la localisation de pharmacies et la gestion de dossiers médicaux.
        </p>
        <div className="flex justify-center mb-8">
          <button
            onClick={toggleDarkMode}
            className={`px-4 py-2 rounded-full shadow-md transition-colors duration-300 ${darkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
          >
            {darkMode ? 'Mode clair' : 'Mode sombre'}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="relative group">
            <img src="/medium-shot-doctor-holding-smartphone.jpg" alt="Doctor holding smartphone" className="w-full h-48 object-cover rounded-md shadow-md transform transition-transform duration-300 group-hover:scale-105" />
          </div>
          <div className="relative group">
            <img src="/black-person-with-medic-profession-using-laptop.jpg" alt="Medic professional using laptop" className="w-full h-48 object-cover rounded-md shadow-md transform transition-transform duration-300 group-hover:scale-105" />
          </div>
          <div className="relative group">
            <img src="/685e4b4dc7e00480f7d5756cb54f3acf.jpg" alt="Doctor taking selfie" className="w-full h-48 object-cover rounded-md shadow-md transform transition-transform duration-300 group-hover:scale-105" />
          </div>
          <div className="relative group">
            <img src="/pexels-tima-miroshnichenko-8376193.jpg" alt="Doctor consulting patient online" className="w-full h-48 object-cover rounded-md shadow-md transform transition-transform duration-300 group-hover:scale-105" />
          </div>
        </div>
        {!userLoggedIn && (
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setShowForm(true)}
              className="px-4 py-2 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition-colors duration-300"
            >
              S'inscrire
            </button>
          </div>
        )}
        {showForm && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <form onSubmit={handleSubmit} className="max-w-md w-full mx-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Inscription</h2>
              {inscriptionSuccess && (
                <p className="text-green-600 text-sm mb-4">Compte créé avec succès !</p>
              )}
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Prénom</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nom de famille</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Adresse email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mot de passe</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="avatar" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Avatar</label>
                  <img
                    src={avatarPreview || '/default-avatar.png'}
                    alt="Avatar Preview"
                    className="h-20 w-20 rounded-full object-cover cursor-pointer"
                    onClick={handleAvatarClick}
                  />
                  <input
                    type="file"
                    ref={fileInputRef}
                    id="avatar"
                    name="avatar"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                  />
                </div>
                {avatarPreview && (
                  <div className="flex justify-center mt-4">
                    <img src={avatarPreview} alt="Avatar Preview" className="h-20 w-20 rounded-full object-cover" />
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-600 transition duration-300 mt-4"
              >
                S'inscrire
              </button>
            </form>
          </div>
        )}
      </div>
      <footer className="p-4 text-center bg-gray-200 dark:bg-gray-700">
        <p className="text-sm text-gray-700 dark:text-gray-300">© 2024 Daily Health. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Home;
