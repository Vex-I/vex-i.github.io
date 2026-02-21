import Card from '../components/ProjectCard.jsx'
import React, { useState, useEffect } from 'react';
import { Flex, Empty, Grid } from 'antd'
import { fetchProjects } from '../functions/fetchContent';

//TODO: Fix Scalling issue
const ProjectList = ({count=-1, preview=false}) => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetchProjects(setProjects, setError, setIsLoading);
    }, []); 


    if (isLoading) {
        return(
        <Flex wrap gap='large' align='center' justify='center'>
                    <Card loading={true}/>
                    <Card loading={true}/>
                    <Card loading={true}/>
        </Flex>
        )
    }

    if (error) {
        return <Empty description={error}></Empty>
    }
    return(
        <Flex wrap gap='large' align='center' justify='center'>
            {projects
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .slice(0, count > 0 ? count : projects.length)
                .map((project) => (
                <Card key={project.slug} {...project} />
        )
        )}
        </Flex>
);
};
export default ProjectList;
