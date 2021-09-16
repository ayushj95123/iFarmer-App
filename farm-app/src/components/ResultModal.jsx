import React from "react"
import "./ResultModal.scss"

export default function Result({title, message}){
    return(
        <div className="result-modal">
            <h2 className="header header-h2 mb-2"> {title} </h2>
            <p className="paragraph pararagraph-normal">Based on the paramters provided the prediction from out model is {message}</p>
        </div>
    )
}