import React, {useState} from "react";


export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Upper case was click" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = ()=>{
    console.log("Lower case was click" + text);
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange = (event)=>{
    console.log("on change");
    setText(event.target.value);
  }
  const [text, setText] = useState('');

  // function wordCount(content){
  //   if(content===""){
  //     return 0;
  //   }
  //   let arr = content.split(" ");
  //   let len = arr.length;
  //   let count=0;
    
  //   for(let i=0;i<len;i++){
  //     if(arr[i]==='' || arr[i]===' '){
  //        count++;
  //     }
  //   }
  //   return len-count;
  // }


  return (
    <>
 
    <div className="container" style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <label for="myBox" className="form-label">
        </label>
        <textarea
          className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} 
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>You text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minute read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in the textbox to preview here"}</p>
    </div>
    </>
  );
}
