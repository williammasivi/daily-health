import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
export default function Layout() {
   return (
      <div>
         <Header />
         <Sidebar />
         <main role='main' className="p-4 sm:ml-64">
            <Outlet />
         </main>
      </div>
   );
}
