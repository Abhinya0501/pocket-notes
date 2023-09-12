import React, { useState } from "react";
import "../pages/HomePage.css";
import InputText from "../Components/InputText";
import LeftComponent from "../Components/LeftComponent";
import RightComponent from "../Components/RightComponent";

export default function HomePage() {
  const [backgroundColor, setBackgroundColor] = useState([]);
  const [colors, setColors] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [group, setGroup] = useState("");
  const [input, setInput] = useState("");
  const [inputset, setInputset] = useState([]);

  return (
    <div className="hMainDiv">
      <div className="leftDiv">
        <LeftComponent
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
          colors={colors}
          setColors={setColors}
          selectedGroup={selectedGroup}
          setSelectedGroup={setSelectedGroup}
          notes={notes}
          setNotes={setNotes}
          newNote={newNote}
          setNewNote={setNewNote}
          group={group}
          setGroup={setGroup}
          input={input}
          setInput={setInput}
          inputset={inputset}
          setInputset={setInputset}
        />
      </div>
      <div className="rightDiv">
        {selectedGroup ? (
          <InputText
            newNote={newNote}
            setNewNote={setNewNote}
            notes={notes}
            setNotes={setNotes}
            selectedGroup={selectedGroup}
            setSelectedGroup={setSelectedGroup}
            group={group}
            setGroup={setGroup}
            inputset={inputset}
            setInputset={setInputset}
          />
        ) : (
          <>
            <RightComponent
              backgroundColor={backgroundColor}
              setBackgroundColor={setBackgroundColor}
              colors={colors}
              setColors={setColors}
              selectedGroup={selectedGroup}
              setSelectedGroup={setSelectedGroup}
              notes={notes}
              setNotes={setNotes}
              newNote={newNote}
              setNewNote={setNewNote}
              group={group}
              setGroup={setGroup}
              input={input}
              setInput={setInput}
              inputset={inputset}
              setInputset={setInputset}
            />
          </>
        )}
      </div>
    </div>
  );
}
