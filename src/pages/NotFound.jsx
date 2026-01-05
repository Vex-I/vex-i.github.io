import { Flex } from 'antd'

const NotFound = () => {
    return(
    <Flex style={{minHeight:'100vh'}} align='center' justify='center'>
    <div style ={{alignItems:'center', display:'flex', flexDirection:'column'}}>
        <h3 className="text-heading fade-in" style={{textAlign: "center", fontSize:'44'}}>
            404
        </h3>
        <h4 className="text-subheading white fade-in" style={{textAlign: "center", color:'var(--color-primary)'}}>
            The page you're looking for does not exist.
        </h4>
    </div>
    </Flex>
    );
}

export default NotFound;


