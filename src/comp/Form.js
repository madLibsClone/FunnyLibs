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
    <section className="form-page">
      <h2>Please fill it out haha</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, illum doloribus quasi ea qui rem temporibus consectetur, saepe quos sequi ratione, quas explicabo in nihil laudantium exercitationem porro consequatur molestias.</p>
      <form action="text" onSubmit={handleSubmit}>
        <label htmlFor="nounOne" className="sr-only">
          Noun
        </label>
          <input
            name="nounOne"
            type="text"
            value={userInputs.nounOne}
            onChange={handleChange}
            required
            placeholder="Noun"
            id="nounOne"
          />

        <label htmlFor="nounTwo" className="sr-only">
          Noun2
        </label>
          <input
            name="nounTwo"
            type="text"
            value={userInputs.nounTwo}
            onChange={handleChange}
            required
            placeholder="Noun"
            id="nounTwo"
          />

        <label htmlFor="adjOne" className="sr-only">
          Adj
        </label>
          <input
            name="adjOne"
            type="text"
            value={userInputs.adjOne}
            onChange={handleChange}
            required
            placeholder="Adjective"
            id="adjOne"
          />

        <label htmlFor="adjTwo" className="sr-only">
          Adj2
        </label>
          <input
            name="adjTwo"
            type="text"
            value={userInputs.adjTwo}
            onChange={handleChange}
            required
            placeholder="Adjective"
            id="adjTwo"
          />

        <label htmlFor="verbOne" className="sr-only">
          Verb
        </label> 
          <input
            name="verbOne"
            type="text"
            value={userInputs.verbOne}
            onChange={handleChange}
            required
            placeholder="Verb"
            id="verbOne"
          />

        <button className="button">Submit</button>
      </form>

    </section>
    
  )
}

export default Form;