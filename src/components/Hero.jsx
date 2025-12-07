import React from "react";

const Hero = () => {
    return(
    <div className="hero-container">
    <div style ={{alignItems:'center', display:'flex', flexDirection:'column'}}>
        <h3 className="text-heading fade-in" style={{textAlign: "center"}}>
                <span className='white' style={{fontWeight: "900"}}>Hi! I'm </span> 
                <span className='red' style={{fontWeight: "900"}}>Nawwaf Sudi</span> 
        </h3>
        <h4 className="text-subheading white fade-in" style={{textAlign: "center", color:'var(--color-primary)'}}>
                an Undergraduate student 
                majoring in Data Science and Analytics with a minor in Mathematics @ National University of Singapore (
                <a href='https://nus.edu.sg/'>NUS</a>).
        </h4>
        <ThemeButton className="fade-in"/>
    </div>
    </div>
    );
}

const ThemeButton = () => {
    const [dark, setDark] = React.useState(true);
    const Logo = dark ? Moon : Sun;

    document.documentElement.setAttribute('data-theme', dark ? "dark" : "light");
    function toggleDark() {
        setDark(!dark);
        localStorage.setItem("theme", !dark ? "dark" : "light");
    }
    return(
        <button onClick={toggleDark} style={{width:'5em', height:'5em', borderRadius:'2.5em', backgroundColor:'transparent', border:'2px solid var(--color-text)'}}>
            <Logo/>
        </button>
    );   
}

const Moon = () => (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="var(--color-text)" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>
);

const Sun = () => (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="var(--color-text)" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>
);

export default Hero;
