import React, { useState } from "react";

export default function App (){ 

    const[count,setCount] = useState(0)

    const handleClick = () =>{
        setCount(count+1)
    }
    return(
        <div>
            <h1>Both are clicked together</h1>
            <MyButton count = {count} onclick= {handleClick}/>
            <MyButton count = {count} onclick= {handleClick}/>
            
        </div>
    );
}

// const MyButton = ({count, onclick}) =>{
//     return(
//         <div>
//             <button className="bg-emerald-300 rounded-4xl mt-3 px-3 py-1 cursor-pointer active:scale-90" onClick={onclick}>
//                 CLicked {count} times
//             </button>
//         </div>
//     )
// }

const MyButton = (props) =>{
    console.log(props);
    
    return(
        <div>
            <button className="bg-emerald-300 rounded-4xl mt-3 px-3 py-1 cursor-pointer active:scale-90" onClick={props.onclick}>
                CLicked {props.count} times
            </button>
        </div>
    )
}