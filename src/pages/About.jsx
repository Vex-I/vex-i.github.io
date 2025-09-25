import AboutHead from "../components/AboutHead"
import BlogList from "../components/BlogList";
const About = () => (
    //TODO: Adjust Bloglist to show recent posts, then display it here.
    //Also, Add some sort of graphic here
    <div style={{display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: '50px', alignItems: 'center'}}>
        <AboutHead />

        <h1>
            <span>{"> "}</span>  
            <span className="yellow">{"Recent Post"}</span>
            <span className="red">{"."}</span>
        </h1>
        
        <BlogList style={{}} count={3}/>
    </div>
);

export default About;