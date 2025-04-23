import React from "react";

const Card = (props) => {
    return(
        <>
        <div className="bg-white text-black inline-block p-6 w-70 mr-7 text-center rounded">
            <img  className="h-32 ml-13 w-32 rounded-full mb-3" src="{props.profilePhoto}" alt="" />
            <h1 className="text-2xl font-semibold mb-4">{props.user}</h1>
            <h2>{props.city} , {props.age}</h2>
            <h3 className="text-blue-300">{props.profession}</h3>
            <button className="bg-emerald-700 mt-5 text-white px-4 py-2 rounded font-medium">Add friend</button>
        </div>
        </>
    )
}

export default Card