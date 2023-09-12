import React, { useEffect } from "react";
import "../Components/InputText.css";
import Arrow from "../assets/arrow.png";
const InputText = (props) => {
  // Function to create a new note
  const createNote = () => {
    if (props.newNote.trim() === "") return;

    const note = {
      content: props.newNote,
      group: props.selectedGroup,
      timestamp: new Date().toLocaleString(),
    };

    // Add the new note to the state
    const updatedNotes = [...props.notes, note];
    props.setNotes(updatedNotes);

    // Save the updated notes to localStorage
    localStorage.setItem("notesData", JSON.stringify(updatedNotes));

    // Clear the new note input field
    props.setNewNote("");
  };

  // Function to get notes by group
  const getNotesByGroup = () => {
    return props.notes.filter((note) => note.group === props.selectedGroup);
  };

  // Load notes data from local storage when the component mounts
  useEffect(() => {
    const storedData = localStorage.getItem("notesData");
    if (storedData) {
      const notesData = JSON.parse(storedData);
      props.setNotes(notesData);
    }
  }, []); // The empty dependency array ensures this effect runs once when the component mounts

  return (
    <div>
      <div className="notes">
        <h2>Notes</h2>
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
              <p>{note.content}</p>
              <p>Created: {note.timestamp}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InputText;
