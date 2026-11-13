import { useNavigate } from "react-router-dom";
import TagContainer from '../components/TagContainer.jsx';

const ProjectCard = ({slug, hasAPage, link, title, excerpt, tags, loading=false}) => {
    const navigate = useNavigate();


    const onClick = (string) => {
        if(loading) {
            return null;
        }
        if(hasAPage) {
            navigate(string);
        } else if(link) {
            window.open(link, "_blank");
        } 
    }

    if(loading) {

        return(
            <div style={{display: 'grid', placeItems:'center', width:'100%', minHeight:'200px'}}>
                <h3>Loading Content...</h3>
            </div>
        );
    }

    return(
        <div style={{display:'grid', gridTemplateRows:'2em auto', minHeight:'150px', padding:'10px', borderRadius:'6px', border:'1px solid var(--color-primary)'}}>
            <div style={{width:'100%', display:'grid', borderBottom:'3px solid var(--color-primary)', gridTemplateColumns:'auto auto'}}>
                <div style={{display:'flex', justifyContent:'left'}}>
                <h4>
                    {title}
                </h4>
                </div>
                <div style={{display:'flex', justifyContent:'right'}}>
                <h4 onClick={ () => onClick(`/project/${slug}`)}>
                    {hasAPage || link? (<a style={{textDecoration:'underline'}} >Documented</a>): <></> } 
                </h4>
                </div>
            </div>
            <div style={{display:'grid', gridTemplateAreas:'auto auto'}}>
                <p>{excerpt}</p>
                <TagContainer tagList={tags}/>
            </div>
        </div>
    );
}

export default ProjectCard;
