export function getApiConfiguration(apiType) {
    var apiConfigurations = {}
    switch (apiType) {
        case "crop":
            apiConfigurations["apiType"] = "crop"
            apiConfigurations["inputFields"] = ["nitrogenLevel", "phosphorousLevel", "potassiumLevel", "temperatureLevel", "phLevel", "humidityLevel", "rainfallLevel"];
            apiConfigurations["endPoint"] = "https://ifarmer-app.herokuapp.com/cropprediction";
            apiConfigurations["title"] = "Crop Prediction"
            apiConfigurations["subtitle"] = "Enter the values of the following parameters to predict the suitable crop to grow";
            apiConfigurations["modalColor"] = "var(--color-lightGreen)"
            break;
        case "weather":
            apiConfigurations["apiType"] = "weather"
            apiConfigurations["inputFields"] = ["selectedDate"];
            apiConfigurations["endPoint"] = "https://1e8b-104-196-66-26.ngrok.io/weatherprediction?dateid=";
            apiConfigurations["title"] = "Weather Prediction"
            apiConfigurations["subtitle"] = "Select the date to predict the weather"
            apiConfigurations["modalColor"] = "var(--color-lightBlue)"

            break;
        case "weatherTrain":
            apiConfigurations["apiType"] = "weatherTrain"
            apiConfigurations["inputFields"] = ["inputFile"];
            apiConfigurations["endPoint"] = "https://1e8b-104-196-66-26.ngrok.io/datasetfiles/";
            apiConfigurations["title"] = "Weather Model Training"
            apiConfigurations["subtitle"] = "Upload the csv file to train the weather model"
            apiConfigurations["modalColor"] = "var(--color-lightBlue)"
    
            break;
        case "disease":
            apiConfigurations["apiType"] = "disease"
            apiConfigurations["inputFields"] = ["cropImage"];
            apiConfigurations["endPoint"] = "https://ifarmer-app.herokuapp.com/cropdiseaseprediction/";
            apiConfigurations["title"] = "Disease Prediction"
            apiConfigurations["subtitle"] = "Upload the diseased crop image file to predict the disease";
            apiConfigurations["modalColor"] = "var(--color-lightOrange)"

            break;
        default:
            console.log("Wrong API type")
    }
    return apiConfigurations;
}

export const apiKey = {
    "nitrogenLevel" : "N",
    "phosphorousLevel" : "P",
    "potassiumLevel" : "K",
    "humidityLevel" : "humidity",
    "temperatureLevel" : "temperature",
    "phLevel" : "ph",
    "rainfallLevel" : "rainfall",
    "cropImage" : "cropImage",
    "selectedDate" : "selectedDate",
    "inputFile": "inputFile"
}

export const parameterLabel = {
    "nitrogenLevel" : "Nitrogen Level(0-150)",
    "phosphorousLevel" : "Phosphorous Level(5-150)",
    "potassiumLevel" : "Potassium Level(5-205)",
    "humidityLevel" : "Humidity Level(10-100)",
    "temperatureLevel" : "Temperature Level(8-50)",
    "phLevel" : "PH Level(2-10)",
    "rainfallLevel" : "Rainfall Lavel(15-300)",
    "cropImage" : "Crop Image",
    "selectedDate" : "Select Date",
    "inputFile": "Weather History File"
}


export function getInputType(parameter) {
    if (parameter === "cropImage" || parameter === "inputFile") {
        return "file"
    } else {
        return "text"
    }
}

