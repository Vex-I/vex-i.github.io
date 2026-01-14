import React, { useState, useEffect } from 'react';
import Card from '../components/BlogCard';
import { Flex, Empty, Grid } from 'antd'
const { useBreakpoint } = Grid;

const BlogList = ({count=-1, preview=false}) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const screens = useBreakpoint();
    const isMobile = !screens.md;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URI}/api/content/?type=blog`, 
                    {
                        headers: {
                            "readtoken": "f0a40f762b3dc47c0a26946c33b926b29cd6b993648f2809ea27535b4fd669e3"
                        }
                    });
                if (!response.ok) {
                    throw new Error(`${response.status} : ${response.statusText}`);
                }
                const data = await response.json();
                setPosts(data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setPosts([]);
            } finally {
                setIsLoading(false);
            }
        };
        fetchPosts();
    }, []); 

    const contentWidth = isMobile ? '90vw' : '20em';
    const contentHeight = isMobile ? '40vh' : '25em'; 
    
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
        <Flex wrap gap='large' align='flex-start' justify='center'>
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
