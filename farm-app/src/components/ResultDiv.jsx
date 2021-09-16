import React, {useEffect, useState} from "react"
import "./ResultDiv.scss"

export default function ResultDiv({apiType, response}){
    const [finalData, setFinalData] = useState("")
    const [weatherData, setWeatherData] = useState([])
    console.log("API TYPE:::", apiType)

    
useEffect(()=>{
    if (apiType === "weather" && Object.keys(response).length) {
   
        let final = []
        let pr = JSON.parse(response['result'])
        console.log("Response:::", pr)
        let keys = Object.keys(pr)
        let values = Object.values(pr)

        console.log("Keys", keys.length)
        for (let i = 0 ; i< 10; i++) {
            console.log("Values", values[i]['New_Date'])
            console.log("Values", values[i]['Summary'])
            // final[values[i]['New_Date']] = values[i]['Summary']
            final.push(values[i])
        }

        setWeatherData(final)
        
        let pred = Object.entries(response['result'])
        console.log("Pred", pred)
        let nextFourteenPrediction = pred.slice(0,10)


        
        console.log("Reponse Pred:", nextFourteenPrediction)

    } else  if (apiType === "crop" && Object.keys(response).length) {
        setFinalData(response['prediction'])
    } else if (apiType === "disease" && Object.keys(response).length) {
        setFinalData(response['prediction'])
    }
},[apiType, response])

if (apiType === "weather" && finalData.length ){
    return(
        <div className="result-div">
            <div className="result weather-result-div">
                {finalData.map((item, index)=>{
                    return(
                        <div className="weather-result-day">
                            <p> {item['New_Date']}</p>
                            <p> {item['Summary']}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
} else {

    return(
        <div className="result-div">
            <div className = "result paragraph paragraph-large">
            <h2 className="header header-h2 mb-2" style ={{backgroundColor: "#f9f4c7", borderRadius: "10px", padding: "10px"}}>
                    {/* CROP PREDICTION */}
                    Results
            </h2>
                {finalData?`${finalData}`: "Try using any of our APIs now!"}
            </div>
            <p className="paragraph paragraph-normal mt-1 note"> ** Note: The reults are still being tested for accuracy.</p>
        </div>
    )
    }
}