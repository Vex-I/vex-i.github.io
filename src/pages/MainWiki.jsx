import React, { useState }from "react";
import Title from '../components/Title';
import { Flex, Input, Layout, Menu, Card, Divider, Row, Col} from "antd";
import WikiPostList from '../components/WikiPost';
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Search } = Input;
const { Header, Content, Sider } = Layout;
const MainWiki = () => {

    const [collapsed, setCollapsed] = useState(false);

    const cardStyles = {
        root: {
            border: '1px solid var(--color-border)',
            background: 'var(--color-background)',
            color: 'var(--color-text)',
            width:'100%',
        },

        header: {
            background: 'var(--color-background)',
            color: 'var(--color-text)'
        },
    };
    const menuStyles = {
        root: {
            background: 'var(--color-background)',
            color: 'var(--color-text)',
            width:'100%',
        },

        item: {
            background: 'var(--color-background)',
            color: 'var(--color-text)'
        },
    };


    const siderStyle = {
        background: 'var(--color-background)',
        position: 'sticky',
        insetInlineStart: 0,
        top: 0,
        paddingTop:'5em',
    };

    const sections = [
        {
            title: "The World",
            items: ["History", "Timeline", "Cosmology", "Continents"],
        },
        {
            title: "Peoples",
            items: ["Humans", "Lizard Folk", "Ancient Spirits"],
        },
        {
            title: "Powers & Magic",
            items: ["Spirit Magic", "Artifacts", "Forbidden Magic"],
        },
        {
            title: "Factions",
            items: ["Royalists", "Republics", "Secret Orders"],
        },
        {
            title: "Notable Figures",
            items: ["Clarisse", "Dramiri Silverguard", "Kenditch"],
        },
        {
            title: "Current Age",
            items: ["Major Events", "Conflicts", "Political Landscape"],
        },
    ];
    return(
        <Layout>
            <Layout className='layout' style={{ padding: "30px"}}>
                <Content className='layout'>
                    <h1> Worldbuilding </h1>
                    <blockquote>
                        <h3>
                            Fairy tales do not tell children the dragons exist. Children already know that dragons exist. Fairy tales tell children the dragons can be killed.
                        </h3>
                        <br />
                        <h3>
                            - G. K. Chesterton
                        </h3>
                    </blockquote>
                    <Divider />
                    <div style={{ margin: '1em' }} />
                    <div style={{ display: 'flex', justifyContent: 'center'}}>
                        <Search placeholder="Search for a page" size="large" style={{marginBottom: 20 }} />
                    </div>
                    <Title title='Featured Page' />
                    <section>
                        <Row gutter={[16, 16]}>
                            {sections.map((section) => (
                                <Col xs={24} sm={12} md={8} key={section.title}>
                                    <Card styles={cardStyles} title={section.title} bordered>
                                        <ul>
                                            {section.items.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </section>
                    <Divider/>
                    <Title title='Posts' />
                    <WikiPostList />
                </Content>
            </Layout>
            <Sider
                style={siderStyle}
                breakpoint="lg"
                collapsedWidth="0"
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                trigger={null}
            >
                <Menu
                    styles={menuStyles}
                    style={{ height: "100%", position: "fixed" }}>
                    {sections.map((section) => (
                        <Menu.Item key={section.title}> {section.title}</Menu.Item>
                    ))}
                </Menu>
            </Sider>
        </Layout>
    );
}

export default MainWiki;
