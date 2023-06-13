import React, { useState } from "react";
import NewMadLibForm from "./NewMadLibForm";
import Story from "./Story";

//Main MadLib component
const MadLib = () => {
    //create initial state
    const INITIAL_STATE = [
        { noun: "cat", noun2: "money", adjective: "silly", color: "blue"}
      ]
    //set story state to intial state
    const [story, setStory] = useState(INITIAL_STATE);
    //set isNotSubmitted state to true since form has not been submitted on initial render
    const [isNotSubmitted, setIsNotSubmitted] = useState(true);

    //makeStory function that is used to add the story to story. adds storie and setsIsNotSubmitted to false since the form has now been submitted
    const makeStory = (newStory) => {
        setStory(story => [...story, { ...newStory }])
        setIsNotSubmitted(false);
    };

    //function to reset isNotSubmitted state to true and to set story to intial state to restart madlib game
    const reset = () => {
        setStory(INITIAL_STATE);
        setIsNotSubmitted(true);
    }
      
    //called NewMabLibForm or Story component based on current isNotSubmitted state
    return (
        <div>
            <h1>Madlibs!</h1>
            {isNotSubmitted && <NewMadLibForm makeStory={makeStory} isNotSubmitted={isNotSubmitted} />}
            {!isNotSubmitted && story[1] && <Story noun={story[1].noun} noun2={story[1].noun2} adjective={story[1].adjective} color={story[1].color} reset={reset} />}
        </div>
    )
}

export default MadLib;
