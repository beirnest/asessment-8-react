import React from "react";

//Story component, which returns copmleted story and button to resart the madlibs game
const Story = ({noun, noun2, adjective, color, reset}) => {
    return (
        <div>
            <span>There once was a {color} {noun} that loved a {adjective} {noun2}.</span>
            <br></br>
            <button onClick={reset}>Restart</button>
        </div> 
    )
}

export default Story;