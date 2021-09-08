import { useState } from "react"
import React  from 'react'
import PropTypes from 'prop-types';
// import "./styleNav.css";


 const TextForm = (props) => {

   const [text, setText] = useState("")
     


const handleUpClick = ()=>{
      const updatedUpText = text.toUpperCase();
      setText(updatedUpText)
      props.showAlert("Coverted to Upper Case " , "success :")
}
const handleLwClick = ()=>{
    const updatedLwText = text.toLowerCase();
    setText(updatedLwText)
    props.showAlert("Coverted to Lower Case " , "success :")
}
const handleResetClick =()=>{
    setText("")
    props.showAlert("Resert " , "success :")
}
const handleCopyClick=()=>{
    let text = document.getElementById("textBox")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("copy to clipboard " , "success :")

}
const removeExtraSpaces =()=>{
     let newText = text.split(/[ ]+/)
     setText(newText.join(" "))
     props.showAlert("Removing extra spaces " , "success :")
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
                    <textarea className="form-control" value={text} id="textBox" rows="8"   onChange={habdleOnChange}  placeholder="enter text here"    style= {{ backgroundColor: props.mode === "dark" ? "#f8fafc": "white",
                              color: props.mode === "dark" ? "black": "black"  }}></textarea>

                    <button disabled={text.length === 0} type="button" className="btn btn-info my-3 mx-1 " style={{color : "black" , backgroundColor : "#ffba08", fontSize : "1rem"}} onClick={handleUpClick}>UpperCase</button>

                    <button disabled={text.length === 0} type="button" className="btn btn-info my-3 mx-1" style={{color : "black" , backgroundColor : "#ffba08", fontSize : "1rem"}} onClick={handleLwClick}>LowerCase</button>

                    <button disabled={text.length === 0}  type="button" className="btn btn-info my-2 mx-1" style={{color : "black" , backgroundColor : "#ffba08", fontSize : "1rem"}} onClick={handleResetClick}>Resert </button>

                    <button disabled={text.length === 0}  type="button" className="btn btn-info my-2 mx-1" style={{color : "black" , backgroundColor : "#ffba08", fontSize : "1rem"}} onClick={handleCopyClick}>Copy Text</button> 

                    <button disabled={text.length === 0}  type="button" className="btn btn-info my-2 mx-1" style={{color : "black" , backgroundColor : "#ffba08", fontSize : "1rem"}} onClick={removeExtraSpaces}>Remove Extra Space</button>    
                </div>
             </div>
             <div className="container-md mx-15 my-5">
             
                 <h2 style= {{ color: props.mode === "dark" ? "white": "black" }}>Your Text Summary</h2>
                 <p style= {{ color: props.mode === "dark" ? "white": "black" }}> <b style= {{ color: props.mode === "dark" ? "white": "black" }}>{ arrUdated.length}</b> Words , <b>{text.length}</b> Characters</p>
                 <p style= {{ color: props.mode === "dark" ? "white": "black" }}><b>{arrUdated1.length}</b> Sentence</p>
                 <p style= {{ color: props.mode === "dark" ? "white": "black" }}><b>{0.008 *  arrUdated.length }</b> Minutes reads </p>
                 </div>
                 <div className="col">
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




