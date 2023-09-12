// // import React, { useState } from "react";
// // import MyModal from "./ShowModal";
// // import "../Components/Modal.css";

// // const Modal = (props) => {
// //   const [showModal, setShowModal] = useState(false);
// //   const [clr, setClr] = useState("");
// //   const closeModal = () => setShowModal(false);
// //   const handleChange = (e) => {
// //     props.setInput(e.target.value);
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     const val = {
// //       color: clr,
// //       title: props.input,
// //     };
// //     props.setInputset([...props.inputset, val]);

// //     closeModal();
// //   };

// //   const handleCloseButton = (
// //     <button className="model-btn" onClick={handleSubmit}>
// //       Create
// //     </button>
// //   );
// //   const changeColor = (newColor, index) => {
// //     props.setBackgroundColor([...props.backgroundColor, { color: newColor }]);

// //     setClr(newColor);
// //     console.log(props.backgroundColor);
// //   };
// //   const onclickhandle = () => {
// //     setShowModal(true);
// //     props.setSelectedGroup(props.input);
// //   };
// //   const mainModal = (
// //     <MyModal closeModal={closeModal} handleCloseButton={handleCloseButton}>
// //       <div className="mmMainDiv">
// //         <div className="mmH1div">
// //           <h1>Create New Notes group</h1>
// //         </div>
// //         <div className="mmGnDiv1">
// //           <p>Group Name</p>
// //           <input
// //             type="text"
// //             placeholder="Enter your group name...."
// //             name={props.input}
// //             onChange={handleChange}
// //           />
// //         </div>
// //         <div className="mmCcDiv1">
// //           <p>Choose colour</p>
// //           <div className="color1" onClick={() => changeColor("#b38bfa")}></div>
// //           <div className="color2" onClick={() => changeColor("#ff79f2")}></div>
// //           <div
// //             className="color3"
// //             onClick={() => changeColor("lightblue")}
// //           ></div>
// //           <div
// //             className="color4"
// //             onClick={() => changeColor("lightblue")}
// //           ></div>
// //           <div
// //             className="color5"
// //             onClick={() => changeColor("lightblue")}
// //           ></div>
// //           <div
// //             className="color6"
// //             onClick={() => changeColor("lightblue")}
// //           ></div>
// //         </div>
// //       </div>
// //     </MyModal>
// //   );

// //   return (
// //     <>
// //       <div className="lcBtn">
// //         <button onClick={onclickhandle}>+ Create Notes group</button>
// //       </div>
// //       {showModal && mainModal}
// //     </>
// //   );
// // };

// // export default Modal;

// import React, { useState, useEffect } from "react";
// import MyModal from "./ShowModal";
// import "../Components/Modal.css";

// const Modal = (props) => {
//   const [showModal, setShowModal] = useState(false);
//   const [clr, setClr] = useState("");
//   const closeModal = () => setShowModal(false);
//   const handleChange = (e) => {
//     props.setInput(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const val = {
//       color: clr,
//       title: props.input,
//     };

//     // Update the user profile data
//     const updatedProfile = {
//       ...props.profile,
//       inputset: [...props.inputset, val],
//     };

//     props.setInputset(updatedProfile.inputset);

//     // Save the updated user profile data to local storage
//     localStorage.setItem("userData", JSON.stringify(updatedProfile));

//     closeModal();
//   };

//   const handleCloseButton = (
//     <button className="model-btn" onClick={handleSubmit}>
//       Create
//     </button>
//   );

//   const changeColor = (newColor, index) => {
//     props.setBackgroundColor([...props.backgroundColor, { color: newColor }]);

//     setClr(newColor);
//   };

//   const onclickhandle = () => {
//     setShowModal(true);
//     props.setSelectedGroup(props.input);
//   };

//   const mainModal = (
//     <MyModal closeModal={closeModal} handleCloseButton={handleCloseButton}>
//       <div className="mmMainDiv">
//         <div className="mmH1div">
//           <h1>Create New Notes group</h1>
//         </div>
//         <div className="mmGnDiv1">
//           <p>Group Name</p>
//           <input
//             type="text"
//             placeholder="Enter your group name...."
//             name={props.input}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mmCcDiv1">
//           <p>Choose colour</p>
//           <div className="color1" onClick={() => changeColor("#b38bfa")}></div>
//           <div className="color2" onClick={() => changeColor("#ff79f2")}></div>
//           <div
//             className="color3"
//             onClick={() => changeColor("lightblue")}
//           ></div>
//           <div
//             className="color4"
//             onClick={() => changeColor("lightblue")}
//           ></div>
//           <div
//             className="color5"
//             onClick={() => changeColor("lightblue")}
//           ></div>
//           <div
//             className="color6"
//             onClick={() => changeColor("lightblue")}
//           ></div>
//         </div>
//       </div>
//     </MyModal>
//   );

//   return (
//     <>
//       <div className="lcBtn">
//         <button onClick={onclickhandle}>+ Create Notes group</button>
//       </div>
//       {showModal && mainModal}
//     </>
//   );
// };

// export default Modal;
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
            name={props.input}
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
