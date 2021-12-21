import React from "react";

import Title from "./subcomponents/Title";

const About = () => {
    return (
        <div className="w-full space-y-4 text-gray-500 text-justify
        text-sm md:text-base
        md:flex md:flex-row-reverse md:space-x-reverse md:space-x-12">
            <div className="md:flex-1 space-y-4 text-left">
                <Title text="About Me" color="text-blue-500" />
                <p>
                    Hello! I'm Kevin Liao, a software
                    engineer from Brooklyn. Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit.
                </p>
                <h2 className="text-base md:text-lg">Here are some of the technologies I work with:</h2>
                <div className="md:flex md:justify-between md:mx-12">
                    <List title="Frontend:" items={["JavaScript", "TypeScript", "React", "Tailwind"]} />
                    <List title="Backend:" items={["NodeJS", "Java", "Rust"]} />
                    <List title="Design:" items={["Photoshop", "After Effects", "Framer", "UI/UX tools"]} />
                </div>
            </div>
        </div>
    );
}

const List = ( { title, items } ) => {
    let listItems = [];
    for(let item of items) {
        listItems.push(<li>{item}</li>);
    }
    
    return (
        <div className="text-base space-y-2 md:flex-1 md:text-lg">
            <h3 className="font-semibold">{title}</h3>
            <ul className="ml-10 md:ml-5 list-disc font-medium">
                {listItems}
            </ul>
        </div>
    )
}

export default About;