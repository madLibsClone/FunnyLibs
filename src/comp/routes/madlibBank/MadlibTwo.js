import { useLocation, Link } from "react-router-dom";

const MadlibTwo = () => {
    const location = useLocation();
    
    return (
    
        <section className="displaySection">
            <h2>TONS OF LAUGHS AHEAD</h2>
            <p>
            Gerald was a {location.state.adjOne} giraffe whose {location.state.nounOne} was {location.state.adjTwo} and {location.state.adjThree}. But his knees were awfully {location.state.adjFour} and his legs were rather {location.state.adjFive}. He was very good at standing still and munching {location.state.nounTwo} off trees. But when he tried to run around, he {location.state.adjSix} at the knees. Now every year in Africa they hold the {location.state.nounThree}, where every single animal turns up to {location.state.adjSeven} and {location.state.adjEight}. And this year when the {location.state.nounFour} arrived poor gerald felt so {location.state.adjNine}, because when it came to {location.state.nounFive} he was really very {location.state.adjTen}.
            </p>

            <button className="button"><Link to="/">GO AGAIN!</Link></button>
        </section>
    )
}
export default MadlibTwo;