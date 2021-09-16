import React from "react"
import "./Header.scss"

export default function Header(){
    return (
        <div className="header">
              <div className="header__black-strip"></div>
            <div className="header__logo-div">
                <img src="/farmLogo.png" alt="" className="header__image" />
            </div>
          
        </div>
    )
}