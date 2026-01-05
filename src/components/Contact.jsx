import React from "react";
import {ReactComponent as Mail} from '../assets/mail.svg';
import { MailFilled, GithubOutlined } from '@ant-design/icons'
import { MoonFilled, SunFilled } from '@ant-design/icons'
import { Card, Flex, Button, message} from 'antd';

const Contact = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const buttonStyles = {
        root: {
            backgroundColor: 'transparent',
            border: 'none',
            padding: '2em',
        },
    }

    const mailClicked = () => {
        navigator.clipboard.writeText("nawwaf.aydin@gmail.com");
        messageApi.info('Email Copied to Clipboard.');
    }

    return(
        <Flex align='center' justify='center' gap='large'>
            {contextHolder}
            <Button onClick={ mailClicked }shape='circle' size='large' styles={ buttonStyles } icon={<MailFilled style={{fontSize:'24px', color:'var(--color-text)'}}/>}/> 
            <ThemeButton/>
            <Button onClick={() => window.open('https://www.github.com/vex-i', '_blank')} shape='circle' size='large' styles={ buttonStyles } icon={<GithubOutlined style={{fontSize:'24px', color:'var(--color-text)'}}/>}/> 
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
