import './App.css';
// komponents start
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Introduction from './Pages/Introduction';
import Goto from './Pages/Goto';
import NotFoundPage from './Pages/NotFoundPage';
import ComingSoon from './Pages/ComingSoon';
import AboutUs from "./Pages/AboutUs"
import Footer from './Pages/Footer'
import Adventure from './Pages/Adventure';

import Contact from './Pages/Contact';
import Galery from './Pages/Galery';
import Faq from './Pages/Faq';
import Blog from './Pages/Blog';
import PostsContainer from './Pages/PostsContainer';
import { useState,useEffect } from "react";
import GridLoader from "react-spinners/GridLoader";
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import ScrollButton from './Pages/ScrollTop';


//komponents end
function App() {
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");
  useEffect(()=>{
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      },2500);
  },[])
  return (
      <>
      {
        loading ?(
          <div className='loading'>
          <GridLoader color="#fff"
          loading={loading}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader" />
          </div>

        ) :(
          <div  className='wrapper'>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route/>
        <Route path='/' element={<Home/>} />
        
        <Route path='/tours' element={<PostsContainer/>}/>
        <Route path='/about-us' element={ <AboutUs/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
        <Route path='/galery' element={<Galery/>}/>
        <Route path='/comingSoon' element={<ComingSoon/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/blog' element={<Blog/>}/>
        
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <ScrollButton/>
      <Footer/>
      </BrowserRouter> 
      
       {/* <Navbar/>
     <Introduction/>
    
     
     <Goto/>

    
     <PostsContainer/>
 
  
     */}
  
   
   
     
     

          </div>
        )
      }


      </>
  );
}

export default App;
