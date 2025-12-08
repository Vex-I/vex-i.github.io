import AboutHead from "../components/AboutHead"
import BlogList from "../components/BlogList";
import SpotifySong from "../components/SpotifySong";
import Todo from "../components/Todo";
import IOTD from "../components/IOTD";
import Hero from "../components/Hero";
import ProjectList from "../components/ProjectList"
import Contact from "../components/Contact"

const About = () => (
    //TODO: Adjust Bloglist to show recent posts, then display it here.
    //Also, Add some sort of graphic here
    <div style={{justifyItems: "center"}}>
        <Hero/>
        <div style={{display:'grid', alignItems:'center', justifyItems:'center'}}>
        <section className="about-header">
            <AboutHead />
            <section className="right-header">
            <SpotifySong />
            <Todo/>
            </section>
        </section>
        </div>

        <div style={{display:'grid', alignItems:'center', justifyItems:'center'}}>
        <h1 style={{width: '100%', textAlign: 'center', marginTop: '5rem'}}>
            <span className="white">{"Featured "}</span>
            <span className="red">{"Project"}</span>
        </h1>
        <div style={{backgroundColor: "var(--color-text)", height: "0.25rem", width: "7rem",  marginBottom: '5rem'}}></div>
        </div>

        <ProjectList count ={3}/>

        <div style={{display:'grid', alignItems:'center', justifyItems:'center'}}>
        <h1 style={{width: '100%', textAlign: 'center', marginTop: '10rem'}}>
            <span className="white">{"Recent "}</span>
            <span className="red">{"Post"}</span>
        </h1>
        <div style={{backgroundColor: "var(--color-text)", height: "0.25rem", width: "7rem",  marginBottom: '5rem'}}></div>
        </div>

        <BlogList count={3}/>


        <div style={{display:'grid', alignItems:'center', justifyItems:'center'}}>
        <h1 style={{width: '100%', textAlign: 'center', marginTop: '5rem'}}>
            <span className="white">{"Get in "}</span>
            <span className="red">{"Touch"}</span>
        </h1>

        <div style={{backgroundColor: "var(--color-text)", height: "0.25rem", width: "7rem",  marginBottom: '5rem'}}></div>
        </div>
        <Contact/>
        

    </div>
);

export default About;
