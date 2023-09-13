import React, { useEffect } from "react";
import "../Components/InputText.css";
import Arrow from "../assets/arrow.png";
const InputText = (props) => {
  const createNote = () => {
    if (props.newNote.trim() === "") return;

    const note = {
      content: props.newNote,
      group: props.selectedGroup,
      timestamp: new Date().toLocaleString(),
    };

    const updatedNotes = [...props.notes, note];
    props.setNotes(updatedNotes);

    localStorage.setItem("notesData", JSON.stringify(updatedNotes));

    props.setNewNote("");
  };

  const getNotesByGroup = () => {
    return props.notes.filter((note) => note.group === props.selectedGroup);
  };

  useEffect(() => {
    const storedData = localStorage.getItem("notesData");
    if (storedData) {
      const notesData = JSON.parse(storedData);
      props.setNotes(notesData);
    }
  }, []);

  return (
    <div>
      <div className="notes">
        {/* <h2>Notes</h2> */}
        <textarea
          className="notesTextArea"
          placeholder="Enter your text here..........."
          value={props.newNote}
          onChange={(e) => props.setNewNote(e.target.value)}
        ></textarea>
        <button onClick={createNote} className="notesBtn">
          <img src={Arrow} alt="arrow" />
        </button>
        <ul className="notesUl">
          {getNotesByGroup().map((note, index) => (
            <li key={index}>
              <p className="noteTime">{note.timestamp}</p>
              <p className="noteContent">{note.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InputText;
