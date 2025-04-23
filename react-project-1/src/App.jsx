import React, { useState } from "react";

const App = () => {

  const [color , setColor ] = useState("black")


  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="px-5 py-3 bg-white absolute flex flex-wrap justify-center align-center bottom-12 left-1/2 -translate-x-1/2 rounded-full">
        <div className="flex flex-wrap justify-center items-center gap-5 text-white shadow-2xl">
          <button onClick={()=>{setColor("#FB2C36")}} className="bg-red-500 px-4 py-1 rounded-3xl shadow-2xl cursor-pointer active:scale-90">Red</button>
          <button onClick={()=>{setColor("#2B7FFF")}} className="bg-blue-500 px-4 py-1 rounded-3xl shadow-2xl cursor-pointer active:scale-90">Blue</button>
          <button onClick={()=>{setColor("#F6339A")}} className="bg-pink-500 px-4 py-1 rounded-3xl shadow-2xl cursor-pointer active:scale-90">Pink</button>
          <button onClick={()=>{setColor("#00BC7D")}} className="bg-emerald-500 px-4 py-1 rounded-3xl shadow-2xl cursor-pointer active:scale-90">Green</button>
          <button onClick={()=>{setColor("#FF6900")}} className="bg-orange-500 px-4 py-1 rounded-3xl shadow-2xl cursor-pointer active:scale-90">Orange</button>
          <button onClick={()=>{setColor("#AD46FF")}} className="bg-purple-500 px-4 py-1 rounded-3xl shadow-2xl cursor-pointer active:scale-90">Purple</button>
          <button onClick={()=>{setColor("black")}} className="bg-black px-4 py-1 rounded-3xl shadow-2xl cursor-pointer active:scale-90">Black</button>
        </div>
      </div>
    </div>
  )
}

export default App