import BlogList from "../components/BlogList";
import Title from '../components/Title';
import { ScrollPrompt } from '../components/ScrollPrompt'
import { Button } from 'antd';
import Hero from "../components/Hero";
import ProjectList from "../components/ProjectList"
import { useNavigate } from "react-router-dom";

const About = () => {
    const styles = {
        root: {
            background:'var(--color-background)',
            color: 'var(--color-text)'
        },
    }

    const navigate = useNavigate();

    return (
        <div style={{display:'grid', placeItems: "center"}}>
        <Hero/>
        <ScrollPrompt/>
        <Title title='Projects'/>
        <ProjectList count ={3} preview={true}/>
        <div style={{margin: '1em'}}/>
        <Button size='large' styles = { styles } onClick= {() => navigate('/project')}>See more</Button>
        <Title title='Recent Posts'/>
        <BlogList count={3} preview= {true}/>
        <div style={{margin: '1em'}}/>
        <Button size='large' styles = { styles } onClick= {() => navigate('/blog')}>See all post</Button>
        </div>
    )}

export default About;
