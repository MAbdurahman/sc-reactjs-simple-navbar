import {Fragment} from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About/index.jsx';
import Contact from '../pages/Contact';
import Products from '../pages/Products';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import Navbar from '../components/navigation/Navbar';


export default function App() {

   return (
      <div className='utils-container'>
         <Navbar/>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Products/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/sign-in' element={<SignIn/>}/>
            <Route path='/sign-up' element={<SignUp/>}/>
         </Routes>
      </div>

   );
}