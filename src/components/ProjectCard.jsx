import { useNavigate } from "react-router-dom";
import { Card } from 'antd';
import TagContainer from '../components/TagContainer.jsx';
import { Grid, Col, Row } from 'antd'
const { useBreakpoint } = Grid;

const ProjectCard = ({slug, hasAPage, link, title, excerpt, date, tags, loading=false}) => {
    const navigate = useNavigate();

    const screens = useBreakpoint();
    const isMobile = !screens.md;

    const loadingStyles = {
        root: {
            background: 'var(--color-background)',
            color: 'var(--color-text)',
            width: '100%',
            height: '100%',
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
            background: 'transparent',
            color: 'var(--color-text)',
            width: '100%',
            height: '100%',
        },

        header: {
            borderBottom: '1px solid var(--color-border)',
            background: 'var(--color-background)',
            color: 'var(--color-text)'
        },

        body: {
            paddingTop: '0',
            paddingBottom: '0',
            display: 'grid',
            gridTemplateRows: '1fr 0.2fr',
        },
    };

    const header = (
     <h4> {title} </h4>   
    );

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

    const contentWidth = !isMobile ? '30em' : '20em';
    const contentHeight = !isMobile ? '15em' : '15em';

    return(
        <button style={{ width: `${contentWidth }`, height: `${ contentHeight }` }} onClick={() => onClick(`/project/${slug}`)} className="project-card-button">
            <Card
                hoverable
                title= { loading ? '' : header }
                styles= { loading ? loadingStyles : styles }
                loading= { loading }
                extra={hasAPage || link? (<a>Documented</a>): <></> }
            >
                <p className="project-card-text">{excerpt}</p>
                <TagContainer tagList={tags}/>
            </Card>
        </button>
    );
}

export default ProjectCard;
