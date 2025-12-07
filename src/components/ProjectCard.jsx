import { useNavigate } from "react-router-dom";

const ProjectCard = ({slug, title, excerpt, date}) => {
    const navigate = useNavigate();
    return(
        <button onClick={() => navigate(`/blog/${slug}`)} className="project-card-button">
        <section className="project-card">
            <div>
                <h2 className="card-title-container">
                    <span className="card-heading white">{title}</span>
                </h2>
                <p className="blog-date">{date}</p>
                <p className="project-card-text">{excerpt}</p>
            </div>
        </section>
        </button>
    );
}

export default ProjectCard;
