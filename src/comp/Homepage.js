import { Link } from "react-router-dom";
import { useState } from "react";

const Homepage = () => {
  
    const [madlibSelected, setMadlibSelected] = useState('')

    const madlibList = [
        '/FormOne',
        '/FormTwo',
        '/FormThree'
      ]
        const randomizer = ()=> {
            const madlibChoice = (madlibList[Math.floor(Math.random() * madlibList.length)]);
            setMadlibSelected(madlibChoice)
        }

    return (
    
        <section>
            <div>
                <p>Ever played Madlibs? Well if so its you're lucky day! FunnyLibs is literally just a Madlib Clone! All you have to do is enter a word that corresponds with what is present in the text field and BAM!! We generate a very funny and very epic story using those words!</p>
                <button className="button" onClick={randomizer}><Link to={madlibSelected}>Start</ Link></button>
            </div>
        </section>
    )
}
export default Homepage;

// Need to make a math.random function that will choose a random madlib to direct the form to <LINK TO="/${placeholder}"