import "./Home.css";
import { Link } from "react-router-dom";
import bgvideo from "./evening-bg.mp4";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className="container">
      <Nav />
      <div>
        <section className="home" id="home">
          <div className="content">
            <h3>
              Begin your <span id="diff">A</span>dventures with us
            </h3>
            <p>Explore the world with us for the best travel experience</p>
            {/* <Link className="btn" to="/locations">
              <button className="exp-btn">Explore</button>
            </Link> */}
          </div>

          <div className="video-container">
            <video src={bgvideo} id="video-slider" loop autoPlay muted></video>
          </div>

          <div className="info">
            <div className="mail">
              <i className="fas fa-envelope" id="ficons"></i>
              <p>
                <a href="mailto:info.nebajoo2015@gmail.com">
                  info.nebajoo2015@gmail.com
                </a>
              </p>
            </div>
            <div className="socialm">
              <i className="fab fa-instagram" id="ficons"></i>
              <p>Ethio Tour</p>
            </div>
            <div className="call">
              <i className="fas fa-phone-alt" id="ficons"></i>
              <p>
                <a href="tel:7259987584">+251-939-710-664</a>
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* <BookSection />
      <hr id="line" />
      <PackageSection />
      <hr id="line" />
      <Services />
      <hr id="line" />
      <ContInfo />
      <hr id="line" /> */}
      <Footer />
    </div>
  );
}

export default Home;
