import React, { useState, useEffect } from 'react';
import Card from '../components/BlogCard';
import { Flex, Empty, Grid } from 'antd'
import { fetchPosts } from '../functions/fetchContent.js';
const { useBreakpoint } = Grid;

const BlogList = ({count=-1, preview=false}) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const screens = useBreakpoint();
    const isMobile = !screens.md;

    useEffect(() => {
        fetchPosts(setPosts, setError, setIsLoading);
    }, []); 

    const contentWidth = !isMobile ? '20em' : '20em';
    const contentHeight = !isMobile ? '25em' : '30em';
    
    if(isLoading) {
        return(<Flex wrap gap='large' align='flex-start' justify='center'>
            <div style={{width: contentWidth, height:contentHeight }}> 
                <Card loading={true}/>
            </div>
            <div style={{width: contentWidth, height:contentHeight }}> 
                <Card loading={true}/>
            </div>
            <div style={{width: contentWidth, height:contentHeight }}> 
                <Card loading={true}/>
            </div>
        </Flex>)
    }


    if (error) {
        return <Empty description={error}></Empty>
    }

    return(
        <Flex wrap gap='large' align='center' justify='center'>
            {posts
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .slice(0, count > 0 ? count : posts.length)
                .map((post) => (
            <div style={{width: contentWidth, height:contentHeight }}> 
                <Card key={post.slug} {...post} />
            </div>
        )
        )}
        </Flex>
);
}
export default BlogList;
