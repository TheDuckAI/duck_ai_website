/* eslint-disable prettier/prettier */
import Image from './Image'
import Link from './Link'

import { useState } from 'react'

// const PersonalCard = ({ name, description, imgSrc, href }) => {
//   const [bgColor, setBgColor] = useState('bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600')

//   const handleMouseMove = (e) => {
//     const rect = e.target.getBoundingClientRect()
//     const x = e.clientX - rect.left
//     const y = e.clientY - rect.top
//     const width = rect.right - rect.left
//     const height = rect.bottom - rect.top
//     const newX = Math.round((x / width) * 255)
//     const newY = Math.round((y / height) * 255)
//     setBgColor(`bg-gradient-to-r from-amber-${newX} via-amber-${newY} to-amber-${newX}`)
//   }

//   return (
//     <div className="flex justify-center">
//         <div className="max-w-xs w-full">
//           {/* <div className="rounded-lg bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 p-3 shadow-xl transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110"> */}
//           <div
//             className={`rounded-lg p-3 shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${bgColor}`}
//             onMouseMove={handleMouseMove}
//             >
//             <div className="photo-wrapper p-4">
//               <Image
//                 alt={name}
//                 src={imgSrc}
//                 className="mx-auto h-32 w-32 rounded-full object-cover object-center md:h-36 lg:h-48"
//                 width={200}
//                 height={200}
//               />
//             </div>
//             <div className="p-3 text-center">
//               <h3 className="text-xl font-bold text-white">{name}</h3>
//               <div className="text-md font-semibold text-white mt-2">
//                 <p>{description}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//   )
//}
{/* 
//const PersonalCard = ({ name, description, imgSrc, href }) => {
    return (
      <div className="flex justify-center">
        <div className="max-w-xs w-full">
          <div className="rounded-lg bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 p-3 shadow-xl transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <div className="photo-wrapper p-4">
              <Image
                alt={name}
                src={imgSrc}
                className="mx-auto h-32 w-32 rounded-full object-cover object-center md:h-36 lg:h-48"
                width={200}
                height={200}
              />
            </div>
            <div className="p-3 text-center">
              <h3 className="text-xl font-bold text-white">{name}</h3>
              <div className="text-md font-semibold text-white mt-2">
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } */}

//   const PersonalCard = ({ name, description, imgSrc, href }) => {
//     const [bgColor, setBgColor] = useState('bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600')
  
//     const handleMouseMove = (e) => {
//       const rect = e.target.getBoundingClientRect()
//       const x = e.clientX - rect.left
//       const y = e.clientY - rect.top
//       const width = rect.right - rect.left
//       const height = rect.bottom - rect.top
//       const newX = Math.round((x / width) * 255)
//       const newY = Math.round((y / height) * 255)
//       setBgColor(`bg-gradient-to-r from-amber-${newX} via-amber-${newY} to-amber-${newX}`)
//     }
  
//     const handleMouseLeave = () => {
//       setBgColor('bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600')
//     }
  
//     return (
//       <div className="flex justify-center items-center">
//         <div className="max-w-xs w-full">
//           <div
//             className={`rounded-lg p-3 shadow-xl transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${bgColor}`}
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//           >
//             <div className="justify-center photo-wrapper p-4 items-center">
//               <Image
//                 alt={name}
//                 src={imgSrc}
//                 className="mx-auto h-32 w-32 rounded-full object-cover object-center md:h-36 lg:h-48"
//                 width={200}
//                 height={200}
//               />
//             </div>
//             <div className="p-3 text-center">
//               <h3 className="text-xl font-bold text-white">{name}</h3>
//               <div className="text-md font-semibold text-white mt-2">
//                 <p>{description}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }

const PersonalCard = ({ name, description, imgSrc, href }) => {
    const [bgColor, setBgColor] = useState('bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600')
  
    const handleMouseMove = (e) => {
      const rect = e.target.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const width = rect.right - rect.left
      const height = rect.bottom - rect.top
      const newX = Math.round((x / width) * 255)
      const newY = Math.round((y / height) * 255)
      setBgColor(`bg-gradient-to-r from-amber-${newX} via-amber-${newY} to-amber-${newX}`)
    }
  
    const handleMouseLeave = () => {
      setBgColor('bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600')
    }
  
    return (
      <div className="flex justify-center">
        <div className="max-w-xs w-full ">
          <div
            className={`rounded-lg p-3 shadow-xl transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${bgColor}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="photo-wrapper p-4">
              <Image
                alt={name}
                src={imgSrc}
                className="mx-auto h-32 w-32 rounded-full object-cover object-center md:h-36 lg:h-48"
                width={200}
                height={200}
              />
            </div>
            <div className="p-3 text-center">
              <h3 className="text-xl font-bold text-white">{name}</h3>
              <div className="text-md font-semibold text-white mt-2 h-20 overflow-auto">
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
// const PersonalCard = ({ name, description, imgSrc, href }) => {
//     const [bgColor, setBgColor] = useState('bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600')
  
//     const handleMouseMove = (e) => {
//       const rect = e.target.getBoundingClientRect()
//       const x = e.clientX - rect.left
//       const y = e.clientY - rect.top
//       const width = rect.right - rect.left
//       const height = rect.bottom - rect.top
//       const newX = Math.round((x / width) * 255)
//       const newY = Math.round((y / height) * 255)
//       setBgColor(`bg-gradient-to-r from-amber-${newX} via-amber-${newY} to-amber-${newX}`)
//     }
  
//     const handleMouseLeave = () => {
//       setBgColor('bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600')
//     }
  
//     return (
//       <div className="flex justify-center">
//         <div className="max-w-xs w-full min-w-[16rem]">
//           <div
//             className={`rounded-lg p-3 shadow-xl transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${bgColor}`}
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//           >
//             <div className="photo-wrapper p-4">
//               <Image
//                 alt={name}
//                 src={imgSrc}
//                 className="mx-auto h-32 w-32 rounded-full object-cover object-center md:h-36 lg:h-48"
//                 width={200}
//                 height={200}
//               />
//             </div>
//             <div className="p-3 text-center">
//               <h3 className="text-xl font-bold text-white">{name}</h3>
//               <div className="text-md font-semibold text-white mt-2 h-20 overflow-auto">
//                 <p>{description}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }

  
  
  
  export default PersonalCard;
  
  
  