import React, {useState} from "react"
import CropForm from "./CropForm"

import { getApiConfiguration } from "./Helper"
import "./LandingPage.scss"
import Modal from "./Modal"
import ResultDiv from "./ResultDiv"
import WeatherForm from "./WeatherPredictionForm"

export default function LandingPage(){
    const [cropButtonClicked, setCropButtonClicked] = useState(false)
    const [weatherButtonClicked, setWeatherButtonClicked] = useState(false)
    const [apiConfig, setApiConfig] = useState({})
    const [apiType, setApiType] = useState("")
    const [apiResponse, setApiResponse] = useState({})

    const showModal = (apiType) => {
        console.log("i got clicked" , cropButtonClicked)
        console.log("APIIIIIIII:", apiType)
        setApiType(apiType)
        const config = getApiConfiguration(apiType)
        setApiConfig({...config})
        if (apiType === "weather") {
            setWeatherButtonClicked(true)
        } else {
            setCropButtonClicked(true)
        }
    }
    const closeParamterModal = ()=> {
        setCropButtonClicked(false)
        setWeatherButtonClicked(false)
    }

    const handleSuccess = (apiType, inputParamters ,data) => {
        closeParamterModal()
        setApiResponse({...data})
        //console.log("API RESPONSE:", apiResponse)
        
        
    }

    const handleFailure = (apiType, error) => {
        closeParamterModal()
        setApiResponse({...error})
        console.log("API RESPONSE:", apiResponse)
        
    }


    return(
        <>
        <div className="landingPagediv">
            <div className="cropPredictionBox featureBox">
                <h2 className="header header-h2 mb-2">
                    {/* CROP PREDICTION */}
                    Crop Recommendation
                </h2>
                <p className="paragraph paragraph-normal paragraph-greyed mb-1">
                    Know what crop to grow by filling in few details. Improve your produce and gain more by more understanding. Crop recommendation depends on the soil, geographic and climatic attributes that mainly contributes to the crop yield. Give it a try.
                </p>
                <button className= "btn" onClick= {() => showModal("crop")} >
                    Get Prediction
                </button>
            </div>
            <div className="weatherPredictionBox featureBox">
                <h2 className="header header-h2 mb-2">
                    {/* WEATHER PREDICTION  */}
                    Weather Prediction
                </h2>
                <p className="paragraph paragraph-normal paragraph-greyed mb-1">
                Use our API to get the weather forecasts. Weather forecasting can help farmers to make better decisions related to crops. 
                </p>
                <button className= "btn" onClick= {() => showModal("weather")}>
                    Get Prediction
                </button>
                <button className= "btn" onClick= {() => showModal("weatherTrain")}>
                    Train Model
                </button>
            </div>
            <div className="diseasePredictionBox featureBox">
                <h2 className="header header-h2 mb-2">
                    {/* DISEASE PREDICTION */}
                    Disease Prediction
                </h2>
                <p className="paragraph paragraph-normal paragraph-greyed mb-1" >
                Unleash the power of our ML based disease prediction model that provides disease diagnosis with high accuracy while preserving energy and preventing false data.
                </p>
                <p className="paragraph paragraph-normal paragraph-greyed mb-1"> Just upload the diseased crop image and get results in seconds. </p>
                <button className= "btn" onClick= {() => showModal("disease")}>
                    Get Prediction
                </button>
            </div>
            { cropButtonClicked && <Modal children = {<CropForm apiConfigurations = {apiConfig} successCallback = {handleSuccess} failureCallBack = {handleFailure}/>} width = "35%" closeMethod = {closeParamterModal}/>}
            { weatherButtonClicked && <Modal children = {<WeatherForm apiConfigurations = {apiConfig} successCallback = {handleSuccess} failureCallBack = {handleFailure}/>} width = "35%" closeMethod = {closeParamterModal}/>}
            {/* { isResponseSuccess && <Modal children = {<ResultModal title = "Prediction" message="{apiResponse}"/>} width = "35%"  closeMethod = {closeResultModal}/>} */}
            {/* { cropButtonClicked && <Modal children = {<CropForm/>} width = "50%" closeMethod = {closeModal}/>} */}
        </div>
        <ResultDiv apiType = {apiType} response = {apiResponse}/>
        </>
    )
}

