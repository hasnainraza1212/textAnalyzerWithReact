import React from 'react'
import UpperCaseCss from './UpperCaseConverter.module.css'
import { useState } from 'react'
import Alert from './Alert/Alert'
const TextAnalyzerWithReact = () => {

    function toUp(){
      if(text !== ""){
        
        updateText(text.toUpperCase())
        alertSenderWRTFunctionality("Text conververted in Lower case copied", "Success")
      }
    }
        const textUpChanger = (event)=>{
        updateText(event.target.value)
        console.log(event)

    }
    function toLow(){
      if(text !== ""){
        
        updateText(text.toLowerCase())
        alertSenderWRTFunctionality("Text conververted in Lower case", "Success")
      }
    }
 
    const copyText = ()=>{
      if(text !== ""){
        
        navigator.clipboard.writeText(text)
        alertSenderWRTFunctionality("Text copied", "Success")
      }
      
    }

    const clearText = ()=>{
      if(text !== ""){
        
        updateText('')
        alertSenderWRTFunctionality("Text cleared", "Success")
      }
    }

    const removeSpaces = ()=>{
      const regexTwoOrMoreSpaces = / {2,}/;
      if(text !== "" && regexTwoOrMoreSpaces.test(text)){
        
        updateText(text.split(/[ ]+/).join(" "))
        alertSenderWRTFunctionality("Removed extra spaces", "Success")
      }
    }

    const [text, updateText] = useState("");
    const [mode, updateMode] = useState('darkMode')
    const [btnText, updateBtnText] = useState('Dark Mode')
    const [alert, updateAlert] = useState(null)
    const alertSenderWRTFunctionality = (message, type)=>{
      updateAlert({
        message: message,
        type: type
      })
      setTimeout(()=>{
        updateAlert(null)
      }, 2000)
    }


    const modeHandler = ()=> {
        if(mode === 'darkMode') {
          updateMode("lightMode")
        alertSenderWRTFunctionality("you're in Light Mode now", "Success")
          updateBtnText("Dark Mode")
          document.getElementById("modeBtn").disabled = true;
          setTimeout(()=>{
          document.getElementById("modeBtn").disabled = false;

          },2000)
        }
        else{
        updateBtnText("Light Mode")
        alertSenderWRTFunctionality("you're in dark Mode now", "Success")
          updateMode("darkMode")
          document.getElementById("modeBtn").disabled = true;
          setTimeout(()=>{
          document.getElementById("modeBtn").disabled = false;

          },2000)
          

        }
    }
  return (
    <div className={`main position-relative ${mode}`}>
        <Alert alert = {alert}/>

      <div className='d-flex btnbox justify-content-center'>

       <button type="button" className={`btn btnToggleMode mb-3 btn-outline-success   me-3 ${mode} `} id="modeBtn" onClick={modeHandler}>{btnText}</button>
      </div>

    <h1 className='text-center'>Enter your text to Analyze!</h1>
    <div className="form-floating container d-flex flex-column align-items-center mt-5">
  <textarea placeholder='Enter you text please' className={`${UpperCaseCss.textArea}`} value={text} id="floatingTextarea" onChange={textUpChanger} ></textarea>
  <div className='d-flex flex-column flex-lg-row'>

  <div className='d-flex mt-5 align-items-center '>
  <button type="button" className="btn evetBtn btn-outline-success me-3"onClick={toUp}  >Upper Case</button>
  <button type="button" className="btn evetBtn btn-outline-primary" onClick={toLow}>Lower Case</button>
  </div>

  <div className='d-flex mt-lg-5 mt-3 ms-lg-3 align-items-center'>
  <button type="button" className="btn evetBtn btn-outline-success me-3"onClick={copyText}  >Copy Text</button>
  <button type="button" className="btn evetBtn btn-outline-primary" onClick={removeSpaces}>Remove Extra Spaces</button>
  </div>

  <div className='d-flex mt-lg-5 mt-3 ms-lg-3 justify-content-center align-items-center'>
  <button type="button" className="btn evetBtn btn-outline-success me-3"onClick={clearText}  >Clear All Text</button>
  </div>

  </div>


</div>

    <p className='parag mt-3'>Total <b > {text.split(" ").length-1} </b> word and <b > {text.length} </b> characters</p>
    <p className='parag mt-3'>Time required to read whole text<b > {((0.008 * (text.length)).toFixed(2))} </b> minutes</p>
    <h3 className='parag mt-3'>Preview</h3>
    <p className='parag mt-3' id = 'previewpara'>{text}</p>
    </div>
  )
}

export default TextAnalyzerWithReact