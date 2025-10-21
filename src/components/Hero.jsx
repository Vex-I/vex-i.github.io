import React from "react";

const Hero = () => (
    <div className="hero-container">
        <h3 className="text-heading fade-in">
                <span className='red'>Hi! I'm </span> 
                <span className='yellow'>Nawwaf Sudi</span> 
        </h3>
        <h3 className="text-subheading white fade-in" style={{textAlign: "center"}}>
                an Undergraduate student 
                studying Data Science and Analytics @ National University of Singapore (
                <a className= "hyper-link red" href='https://nus.edu.sg/'>NUS</a>).
        </h3>
    </div>
);


export default Hero;