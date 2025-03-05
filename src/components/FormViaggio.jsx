// import { input, inputDiv } from "./style/input";
// import { useState } from "react";

// export default function FormViaggio() {
//   const [user, setUser] = useState({
//     img: "public",
//     place: "caraibi",
//     title: "da no perdere!",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore tempora debitis, unde consectetur, labore perferendis atque eum esse, minus voluptatibus dolor. Nesciunt sequi nam repellendus incidunt, a obcaecati error? Illum!",
//     start: "",
//     finish: "",
//     tags: [],
//   });
//   const handleUser = ({ target }) => {
//     setUser((a) => {
//       return { ...a, [target.name]: target.value };
//     });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(user);
//   };
//   return (
//     <>
//       <div className="h-full w-full max-w-7xl max-h-screen grid justify-self-center justify-items-center">
//         <form>
//           <div className="card_img">
//             <div>
//               <img
//                 src=""
//                 className="w-full h-full max-w-80 max-h-screen"
//                 alt=""
//               />
//             </div>
//             <label htmlFor="img">Insert an image of the place</label>
//             <br />
//             <div className={`${inputDiv}`}>
//               <input
//                 name="img"
//                 type="file"
//                 className={`${input}`}
//                 onChange={handleUser}
//               />
//             </div>
//           </div>
//           <label htmlFor="place">Where</label>
//           <br />
//           <div className={`${inputDiv}`}>
//             <input
//               name="place"
//               id="place"
//               type="text"
//               className={`${input}`}
//               onChange={handleUser}
//             />
//           </div>
//           <br />
//           <label htmlFor="title">Be immersive</label>
//           <br />
//           <div className={`${inputDiv}`}>
//             <input
//               name="title"
//               id="title"
//               type="text"
//               className={`${input}`}
//               onChange={handleUser}
//             />
//           </div>
//           <br />
//           <label htmlFor="description">Desrcribe as a novel</label>
//           <br />
//           <div className={`${inputDiv}`}>
//             <input
//               name="description"
//               id="description"
//               type="text"
//               className={`${input}`}
//               onChange={handleUser}
//             />
//           </div>
//           <br />
//           <label htmlFor="start">Beginning</label>
//           <br />
//           <div className={`${inputDiv}`}>
//             <input
//               name="start"
//               id="start"
//               type="date"
//               className={`${input}`}
//               onChange={handleUser}
//             />
//           </div>
//           <br />
//           <label htmlFor="finish">Time to say good bye</label>
//           <br />
//           <div className={`${inputDiv}`}>
//             <input
//               name="finish"
//               id="finish"
//               type="date"
//               className={`${input}`}
//               onChange={handleUser}
//             />
//           </div>
//           <br />
//           <label htmlFor="tags">Tags</label>
//           <br />
//           <div className={`inline-block`}>
//             <input
//               name="tags"
//               id="tags"
//               type="checkbox"
//               onChange={handleUser}
//             />
//             <label htmlFor="tags">Tags</label>
//           </div>
//           <br />
//           <div className={`inline-block ${inputDiv}`}>
//             <input
//               name="tags"
//               id="tags1"
//               type="checkbox"
//               onChange={handleUser}
//             />
//             <label htmlFor="tags1">Cane</label>
//           </div>
//           <br />
//           <button type="button" className="border-blue" onClick={handleSubmit}>
//             Completata
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }
