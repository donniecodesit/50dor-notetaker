import React from 'react';
import NoteItem from "./NoteItem";
import { useSelector } from 'react-redux';

export default function Content() {
    let items = useSelector((state) => state.items);
    let filteredNotes = items;
    const searchText = useSelector((state) => state.searchText);
    if (searchText && searchText !== "") {
        filteredNotes = filteredNotes.filter(({note}) => note.toLowercase().includes.searchText.toLowercase())
    } else {
        filteredNotes = items;
    }

    return (
        <div>
            <NoteItem items={filteredNotes} focus={items.length > 0} />
        </div>
    )
}