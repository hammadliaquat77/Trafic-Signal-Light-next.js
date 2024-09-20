
// 'use client'

// import { useEffect, useState } from "react";

// export default function Home() {

//    const [light, setLight] = useState('red')
//    useEffect(()=> {

//     const light = ['red', 'yellow', 'green']
//      let index = 0

//      const interval = setInterval(()=> {
//       index = (index + 1) % light.length
//       setLight(light[index])
//      },3000)
//      return ()=> clearInterval(interval);
//    },[])

//   return (
//    <div>
//     <div className="w-full h-screen flex justify-center flex-col items-center">
//       <h1 className="mb-5 text-2xl font-semibold">Trafic Signal From Hammad Liaquat</h1>
//        <div className="w-28 h-60 bg-black rounded-lg  flex justify-center items-center flex-col">
//            <div className={`h-14 w-14 bg-gray-400 rounded-full m-2 ${light === 'red' ? 'bg-red-500' : 'bg-slate-400'}`}></div>         
//            <div className={`h-14 w-14 bg-gray-400 rounded-full m-2 ${light === 'yellow' ? 'bg-yellow-500' : 'bg-slate-400'}`}></div>         
//            <div className={`h-14 w-14 bg-gray-400 rounded-full m-2 ${light === 'green' ? 'bg-green-500' : 'bg-slate-400'}`}></div>         
//        </div>
//        <div className="h-[45vh] w-6 bg-black"></div>
//        <div className="h-5 w-32 rounded-xl bg-black"></div>

//     </div>
//    </div>
//   );
// }
 











// 'use client'

// import { useEffect, useState } from "react";

// export default function Home() {

//    const [light, setLight] = useState('red')
//    useEffect(()=> {

//     const lights = ['red', 'yellow', 'green']
//      let index = 0

//      const interval = setInterval(()=> {
//       index = (index + 1) % lights.length
//       setLight(lights[index])
//      }, 3000)
//      return () => clearInterval(interval);
//    }, [])

//    // Function to display the message based on the light color
//    const getMessage = (light) => {
//      switch (light) {
//        case 'red':
//          return 'Stop';
//        case 'yellow':
//          return 'Ready';
//        case 'green':
//          return 'Go';
//        default:
//          return '';
//      }
//    }

//   return (
//    <div>
//     <div className="w-full h-screen flex justify-center flex-col items-center">
//       <h1 className="mb-5 text-2xl font-semibold">Trafic Signal From Hammad Liaquat</h1>
//        <div className="w-28 h-60 bg-black rounded-lg  flex justify-center items-center flex-col">
//            <div className={`h-14 w-14 bg-gray-400 rounded-full m-2 ${light === 'red' ? 'bg-red-500' : 'bg-slate-400'}`}></div>         
//            <div className={`h-14 w-14 bg-gray-400 rounded-full m-2 ${light === 'yellow' ? 'bg-yellow-500' : 'bg-slate-400'}`}></div>         
//            <div className={`h-14 w-14 bg-gray-400 rounded-full m-2 ${light === 'green' ? 'bg-green-500' : 'bg-slate-400'}`}></div>         
//        </div>
//        <div className="text-xl font-bold absolute ml-56 -mt-96">
//          {/* Display the message based on the light color */}
//          {getMessage(light)}
//        </div>
//        <div className="h-[45vh] w-6 bg-black"></div>
//        <div className="h-5 w-32 rounded-xl bg-black"></div>
//     </div>
//    </div>
//   );
// }









'use client'

import { useEffect, useState } from "react";

export default function Home() {

   const [light, setLight] = useState('red')
   useEffect(()=> {

    const lights = ['red', 'yellow', 'green']
     let index = 0

     const interval = setInterval(()=> {
      index = (index + 1) % lights.length
      setLight(lights[index])
     }, 3000)
     return () => clearInterval(interval);
   }, [])

  return (
   <div>
    <div className="w-full h-screen flex justify-center flex-col items-center">
      <h1 className="mb-5 text-2xl font-semibold">Traffic Signal From Hammad Liaquat</h1>
       <div className="w-28 h-60 bg-black rounded-lg relative flex justify-center items-center flex-col">
           <div className="flex justify-center items-center">
             <div className={`h-14 w-14 bg-gray-400 rounded-full m-2 ${light === 'red' ? 'bg-red-500' : 'bg-slate-400'}`}></div> 
             <div className="ml-56 absolute text-2xl font-bold">
               {light === 'red' && 'Stop'}
             </div>
           </div>
           <div className="flex justify-center items-center">
             <div className={`h-14 w-14 bg-gray-400 rounded-full m-2 ${light === 'yellow' ? 'bg-yellow-500' : 'bg-slate-400'}`}></div>
             <div className="ml-56 absolute text-2xl font-bold">
               {light === 'yellow' && 'Ready'}
             </div>
           </div>
           <div className="flex justify-center items-center">
             <div className={`h-14 w-14 bg-gray-400 rounded-full m-2 ${light === 'green' ? 'bg-green-500' : 'bg-slate-400'}`}></div>         
             <div className="ml-56 absolute text-3xl font-bold">
               {light === 'green' && 'Go'}
             </div>
           </div>
       </div>
       <div className="h-[45vh] w-6 bg-black"></div>
       <div className="h-5 w-32 rounded-xl bg-black"></div>
    </div>
   </div>
  );
}
