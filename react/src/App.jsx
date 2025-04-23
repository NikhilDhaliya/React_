import React, { useState } from "react";

function App(){

  const[userName, setUserName] = useState('')
  const submit = (e) =>{
    e.preventDefault();
    console.log("Submitted");
    setUserName('');
  }

  return(
    <div>
      <form onSubmit={(e)=>{
        submit(e)
      }}>
        <input 
        value={userName}
        onChange={(e)=>{
          setUserName(e.target.value);
        }}
        className='px-4 py-5 text-xl m-5 rounded bg-white text-black' 
        type="text" 
        placeholder="Enter your name"/>
        <button className="px-4 py-5 m-5 text-xl font-semibold bg-emerald-600 rounded">Submit</button>
      </form>
    </div>
  )
}

export default App