import { useEffect } from "react";
import React from "react";
import "../Components/ShowModal.css";
const MyModal = ({ closeModal, children, handleCloseButton }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
  }, []);

  return (
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        {children}
        {handleCloseButton}
      </div>
    </>
  );
};

export default MyModal;
