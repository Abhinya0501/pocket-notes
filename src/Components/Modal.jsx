import React, { useState, useEffect } from "react";
import MyModal from "./ShowModal";
import "../Components/Modal.css";

const Modal = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [clr, setClr] = useState("");

  // Load user profile data from local storage when the component mounts
  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      try {
        const userData = JSON.parse(storedData);
        if (Array.isArray(userData.inputset)) {
          // Ensure userData.inputset is an array
          props.setInputset(userData.inputset);
        } else {
          // If not an array, set it to an empty array or handle it as needed
          props.setInputset([]);
        }
      } catch (error) {
        console.error("Error parsing userData from localStorage:", error);
        props.setInputset([]); // Handle the error by setting inputset to an empty array
      }
    } else {
      props.setInputset([]); // Handle the case where no data is found in localStorage
    }
  }, []);
  // The empty dependency array ensures this effect runs once when the component mounts

  const closeModal = () => setShowModal(false);
  const handleChange = (e) => {
    props.setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const val = {
      color: clr,
      title: props.input,
    };

    // Update the user profile data
    const updatedProfile = {
      ...props.profile,
      inputset: [...props.inputset, val],
    };

    props.setInputset(updatedProfile.inputset);

    // Save the updated user profile data to local storage
    localStorage.setItem("userData", JSON.stringify(updatedProfile));

    closeModal();
  };

  const handleCloseButton = (
    <button className="model-btn" onClick={handleSubmit}>
      Create
    </button>
  );

  const changeColor = (newColor, index) => {
    props.setBackgroundColor([...props.backgroundColor, { color: newColor }]);
    setClr(newColor);
  };

  const onclickhandle = () => {
    setShowModal(true);
    props.setSelectedGroup(props.input);
  };

  const mainModal = (
    <MyModal
      closeModal={closeModal}
      handleCloseButton={handleCloseButton}
      clr={clr}
    >
      <div className="mmMainDiv">
        <div className="mmH1div">
          <h1>Create New Notes group</h1>
        </div>
        <div className="mmGnDiv1">
          <p>Group Name</p>
          <input
            type="text"
            placeholder="Enter your group name...."
            name={props.input}
            onChange={handleChange}
          />
        </div>
        <div className="mmCcDiv1">
          <p>Choose colour</p>
          <div
            className="color1"
            style={
              clr === "#B38BFA"
                ? { border: "2px solid black" }
                : { borderStyle: "none" }
            }
            onClick={() => changeColor("#B38BFA")}
          ></div>
          <div
            className="color2"
            style={
              clr === "#ff79f2"
                ? { border: "2px solid black" }
                : { borderStyle: "none" }
            }
            onClick={() => changeColor("#ff79f2")}
          ></div>
          <div
            className="color3"
            style={
              clr === "#43E6FC"
                ? { border: "2px solid black" }
                : { borderStyle: "none" }
            }
            onClick={() => changeColor("#43E6FC")}
          ></div>
          <div
            className="color4"
            style={
              clr === "#F19576"
                ? { border: "2px solid black" }
                : { borderStyle: "none" }
            }
            onClick={() => changeColor("#F19576")}
          ></div>
          <div
            className="color5"
            style={
              clr === "#0047FF"
                ? { border: "2px solid black" }
                : { borderStyle: "none" }
            }
            onClick={() => changeColor("#0047FF")}
          ></div>
          <div
            className="color6"
            style={
              clr === "#6691FF"
                ? { border: "2px solid black" }
                : { borderStyle: "none" }
            }
            onClick={() => changeColor("#6691FF")}
          ></div>
        </div>
      </div>
    </MyModal>
  );

  return (
    <>
      <div className="lcBtn">
        <button onClick={onclickhandle}>+ Create Notes group</button>
      </div>
      {showModal && mainModal}
    </>
  );
};

export default Modal;
