import React, { useState, useEffect } from 'react';
import Card from '../components/BlogCard';
import { Flex, Empty, Grid, Button } from 'antd'
import { fetchPosts } from '../functions/fetchContent.js';
import { useNavigate } from "react-router-dom";
const { useBreakpoint } = Grid;

const styles = {
    root: {
        background: 'var(--color-background)',
        color: 'var(--color-text)',
        width: '100px',
    },
}

const BlogList = ({count=-1, preview=false}) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const screens = useBreakpoint();
    const isMobile = !screens.md;

    useEffect(() => {
        fetchPosts(setPosts, setError, setIsLoading);
    }, []); 

    const navigate = useNavigate();

    if(isLoading) {
        return(<Flex wrap gap='large' align='flex-start' justify='center'>
                <Card loading={true}/>
        </Flex>)
    }


    if (error) {
        return <Empty description={error}></Empty>
    }

    return(
        <div style={{display:'flex', flexDirection:'column', gap:'24px', alignItems:'center'}}>
            <div style={{ display:'flex', alignItems:'stretch', gap:'16px'}}>
            {posts
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .slice(0, count > 0 ? count : posts.length)
                .map((post) => (
                            <Card key={post.slug} {...post} />
                    ))}
            </div>
            <Button size='large' onClick={() => navigate('/blog')} styles={styles}>Read More</Button>
        </div>
);
}
export default BlogList;
