import React, { useState } from "react";
import "../pages/HomePage.css";
import InputText from "../Components/InputText";
import LeftComponent from "../Components/LeftComponent";
import RightComponent from "../Components/RightComponent";
import NavBar from "../Components/NavBar";

export default function HomePage() {
  const [backgroundColor, setBackgroundColor] = useState([]);
  const [colors, setColors] = useState("");
  const [color, setColor] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedGroupMap, setSelectedGroupMap] = useState([]);
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
          setSelectedGroupMap={setSelectedGroupMap}
          selectedGroupMap={selectedGroupMap}
          color={color}
          setColor={setColor}
        />
      </div>
      <div className="rightDiv">
        <div className="NavBar">
          <NavBar
            selectedGroup={selectedGroup}
            title={input}
            setSelectedGroup={setSelectedGroup}
            group={group}
            setgroup={setGroup}
            inputset={inputset}
            setInputset={setInputset}
            setSelectedGroupMap={setSelectedGroupMap}
            selectedGroupMap={selectedGroup}
            color={color}
            setColor={setColor}
          />
        </div>
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
