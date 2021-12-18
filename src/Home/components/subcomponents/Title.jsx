import React from 'react';

const Title = ({text, color}) => {
    return (
        <h1 className={"text-2xl font-bold tracking-wide text-center " + color}>
            {text}
        </h1>
    );
}

export default Title;