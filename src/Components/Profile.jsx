import React from "react";
import "../Components/Profile.css";
const Profile = (props) => {
  console.log(props);
  return (
    <>
      {/* {props.title === props.selectedGroup ? ( */}

      {
        <div className="pDivMain">
          <div
            className="pDivCircle"
            style={{
              backgroundColor: props.title.color,
            }}
            // key={index}
          >
            {`${props.title.title[0]}${props.title.title[1]}`}
          </div>
          <div className="pDivH1">
            <h1>{props.title.title}</h1>
          </div>
        </div>
      }

      {/* ) : (
        <></>
      )} */}
    </>
  );
};

export default Profile;
