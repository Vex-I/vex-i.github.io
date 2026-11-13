import { useNavigate } from "react-router-dom";
import TagContainer from '../components/TagContainer.jsx';

const BlogCard = ({slug, hasAPage, link, title, excerpt, updatedAt, createdAt, image, tags, loading}) => {
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

    if (loading) {
        return(
            <div style={{display:'grid', placeItems:'center'}}>
                Loading Content...
            </div>
        )
    }

    return(
        <div style={{display:'grid', overflow:'hidden', gap:'16px', 
                gridTemplateColumns: '1fr 3fr', minHeight:'150px', 
                borderRadius:'6px', border:'1px solid var(--color-primary)',
                cursor:'pointer'}}
            onClick={ () => onClick(`/blog/${slug}`)}>
                    <img src={image} style={{width:'100%', height:'100%', objectFit:'cover'}}/>
            <div style={{display:'grid', gridTemplateRows:'2em auto', padding:'10px'}}>
                <div style={{display:'grid', gridTemplateColumns:'auto auto'}}>
                    <div style={{display:'flex', justifyContent:'left'}}>
                    <h4>
                        {title}
                    </h4>
                    </div>
                    <div style={{display:'flex', justifyContent:'right'}}>
                        <h4 onClick={ () => onClick(`/blog/${slug}`)}>
                            {new Date(createdAt).toLocaleDateString()} 
                        </h4>
                    </div>
                </div>
                <div style={{display:'grid', gridTemplateAreas:'auto auto'}}>
                    <p>{excerpt}</p>
                    <TagContainer tagList={tags}/>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
