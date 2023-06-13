import React, { useState } from "react";

const NewMadLibForm = ({ makeStory, isNotSubmitted }) => {
  //Create initial blank form state
  const INITIAL_STATE = {
    noun: '',
    noun2: '',
    adjective: '',
    color: ''
  }
  //Set State to intial state and create formData variable for state.
  const [formData, setFormData] = useState(INITIAL_STATE);

  //Handle change to update values in forms
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  //Handle form submissions. Prevents default, runs make story to set story dat and resets form data to initial state
  const handleSubmit = (e) => {
    e.preventDefault();
    makeStory({ ...formData });
    setFormData(INITIAL_STATE)
  }

  //return form; hide form if it has already been submitted
  return (
    <form onSubmit={handleSubmit}>
      {isNotSubmitted && <input
        id="noun"
        type="text"
        name="noun"
        placeholder="noun"
        value={formData.noun}
        onChange={handleChange}
      />}{isNotSubmitted && <br></br>}
      {isNotSubmitted && <input
        id="noun2"
        type="text"
        name="noun2"
        placeholder="noun"
        value={formData.noun2}
        onChange={handleChange}
      />} {isNotSubmitted && <br></br>}
      {isNotSubmitted && <input
        id="adjective"
        type="text"
        name="adjective"
        placeholder="adjective"
        value={formData.adjective}
        onChange={handleChange}
      />}{isNotSubmitted && <br></br>}
      {isNotSubmitted && <input
        id="color"
        type="text"
        name="color"
        placeholder="color"
        value={formData.color}
        onChange={handleChange}
      />}{isNotSubmitted && <br></br>}
      {isNotSubmitted && <button>Get Story</button>}
    </form>
  )

}

export default NewMadLibForm;


