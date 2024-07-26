import React,{useState} from 'react'
import {copyToClipboard} from 'react-copy-to-clipboard'
export default  function TextForm(props) {
    const [text, setText] = useState('')
   const [copied, setCopied] = useState(false)
    const handleUpper =(e)=>{
    let newText = text.toUpperCase()
    setText(newText)
    props.showaLert("Converted to UpperCase", "Success")
    }
    const handleLower=(e)=>{
let newText =text.toLowerCase()
setText(newText)
props.showaLert("Converted to LowerCase", "Success")
    }
    const handleClear=()=>{
        let newText = ''
        setText(newText)
        props.showaLert("Clear Text", "Success")
    }
    // const handleCopy=()=>{
    //     console.log("object")
    //     setCopied(true)
    // }
    const handleCopyy =()=>{
        var text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showaLert("Copied!", "Success")
    }
    const handleExtraSpace=()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showaLert("Remove Extra Space", "Success")
    }
  return (
    <>
    <div style={{color:props.mode==='dark' ? 'white':'black'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={(e)=>setText(e.target.value)} style={{backgroundColor:props.mode ==='dark'?'grey':'white',color:props.mode==='dark' ? 'white':'black', cursor:'pointer'}} id="myBox" rows="8"></textarea>
</div> 
<button onClick={()=>handleUpper()} className='btn btn-success mx-2'>Convert too Uppercase</button>
<button onClick={()=>handleLower()} className='btn btn-success mx-2'>Convert too Lowercase</button>
<button onClick={()=>handleClear()} className='btn btn-success mx-2'>Clear</button>
<button onClick={()=>handleCopyy()} className='btn btn-success mx-2'>Copy</button>
<button onClick={()=>handleExtraSpace()} className='btn btn-success mx-2'>Remove Exxtra Space</button>
{/* <copyToClipboard text={text}
 onCopy={()=>handleCopy()}>
<button  className='btn btn-success mx-1'>Copy</button>
</copyToClipboard>{copied ? <span style={{color:'green'}}>{copied}</span>:null} */}
</div>
<div className='container my-3' style={{color:props.mode==='dark' ? 'white':'black'}}>
    <h2>Your text Summmary</h2>
    <p>{text.split(" ").length} words and {text.length} character</p>
    <p>{0.008* text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0? text:"Enter something in the textbox above to preview it here"}</p>
</div>
</>
)
}

