'use client'
import Image from "next/image";
import { AiOutlineFile } from 'react-icons/ai';

export default function ArticlesCard({title, description, link}) {
  return (
    <div className="greenCard">
      <div className="icon">
        <AiOutlineFile size={30} color="#f6886f" className="icon-size"/>
      </div>  
         <h1>{title}</h1>
         <p className="feedBack">{description}</p>
             <p className="title-occupation">Read more</p>
       </div>
  );
}
// import React from "react";

// export default function Greencard(props) {
//   return (
//     <div className="greenCard">
//       <h1>“Nonumy eirmod tempor invidunt ut labore et dolore”</h1>
//       <p className="feedBack">{props.description}</p>
//       <div className="cardUserDetails">
//         <div className="user-img">
//           <Image src={props.Image} alt="" width="50" height="50" />
//         </div>
//         <div className="user-details">
//           <p className="name">{props.name}</p>
//           <p className="title-occupation">{props.title}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// 331 221