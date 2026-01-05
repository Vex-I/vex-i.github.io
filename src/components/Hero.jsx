import profilePic from '../assets/profile-pic.jpg';
import Contact from './Contact';
import { Image, Flex, Grid } from 'antd';
const { useBreakpoint } = Grid;

const Hero = () => {
    const screens = useBreakpoint();
    const isMobile = !screens.md;
    const imageSize = isMobile ? '12rem' : '20rem';

    const styles = {
        root: {
            borderRadius:'15em',
            padding: '1em',
            border:'0.5em solid var(--color-primary)'
        },
        image: {
            width:imageSize,
            height: imageSize,
            borderRadius:'50%'
        },
        cover: {
            borderRadius:'50%',
            opacity:'0%'
        }
    }
    return(
        <Flex vertical align='center' justify='center' gap='middle' style={{height:'100vh'}}>
        <Image className='fade-in' styles={ styles } src={ profilePic } alt='Profile Picture' preview={{ open: false }}/>
        <Flex vertical align='center' style={{
            maxWidth: isMobile ? '90vw' : '40em',
            paddingInline: isMobile ? '1rem' : 0,
        }}>
        <h3 className="text-heading fade-in" style={{textAlign: "center"}}>
                <span className='white' style={{fontWeight: "900"}}>Hi! I'm </span> 
                <span className='red' style={{fontWeight: "900"}}>Nawwaf Sudi</span> 
        </h3>
        <p className="text-subheading white fade-in" style={{textAlign: "center", color:'var(--color-primary)'}}>
                an Undergraduate student 
                majoring in Data Science and Analytics @ National University of Singapore (
                <a href='https://nus.edu.sg/'>NUS</a>).
        </p>
        </Flex>
        <Contact/>
        </Flex>
    );
}


export default Hero;
