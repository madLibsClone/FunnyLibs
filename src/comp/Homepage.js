import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Homepage = () => {
  
    const [madlibSelected, setMadlibSelected] = useState('')

    const madlibList = [
        '/FormOne',
        '/FormTwo',
        '/FormThree'
      ]
        const randomizer = ()=> {
            const madlibChoice = (madlibList[Math.floor(Math.random() * madlibList.length)]);
            console.log(madlibChoice)
            setMadlibSelected(madlibChoice)
        }

    return (
    
        <section>
            <div>
                <p>Instructions about what mad libs are go here I guess</p>
                <button onClick={randomizer}><Link to={madlibSelected}>Start</ Link></button>
            </div>
        </section>
    )
}
export default Homepage;

// Need to make a math.random function that will choose a random madlib to direct the form to <LINK TO="/${placeholder}"