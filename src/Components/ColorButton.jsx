import React from "react";

export default function ColorButton({bgColor, setBgColor}) {
    const colors = ["red", "green", "blue", "purple", "black"];
    const handleClick = (e) => {
        setBgColor(e.target.value);
    }
    return (
        <div>
            {
                colors.map((color, index) => (
                    <button key={index} value={color} onClick={handleClick} className={`btn btn-${color} ${color === bgColor ? 'btn-active' : 'null'}`} />
                ))
            }
        </div>
    )
}