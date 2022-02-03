import React from 'react';

export default function Footer() {
  return <div>

<main className=' flex justify-center items-center  min-h-[450px] text-sm text-gray-300 mt-2 pt-10  bg-goli   '  > 

      <div className='    ' >  
         <div className=' flex space-x-5' >
        <a href="https://www.netflix.com/in/">
  <img className=" w-5 brightness-100  cursor-pointer  '  "src="./images/facebook.png" alt=""/>
        </a>
               <a href="https://www.netflix.com/in/">
  <img className=" w-5 brightness-100  cursor-pointer  '  "src="./images/insta.png" alt=""/>
          </a>
                   <a href="https://www.netflix.com/in/">
  <img className=" w-5 brightness-100  cursor-pointer  '  "src="./images/twitter.png" alt=""/>
          </a>   
                        <a href="https://www.netflix.com/in/">
  <img className=" w-5 brightness-100  cursor-pointer  '  "src="./images/youtube.png" alt=""/>
          </a>     
</div>
<div className='py-2 grid grid-cols-2 gap-8 sm:grid sm:grid-cols-3 sm:gap-2 md:grid md:grid-cols-4  md:gap-10    lg:grid lg:grid-cols-4  lg:gap-20    ' >
<ul> 

<li className=' py-2  hover:underline cursor-pointer ' > Audio and Subtitles  </li>
<li className=' py-2 hover:underline cursor-pointer'> Media Centre   </li>
<li className=' py-2 hover:underline cursor-pointer'> Privacy  </li>
<li className=' py-2 hover:underline cursor-pointer'>Contact Us   </li>

</ul>
<ul> 
<li className=' py-2 hover:underline cursor-pointer'> Audio Description   </li>
<li className=' py-2 hover:underline cursor-pointer'> Investor Relations   </li>
<li className=' py-2 hover:underline cursor-pointer'> Legal Notices   </li>

</ul>
<ul> 
<li className=' py-2 hover:underline cursor-pointer'> Help Centre     </li>
<li className=' py-2 hover:underline cursor-pointer'> Jobs    </li>
<li className=' py-2 hover:underline cursor-pointer'>  Cookie Preferences    </li>
</ul>
<ul> 
<li className=' py-2 hover:underline cursor-pointer'> Gift Cards   </li>
<li className=' py-2 hover:underline cursor-pointer'> Terms of Use  </li>
<li className=' py-2 hover:underline cursor-pointer'> Corporate Information  </li>
</ul>
</div>
   <div className='flex  items-center mt-5  ' >
   <button className=' border-2  py-2 px-2'  >   Service Code </button> 
   </div>
   <div className=' py-6' >© 1997-2022 Netflix, Inc</div>  
</div>
</main>




      
  </div>;
}
