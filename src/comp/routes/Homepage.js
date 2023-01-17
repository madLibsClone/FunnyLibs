import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <section className="homepage">
            <h2>Welcome to Madlibone!</h2>
            <p>Instructions about what mad libs are go here I guess</p>
            <button className="button"><Link to="/Form">Start</ Link></button>
        </section>
    )
}
export default Homepage;