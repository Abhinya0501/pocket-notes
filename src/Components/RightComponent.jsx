// import React from "react";
// import InputText from "./InputText";
// import "../Components/RightComponent.css";
// import HomeImage from "../assets/image-removebg-preview 1 (1).png";
// import EncryptIcon from "../assets/Vector.png";
// export default function RightComponent(props) {
//   return (
//     <div className="rcMainDiv">
//       <div className="rcHomeImage">
//         <img src={HomeImage} alt="HomeImage" />
//       </div>
//       <div className="rcH1">
//         <h1>Pocket Notes</h1>
//       </div>
//       <div className="rcPara1">
//         <p>
//           Send and receive messages without keeping your phone online. Use
//           Pocket Notes on up to 4 linked devices and 1 mobile phone
//         </p>
//       </div>

//       <div className="rcFooter">
//         <img src={EncryptIcon} alt="end-to-end encrypted" />
//         <p>end-to-end encrypted</p>
//       </div>

//       <InputText
//         // key={index}
//         newNote={props.newNote}
//         setNewNote={props.setNewNote}
//         notes={props.notes}
//         setNotes={props.setNotes}
//         selectedGroup={props.selectedGroup}
//         setSelectedGroup={props.setSelectedGroup}
//         group={props.group}
//         setGroup={props.setGroup}
//       />
//     </div>
//   );
// }
import React from "react";

import "../Components/RightComponent.css";
import HomeImage from "../assets/image-removebg-preview 1 (1).png";
import EncryptIcon from "../assets/Vector.png";

export default function RightComponent(props) {
  // Check if a profile is selected

  return (
    <div className="rcMainDiv">
      <div className="rcHomeImage">
        <img src={HomeImage} alt="HomeImage" />
      </div>
      <div className="rcH1">
        <h1>Pocket Notes</h1>
      </div>
      <div className="rcPara1">
        <p>
          Send and receive messages without keeping your phone online. Use
          Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>

      <div className="rcFooter">
        <img src={EncryptIcon} alt="end-to-end encrypted" />
        <p>end-to-end encrypted</p>
      </div>

      {/* Conditionally render the InputText component */}
    </div>
  );
}
