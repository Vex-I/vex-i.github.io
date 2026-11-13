import Card from '../components/ProjectCard.jsx'
import { useState, useEffect } from 'react';
import { Flex, Empty, Button } from 'antd'
import { fetchProjects } from '../functions/fetchContent';
import { useNavigate } from "react-router-dom";

const styles = {
    root: {
        background: 'var(--color-background)',
        color: 'var(--color-text)',
        width: '100px',
    },
}

const ProjectList = ({count=-1, preview=false}) => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    const navigate = useNavigate();

    useEffect(() => {
        fetchProjects(setProjects, setError, setIsLoading);
    }, []); 


    if (isLoading) {
        return(
            <div style={{display:'flex', flexDirection:'column', gap:'24px', alignItems:'center'}}>
                <Flex wrap gap='large' justify='left'>
                        <Card loading={true} />
                        <Card loading={true} />
                        <Card loading={true} />
                </Flex>
                <Button size='large' onClick={() => navigate('/project')} styles={styles}>See more</Button>
            </div>
        )
    }

    if (error) {
        return <Empty description={error}></Empty>
    }

    return(
        <div style={{display:'flex', flexDirection:'column', gap:'24px', alignItems:'center'}}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px'}}>
                {[...projects]
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .slice(0, count > 0 ? count : projects.length)
                    .map((project) => (
                        <Card key={project.slug} {...project} />
                    )
                    )}
            </div>
            <Button size='large' onClick={() => navigate('/project')} styles={styles}>See more</Button>
        </div>
);
};
export default ProjectList;
