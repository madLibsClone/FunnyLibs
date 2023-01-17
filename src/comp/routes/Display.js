import { useLocation, Link } from "react-router-dom";

const Display = () => {
    const location = useLocation();
    
    return (
    
        <section className="displaySection">
            <h2>TONS OF LAUGHS AHEAD</h2>

            <p>
                There's so many poorly words in that {location.state.nounOne}. There's so many poorly chosen words in that sentence. Marry me. Bad news. Andy Griffith turned us down. He didn't like his trailer. I don't criticize you! And if you're worried about criticism, sometimes a diet is the best defense.
            </p>

            <p>
                As you may or may not know, Lindsay and I have hit a bit of a patch. That's why you always leave a note! What's Spanish for "I know you speak English?" Guy's a pro. Oh, you're gonna be in a coma, all right.
            </p>

            <p>
                Marry me. That's why you always leave a note! Steve Holt! Now, when you do this without getting punched in the chest, you'll have more fun. I've opened a door here that I regret. Oh, you're gonna be in a coma, all right.
            </p>

            <button><Link to="/">HAHA</Link></button>
        </section>
    )
}
export default Display;