import "./Landing.css";
import SvgWord from "../SvgWord/SvgWord";
import Mustafa from "./../../assets/mustafa.png";


const Landing = () => {
  return (
    <section className="landing">
      <div className="info">
        <h1>
          HEY, I&apos;M MUSTAFA,A CREATIVE <span>UI/UX</span> DESIGNER AND DEVELOPER
        </h1>
        <h3 className="content">
          <SvgWord word="Designer" margin="10px" />
          <SvgWord word="Figma" margin="10px" />
          <SvgWord word="Develop" margin="10px" />
        </h3>
        <div className="btns">
          <button className="default">Want to disscuss?</button>
          <button className="active-btn">Let&apos;s Talk.</button>
        </div>
      </div>
      <div className="image">
        <img src={Mustafa} alt="" />
      </div>
    </section>
  );
};

export default Landing;
