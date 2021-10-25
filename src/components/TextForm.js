import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Button is clicked!");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to UpperCase!","success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted to LowerCase!","success");
    }

    const handleRemoveSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed!","success");
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied!","success");
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!","success");
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    return (
        <>
        <div className="container" style={{color : props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" style={{backgroundColor : props.mode==='light'?'white':'#212529', color : props.mode==='light'?'black':'white'}} rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick={handleRemoveSpace}>Remove Extra Space</button>
            <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length === 0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color : props.mode==='light'?'black':'white'}}>
            <h2>Your text summary!</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to Preview!"}</p>
        </div>
        </>
    ) 
}
