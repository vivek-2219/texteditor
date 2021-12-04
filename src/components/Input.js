import React, { useState } from 'react';

export default function Input(props) {
    const [text, setText] = useState("");
    const upperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.displayChanger();
        props.showAlert("success", "Your text has been converted to Upper Case!");
    }
    const lowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.displayChanger();
        props.showAlert("success", "Your text has been converted to Lower Case!");
    }
    const snakeCase = () => {
        let newText = text.replaceAll(" ", "_");
        setText(newText);
        props.displayChanger();
        props.showAlert("success", "Your text has been converted to Snake Case!");
    }
    const removeSnakeCase = () => {
        let newText = text.replaceAll("_", " ");
        setText(newText);
        props.displayChanger();
        props.showAlert("success", "Snake Case has been removed!");
    }
    const copyText = () => {
        let textInput = document.getElementById("textInput");
        textInput = navigator.clipboard.writeText(text);
        props.displayChanger();
        props.showAlert("success", "Your text Copied to Clipboard!");
    }
    const selectText = () => {
        let textInput = document.getElementById("textInput");
        textInput.select();
        props.displayChanger();
        props.showAlert("success", "Your text is Selected!");
    }
    const clearText = () => {
        setText("");
        props.displayChanger();
        props.showAlert("success", "Your text is Cleard!");
    }
    const RemoveExtraSpaces = () => {
        const newText = text.split(/[ ]+/);
        setText(newText.join([" "]));
        props.displayChanger();
        props.showAlert("success", "All the extra spaces have been removed from your text!");
    }
    const changeEvent = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className="container">
                <div className="my-3">
                    <label className="form-label"><h2>{props.heading}</h2></label>
                    <textarea className="form-control" id="textInput" style={{backgroundColor: props.backColor, color: props.textColor}} rows="13" placeholder="Enter Your Text Here" value={text} onChange={changeEvent}>{text}</textarea>
                </div>
<<<<<<< Updated upstream
                <button className={`btn btn-${props.mode} mx-2 my-2`} onClick={upperCase}>Convert to Upper Case</button>
                <button className={`btn btn-${props.mode} mx-2 my-2`} onClick={lowerCase}>Convert to Lower Case</button>
                <button className={`btn btn-${props.mode} mx-2 my-2`} onClick={snakeCase}>Convert to Snake Case</button>
                <button className={`btn btn-${props.mode} mx-2 my-2`} onClick={removeSnakeCase}>Remove Snake Case</button>
                <button className={`btn btn-${props.mode} mx-2 my-2`} onClick={copyText}>Copy to Clipboard</button>
                <button className={`btn btn-${props.mode} mx-2 my-2`} onClick={selectText}>Select All the Text</button>
                <button className={`btn btn-${props.mode} mx-2 my-2`} onClick={clearText}>Clear All the Text</button>
=======
                <button className={`btn btn-${props.mode} m-2`} disabled={text.length===0} onClick={upperCase}>Convert to Upper Case</button>
                <button className={`btn btn-${props.mode} m-2`} disabled={text.length===0} onClick={lowerCase}>Convert to Lower Case</button>
                <button className={`btn btn-${props.mode} m-2`} disabled={text.length===0} onClick={snakeCase}>Convert to Snake Case</button>
                <button className={`btn btn-${props.mode} m-2`} disabled={text.length===0} onClick={removeSnakeCase}>Remove Snake Case</button>
                <button className={`btn btn-${props.mode} m-2`} disabled={text.length===0} onClick={copyText}>Copy to Clipboard</button>
                <button className={`btn btn-${props.mode} m-2`} disabled={text.length===0} onClick={selectText}>Select All the Text</button>
                <button className={`btn btn-${props.mode} m-2`} disabled={text.length===0} onClick={clearText}>Clear All the Text</button>
                <button className={`btn btn-${props.mode} m-2`} disabled={text.length===0} onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
>>>>>>> Stashed changes
            </div>
            <div className="container my-4">
                <h4 className="mx-4">There are {text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words and  {text.length} characters in your content.</h4>
                <h4 className="mx-4"></h4>
                <h4 className="mx-4">Content Preview</h4>
                <p className={`m-4 ${text.length===0?'p-0':'p-2'} border border-primary`}>{text}</p>
            </div>
        </>
    )
}
// .filter((element)=>{return element.length!==0})
