const About = () => {
  return (
        <section className="about">
            <h2>About the Developers</h2>
            <ul>
                <li className="about-profile">
                    <h3>Tyler George</h3>
                    <div className="about-img">
                        <img src="https://ca.slack-edge.com/T02E8L5NKFV-U044PJ67L2D-bba64a9b7cdd-512" alt="Tyler George" />
                    </div>
                    <div className="about-links">
                        <p>Some text about cool guy Tyler</p>
                        <a className="button" href="https://github.com/tillerload">Github</a>
                        <a className="button" href="https://www.tylergeorge.ca/">Portfolio</a>
                    </div>
                </li>
                <li className="about-profile">
                    <h3>Daniela Parra</h3>
                    <div className="about-img">
                        <img src="https://ca.slack-edge.com/T02E8L5NKFV-U044V7ZMP5F-1952f2b930bd-512" alt="Daniela Parra" />
                    </div>
                    <div className="about-links">
                        <p>An event coordinator turned web developer, Daniela is based out of Toronto and is a CSS addict and React.js enjoyer. Check out her sites through the links below!</p>
                        <a className="button" href="https://github.com/parradaniela">Github</a>
                        <a className="button" href="https://danielaparra.com">Portfolio</a>
                    </div>
                </li>
            </ul>
        </section>
    )
}
export default About;