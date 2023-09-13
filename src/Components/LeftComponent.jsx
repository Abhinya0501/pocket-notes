import "../Components/LeftComponent.css";

import Modal from "./Modal";
import React from "react";
import Profile from "./Profile";

export default function LeftComponent(props) {
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
