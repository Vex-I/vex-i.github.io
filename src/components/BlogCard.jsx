import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({slug, title, excerpt, date, image}) => {
    const navigate = useNavigate();
    // src/assets/{img}
    const imgSrc = require(`../assets/${image}`);
    
    return(
        <button onClick={() => navigate(`/blog/${slug}`)} className="card-button">
        <section className="blog-card">
            <img src={imgSrc} alt={title} />
            <div>
                <h2 className="card-title-container">
                    <span className="card-heading white">{title}</span>
                </h2>
                <p className="card-text white">{excerpt}</p>
            </div>
            <div style={{display:'flex', flexDirection:'row', margin:'0px', padding:'0px 0px 20px 20px', gap:'1em'}}> 
                <div style={{margin:'0px', padding:'0px', alignItems:'center'}}>
                    <img src="../githublogo.png" style={{height:'3em', width:'3em'}}/>
                </div>
                <div style={{display:'flex', flexDirection:'column', alignContent:'top', padding:'0px'}}> 
                    <p style={{margin:'0px'}}>Nawwaf Sudi</p>   
                    <p style={{margin:'0px', color:'gray'}} className="blog-date">{date}</p>
                </div>
            </div>
        </section>
        </button>
    );
}

export default BlogCard;
