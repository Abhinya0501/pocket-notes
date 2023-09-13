import "../Components/LeftComponent.css";
// import { useContext } from "react";
// import { MyContext } from "../../src/MyContext";
import Modal from "./Modal";
import React from "react";
import Profile from "./Profile";

export default function LeftComponent(props) {
  //   const { input, setInput } = useContext(MyContext);

  return (
    <div className="lcMainDiv">
      <div className="lcH1">
        <h1>Pocket Notes</h1>

        <Modal
          input={props.input}
          setInput={props.setInput}
          inputset={props.inputset}
          setInputset={props.setInputset}
          backgroundColor={props.backgroundColor}
          setBackgroundColor={props.setBackgroundColor}
          colors={props.colors}
          setColors={props.setColors}
          selectedGroup={props.selectedGroup}
          setSelectedGroup={props.setSelectedGroup}
        />
      </div>

      <div>
        {/* {props.inputset &&
          props.inputset.map(
            (input, index) => ( */}
        <div>
          <Profile
            title={props.input}
            selectedGroup={props.selectedGroup}
            setSelectedGroup={props.setSelectedGroup}
            group={props.group}
            setgroup={props.setGroup}
            inputset={props.inputset}
            setInputset={props.setInputset}
            setSelectedGroupMap={props.setSelectedGroupMap}
            selectedGroupMap={props.selectedGroup}
            color={props.color}
            setColor={props.setColor}
          />
        </div>
        {/* )
            // console.log(input)
          )} */}
      </div>
    </div>
  );
}

// import React from "react";
// import "../Components/LeftComponent.css";
// import Modal from "./Modal";
// import Profile from "./Profile";

// export default function LeftComponent(props) {
//   return (
//     <div className="lcMainDiv">
//       <div className="lcH1">
//         <h1>Pocket Notes</h1>

//         <Modal
//           input={props.input}
//           setInput={props.setInput}
//           inputset={props.inputset}
//           setInputset={props.setInputset}
//           backgroundColor={props.backgroundColor}
//           setBackgroundColor={props.setBackgroundColor}
//           colors={props.colors}
//           setColors={props.setColors}
//           selectedGroup={props.selectedGroup}
//           setSelectedGroup={props.setSelectedGroup}
//         />
//       </div>

//       <div>
//         {props.inputset &&
//           [
//             ...new Set(
//               props.inputset.map((input) => `${input.title}-${input.color}`)
//             ),
//           ].map((compoundKey, index) => {
//             // You can split compoundKey to extract title and color here
//             const [title, color] = compoundKey.split("-");

//             return (
//               <div key={index}>
//                 <Profile
//                   title={title}
//                   color={color}
//                   selectedGroup={props.selectedGroup}
//                   setSelectedGroup={props.setSelectedGroup}
//                   group={props.group}
//                   setgroup={props.setGroup}
//                   inputset={props.inputset}
//                   setInputset={props.setInputset}
//                 />
//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// }
