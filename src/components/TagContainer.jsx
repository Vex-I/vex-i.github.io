import React from 'react';
import { Tag, Flex } from 'antd';


const TagContainer = ({tagList}) => {
    const styles = {
        root: {
            background: 'none',
            color: 'var(--color-text)'
        }
    };

    return(
        <Flex gap='small' align='left' wrap>
            {tagList.map((tag) => (
                <Tag color={tag.color} variant='outlined' styles= { styles }>
                    {tag.name}
                </Tag>
            ))}
        </Flex>
    );
};

export default TagContainer;
