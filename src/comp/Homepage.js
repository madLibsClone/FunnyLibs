import { useState } from "react";
import FormOne from "./routes/FormBank/FormOne";
import FormTwo from "./routes/FormBank/FormTwo";
import FormThree from "./routes/FormBank/FormThree";

const Homepage = () => {
    
    const [madlibIndex, setMadlibIndex] = useState(null)

    const madlibList = [
        <FormOne />,
        <FormTwo />,
        <FormThree />
      ]
        const randomizer = ()=> {
            const madlibChoice = (Math.floor(Math.random() * madlibList.length));
            setMadlibIndex(madlibChoice)
        }

    return (
    
        <>
            <section>
                <h2>What's this all about?</h2>
                <p>Ever played Madlibs? Well if so its you're lucky day! FunnyLibs is literally just a Madlib Clone! All you have to do is enter a word that corresponds with what is present in the text field and BAM!! We generate a very funny and very epic story using those words!</p>
                <button className="button" onClick={randomizer}>Start</button>
                {
                    madlibList.map((formComponent, i) => 
                        <div 
                            key={i}
                            className={
                                madlibIndex === i
                                ? 'form-page'
                                : 'form-page hidden'
                            }
                        >
                            {formComponent}
                        </div>
                    )
                }
            </section>
        </>
    )
}
export default Homepage;

// Need to make a math.random function that will choose a random madlib to direct the form to <LINK TO="/${placeholder}"