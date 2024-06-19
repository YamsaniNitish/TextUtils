import React, { useState } from 'react';


export default function TextForm(props) {
    const handleToUpper = () =>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleToLower = () =>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearText = () =>{
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
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick = {handleToUpper}>To Uppercase</button>
                <button className="btn btn-primary mx-1" onClick = {handleToLower}>To Lowercase</button>
                <button className="btn btn-primary mx-1" onClick = {handleClearText}>Clear</button>
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
