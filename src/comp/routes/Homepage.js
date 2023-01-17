import { Link } from "react-router-dom";

const Homepage = () => {
    return (
    
        <section>
            <div>
                <p>Instructions about what mad libs are go here I guess</p>
                <button><Link to="/Form">Start</ Link></button>
            </div>
        </section>
    )
}
export default Homepage;