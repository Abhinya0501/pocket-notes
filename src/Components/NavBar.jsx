import React from "react";
import "../Components/NavBar.css";
const NavBar = (props) => {
  const { selectedGroup } = props;
  return (
    <div>
      {selectedGroup ? (
        <div className="nMainDiv">
          <div
            className="pDivCircle1"
            style={{
              backgroundColor: props.color,
            }}
          >
            {`${selectedGroup[0]}${selectedGroup[1]}`}
          </div>
          <div className="pDivH1">
            <h1>{selectedGroup}</h1>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavBar;
