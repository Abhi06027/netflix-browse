import React from 'react';

export default function Header() {
  return <div>
<div className=' flex justify-between pl-5 px-5 sm:px-5 md:px-8 lg:px-20 items-center  bg-black  bg-opacity-5  ' >
 <ul className=' lg:flex  lg:justify-center  lg:items-center   space-x-7 text-white  text-sm font-semibold '  > 
     <a href="https://www.netflix.com/in/">
  <img className=" w-20 sm:w-36 md:w-28 lg:w-28 brightness-100  cursor-pointer  '  "src="./images/netflix.png" alt=""/>
  </a>
  <li className='hidden lg:flex'  > Home </li>
  <li className=' cursor-pointer hidden lg:flex '  > TV Shows</li>
   <li className=' cursor-pointer hidden lg:flex ' > Movies </li>     
<li className=' cursor-pointer hidden lg:flex  ' > New & Popular </li>
        <li className=' cursor-pointer hidden lg:flex ' > My List </li>
         </ul> 
<div className=' flex   space-x-5  items-center  ' >
  <div className=' text-white font-bold ' >
 <img className=" w-5 sm:w-5 md:w-5 lg:w-5 brightness-100 text-white  cursor-pointer hidden sm:flex  md:flex lg:flex '  "src="./images/search.png" alt=""/> 
        </div>
  <div> 
  <a href="https://www.netflix.com/in/">
   <p className='text-sm text-white font-semibold hidden lg:flex ' > Children    
  </p>
  </a>
  </div>
    <div className=' text-white' >
      <img className=" w-5 sm:w-5 md:w-6 lg:w-6 brightness-100 text-white  cursor-pointer '  "src="./images/bell.png  " alt=""/>   
        </div>
     <div className=' flex space-x-2 items-center ' >
          <img className=" w-8 h-8 rounded-md  cursor-pointer " src="./images/Netflixavatar.png" alt="" />
           <img className=" w-32 sm:w-36 md:w-52 lg:w-2 h-2 brightness-100  text-white  cursor-pointer hidden  lg:flex '  " src="./images/arrow.png" alt="" />
          </div>
  </div>
 
 
  </div>
</div>;
}
