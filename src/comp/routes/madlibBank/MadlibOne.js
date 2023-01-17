import { useLocation, Link } from "react-router-dom";

const MadlibOne = () => {
    const location = useLocation();
    
    return (
    
        <section className="displaySection">
            <h2>TONS OF LAUGHS AHEAD</h2>
            <p>
            Gerald the giraffe longs to {location.state.nounOne}, but his legs are too {location.state.adjOne} and his neck is too {location.state.adjTwo}. His knees {location.state.adjThree} whenever he tries to twirl. At the {location.state.nounTWo}, the warthogs {location.state.adjFour}, the chimps {location.state.adjFive} and the lions {location.state.adjSix}. “Giraffes can’t {location.state.nounThree}” they all {location.state.adjSeven} when it's Geralds turn to {location.state.adjEight}. Fortunately, there is one little {location.state.nounFour} who believes in gerald. “Everything makes {location.state.nounFive}," says the cricket, “if you really want it to. So Gerald starts {location.state.adjNine} to his own sweet tune.
            </p>

            <button className="button" className="button"><Link to="/">GO AGAIN!</Link></button>
        </section>
    )
}
export default MadlibOne;

// 5 Nouns, 9 Adj