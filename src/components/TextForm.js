import React, { useState } from 'react';


export default function TextForm(props) {
    const handleToUpper = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleToLower = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearText = () =>{
        // console.log("Uppercase was clicked" + text);
        setText('')
    }
    const handleOnChange = (event)=>{
            // console.log("On Change");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className = "container" >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="muBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick = {handleToUpper}>To Uppercase</button>
                <button className="btn btn-primary mx-1" onClick = {handleToLower}>To Lowercase</button>
                <button className="btn btn-primary mx-1" onClick = {handleClearText}>To Clear</button>
            </div>
            <div className="container my-3">
                <h1>Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
  )
}
