import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState();
    const handleUpperCaseClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleSentenceCaseClick = () => {
        let newText = text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
        setText(newText);
    }
    const handleLowerCaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearCase = () => {
        let newText = '';
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className={`container bg-${props.mode} p-4 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={`form-control bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} onChange={handleOnChange} placeholder="Enter Text Here" value={text} id="myText" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpperCaseClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleSentenceCaseClick}>Convert to Sentence</button>
                <button className="btn btn-info mx-2" onClick={handleLowerCaseClick}>Convert to LowerCase</button>
                <button className="btn btn-danger mx-2" onClick={handleClearCase}>Clear Text</button>
            </div>
            <div className={`container my-3 bg-${props.mode} p-4 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h1>Your text here</h1>
                <p>{text ? `${text.split(" ").length} words and ${text.length} characters` : ""}</p>
                <h3>Preview</h3>
                <p>{text && text.length > 0 ? text : "Enter Text above to Preview Here"}</p>
            </div>
        </>
    )
}
