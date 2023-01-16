import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  
  const [userInputs, setUserInputs] = useState({
    nounOne: '',
    nounTwo: '',
    adjOne: '',
    adjTwo: '', 
    verbOne: ''
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setUserInputs({
      ...userInputs,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/Display", {
      state : userInputs
    })
  }

  return(
    <div>
      <form action="text" onSubmit={handleSubmit}>
        <label htmlFor="">
          Noun
          <input
            name="nounOne"
            type="text"
            value={userInputs.nounOne}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="">
          Noun2
          <input
            name="nounTwo"
            type="text"
            value={userInputs.nounTwo}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="">
          Adj
          <input
            name="adjOne"
            type="text"
            value={userInputs.adjOne}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="">
          Adj2
          <input
            name="adjTwo"
            type="text"
            value={userInputs.adjTwo}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="">
          Verb
          <input
            name="verbOne"
            type="text"
            value={userInputs.verbOne}
            onChange={handleChange}
            required
          />
        </label>

        <button>Submit</button>
      </form>

    </div>
    
  )
}

export default Form;