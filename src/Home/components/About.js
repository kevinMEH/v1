import Title from "./Title";

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
                <div className="border border-indigo-500 rounded-xl p-5 text-left">
                    <h2 className="font-bold text-lg gradientText rotateColor mb-4 text-center">
                        Development Tools
                    </h2>
                    <div className="space-y-4">
                        <div className="border border-indigo-200 rounded-lg py-3 px-5">
                            <h3 className="font-semibold text-base mb-2">Front End Development</h3>
                            <ul className="ml-7 list-disc">
                                <li>HTML & CSS</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>React</li>
                                <li>Tailwind CSS</li>
                            </ul>
                        </div>
                        <div className="border border-indigo-200 rounded-lg py-3 px-5">
                            <h3 className="font-semibold text-base mb-2">Backend + Other Tools</h3>
                            <ul className="ml-7 list-disc">
                                <li>NodeJS</li>
                                <li>Java</li>
                                <li>Rust</li>
                            </ul>
                        </div>
                        <div className="border border-indigo-200 rounded-lg py-3 px-5">
                            <h3 className="font-semibold text-base mb-2">Other Tools</h3>
                            <ul className="ml-7 list-disc">
                                <li>Adobe Photoshop</li>
                                <li>Adobe After Effects</li>
                                <li>Framer and Adobe XD (And other UI/UX design tools)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;