import React from "react";
import {ReactComponent as Mail} from '../assets/mail.svg';
import {ReactComponent as Github} from '../assets/github.svg';



const Contact = () => {
    return(

        <div style={{display:'grid', alignItems:'center', justifyItems:'center', gridTemplateColumn:'1fr'}}>
        <div className="contact">
                <ContactBox 
                    name='Email' 
                    contact='nawwaf.aydin@gmail.com'
                    imgSource= <Mail/>
                    link = '//vex-i.pages.dev'/>
                <ContactBox 
                    name='Github' 
                    contact='Vex-i'
                    imgSource= <Github/>
                    link = '//github.com/vex-i'/>
        </div>
        </div>
    );
}

const ContactBox = ({name, contact, imgSource, link}) => {
    const goToLink = () => {
        window.location.href = link;
    }

    return(
    <div className='contact-box'> 
        <button onClick={goToLink}>
        {imgSource}
        <h3 style={{fontWeight:'bold'}}>{name}</h3>
        <h3>{contact}</h3>
        </button>
    </div>
    )
}

export default Contact;
