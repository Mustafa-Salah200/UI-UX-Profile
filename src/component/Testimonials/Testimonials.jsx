/* eslint-disable react/prop-types */
import "./Testimonials.css";
import profile from "../../assets/profile.svg";


const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="top">
        <h1 className="main-title">Testimonials</h1>
        <p>Here are some testimonials from out client.</p>
      </div>
      <div className="content">
        <Card cl={"side_card1"} text=" This young man- is a great designer. Second time i am working with him. He will be creative with the brief. I am very pleased with the outcome. He also works very hard and listens to clients- I have been picky at time and he made the appropriate amendment. All the best Kazim " />
        <Card  cl={"side_card2"} text="This young man- is a great designer. Second time i am working with him. He will be creative with the brief. I am very pleased with the outcome. He also works very hard and listens to clients- I have been picky at time and he made the appropriate amendment. All the best Kazim " />
        <Card  cl={"side_card3"}  text=" This young man- is a great designer. Second time i am working with him. He will be creative with the brief. I am very pleased with the outcome. He also works very hard and listens to clients- I have been picky at time and he made the appropriate amendment. All the best Kazim " />
      </div>
    </section>
  );
};

export default Testimonials;

const Card = ({ text, cl }) => {
  return (
    <div className={`card ${cl}`}
    
    style={{
      animationDelay: "5s"
    }}>
      <div className="svg">
        <img src={profile} alt="" />
      </div>
      <p>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72z" />
          </svg>
        </span>
        {text}
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M448 296c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72zm-256 0c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72z" />
          </svg>
        </span>
      </p>
      <h3 className="writer">
        <span>Vaseem Aziz.</span>
      </h3>
    </div>
  );
};
