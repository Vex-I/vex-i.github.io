import React, { useState, useEffect } from 'react';
import Card from '../components/WikiPostCard';
import { Flex, Empty, Grid } from 'antd'
import { fetchWikiPosts } from '../functions/fetchContent.js';
const { useBreakpoint } = Grid;

const WikiPostList= ({count=-1, preview=false}) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const screens = useBreakpoint();
    const isMobile = !screens.md;

    useEffect(() => {
        fetchWikiPosts(setPosts, setError, setIsLoading);
    }, []); 
 
    if(isLoading) {
        return(<Flex wrap gap='large' align='flex-start' justify='center'>
            <div style={{width: '100%'}}> 
                <Card loading={true}/>
            </div>
            <div style={{width: '100%'}}> 
                <Card loading={true}/>
            </div>
            <div style={{width: '100%'}}> 
                <Card loading={true}/>
            </div>
        </Flex>)
    }

    if (error) {
        return <Empty styles={{description:{color:'var(--color-text)'}}}description={error}></Empty>
    }

    return(
        <Flex vertical gap='large' align='center' justify='flex-start'>
            {posts
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .slice(0, count > 0 ? count : posts.length)
                .map((post) => (
            <div style={{width: '100%'}}> 
                <Card key={post.slug} {...post} />
            </div>
        )
        )}
        </Flex>
);
}
export default WikiPostList;
