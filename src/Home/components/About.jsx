import React from "react";

import Title from "./subcomponents/Title";

const About = () => {
    return (
        <div className="w-full text-gray-500 text-justify
        text-sm md:text-base lg:text-lg
        md:flex md:flex-row-reverse md:space-x-reverse md:space-x-12">
            <div className="md:flex-1 space-y-4 lg:space-y-8 text-left">
                <Title text="About Me" color="text-blue-500" />
                <p className="md:pt-4">
                    Hello! I'm Kevin Liao, a software
                    engineer from Brooklyn. Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit.
                </p>
                <h2 className="text-base md:text-lg lg:text-xl">Here are some of the technologies I work with:</h2>
                <div className="space-y-3 pl-6 md:pl-0 md:space-y-0 md:flex md:justify-around">
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
        <div className="text-base
        md:flex-initial md:text-lg lg:text-xl
        lg:flex lg:justify-center">
            <div className="space-y-2">
                <h3 className="font-semibold lg:pb-1">{title}</h3>
                <ul className="ml-10 md:ml-5 list-disc space-y-1 md:space-y-0 lg:space-y-1.5">
                    {listItems}
                </ul>
            </div>
        </div>
    )
}

export default About;