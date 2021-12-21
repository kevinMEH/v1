import React from 'react';

const Landing = () => {
	return (
        <div className="w-full
        md:flex md:justify-between md:space-x-12 xl:space-x-28 2xl:space-x-40">

            <div className="md:flex-1 md:my-auto">
                <h1 className="font-semibold tracking-wider text-black
                text-2xl md:text-3xl lg:text-4xl">
                    Hello! 👋
                </h1>
                <h1 className="font-extrabold tracking-wide leading-relaxed gradientText rotateColor
                text-4xl md:text-5xl lg:text-6xl
                md:leading-relaxed lg:leading-relaxed">
                    I'm Kevin,
                </h1> 
                <p className="text-gray-500
                sm:text-lg lg:text-xl">
                    a web and software developer based in Brooklyn. I
                    specialize in creating unique and memorable web experiences.
                </p>
            </div>

            <div className="md:my-auto md:flex-1">
                <img className="my-5 md:my-0 shadow-xl shadow-black/5 object-cover w-full
                rounded-xl md:rounded-2xl lg:rounded-3xl
                " src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1740&q=80" alt="Landing" /> 
                {/* TODO: Replace placeholder with actual image */}
            </div>
            
        </div>
	);
};

export default Landing;
