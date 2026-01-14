import {Outlet} from 'react-router-dom';
import Navbar from '../components/navigation/Navbar/index.jsx';


export default function App() {

   return (
      <div className="utils-container-fluid">
      <Navbar/>
      <Outlet/>
      </div>

   );
}