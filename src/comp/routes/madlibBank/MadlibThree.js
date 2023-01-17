import { useLocation, Link } from "react-router-dom";

const MadlibThree = () => {
    const location = useLocation();
    
    return (
    
        <section className="displaySection">
            <h2>TONS OF LAUGHS AHEAD</h2>
            <p>
            Gerald swallowed {location.state.adjOne} as he walked toward the {location.state.nounOne}. But the {location.state.nounTwo} saw him coming, and they soon began to {location.state.adjTwo}. Gerald simply froze up. He was rooted to the {location.state.nounThree}. They’re right, he thought. I’m {location.state.adjThree}. Oh, I feel like such a {location.state.nounFour}.So he crept off from the {location.state.nounFive}, and he started walking home. He’d never felt so {location.state.adjFour}before, so sad and so {location.state.adjFive}. Then he found a little clearing, and he looked up at the sky. “The {location.state.nounSix}can be so {location.state.adjSix}”. He whispered with a sigh.
            </p>

            <button className="button"><Link to="/">GO AGAIN!</Link></button>
        </section>
    )
}
export default MadlibThree;