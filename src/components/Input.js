import React, { useState } from 'react';

export default function Input(props) {
    const [text, setText] = useState("");
    const upperCase = () => {
        let newText = text.toUpperCase();
        return setText(newText);
    }
    const lowerCase = () => {
        let newText = text.toLowerCase();
        return setText(newText);
    }
    const snakeCase = () => {
        let newText = text.replaceAll(" ", "_");
        return setText(newText);
    }
    const removeSnakeCase = () => {
        let newText = text.replaceAll("_", " ");
        return setText(newText);
    }
    const copyText = () => {
        let textInput = document.getElementById("textInput");
        textInput = navigator.clipboard.writeText(text);
    }
    const selectText = () => {
        let textInput = document.getElementById("textInput");
        return textInput.select();
    }
    const clearText = () => {
        return setText("");
    }
    const changeEvent = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className="container">
                <div className="my-3">
                    <label className="form-label"><h1>{props.heading}</h1></label>
                    <textarea className="form-control" id="textInput" style={{backgroundColor: props.backColor, color: props.textColor}} rows="13" placeholder="Enter Your Text Here" value={text} onChange={changeEvent}>{text}</textarea>
                </div>
                <button className={`btn btn-${props.mode} mx-2 my-2`} onClick={upperCase}>Convert to Upper Case</button>
                <button className={`btn btn-${props.mode} mx-2 my-2`} onClick={lowerCase}>Convert to Lower Case</button>
                <button className={`btn btn-${props.mode} mx-2 my-2`} onClick={snakeCase}>Convert to Snake Case</button>
                <button className={`btn btn-${props.mode} mx-2 my-2`} onClick={removeSnakeCase}>Remove Snake Case</button>
                <button className={`btn btn-${props.mode} mx-2 my-2`} onClick={copyText}>Copy to Clipboard</button>
                <button className={`btn btn-${props.mode} mx-2 my-2`} onClick={selectText}>Select All the Text</button>
                <button className={`btn btn-${props.mode} mx-2 my-2`} onClick={clearText}>Clear All the Text</button>
            </div>
            <div className="container my-4">
                <h4 className="mx-4">{text.length} characters in your text.</h4>
                <h4 className="mx-4">{text.split(" ").length} words in your text.</h4>
            </div>
        </>
    )
}
