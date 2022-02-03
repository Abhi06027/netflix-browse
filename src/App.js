
import './App.css';
import sa from './sa.jpg';
import Header from './Components/Header';
import Main from './Components/Main';
import TvMain from './Components/TvMain';
import Phone from './Components/Phone';
import Appletv from './Components/Appletv';
import Children from './Components/Children';
import Asked from './Components/Asked';
import Footer from './Components/Footer';
import {Helmet} from "react-helmet";

function App() {
  return (
   

   <div className=' bg-goli  ' >
    <Helmet>
                <meta charSet="utf-8" />
                <title>Home - Netflix  </title>
        <link rel="canonical" href="http://mysite.com/example" />
         <meta name="description" content="
Netflix - Watch TV Shows Online, Watch Movies Online" />
            </Helmet>
   
    <div className=' bg-goli  ' >
    <div>
    <div className=' w-full  min-h-[200px] sm:min-h-[200px]   md:min-h-[200px] lg:min-h-[200px] bg-cover bg-top sm:bg-cover sm:bg-top md:bg-cover md:bg-top lg:bg-cover lg:bg-top  ' style={{ backgroundImage: `url(${sa})` }}> 
    {/* <video className=' absolute  ' src={pie} width="1920" height="1080" controls loop  poster="./images/sa.jpg"> </video> */}
    <Header/> 
     <Main/>
     </div>
   <head>
          <title>   Netflix clone</title>
          
           <link rel="icon" href="/images/favicon.png"  />
        </head>
        
        </div>
    </div>
    <TvMain/>
    <Phone/>
    <Appletv/>
    <Children/>
    <Asked/>
    <Footer/>
    </div>
   
   
   
   
   
   
   
   
 



   
  
  );
}

export default App;
