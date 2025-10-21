import AboutHead from "../components/AboutHead"
import BlogList from "../components/BlogList";
import SpotifySong from "../components/SpotifySong";
import Todo from "../components/Todo";
import IOTD from "../components/IOTD";
import Hero from "../components/Hero";

const About = () => (
    //TODO: Adjust Bloglist to show recent posts, then display it here.
    //Also, Add some sort of graphic here
    <div style={{justifyItems: "center"}}>
        <Hero/>
        <section className="about-header">
            <AboutHead />
            <section className="right-header">
            <SpotifySong />
            <Todo/>
            </section>
        </section>
        <h1 style={{width: '100%', textAlign: 'center', marginTop: '10rem'}}>
            <span className="red">{"Recent "}</span>
            <span className="yellow">{"Post"}</span>
        </h1>
        <div style={{backgroundColor: "#be4141", height: "0.25rem", width: "7rem",  marginBottom: '10rem'}}></div>
        <BlogList count={3}/>

        <h1 style={{width: '100%', textAlign: 'center', marginTop: '10rem'}}>
            <span className="red">{"Featured "}</span>
            <span className="yellow">{"Project"}</span>
        </h1>
        <div style={{backgroundColor: "#be4141", height: "0.25rem", width: "7rem",  marginBottom: '10rem'}}></div>

        <h1 style={{width: '100%', textAlign: 'center', marginTop: '10rem'}}>
            <span className="yellow">{"Experience"}</span>
        </h1>
        <div style={{backgroundColor: "#be4141", height: "0.25rem", width: "7rem",  marginBottom: '10rem'}}></div>

        <h1 style={{width: '100%', textAlign: 'center', marginTop: '10rem'}}>
            <span className="red">{"Get in "}</span>
            <span className="yellow">{"Touch"}</span>
        </h1>
        <div style={{backgroundColor: "#be4141", height: "0.25rem", width: "7rem",  marginBottom: '10rem'}}></div>

    </div>
);

export default About;