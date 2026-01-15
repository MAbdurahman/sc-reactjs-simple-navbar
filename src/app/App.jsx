import {Outlet} from 'react-router-dom';
import Navbar from '../components/navigation/Navbar/index.jsx';
import GlobalStyles from '../styles/Global.styled.jsx';


export default function App() {

   return (
      <div>
         <Navbar/>
         <Outlet/>
         <GlobalStyles/>
      </div>

   );
}