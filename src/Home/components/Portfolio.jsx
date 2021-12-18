import React from "react";

import Title from "./subcomponents/Title";

const Portfolio = () => {
    return (
        <div className="flex-col w-full my-32 space-y-4">
            <Title text="Selected Works" color="text-teal-500" />
            <Card title="Portfolio" desc="Check out the source code for this portfolio!"
            // TODO: replace placeholder
                image="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1740&q=80"
                url="https://github.com/kevinMEH/portfolio"
                tags={["JavaScript", "React", "Tailwind"]}
            />
        </div>
    );
}

const Card = ({title, desc, image, url, tags}) => {
    let tagSpans = [];
    for(let tag of tags) {
        tagSpans.push(
            <span
                className="rounded-lg py-1 px-2.5 m-0.5 bg-gray-50 text-xs"
            >
                {tag}
            </span>
        );
    }
    
    return (
        <div className="rounded-xl overflow-hidden text-gray-500 bg-white shadow-xl shadow-black/5">
            <a href={url} >
                <img className="h-48 w-full"
                    src={image} />
            </a>
            <div className="p-5 space-y-2 rounded-b-xl">
                <a href={url}>
                    <h3 className="font-semibold font-mono text-lg text-teal-500">{title}</h3>
                </a>
                <p>{desc}</p>
                <div className="pt-2 flex flex-wrap space-x-2"> {tagSpans} </div>
            </div>
        </div>
    );
};

export default Portfolio;