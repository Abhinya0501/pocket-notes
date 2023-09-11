import "../Components/LeftComponent.css";
// import { useContext } from "react";
// import { MyContext } from "../../src/MyContext";
import Modal from "./Modal";
import React, { useState } from "react";
import Profile from "./Profile";

export default function LeftComponent() {
  const [backgroundColor, setBackgroundColor] = useState([]);
  const [colors, setColors] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  // Function to change the color when a button is clicked

  const [input, setInput] = useState("");
  const [inputset, setInputset] = useState([]);
  //   const { input, setInput } = useContext(MyContext);
  console.log(inputset);
  return (
    <div className="lcMainDiv">
      <div className="lcH1">
        <h1>Pocket Notes</h1>
      </div>
      <div>
        <Modal
          input={input}
          setInput={setInput}
          inputset={inputset}
          setInputset={setInputset}
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
          colors={colors}
          setColors={setColors}
          selectedGroup={selectedGroup}
          setSelectedGroup={setSelectedGroup}
        />
      </div>
      <div>
        {inputset &&
          inputset.map(
            (input, index) => (
              <Profile
                title={input}
                key={index}
                backgroundColor={backgroundColor}
                setBackgroundColor={setBackgroundColor}
                colors={colors}
                setColors={setColors}
                // selectedGroup={selectedGroup}
                // setSelectedGroup={setSelectedGroup}
              />
            )
            // console.log(input)
          )}
      </div>
    </div>
  );
}
