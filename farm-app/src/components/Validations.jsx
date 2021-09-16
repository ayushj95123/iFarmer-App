export function validNitrogen(parameter, val, formErrors) {
    const nValue = parseFloat(val);
    if (!nValue || nValue < 0 || nValue > 150) {
        formErrors[parameter] = "The value should be in range 1 to 200"
        return false;
    }
    delete formErrors[parameter]
    return true;
}

export function validPhosphorous(parameter, val, formErrors)  {
    const pValue = parseFloat(val);
    if (!pValue || pValue < 5 || pValue > 150) {
        formErrors[parameter] = "The value should be in range 5 to 150"
        return false;
    }
    delete formErrors[parameter]
    return true;
}

export function validPotassium(parameter, val, formErrors)  {
    const kValue = parseFloat(val);
    if (!kValue || kValue < 5 || kValue > 205) {
        formErrors[parameter] = "The value should be in range 5 to 205"
        return false;
    }
    delete formErrors[parameter]
    return true;
}

export function validHumidity(parameter, val, formErrors)  {
    const hValue = parseFloat(val);
    if (!hValue || hValue < 10 || hValue > 100) {
        formErrors[parameter] = "The value should be in range 10 to 100"
        return false;
    }
    delete formErrors[parameter]
    return true;
}

export function validTemperature(parameter, val, formErrors)  {
    const tValue = parseFloat(val);
    if (!tValue || tValue < 8 || tValue > 50) {
        formErrors[parameter] = "The value should be in range 8 to 50"
        return false;
    }
    delete formErrors[parameter]
    return true;
}

export function validRainfall(parameter, val, formErrors)  {
    const rValue = parseFloat(val);
    if (!rValue || rValue < 15 || rValue > 300) {
        formErrors[parameter] = "The value should be in range 15 to 300"
        return false;
    }
    delete formErrors[parameter]
    return true;
}

export function validPH(parameter, val, formErrors) {
    const phValue = parseFloat(val);
    if (!phValue || phValue < 2 || phValue > 10) {
        formErrors[parameter] = "The value should be in range 2 to 10"
        return false;
    }
    delete formErrors[parameter]
    return true;
}

// export function validDate(parameter, val, formErrors) {
    
//     if () {
//         formErrors[parameter] = "The value should be in range 2 to 10"
//         return false;
//     }
//     delete formErrors[parameter]
//     return true;
// }



export const validationMethod = {
    "nitrogenLevel" : validNitrogen,
    "phosphorousLevel" : validPhosphorous,
    "potassiumLevel" : validPotassium,
    "humidityLevel" : validHumidity,
    "temperatureLevel" : validTemperature,
    "phLevel" : validPH,
    "rainfallLevel" : validRainfall
    //"selectedDate" : validDate
}