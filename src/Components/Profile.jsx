import React from "react";
import "../Components/Profile.css";
const Profile = (props) => {
  return (
    <>
      {/* {props.title === props.selectedGroup ? ( */}

      {props.backgroundColor.map((item, index) => (
        <div className="pDivMain" key={index}>
          <div
            className="pDivCircle"
            style={{
              backgroundColor: item.color,
            }}
          >
            {`${props.title[0]}${props.title[props.title.length - 1]}`}
          </div>
          <div className="pDivH1">
            <h1>{props.title}</h1>
          </div>
        </div>
      ))}

      {/* ) : (
        <></>
      )} */}
    </>
  );
};

export default Profile;
