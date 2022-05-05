import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchText } from "../Redux/Notes/notesSlice";

export default function Search() {
    const dispatch = useDispatch();
    const searchValue = useSelector((state) => state.searchText);
    const handleChange = (e) => {
        const text = e.target.value;
        dispatch(setSearchText(text));
    }
    return (
        <div>
            <input type="text" className="search-box" value={searchValue} placeholder="Search..." onChange={handleChange} />
        </div>
    )
}