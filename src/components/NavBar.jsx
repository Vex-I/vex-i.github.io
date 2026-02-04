import { useNavigate } from "react-router-dom";
import { HomeOutlined, MenuOutlined, BookOutlined, CommentOutlined, CloudOutlined} from '@ant-design/icons';
import { Popover, Button } from 'antd';
import { Link } from 'react-router-dom';
const NavBar = () => {
    const navigate = useNavigate();
    const content = (
        <div style= {{display: 'flex', flexDirection: 'column'}}>
        <Button icon= { <HomeOutlined/> } color={ 'var(--color-primary)' } variant='text' size="large" onClick={ () => navigate('/') }>
            Home
        </Button>
        <Button icon= { <BookOutlined/> } color={ 'var(--color-primary)' } variant='text' size="large" onClick={ () => navigate('/modules')}>
            Academics
        </Button>
        <Button icon= { <CommentOutlined/> } color={ 'var(--color-primary)' } variant='text' size="large" onClick={ () => navigate('/blog')}>
            Posts
        </Button>
        <Button icon= { <CloudOutlined/> } color={ 'var(--color-primary)' } variant='text' size="large" onClick={ () => navigate('/project')}>
            Projects
        </Button>
        </div>
    );

    const title = (
        <h4>Pages</h4>
    );

    const styles = {
        container: {
            background: 'var(--color-background)'
        },
        content: {
            color: 'var(--color-text)'
        },
    }

    return(
    <nav className="navbar">
        <div className='nav-content'>
        <Popover placement='bottom' content= { content } trigger='click' styles={ styles }>
        <Button icon= { <MenuOutlined style={{fontSize:'18px'}}/> } color={ 'var(--color-primary)' } variant='text' size="large"/>
        </Popover>
        <Popover trigger='hover' content= 'Back to Homepage' styles={ styles }>
        <Button icon= { <HomeOutlined size='large' style={{fontSize:'18px'}}/> } color={ 'var(--color-primary)' } variant='text' size="large" onClick={ () => navigate('/')}/>
        </Popover>
        </div>
    </nav>
  );
};

export default NavBar;
