import "./Landing.css";
import SvgWord from "../SvgWord/SvgWord";
import Mustafa from "./../../assets/mustafa.png";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <section className="landing">
      <div className="info">
        <motion.h1
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 2, type: "spring", damping: 10 }}
        >
          HEY, I&apos;M MUSTAFA,A CREATIVE <span>UI/UX</span> DESIGNER AND
          DEVELOPER
        </motion.h1>
        <motion.h3
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 1,
            duration: 2,
            type: "spring",
            damping: 10,
            stiffness: 300,
          }}
          className="content"
        >
          <SvgWord word="Designer" margin="10px" />
          <SvgWord word="Figma" margin="10px" />
          <SvgWord word="Develop" margin="10px" />
        </motion.h3>
        <div className="btns">
          <motion.button
            className="default animate "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring", damping: 13,stiffness: 200
            }}


            style={{
              animationDelay: "1s",
            }}
          >
            Want to disscuss?
          </motion.button>
          
          <motion.button
            className="active-btn animate"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring", damping: 13,stiffness: 200
            }}
            style={{
              animationDelay: "1.5s",
            }}
          >
            Let&apos;s Talk.
          </motion.button>
        </div>
      </div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 2.9,
          duration: 3,
          type: "spring",
        }}
        className="image"
      >
        <img src={Mustafa} alt="" />
      </motion.div>
    </section>
  );
};

export default Landing;
