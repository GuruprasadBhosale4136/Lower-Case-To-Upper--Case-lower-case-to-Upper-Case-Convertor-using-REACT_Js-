import React ,{useState} from 'react'

export default function Textform(props) {


  const converTouppercase=()=>{
    // alert("You are clicked on button");
    console.log("You are clicked on button"+" ",text);



    let newText = text.toUpperCase();
    setText(newText);
    
    
    

 }

 const toLowerCase = ()=>{

let new_lower_text = text.toLocaleLowerCase();
setText(new_lower_text);


 }




 const onHandleChange = (evt)=>{
  console.log("On change");
  setText(evt.target.value);
  
  
  // setText);
  
 }





  const [text,setText] = useState("enter your text");
  // setText("You are Preparing for placement");
  return (
    
    
    <>
    
  <div className="mb-3">
   
    <label htmlFor="exampleFormControlTextarea1" className="form-label">
      {props.title}
    </label>
    <textarea
      className="form-control" value={text} onChange={onHandleChange}
      id="exampleFormControlTextarea1"
      rows={15}
      defaultValue={""}
    />


   
  </div>
  <button className='btn' onClick={converTouppercase}>Convert to upper Case</button>

  <button className='btn2' onClick={toLowerCase}>Covert lower case</button>

<div className='para2'>

    <h1>this is character tracker para</h1>
 
 <p>{text.split(" ").length} words &  {text.length} characters</p>
 <p>0.08*{text.split(" ").length} minuts for reading your texrarea</p>
 <h2>Priev</h2>
 {text}

</div>

</>

    

  )
}
