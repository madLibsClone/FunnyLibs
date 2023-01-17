import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormTwo = () => {
  
  const [userInputs, setUserInputs] = useState({
    nounOne: '',
    nounTwo: '',
    nounThree: '',
    nounFour: '',
    nounFive: '',
    adjOne: '',
    adjTwo: '',
    adjThree: '',
    adjFour: '',
    adjFive: '',
    adjSix: '',
    adjSeven: '',
    adjEight: '',
    adjNine: '',
    adjTen: ''
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
    navigate("/MadlibTwo", {
      state : userInputs
    })
  }

  return(
    // 5 Nouns, 9 Adj
    <section className="form-page">
      <h2>Please fill it out haha</h2>
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
          Noun
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

        <label htmlFor="nounThree" className="sr-only">
          Noun
        </label>
          <input
            name="nounThree"
            type="text"
            value={userInputs.nounThree}
            onChange={handleChange}
            required
            placeholder="Noun"
            id="nounThree"
          />

        <label htmlFor="nounFour" className="sr-only">
          Noun
        </label>
          <input
            name="nounFour"
            type="text"
            value={userInputs.nounFour}
            onChange={handleChange}
            required
            placeholder="Noun"
            id="nounFour"
          />

          <label htmlFor="nounFive" className="sr-only">
          Noun
        </label>
          <input
            name="nounFive"
            type="text"
            value={userInputs.nounFive}
            onChange={handleChange}
            required
            placeholder="Noun"
            id="nounFive"
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
          Adj
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

        <label htmlFor="adjThree" className="sr-only">
          Adj
        </label>
          <input
            name="adjThree"
            type="text"
            value={userInputs.adjThree}
            onChange={handleChange}
            required
            placeholder="Adjective"
            id="adjThree"
          />

          <label htmlFor="adjFour" className="sr-only">
          Adj
        </label>
          <input
            name="adjFour"
            type="text"
            value={userInputs.adjFour}
            onChange={handleChange}
            required
            placeholder="Adjective"
            id="adjFour"
          />

          <label htmlFor="adjFive" className="sr-only">
          Adj
        </label>
          <input
            name="adjFive"
            type="text"
            value={userInputs.adjFive}
            onChange={handleChange}
            required
            placeholder="Adjective"
            id="adjFive"
          />

          <label htmlFor="adjSix" className="sr-only">
          Adj
        </label>
          <input
            name="adjSix"
            type="text"
            value={userInputs.adjSix}
            onChange={handleChange}
            required
            placeholder="Adjective"
            id="adjSix"
          />

          <label htmlFor="adjSeven" className="sr-only">
          Adj
        </label>
          <input
            name="adjSeven"
            type="text"
            value={userInputs.adjSeven}
            onChange={handleChange}
            required
            placeholder="Adjective"
            id="adjSeven"
          />

          <label htmlFor="adjEight" className="sr-only">
          Adj
        </label>
          <input
            name="adjEight"
            type="text"
            value={userInputs.adjEight}
            onChange={handleChange}
            required
            placeholder="Adjective"
            id="adjEight"
          />

          <label htmlFor="adjNine" className="sr-only">
          Adj
        </label>
          <input
            name="adjNine"
            type="text"
            value={userInputs.adjNine}
            onChange={handleChange}
            required
            placeholder="Adjective"
            id="adjNine"
          />

          <label htmlFor="adjTen" className="sr-only">
          Adj
        </label>
          <input
            name="adjTen"
            type="text"
            value={userInputs.adjTen}
            onChange={handleChange}
            required
            placeholder="Adjective"
            id="adjTen"
          />

        <button className="button">Submit</button>
      </form>

    </section>
    
  )
}

export default FormTwo;