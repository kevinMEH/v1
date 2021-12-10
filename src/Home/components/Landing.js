import "./Landing.css";

const Landing = () => {
    
	return (
		<div className="col-span-6 rounded-2xl overflow-hidden relative">
			<div className="flex-col w-full py-10">
				<h1 className="text-2xl font-semibold tracking-wider text-black">
					Hello! 👋
				</h1>
                <h2 className="text-3xl font-extrabold tracking-wide leading-loose gradientText">I'm Kevin,</h2> 
				<p className="text-gray-500">
					a software engineer based in Brooklyn. I
					specialize in creating unique and memorable web experiences.
				</p>
			</div>
		</div>
	);
};

export default Landing;
