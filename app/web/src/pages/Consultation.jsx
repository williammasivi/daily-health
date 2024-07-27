export default function Consultation() {
   return (
      <>

         <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">

            <li>
               <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                     <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Medical Consultation</span>
               </a>
            </li>
         </div>
         <div class="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold mb-6">Consultation</h2>

            {/* <!-- Search Bar --> */}
            <div class="mb-8">
               <input type="text" placeholder="Search for doctors..." class="mt-1 p-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>

            {/* <!-- Doctors List --> */}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {/* <!-- Doctor Card --> */}
               <div class="bg-white p-6 rounded-lg shadow-md">
                  <div class="flex items-center space-x-4 mb-4">
                     <img src="https://via.placeholder.com/150" alt="Doctor" class="w-16 h-16 rounded-full" />
                     <div>
                        <h3 class="text-lg font-semibold">Dr. John Doe</h3>
                        <p class="text-gray-600">Cardiologist</p>
                     </div>
                  </div>
                  <p class="text-gray-700 mb-4">Specializes in heart health and cardiovascular diseases.</p>
                  <button class="bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Contact</button>
               </div>

               {/* <!-- Repeat Doctor Card for other doctors --> */}
               <div class="bg-white p-6 rounded-lg shadow-md">
                  <div class="flex items-center space-x-4 mb-4">
                     <img src="https://via.placeholder.com/150" alt="Doctor" class="w-16 h-16 rounded-full" />
                     <div>
                        <h3 class="text-lg font-semibold">Dr. Jane Smith</h3>
                        <p class="text-gray-600">Dermatologist</p>
                     </div>
                  </div>
                  <p class="text-gray-700 mb-4">Expert in skin conditions, including eczema and psoriasis.</p>
                  <button class="bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Contact</button>
               </div>

               <div class="bg-white p-6 rounded-lg shadow-md">
                  <div class="flex items-center space-x-4 mb-4">
                     <img src="https://via.placeholder.com/150" alt="Doctor" class="w-16 h-16 rounded-full" />
                     <div>
                        <h3 class="text-lg font-semibold">Dr. Emily Johnson</h3>
                        <p class="text-gray-600">Pediatrician</p>
                     </div>
                  </div>
                  <p class="text-gray-700 mb-4">Specializes in the health and medical care of children.</p>
                  <button class="bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Contact</button>
               </div>
               {/* <!-- Add more doctor cards as needed --> */}
            </div>
         </div>

      </>
   );
};