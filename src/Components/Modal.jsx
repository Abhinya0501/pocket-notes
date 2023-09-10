import React, { useState } from "react";
import MyModal from "./ShowModal";
import "../Components/Modal.css";

const Modal = (props) => {
  var input = "";
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const handleChange = (e) => {
    props.setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // input = props.input;
    // console.log(input);
    props.setInputset([...props.inputset, props.input]);
    // props.setSelectedGroup(props.input);
    closeModal();
  };

  const handleCloseButton = (
    <button className="model-btn" onClick={handleSubmit}>
      Create
    </button>
  );
  const changeColor = (newColor) => {
    props.setBackgroundColor([...props.backgroundColor, { color: newColor }]);
    console.log(props.backgroundColor);
  };
  const onclickhandle = () => {
    setShowModal(true);
  };
  const mainModal = (
    <MyModal closeModal={closeModal} handleCloseButton={handleCloseButton}>
      <div className="mmMainDiv">
        <div className="mmH1div">
          <h1>Create New Notes group</h1>
        </div>
        <div className="mmGnDiv1">
          <p>Group Name</p>
          <input
            type="text"
            placeholder="Enter your group name...."
            name={input}
            onChange={handleChange}
          />
        </div>
        <div className="mmCcDiv1">
          <p>Choose colour</p>
          <div className="color1" onClick={() => changeColor("#b38bfa")}></div>
          <div className="color2" onClick={() => changeColor("#ff79f2")}></div>
          <div
            className="color3"
            onClick={() => changeColor("lightblue")}
          ></div>
          <div
            className="color4"
            onClick={() => changeColor("lightblue")}
          ></div>
          <div
            className="color5"
            onClick={() => changeColor("lightblue")}
          ></div>
          <div
            className="color6"
            onClick={() => changeColor("lightblue")}
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
