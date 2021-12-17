import React from 'react';

import Title from "./subcomponents/Title";

const About = () => {
    return (
        <div className="flex-col w-full my-32">
            <Title text="About Me" rotateColor="25" />
            <div className="text-gray-500 text-sm space-y-3 text-justify">
                <p>
                    Hello! I'm Kevin Liao, a software
                    engineer from Brooklyn. Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit.
                </p>
                <div className="border border-indigo-500 border-opacity-25 rounded-xl p-5 text-left overflow-hidden shadow-xl shadow-indigo-500/50">
                    <div className="">
                        <h2 className="font-bold text-lg gradientText rotateColor mb-4 text-center">
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