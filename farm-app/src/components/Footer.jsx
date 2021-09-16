import React from "react";
import "./Footer.scss"

export default function Footer() {

    return (
        <div className="footer-div">
            <div className="crop-img" style={{"backgroundImage" : "url(crop2.png)", "backgroundRepeat": "repeat-x"}}>
            </div>
            <div className="footer-note">
            <p className="paragraph paragraph-normal">Made with ❤️ by  Joydev, Ayush & Chirantana</p>
            </div>
        </div>
    )
}