import React, { useState } from "react"
import "./CropForm.scss"
import * as validation from "./Validations"
import { apiKey, parameterLabel, getInputType } from "./Helper";
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
`;

export default function CropForm({ apiConfigurations, successCallback = null, failureCallback = null }) {
    console.log("api config: ", apiConfigurations);
    const [apiParameters, setApiParameters] = useState({});
    const [formErrors, setFormErrors] = useState({});
    let [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault();
        var requestOptions;
        if (apiConfigurations["apiType"] === 'crop') {
            console.log()
            requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                },
                body: JSON.stringify(apiParameters)
            }
        } else {
            const formData = new FormData();
            
            if (apiConfigurations["apiType"] === 'disease') {
                formData.append('file', apiParameters["cropImage"]);
            } else {
                formData.append('files', apiParameters["inputFile"]);
            }
            requestOptions = {
                method: 'POST',
                body: formData
            };
        }

        fetch(apiConfigurations["endPoint"], requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();
                if (!response.ok) {
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }

                console.log("DATA:::", data)
                setLoading(false)
                successCallback(apiConfigurations['apiType'], apiParameters, data)
            })
            .catch(error => {
                console.error('There was an error!', error);
                failureCallback(apiConfigurations['apiType'], error)
            });
    };

    const handleInput = (e) => {

        const { id, value } = e.target;
        if (getInputType(id) === "file") {
            const file = e.target.files[0];
            console.log("File", file)
            const key = apiKey[id];
            apiParameters[key] = file
            setApiParameters({ ...apiParameters })

        } else {
            const validate = validation.validationMethod[id];
            const key = apiKey[id]
            if (validate(id, value, formErrors)) {
                apiParameters[key] = parseFloat(value)
                setApiParameters({ ...apiParameters })
            }
        }
        setFormErrors({ ...formErrors })
    };

    return (
        <div className="form">
            <div className="form-title-div" style={{ "background": apiConfigurations["modalColor"] }}>
                <h2 className="header header-h2 mt-1 mb-1">{apiConfigurations["title"]}</h2>
                <p className="paragraph paragraph-small mt-2 mb-2">{apiConfigurations["subtitle"]}</p>

            </div>
            <div className="form-div cropForm">
                {apiConfigurations["inputFields"].map((name_input, index) => {
                    return (
                        <div key={index} className="form-inputs-div">
                            <div className="label-and-input">
                                <label className="paragraph paragraph-small" htmlFor={name_input}>{parameterLabel[name_input]}</label>
                                <input required type={getInputType(name_input)} id={name_input} onChange={handleInput} />
                            </div>
                            <p className="paragraph paragraph-small validation-error" style={formErrors[name_input] ? { "visibility": "visible" } : { "visibility": "hidden" }}> {`** ${formErrors[name_input]}`}</p>
                        </div>
                    )
                })}

            </div>
            <button className="btn result-button" style={{ "background": apiConfigurations["modalColor"] }}
                disabled=
                {!((Object.keys(formErrors).length === 0) && (Object.keys(apiParameters).length === apiConfigurations.inputFields.length))} onClick={handleSubmit}>Get Result
            </button>
            {loading && <div className="loader-div">
                <CircleLoader color={apiConfigurations["modalColor"]} loading={loading} css={override} size={100} />
            </div>}


        </div>
    )
}