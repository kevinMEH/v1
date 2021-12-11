const Landing = () => {
    
	return (
        <div className="flex-col w-full my-32">
            <h1 className="text-2xl font-semibold tracking-wider text-black">
                Hello! 👋
            </h1>
            <h2 className="text-3xl font-extrabold tracking-wide leading-loose gradientText rotateColor">I'm Kevin,</h2> 
            <p className="text-gray-500">
                a web and software developer based in Brooklyn. I
                specialize in creating unique and memorable web experiences.
            </p>
            <a href="https://github.com/kevinMEH" className="inline-block bg-transparent py-3 px-6 my-5 font-semibold text-indigo-500 border border-indigo-500 rounded-md">
                Link to Github!
            </a>
        </div>
	);
};

export default Landing;
