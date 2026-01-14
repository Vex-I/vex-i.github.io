import Card from '../components/ProjectCard.jsx'
import React, { useState, useEffect } from 'react';
import { Flex, Empty, Grid } from 'antd'
const { useBreakpoint } = Grid;

const ProjectList = ({count=-1, preview=false}) => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const screens = useBreakpoint();
    const isMobile = !screens.md;

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URI}/api/content/?type=project`);
                if (!response.ok) {
                    throw new Error(`${response.status} : ${response.statusText}`);
                }
                const data = await response.json();
                setProjects(data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setProjects([]);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProjects();
    }, []); 

    const contentWidth = isMobile ? '90vw' : '40em';
    const contentHeight = isMobile ? '40vh' : '20em';

    if (isLoading) {
        return(
        <Flex wrap gap='large' align='center' justify='center'>
                <div style={{width: contentWidth, height:contentHeight }}> 
                    <Card loading={true}/>
                </div>
                <div style={{width: contentWidth, height:contentHeight }}> 
                    <Card loading={true}/>
                </div>
        </Flex>
        )
    }

    if (error) {
        return <Empty description={error}></Empty>
    }
    return(
        <Flex wrap gap='large' align='flex-start' justify='center'>
            {projects
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .slice(0, count > 0 ? count : projects.length)
                .map((project) => (
            <div style={{width: {contentWidth}, height:{contentHeight}}}> 
                <Card key={project.slug} {...project} />
            </div>
        )
        )}
        </Flex>
);
};
export default ProjectList;
