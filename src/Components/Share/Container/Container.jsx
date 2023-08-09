import React from 'react';

// eslint-disable-next-line react/prop-types
const Container = ({children}) => {
    return (
        <div className="max-w-7xl w-full md:mx-auto px-4 md:py-16">{children}</div>
    );
};

export default Container;