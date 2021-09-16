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
            apiConfigurations["inputFields"] = ["weatherFile"];
            apiConfigurations["endPoint"] = "https://4af0-34-86-4-118.ngrok.io/files/";
            apiConfigurations["title"] = "Weather Prediction"
            apiConfigurations["subtitle"] = "Upload the csv file to predict the weather"
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
    "weatherFile" : "weatherFile"
}

export const parameterLabel = {
    "nitrogenLevel" : "Nitrogen Level",
    "phosphorousLevel" : "Phosphorous Level",
    "potassiumLevel" : "Potassium Level",
    "humidityLevel" : "Humidity Level",
    "temperatureLevel" : "Temperature Level",
    "phLevel" : "PH Level",
    "rainfallLevel" : "Rainfall Lavel",
    "cropImage" : "Crop Image",
    "weatherFile" : "Weather Data File"
}


export function getInputType(parameter) {
    if (parameter === "cropImage" || parameter ==="weatherFile") {
        return "file"
    } else {
        return "text"
    }
}

