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
            border: 'none',
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

    const searchStyle = {
        root: {
            color: 'var(--color-text)',
        },
        input: {
            background: 'var(--color-background)',
            color: 'var(--color-text)',
            border: '1px solid var(--color-border)',
        },
        button: {
            root: {
                background: 'var(--color-primary)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-invert)',
            }
        }
    }

    const sections = [
        {
            title: "The Known World",
            items: ["Formation","Known Continents", "Timeline of Major Events", "Systems of Date and Reckoning"],
            links: ["formation-of-the-world", "known-continent","timeline-major-world-events", "systems-of-reckoning"]
        },
        {
            title: "Peoples",
            items: ["The First Men", "The Children of the Sky", "The Children of the Earth", "Kûrudam"],
            links: ["first-men", "children-of-the-sky", "children-of-the-earth", "kurudam"]
        },
        {
            title: "Factions",
            items: ["Royalists", "Republics", "Secret Orders"],
            links: ["first-men", "children-of-the-sky", "children-of-the-earth", "kurudam"]
        },
        {
            title: "Notable Figures",
            items: ["Clarisse", "Dramiri Silverguard", "Kenditch"],
            links: ["first-men", "children-of-the-sky", "children-of-the-earth", "kurudam"]
        },
        {
            title: "Current Age",
            items: ["Major Events", "Conflicts", "Political Landscape"],
            links: ["first-men", "children-of-the-sky", "children-of-the-earth", "kurudam"]
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
                    <div style={{ display: 'flex', justifyContent: 'center', width:'200'}}>
                        <Search placeholder='Search for a page' size="large" style={{marginBottom: 20, width:400}} styles={searchStyle}/>
                    </div>
                    <Title title='Featured Page' />
                    <section>
                        <Row gutter={[16, 16]}>
                            {sections.map((section) => (
                                <Col xs={24} sm={12} md={8} key={section.title}>
                                    <Card styles={cardStyles}>
                                        <h3>{section.title}</h3>
                                        <ul>
                                            {section.items.map((item) => (
                                                <li key={item}><a href={'wiki/' + section.links[section.items.indexOf(item)]}>{item}</a></li>
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
