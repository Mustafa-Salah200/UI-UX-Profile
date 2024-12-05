import SvgWord from "../SvgWord/SvgWord";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skill-container">
      <section className="skills">
        <SvgWord word="UI/UX" margin="20px" />
        <SvgWord word="DEVELOPMENT" margin="20px" />
        <SvgWord word="PRODUCT DESIGN" margin="20px" />
        <SvgWord word="SOCIAL MEDIA DESIGN" margin="20px" />
        <SvgWord word="BRANDING" margin="20px" />
      </section>
    </div>
  );
};

export default Skills;
