import React from "react";
import Card from "./components/card";

function App() {

  const users = [
    {
      "name": "Aarav Mehta",
      "city": "Mumbai",
      "age": 28,
      "profession": "Software Engineer",
      "profilePhoto": "https://randomuser.me/api/portraits/men/10.jpg"
    },
    {
      "name": "Sneha Kapoor",
      "city": "Bengaluru",
      "age": 25,
      "profession": "UX Designer",
      "profilePhoto": "https://randomuser.me/api/portraits/women/20.jpg"
    },
    {
      "name": "Rohan Das",
      "city": "Kolkata",
      "age": 32,
      "profession": "Data Analyst",
      "profilePhoto": "https://randomuser.me/api/portraits/men/30.jpg"
    },
    {
      "name": "Meera Nair",
      "city": "Chennai",
      "age": 27,
      "profession": "Marketing Manager",
      "profilePhoto": "https://randomuser.me/api/portraits/women/40.jpg"
    },
    {
      "name": "Kabir Singh",
      "city": "Delhi",
      "age": 30,
      "profession": "Doctor",
      "profilePhoto": "https://randomuser.me/api/portraits/men/50.jpg"
    }
  ]

  // users.forEach(function(elem){
  //   console.log(elem);
    
  // })

  // users.map(function(){
  //   return "hey"
  // })
  

  return (
    <>
      <div className="p-10">
        {users.map(function(elem,idx){
          return <Card key = {idx}  user = {elem.name} age = {elem.age} city = {elem.city} profession = {elem.profession} profilePhoto = {elem.profilePhoto}/>
        })}
      </div>
    </>
  );
}

export default App;
