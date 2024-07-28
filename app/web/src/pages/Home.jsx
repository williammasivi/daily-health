import React from 'react';
import { Link } from "react-router-dom";
import { FaUserNurse, FaMapMarkerAlt, FaPills } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col justify-center items-center">
      <main className="container mx-auto px-4 py-10">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Welcome to Projet chef-d'œuvre</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Revolutionizing online health management with features like remote medical consultations,
            pharmacy location, and medication reminders.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-[20px]">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaUserNurse className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Consultation</h3>
            <p className="text-gray-700 text-blue-500 text-center">
              Get remote medical consultations from the comfort of your home.
            </p>
            <Link to="/consultation" className="text-blue-500 hover:underline mt-4 inline-block">Learn More</Link>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaMapMarkerAlt className="text-4xl text-green-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Pharmacy Locator</h3>
            <p className="text-gray-700 text-blue-500 text-center">
              Find nearby pharmacies quickly and easily.
            </p>
            <Link to="/pharmacy-locator" className="text-green-500 hover:underline mt-4 inline-block">Learn More</Link>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaPills className="text-4xl text-red-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Medication Reminder</h3>
            <p className="text-gray-700 text-blue-500 text-center">
              Never miss a dose with our medication reminder feature.
            </p>
            <Link to="/medication-reminder" className="text-red-500 hover:underline mt-4 inline-block">Learn More</Link>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}

