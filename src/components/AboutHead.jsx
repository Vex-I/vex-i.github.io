import React from 'react';
import logo from '../assets/Meme.jpeg';

const AboutHead = () => (
    <div>
        <h1>
            <span className="red text-heading"> {'>'} </span>
            <span className="yellow text-heading">{"Console"}</span>
            <span className="grey text-heading">{".PrintIntro()"}</span>
        </h1>
        <section>
            <p className="text white">
                Hello World! My name is Nawwaf Sudi, an Undergraduate student 
                studying Data Science and Analytics at the National University of Singapore (
                <a className= "hyper-link red" href='https://nus.edu.sg/'>NUS</a>). Physicist turned programmer, I am passionate about leveraging technology to solve real-world problems. 
                I have a keen interest in software development, data science, and machine learning.
            </p>
            <p className='text white'>
                    In a more personal note, I'm also intereseted in game development, and have quite a few projects using Unity, 
                    collaborating with friends to create games. You can check out some of my projects on both my itch.io page
                    and my blog <a className="hyper-link red" href='https://github.com/Vex-I'>here</a>.
            </p>
            <p className='text white'>
                In my free time, I enjoy gardening and reading books on a variety of topics, from science fiction to philosophy. 
                You can find my succulent collection, and my currated reading list in <a className="hyper-link red" href='https://github.com/Vex-I'>my blog</a>.
            </p>
            <p className='text white'>
                I'm always eager to connect, so feel free to <a className="hyper-link red" href='https://github.com/Vex-I'>reach out</a>!
            </p>
        </section>
    </div>
);



export default AboutHead;