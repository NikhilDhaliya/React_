import React from "react";


const MyButton = () => {

    function MyButton({ count, onClick }) {
        return (
          <button className="bg-black text-white" onClick={onClick}>
            Clicked {count} times
          </button>
        );
      }
    }
export default MyButton