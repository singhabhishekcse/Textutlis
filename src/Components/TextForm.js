import { useState } from "react"
import React  from 'react'
import PropTypes from 'prop-types';
// import "./styleNav.css";


 const TextForm = (props) => {

   const [text, setText] = useState("")
     


const handleUpClick = ()=>{
      const updatedUpText = text.toUpperCase();
      setText(updatedUpText)

}
const handleLwClick = ()=>{
    const updatedLwText = text.toLowerCase();
    setText(updatedLwText)
}
const handleResetClick =()=>{
    setText("")
}
const handleCopyClick=()=>{
    let text = document.getElementById("textBox")
    text.select()
    navigator.clipboard.writeText(text.value)

}
const removeExtraSpaces =()=>{
     let newText = text.split(/[ ]+/)
     setText(newText.join(" "))
}
const habdleOnChange = (event)=>{
    setText(event.target.value);
}


// define array for removing extra space 
 const arr = text.split(" ")
  const arrUdated =  arr.filter((str)=>  /\S/.test(str) )

  const arr1 = text.split(".")
  const arrUdated1 =  arr1.filter((str)=>  /\S/.test(str) )


    return (
        <><div className="container ">
            <div className="container ">
                <div className="mstateb-3 my-5" >
                 
                    <label htmlFor="textBox" className="form-label"> <h2  style= {{ color: props.mode === "dark" ? "white": "black" }}> {props.heading}</h2></label>
                    <textarea className="form-control" value={text} id="textBox" rows="8"   onChange={habdleOnChange}  placeholder="enter text here"    style= {{ backgroundColor: props.mode === "dark" ? "#dcdcdc": "white",
                              color: props.mode === "dark" ? "black": "black"  }}></textarea>

                    <button type="button" className="btn btn-info my-3 mx-1" onClick={handleUpClick}>UpperCase</button>
                    <button type="button" className="btn btn-info my-3 mx-1" onClick={handleLwClick}>LowerCase</button>
                    <button type="button" className="btn btn-info my-2 mx-1" onClick={handleResetClick}>Resert </button>   
                    <button type="button" className="btn btn-info my-2 mx-1" onClick={handleCopyClick}>Copy Text</button>   
                    <button type="button" className="btn btn-info my-2 mx-1" onClick={removeExtraSpaces}>Remove Extra Space</button>    
                </div>
             </div>
             <div className="container mx-15 my-5">
                 <h2 style= {{ color: props.mode === "dark" ? "white": "black" }}>Your Text Summary</h2>
                 <p style= {{ color: props.mode === "dark" ? "white": "black" }}> <b style= {{ color: props.mode === "dark" ? "white": "black" }}>{ arrUdated.length}</b> Words , <b>{text.length}</b> Characters</p>
                 <p style= {{ color: props.mode === "dark" ? "white": "black" }}><b>{arrUdated1.length}</b> Sentence</p>




                 <p style= {{ color: props.mode === "dark" ? "white": "black" }}><b>{0.008 *  arrUdated.length }</b> Minutes reads </p>
                 <h2 style= {{ color: props.mode === "dark" ? "white": "black" }}>Preview</h2>
                 <p style= {{ color: props.mode === "dark" ? "white": "black" }}>{text}</p>
             </div>
            </div>

         


        </>
    )
}


export default TextForm

TextForm.prototype = {
    heading: PropTypes.string,
}
TextForm.defaultProps ={
    heading:"Enter Your Text Below"
}




