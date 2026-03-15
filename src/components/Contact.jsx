import React from "react";
import { useNavigate } from 'react-router-dom';
import {ReactComponent as Mail} from '../assets/mail.svg';
import { MailFilled, GithubOutlined, FileOutlined} from '@ant-design/icons'
import { MoonFilled, SunFilled } from '@ant-design/icons'
import { Card, Flex, Button, message} from 'antd';

const Contact = () => {
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const buttonStyles = {
        root: {
            backgroundColor: 'transparent',
            border:'none',
            padding: '2em',
        },
    }

    return(
        <Flex vertical gap='large' align='center'>
                <ThemeButton />
            <Flex align='center' justify='center' gap='large'>
                {contextHolder}
            <Flex vertical align='center'>
                <Button onClick={() => window.open('mailto:nawwaf.aydin@gmail.com', '_blank')} shape='circle' size='large' styles={buttonStyles} icon={<MailFilled style={{ fontSize: '24px', color: 'var(--color-text)' }} />} />
                <h4>Mail</h4>
            </Flex>

            <Flex vertical align='center'>
                <Button onClick={() => window.open('https://www.github.com/vex-i', '_blank')} shape='circle' size='large' styles={buttonStyles} icon={<GithubOutlined style={{ fontSize: '24px', color: 'var(--color-text)' }} />} />
                <h4>Github</h4>
            </Flex>

            <Flex vertical align='center'>
                <Button onClick={() => navigate('/wiki')} shape='circle' size='large' styles={buttonStyles} icon={<FileOutlined/>} style={{ fontSize: '16px', color: 'var(--color-text)' }} />
                <h4>My Wiki</h4>
            </Flex>
            </Flex>
        </Flex>
    );
};

const ThemeButton = () => {
    const bool = localStorage.getItem('theme') == 'dark' ? true : false;
    const [dark, setDark] = React.useState(bool);
    const Logo = dark ? (<MoonFilled size='large' style={{fontSize:'32px', color:'var(--color-text)'}}/>) : (<SunFilled size='large' style={{fontSize:'32px', color:'var(--color-text)'}}/>);

    const buttonStyles = {
        root: {
            backgroundColor: 'transparent',
            border: '0.2em solid var(--color-text)',
            padding: '3em',
        },
    }
    document.documentElement.setAttribute('data-theme', dark ? "dark" : "light");
    function toggleDark() {
        setDark(!dark);
        localStorage.setItem("theme", !dark ? "dark" : "light");
    }
    return(
        <Button shape='circle' styles={ buttonStyles } onClick={toggleDark} icon = {Logo}>
        </Button>
    );   
}
export default Contact;
