import React, { useState } from "react"
import "./CropForm.scss"
import * as validation from "./Validations"
import { apiKey, parameterLabel, getInputType } from "./Helper";
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/ClipLoader";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import "./WeatherPredictionForm.scss"


const override = css`
  display: block;
  margin: 0 auto;
`;

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

export default function WeatherForm({ apiConfigurations, successCallback = null, failureCallback = null }) {
    console.log("api config: ", apiConfigurations);
    const [apiParameters, setApiParameters] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [startDate, setStartDate] = useState(new Date(2016, 10, 2));
    let [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault();
        var requestOptions;
        let finalDate = formatDate(startDate)
        console.log("Final date::", finalDate)

        console.log()
        requestOptions = {
            method: 'POST',
            headers: {
                    'accept': 'application/json'
                },
            
        }
        

        fetch(apiConfigurations["endPoint"]+`${finalDate}`, requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();
                if (!response.ok) {
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                console.log(JSON.parse(data['result']))
                console.log("DATA:::", data)
                setLoading(false)
                successCallback(apiConfigurations['apiType'], apiParameters, data)
            })
            .catch(error => {
                console.error('There was an error!', error);
                failureCallback(apiConfigurations['apiType'], error)
            });
    };

    return (
        <div className="form">
            <div className="form-title-div" style={{ "background": apiConfigurations["modalColor"] }}>
                <h2 className="header header-h2 mt-1 mb-1">{apiConfigurations["title"]}</h2>
                <p className="paragraph paragraph-small mt-2 mb-2">{apiConfigurations["subtitle"]}</p>

            </div>
            <div className="form-div cropForm">
                        <div className="weatherform-div">
                            <div className="datepick-div">
                                <label className="paragraph paragraph-small" htmlFor={"selectedDate"}>{parameterLabel["selectedDate"]}</label>
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                            <p className="paragraph paragraph-small validation-error" style={formErrors["selectedDate"] ? { "visibility": "visible" } : { "visibility": "hidden" }}> {`** ${formErrors["selectedDate"]}`}</p>
                        </div>
            
                

            </div>
            <button className="btn result-button" style={{ "background": apiConfigurations["modalColor"] }}
                 onClick={handleSubmit}>Get Result
            </button>
            {loading && <div className="loader-div">
                <CircleLoader color={apiConfigurations["modalColor"]} loading={loading} css={override} size={100} />
            </div>}


        </div>
    )
}