export default function PharmacyLocator() {
   return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
         <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mx-4">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">Settings Page</h1>
            
            {/* Profile Settings */}
            <div className="mb-8">
               <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Profile Settings</h2>
               <div className="space-y-6">
                  <div>
                     <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Username</label>
                     <input type="text" id="username" className="mt-1 p-2 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 dark:text-gray-200" />
                  </div>
                  <div>
                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                     <input type="email" id="email" className="mt-1 p-2 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 dark:text-gray-200" />
                  </div>
               </div>
            </div>

            {/* Security Settings */}
            <div className="mb-8">
               <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Security Settings</h2>
               <div className="space-y-6">
                  <div>
                     <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                     <input type="password" id="password" className="mt-1 p-2 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 dark:text-gray-200" />
                  </div>
                  <div>
                     <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Confirm Password</label>
                     <input type="password" id="confirm-password" className="mt-1 p-2 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 dark:text-gray-200" />
                  </div>
               </div>
            </div>

            {/* Notification Settings */}
            <div className="mb-8">
               <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Notification Settings</h2>
               <div className="space-y-6">
                  <div className="flex items-center">
                     <input id="email-notifications" name="email-notifications" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600" />
                     <label htmlFor="email-notifications" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">Email Notifications</label>
                  </div>
                  <div className="flex items-center">
                     <input id="sms-notifications" name="sms-notifications" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600" />
                     <label htmlFor="sms-notifications" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">SMS Notifications</label>
                  </div>
               </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
               <button className="bg-indigo-600 text-white py-2 px-6 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save Changes</button>
            </div>
         </div>
      </div>
   );
}
