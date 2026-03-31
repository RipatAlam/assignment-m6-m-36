import React from 'react';

const Link = ({item}) => {

    return (
        <div>
            <a href={item.path}>{item.name}</a>
        </div>
    );
};

export default Link;