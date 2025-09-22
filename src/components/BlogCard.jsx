import React from "react";

const Card = ({title, excerpt, date, image}) => {
    // src/assets/{img}
    const imgSrc = require(`../assets/${image}`);
    
    return(
        <section className="blog-card">
            <img src={imgSrc} alt={title} />
            <div>
                <h2>
                    <span className="red">{'>'} </span>
                    <span className="yellow">{title}</span>
                    <span className="red">{'.'} </span>
                </h2>
                <p className="grey blog-date">{date}</p>
                <p>{excerpt}</p>
            </div>
        </section>
    );
}

export default Card;