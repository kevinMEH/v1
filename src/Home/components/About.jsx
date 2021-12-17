import React from "react";

import Title from "./subcomponents/Title";

const About = () => {
    return (
        <div className="flex-col w-full my-32 space-y-4 text-gray-500 text-sm text-justify">
            <Title text="About Me" rotateColor="25" />
            <p>
                Hello! I'm Kevin Liao, a software
                engineer from Brooklyn. Lorem ipsum dolor sit amet, consectetur 
                    engineer from Brooklyn. Lorem ipsum dolor sit amet, consectetur 
                engineer from Brooklyn. Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit.
            </p>
            <div className="border border-blue-500 border-opacity-50 rounded-xl text-left overflow-hidden">
                <div className="flex-none border-b border-blue-500/50">
                    <div className="flex items-center h-7 space-x-2 pl-3.5">
                        <div className="w-3 h-3 bg-red-400 rounded-full hover:bg-red-500 cursor-pointer"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full hover:bg-yellow-500 cursor-pointer"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full hover:bg-green-500 cursor-pointer"></div>
                    </div>
                </div>
                <div className="p-5 font-mono">
                    <div className="">
                        <h2 className="font-semibold text-lg text-indigo-500 mb-4 text-center">
                            Development Tools
                        </h2>
                    </div>
                    <div className="space-y-4 ml-4">
                        <h3 className="font-semibold text-base">Front End Development</h3>
                        <ul className="ml-7 list-disc">
                            <li>HTML & CSS</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>React</li>
                            <li>Tailwind CSS</li>
                        </ul>
                        <h3 className="font-semibold text-base">Backend + Other Tools</h3>
                        <ul className="ml-7 list-disc">
                            <li>NodeJS</li>
                            <li>Java</li>
                            <li>Rust</li>
                        </ul>
                        <h3 className="font-semibold text-base">Other Tools</h3>
                        <ul className="ml-7 list-disc">
                            <li>Adobe Photoshop</li>
                            <li>Adobe After Effects</li>
                            <li>Framer and Adobe XD (And other UI/UX design tools)</li>
                        </ul>
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
            <h3 className="font-medium text-base">{title}</h3>
            <div className="border-b pb-4">
                <ul className="ml-7 list-disc">
                    {listItems}
                </ul>
            </div>
        </>
    )
}

export default About;