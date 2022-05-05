import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from '../Redux/Notes/notesSlice';
import { nanoid } from 'nanoid';
import ColorButton from "./ColorButton";

export default function NoteInput() {
    const [text, setText] = useState("");
    const [bgColor, setBgColor] = useState("red");

    const dispatch = useDispatch();
    const items = useSelector((state) => state.items);

    const addNewNote = () => {
        if (text === "") {
            alert("Enter something for a note!");
            return;
        }

        const existingNote = items.filter((item) => item.note === text);
        if (existingNote.length > 0) {
            alert("This note already exists.");
            return;
        }
        
        dispatch(addNote({ id: nanoid(5), note: text, bgColor}));
    }

    return (
        <div className="textarea-box">
            <textarea className="textarea-input" placeholder="Enter your note here..." value={text} onChange={(e) => setText(e.target.value)} />
            <div className="textarea-inner-container">
                <ColorButton setBgColor={setBgColor} bgColor={bgColor} />
                <button className="btn-add" onClick={addNewNote}> Add Note </button>
            </div>
        </div>
    )
}