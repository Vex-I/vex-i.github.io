import React from 'react';
import { Tag, Flex } from 'antd';


const TagContainer = ({ tagList }) => {
    const styles = {
        root: {
            background: 'none',
            color: 'var(--color-text)'
        }
    };

    return(
        <div style={{display:'flex', gap:'8px', justifyContent:'left', alignItems:'flex-end'}}>
            {tagList ? tagList.map((tag) => (
                <Tag color={tag.color} variant='outlined' styles= { styles }>
                    {tag.name}
                </Tag>
            )) : <></>}
        </div>
    );
};

export default TagContainer;
