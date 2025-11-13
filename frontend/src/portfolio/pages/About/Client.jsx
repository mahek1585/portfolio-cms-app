// import React from 'react';
// import auth1 from "../../../assets/Images/auth1.jpg";
// import auth2 from "../../../assets/Images/auth2.jpg";
// import auth3 from "../../../assets/Images/auth3.jpg";

// const clients = [
//   {
//     image: auth1,
//     name: "Gemma Nolen",
//     company: "Google",
//     review: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
//   },
//   {
//     image: auth2,
//     name: "Gemma Nolen",
//     company: "Google",
//     review: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
//   },
//   {
//     image: auth3,
//     name: "Gemma Nolen",
//     company: "Google",
//     review: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
//   },
// ];

// const Client = () => {
//   return (
//     <section className="-mt-9 px-4 py-10">
//       <h2 className="text-3xl font-semibold text-center">Clients</h2>

//       <div className="flex flex-col gap-16 pt-16 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-between">
//         {clients.map((client, index) => (
//           <div
//             key={index}
//             className="w-[19.8rem] h-[21.4rem] p-6 border border-[#FFD285] [border-width:1.5px] rounded-md bg-white"
//           >
//             <p className="text-[1.3rem] font-semibold leading-7">{client.review}</p>

//             <div className="flex items-center mt-20">
//               <img
//                 src={client.image}
//                 alt={client.name}
//                 className="w-12 h-12 rounded-full border border-[#D8D8D8]"
//               />
//               <div className="ml-3 mt-1">
//                 ★★★★★
//                 <p className="text-[1.1rem] leading-6">
//                   {client.name}, <br /> {client.company}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Client;
