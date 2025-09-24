import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({slug, title, excerpt, date, image}) => {
    const navigate = useNavigate();
    // src/assets/{img}
    const imgSrc = require(`../assets/${image}`);
    
    return(
        <button onClick={() => navigate(`/blog/${slug}`)} className="card-button">
        <section className="blog-card">
            <img src={imgSrc} alt={title} />
            <div>
                <h2 className="card-title-container">
                    <span className="card-heading red">{'>'} </span>
                    <span className="card-heading yellow">{title}</span>
                    <span className="card-heading red">{'.'} </span>
                </h2>
                <p className="grey blog-date">{date}</p>
                <p className="card-text white">{excerpt}</p>
            </div>
        </section>
        </button>
    );
}

export default Card;