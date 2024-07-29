import { useState } from 'react';
import { FaPills, FaPlusCircle } from 'react-icons/fa';

const MedicationReminder = () => {
  const [reminders, setReminders] = useState([]);
  const [medication, setMedication] = useState('');
  const [time, setTime] = useState('');

  const addReminder = () => {
    if (medication && time) {
      setReminders([...reminders, { medication, time }]);
      setMedication('');
      setTime('');
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 p-8 rounded-lg shadow-lg text-black max-w-lg mx-auto mt-12">
      <h2 className="text-3xl font-bold mb-6 text-green-700">Medication Reminder</h2>
      <div className="mb-6">
        <label htmlFor="medication" className="block text-sm font-medium">Medication Name</label>
        <input
          type="text"
          id="medication"
          value={medication}
          onChange={(e) => setMedication(e.target.value)}
          className="mt-1 p-3 w-full bg-gray-200 border border-gray-400 rounded"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="time" className="block text-sm font-medium">Reminder Time</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="mt-1 p-3 w-full bg-gray-200 border border-gray-400 rounded"
        />
      </div>
      <button
        onClick={addReminder}
        className="bg-green-600 hover:bg-green-700 text-white py-3 px-5 rounded flex items-center"
      >
        <FaPlusCircle className="mr-2" /> Add Reminder
      </button>
      <ul className="mt-8 space-y-4">
        {reminders.map((reminder, index) => (
          <li key={index} className="bg-gray-200 p-5 rounded flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold">{reminder.medication}</h3>
              <p className="text-sm">{reminder.time}</p>
            </div>
            <FaPills size={24} className="text-green-700" />
          </li>
        ))}
      </ul>
    
    </div>
  );
};

export default MedicationReminder;
