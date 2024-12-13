/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import './Service.css'

const Service = () => {
  return (
    <section className="service" id='service'>
        <div className="top">
        <h1 className="main-title">Service</h1>
        <p>Here are the services we are providing to you.</p>
        </div>
        <div 
        className="content">
            <Card title="UI/UX Designing"/>
            <Card title="App UI/UX"/>
            <Card title="Web Development"/>
            <Card title="Graphic Designing"/>
            <Card title="Product Designing"/>
            <Card title="Social Media Posts"/>
        </div>
        <div className="bottom">
            <motion.button
            
            whileHover={{scale:1.1 }}
            whileTap={{scale:0.93}}
            transition={{   type:"spring",damping:10,stiffness: 400}}
            
            className="active-btn">View All</motion.button>
        </div>


    </section>
  )
}

export default Service

const Card = ({title})=>{
    return(
        <motion.div 
        initial={{x: -200}}
        whileInView={{x: 0}}
        whileHover={{scale: 1.1, skewY: 2}}
        transition={{   type:"spring",damping:10,stiffness: 300}}
        className="card">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M512 80c8.8 0 16 7.2 16 16l0 32L48 128l0-32c0-8.8 7.2-16 16-16l448 0zm16 144l0 192c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-192 480 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0z"/></svg>
            <h2>

            {title}
            </h2>
        </motion.div>
    )
}