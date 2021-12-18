import React from "react";

import Title from "./subcomponents/Title";

const About = () => {
    return (
        <div className="flex-col w-full my-32 space-y-4 text-gray-500 text-sm text-justify">
            <Title text="About Me" color="text-blue-500" />
            <p>
                Hello! I'm Kevin Liao, a software
                engineer from Brooklyn. Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit.
            </p>
            <div className="border border-blue-500 border-opacity-50 rounded-xl text-left overflow-hidden bg-white">
                <div className="flex-none border-b border-blue-500/50">
                    <div className="flex items-center h-7 space-x-2 pl-3.5">
                        <div className="w-3 h-3 bg-red-400 rounded-full hover:bg-red-500 cursor-pointer"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full hover:bg-yellow-500 cursor-pointer"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full hover:bg-green-500 cursor-pointer"></div>
                    </div>
                </div>
                <div className="p-5 font-mono">
                    <div className="">
                        <h2 className="font-semibold text-lg text-blue-500 mb-4 text-center">
                            Development Tools
                        </h2>
                    </div>
                    <div className="space-y-4">
                        <List title="Frontend Development" items={
                            ["JavaScript", "TypeScript", "React", "TailwindCSS"]
                        } />
                        <List title="Backend Development" items={
                            ["NodeJS", "Java", "Rust"]
                        } />
                        <List title="Other Tools" items={
                            ["Adobe Photoshop", "Adobe After Effects", "Figma, Framer, and other UI/UX design tools"]
                        } />
                    </div>
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
        <>
            <h3 className="font-medium text-base ml-3">{title}</h3>
            <div className="border-b pb-4">
                <ul className="ml-10 list-disc">
                    {listItems}
                </ul>
            </div>
        </>
    )
}

export default About;