import { Flex } from 'antd';

const Footer = () => {
    return (
        <Flex className="footer-content" horizontal gap='large'>
            <p>© 2026 Nawwaf Sudi. All rights reserved.</p>
            <p style={{textAlign:"left", maxWidth:"30rem"}}>This material is shared publicly for reading purposes only.
No reproduction, redistribution, or derivative works are allowed
without explicit permission from the author.</p>
        </Flex>
    );
}

export default Footer;
