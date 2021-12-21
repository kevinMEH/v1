import React from 'react';

const Title = ({text, color}) => {
    return (
        <h1 className={"font-bold tracking-wide text-center " + color +
        " text-2xl sm:text-3xl lg:text-4xl"}>
            {text}
        </h1>
    );
}

export default Title;