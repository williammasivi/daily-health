import React, { useState } from 'react';
import Footer from '../components/Footer';

const doctors = [
   { id: 'doctor1', name: 'Dr. John Doe', specialty: 'Cardiologist', description: 'Specializes in heart health and cardiovascular diseases.' },
   { id: 'doctor2', name: 'Dr. Jane Smith', specialty: 'Dermatologist', description: 'Expert in skin conditions, including eczema and psoriasis.' },
   { id: 'doctor3', name: 'Dr. Emily Johnson', specialty: 'Pediatrician', description: 'Specializes in the health and medical care of children.' },
   // Add more doctors as needed
];

const itemsPerPage = 3;

export default function Consultation() {
   const [avatars, setAvatars] = useState({});
   const [currentPage, setCurrentPage] = useState(0);

   const handleAvatarUpload = (e, doctorId) => {
      const file = e.target.files[0];
      if (file) {
         const reader = new FileReader();
         reader.onloadend = () => {
            setAvatars(prev => ({ ...prev, [doctorId]: reader.result }));
         };
         reader.readAsDataURL(file);
      }
   };

   const handleLoadMore = () => {
      setCurrentPage(prev => prev + 1);
   };

   const handleReturn = () => {
      setCurrentPage(prev => (prev > 0 ? prev - 1 : 0));
   };

   const currentDoctors = doctors.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

   return (
      <div className='flex flex-col min-h-screen bg-gray-100 dark:bg-gray-800'>
         <header className="bg-indigo-500 text-white py-4 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <h1 className="text-3xl font-bold text-center">Medical Consultation</h1>
            </div>
         </header>

         <main className="flex-grow container mx-auto px-4 py-6">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
               <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white text-center">Consultation</h2>

               {/* Search Bar */}
               <div className="mb-8 flex justify-center">
                  <input
                     type="text"
                     placeholder="Search for doctors..."
                     className="mt-1 p-3 block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                  />
               </div>

               {/* Doctors List */}
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                  {currentDoctors.map(doctor => (
                     <div key={doctor.id} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                        <div className="flex items-center space-x-4 mb-4">
                           <div className="relative">
                              <img src={avatars[doctor.id] || "https://via.placeholder.com/150"} alt="Doctor" className="w-16 h-16 rounded-full object-cover" />
                              <input
                                 type="file"
                                 onChange={(e) => handleAvatarUpload(e, doctor.id)}
                                 className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                              />
                           </div>
                           <div>
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{doctor.name}</h3>
                              <p className="text-gray-600 dark:text-gray-400">{doctor.specialty}</p>
                           </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-400 mb-4">{doctor.description}</p>
                        <button className="bg-indigo-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Contact</button>
                     </div>
                  ))}
               </div>

               <div className="flex justify-between mt-8">
                  {currentPage > 0 && (
                     <button onClick={handleReturn} className="bg-gray-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                        Return
                     </button>
                  )}
                  {(currentPage + 1) * itemsPerPage < doctors.length && (
                     <button onClick={handleLoadMore} className="bg-indigo-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Load More
                     </button>
                  )}
               </div>
               <Footer/>
            </div>
         </main>
      </div>
   );
}
