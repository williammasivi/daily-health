import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout() {
   return (
      <div className="flex">
         <Sidebar />
         <div className="flex flex-col flex-grow">
            <Header />
            <main role='main' className="p-4 flex-grow">
               <Outlet />
            </main>
         </div>
      </div>
   );
}
