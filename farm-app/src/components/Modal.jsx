import React from "react";
import "./Modal.scss"

export default function Modal({children, width, height, closeMethod}){
    return (
        <div className="modal-container">
            <div className="modal" style={{"width":width}}>
                <button className="close" onClick={closeMethod}>x</button>
                {children}
            </div>
        </div>
    )
}