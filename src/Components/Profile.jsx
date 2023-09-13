import React from "react";
import "../Components/Profile.css";

const Profile = (props) => {
  const {
    inputset,
    selectedGroup,
    setSelectedGroup,
    selectedGroupMap,
    setSelectedGroupMap,
  } = props;

  const containerStyle = {
    backgroundColor: "#f7ecdc",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginTop: "20px",
    paddingBottom: "25px",
    height: "80px",
    borderRadius: "38px 0px 0px 38px",
    marginLeft: "8px",
  };

  const containerStyle1 = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginTop: "20px",
    paddingBottom: "25px",
    height: "80px",
    borderRadius: "38px 0px 0px 38px",
    marginLeft: "8px",
  };

  // Check if inputset is iterable before mapping
  if (!Array.isArray(inputset)) {
    // Handle the case where inputset is not iterable
    return <div>No inputset data available.</div>; // You can return null or any other fallback content
  }
  console.log(selectedGroupMap);
  return (
    <>
      {inputset.map((input, index) => (
        <div
          key={index}
          style={
            selectedGroup === input.title ? containerStyle : containerStyle1
          }
          onClick={() => {
            setSelectedGroup(input.title);
            setSelectedGroupMap(...selectedGroupMap, selectedGroup);
            props.setColor(input.color);
          }} // Set selectedGroup when clicked
        >
          <div
            className="pDivCircle"
            style={{
              backgroundColor: input.color,
            }}
          >
            {`${input.title[0]}${input.title[1]}`}
          </div>
          <div className="pDivH1">
            <h1>{input.title}</h1>
          </div>
        </div>
      ))}
    </>
  );
};

export default Profile;
