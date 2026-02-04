import ProjectList from '../components/ProjectList';
import { Input, notification} from 'antd';

const { Search } = Input;
const ProjectView = () => {

    const [api, contextHolder] = notification.useNotification();
    const onSearch = (value, _e, input) => {
        api.open({
            title: 'Thanks for visiting!',
            description: "I'm currently working on the search API, and I really want to nail it down. Forgive the sloppines :)",           
            duration: 0,
            placement: "top",
        });

    }
    
    return(
        <div style={{width: "100%"}}>
            {contextHolder}
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Search placeholder="input search text" size="large" onSearch={onSearch} style={{ width: 300, marginBottom: 20 }} />
            </div>
            <ProjectList />
        </div>
        );
    }

export default ProjectView;
