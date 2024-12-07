import { useState } from "react";
import "./Navbar.css";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <h1 className="title">MS</h1>
      <ul className="links">
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 12 }}
        >
          <a href="#">Home</a>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 12 }}
        >
          <a href="#service">Service</a>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 12 }}
        >
          <a href="#portfolios">Portfolios</a>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 12 }}
        >
          <a href="#"></a>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 12 }}
        >
          <a href="#testimonials">Testimonials</a>
        </motion.li>
      </ul>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.93 }}
        transition={{ type: "spring", damping: 10, stiffness: 400 }}
        className="active-btn"
      >
        Let&apos;s Talk
      </motion.button>
      <div className="bar" onClick={() => setOpen(!open)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          {" "}
          <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>
      <div className={open ? "drop_menu open" : "drop_menu"}>
        <ul>
          <li onClick={() => setOpen(false)}>
            <a href="#">Home</a>
          </li>
          <li onClick={() => setOpen(false)}>
            <a href="#service">Service</a>
          </li>
          <li onClick={() => setOpen(false)}>
            <a href="#portfolios">Portfolios</a>
          </li>
          <li onClick={() => setOpen(false)}>
            <a href="#testimonials">Testimonials</a>
          </li>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.93 }}
            onClick={() => setOpen(false)}
            className="active-btn"
          >
            Let&apos;s Talk
          </motion.button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
