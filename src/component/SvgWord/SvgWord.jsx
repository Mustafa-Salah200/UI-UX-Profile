/* eslint-disable react/prop-types */
import "./SvgWord.css";

import svg from "../../assets/bahai.svg";
const SvgWord = ({ word, margin }) => {
    console.log(margin);
    
  return (
    <h3
    style={{
        gap:  margin ,
      }}
       className="svg-word">
      <img
        
        src={svg}
        alt=""
      />
      {word}
    </h3>
  );
};

export default SvgWord;
