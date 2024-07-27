import React from 'react';

export default function Header() {
   return (
      <header>
         <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
               <div className="flex items-center justify-between">
                  <div className="flex items-center justify-start rtl:justify-end">
                     <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                        <span className="sr-only">Open sidebar</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                        </svg>
                     </button>
                     <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                        <img src="DAILY.png" className="h-8 me-3" alt="FlowBite Logo" />
                        <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">Daily Health</span>
                     </a>
                  </div>
                  <div className="flex items-center">
                     <div className="flex items-center ms-3">
                        <div>
                           <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                              <span className="sr-only">Open user menu</span>
                              <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                           </button>
                        </div>
                        <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                           <div className="px-4 py-3" role="none">
                              <p className="text-sm text-gray-900 dark:text-white" role="none">
                                 Neil Sims
                              </p>
                              <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                 neil.sims@flowbite.com
                              </p>
                           </div>
                           <ul className="py-1" role="none">
                              <li>
                                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                              </li>
                              <li>
                                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                              </li>
                              <li>
                                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                              </li>
                              <li>
                                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </nav>
         <div className="mt-16 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">Welcome to Daily Health</h1>
            <p className="mt-4 text-lg text-gray-600">
               Your comprehensive online health management system. Connect with doctors, locate pharmacies, and set medication reminders with ease.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               <div className="p-6 bg-white rounded-lg shadow-md">
                  <img src="remote-consultation.jpg" alt="Remote Consultation" className="w-full h-40 object-cover rounded-lg mb-4"/>
                  <h2 className="text-xl font-semibold mb-2">Remote Medical Consultations</h2>
                  <p className="text-gray-600">Connect with healthcare professionals from the comfort of your home.</p>
               </div>
               <div className="p-6 bg-white rounded-lg shadow-md">
                  <img src="pharmacy-location.jpg" alt="Pharmacy Location" className="w-full h-40 object-cover rounded-lg mb-4"/>
                  <h2 className="text-xl font-semibold mb-2">Pharmacy Locator</h2>
                  <p className="text-gray-600">Find pharmacies near you quickly and easily.</p>
               </div>
               <div className="p-6 bg-white rounded-lg shadow-md">
                  <img src="medication-reminder.jpg" alt="Medication Reminder" className="w-full h-40 object-cover rounded-lg mb-4"/>
                  <h2 className="text-xl font-semibold mb-2">Medication Reminders</h2>
                  <p className="text-gray-600">Never miss a dose with our handy reminder system.</p>
               </div>
            </div>
         </div>
      </header>
   );
}
