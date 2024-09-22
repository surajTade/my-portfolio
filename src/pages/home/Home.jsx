import "./home.css";
import profile from "../../assets/me_v3-min.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Home = () => {
  const autoText = useRef();

  useEffect(() => {
    const typed = new Typed(autoText.current, {
      strings: ["Engineer!", "Developer!", "Student!", "Designer!"],
      typeSpeed: 100,
      backSpeed: 150,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section className="home section grid">
      <img src={profile} className="home-img" alt="" />
      <div className="home-content">
        <div className="home-data">
          <h1 className="home-title">
            I'm Suraj Tade. <span ref={autoText}></span>
          </h1>

          <p className="home-description">
            Completed B.Tech. in Computer Engineering along with honours in Deep
            Learning from PCCOE, Pune. I'm an organised person ready to learn
            and improve upon skills.
          </p>

          <Link to="/about" className="btn">
            More About Me
            <span className="btn-icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color-block"></div>
    </section>
  );
};

export default Home;
