import { useState } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  
  const [nounOne, setNounOne] = useState('');
  const [nounTwo, setNounTwo] = useState('');
  const [adjOne, setAdjOne] = useState('');
  const [adjTwo, setAdjTwo] = useState('');
  const [verbOne, setVerbOne] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return(
    <div>
      <form action="text" onSubmit={handleSubmit}>
        <label htmlFor="">
          Noun
          <input type="text" value={nounOne} onChange={(e) => {setNounOne(e.target.value)}}/>
        </label>

        <label htmlFor="">
          Noun2
          <input type="text" value={nounTwo} onChange={(e) => {setNounTwo(e.target.value)}}/>
        </label>

        <label htmlFor="">
          Adj
          <input type="text" value={adjOne} onChange={(e) => {setAdjOne(e.target.value)}}/>
        </label>

        <label htmlFor="">
          Adj2
          <input type="text" value={adjTwo} onChange={(e) => {setAdjTwo(e.target.value)}}/>
        </label>

        <label htmlFor="">
          Verb
          <input type="text" value={verbOne}onChange={(e) => {setVerbOne(e.target.value)}}/>
        </label>

        <button><Link to='/Display'>Submit</Link></button>
      </form>

    </div>
    
  )
}

export default Form;