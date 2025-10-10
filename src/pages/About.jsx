import AboutHead from "../components/AboutHead"
import BlogList from "../components/BlogList";
import SpotifySong from "../components/SpotifySong";
import Todo from "../components/Todo";
import IOTD from "../components/IOTD";

const About = () => (
    //TODO: Adjust Bloglist to show recent posts, then display it here.
    //Also, Add some sort of graphic here
    <div style={{display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: '50px', alignItems: 'center'}}>
        <section className="about-header">
            <section className="left-header">
                <IOTD/>
            </section>
            <AboutHead />
            <section className="right-header">
            <SpotifySong />
            <Todo/>
            </section>
        </section>
        <h1 style={{width: '100%', textAlign: 'left'}}>
            <span className="yellow">{"Recent Post"}</span>
            <span className="white">{"."}</span>
        </h1>
        
        <BlogList style={{}} count={3}/>
    </div>
);

export default About;