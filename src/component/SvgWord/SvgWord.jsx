/* eslint-disable react/prop-types */
import "./SvgWord.css";

motion;
import svg from "../../assets/bahai.svg";
import { motion } from "framer-motion";
const SvgWord = ({ word, margin }) => {
  console.log(margin);

  return (
    <h3
      style={{
        gap: margin,
      }}
      className="svg-word"
    >
      <img src={svg} alt="" />
      {word}
    </h3>
  );
};

export default SvgWord;
