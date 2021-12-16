import React from 'react';

const Landing = () => {
	return (
        <div className="flex-col w-full my-32">
            <h1 className="text-2xl font-semibold tracking-wider text-black">
                Hello! 👋
            </h1>
            <h1 className="text-4xl font-extrabold tracking-wide leading-relaxed gradientText rotateColor">I'm Kevin,</h1> 
            <p className="text-gray-500">
                a web and software developer based in Brooklyn. I
                specialize in creating unique and memorable web experiences.
            </p>
            <div className="my-5">
                <img className="rounded-xl h-48 w-full" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1740&q=80" alt="Landing" /> 
                {/* TODO: Replace placeholder with actual image */}
            </div>
        </div>
	);
};

export default Landing;
