import React, {useEffect, useState} from "react"
import "./ResultDiv.scss"

export default function ResultDiv({apiType, response}){
    const [finalData, setFinalData] = useState("")
    const [weatherData, setWeatherData] = useState([])
    console.log("API TYPE:::", apiType)

    
useEffect(()=>{
    if (apiType === "weather" && Object.keys(response).length) {
        console.log(response)
        //let pr = JSON.parse(response['result'])
        let pr = response['result']
        if (pr) {
        let finalPR = JSON.parse(pr)
        if (finalPR.length === 0) {
            setFinalData("Oops! Unable to get weather data for selected date")
        } else {
            setFinalData(finalPR[0])
        }
    }

    } else  if (apiType === "crop" && Object.keys(response).length) {
        setFinalData(response['prediction'])
    } else if (apiType === "disease" && Object.keys(response).length) {
        setFinalData(response['prediction'])
    } else if (apiType === "weatherTrain" && Object.keys(response).length) {
        setFinalData(`Weather Model Training: ${response['result']}`)
    }
},[apiType, response])



    return(
        <div className="result-div">
            <div className = "result paragraph paragraph-large">
            <h2 className="header header-h2 mb-2 result-header">
                    {/* CROP PREDICTION */}
                    Results
            </h2>
                {finalData?`${finalData}`: "Try using any of our APIs now!"}
            </div>
            <p className="paragraph paragraph-normal mt-1 note"> ** Note: The reults are still being tested for accuracy.</p>
        </div>
    )
    
}