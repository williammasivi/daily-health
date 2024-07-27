export default function Settings() {
   return (
      <>
         <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <h1>SETTINGS PAGE</h1>
            <div class="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
               <h2 class="text-2xl font-semibold mb-6">Settings</h2>

               {/* <!-- Profile Settings --> */}
               <div class="mb-8">
                  <h3 class="text-xl font-semibold mb-4">Profile Settings</h3>
                  <div class="space-y-4">
                     <div>
                        <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
                        <input type="text" id="username" class="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                     </div>
                     <div>
                        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" class="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                     </div>
                  </div>
               </div>

               {/* <!-- Security Settings --> */}
               <div class="mb-8">
                  <h3 class="text-xl font-semibold mb-4">Security Settings</h3>
                  <div class="space-y-4">
                     <div>
                        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" class="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                     </div>
                     <div>
                        <label for="confirm-password" class="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input type="password" id="confirm-password" class="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                     </div>
                  </div>
               </div>

               {/* <!-- Notification Settings --> */}
               <div class="mb-8">
                  <h3 class="text-xl font-semibold mb-4">Notification Settings</h3>
                  <div class="space-y-4">
                     <div class="flex items-center">
                        <input id="email-notifications" name="email-notifications" type="checkbox" class="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                        <label for="email-notifications" class="ml-2 block text-sm text-gray-900">Email Notifications</label>
                     </div>
                     <div class="flex items-center">
                        <input id="sms-notifications" name="sms-notifications" type="checkbox" class="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                        <label for="sms-notifications" class="ml-2 block text-sm text-gray-900">SMS Notifications</label>
                     </div>
                  </div>
               </div>

               {/* <!-- Save Button --> */}
               <div class="flex justify-end">
                  <button class="bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save Changes</button>
               </div>
            </div>
         </div>
      </>
   );
}