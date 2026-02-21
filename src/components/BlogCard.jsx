import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from 'antd';
import TagContainer from '../components/TagContainer.jsx';

//TODO: Fix loading logic to only show when resources + image is loaded.
const BlogCard = ({slug, hasAPage, link, title, excerpt, date, image, tags, loading}) => {
    const navigate = useNavigate();
    const loadingStyles = {
        root: {
            background: 'var(--color-background)',
            color: 'var(--color-text)',
            width:'100%',
            height:'100%',
        },
        header: {
            borderBottom: '1px solid var(--color-border)',
            background: 'var(--color-background)',
            color: 'var(--color-text)'
        },
    };
    const styles = {
        root: {
            border: '1px solid var(--color-border)',
            background: 'var(--color-background)',
            color: 'var(--color-text)',
            width:'100%',
        },

        header: {
            border: '1px solid var(--color-border)',
            background: 'var(--color-primary)',
            color: 'var(--color-text-invert)'
        },
    };


    const onClick = (string) => {
        if(loading) {
            return null;
        }

        if(hasAPage) {
            navigate(string);
        } else if(link) {
            navigate(link);
        } 
    }

    return(
        <button onClick={() => onClick(`/blog/${slug}`)} className="card-button-post">
            <Card
                hoverable
                cover= {     
                    <img src={image} alt={title} />
                }
                styles= { loading ? loadingStyles : styles }
                loading = { loading }
            >
                <h3 style={{margin: '0'}}> {title} </h3>
                <p> {excerpt} </p>
                <TagContainer tagList={ tags }/>
            </Card>
        </button>
    );
}

export default BlogCard;
