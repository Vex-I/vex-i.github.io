import React from "react";
import BlogList from '../components/BlogList';
import { Input, notification} from 'antd';

const { Search } = Input;
//Page for the blog list view.
const BlogView = () => {
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

        <BlogList />
        </div>
    );
}

export default BlogView;
