const About = () => {
    return (
        <div className="flex-col w-full my-32">
            <h1 className="text-2xl font-bold tracking-wide leading-loose gradientText rotateColor25">About Me</h1>
            <div className="text-gray-500 text-sm space-y-3">
                <p> 
                    Hello! I'm Kevin Liao, a computer science student and software
                    engineer from Brooklyn. Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit.
                </p>
                <p>
                    Pellentesque id nisi sit amet sapien convallis fermentum eu gravida 
                    sapien. Pellentesque magna lorem, consequat vitae nibh ac, lacinia 
                    venenatis dui.
                </p>
                <p>
                    Donec luctus, nunc et ornare egestas, dui purus semper lacus, a 
                    feugiat purus arcu ut turpis. Sed eleifend scelerisque justo, a 
                    scelerisque urna pharetra id.
                </p>
            </div>
        </div>
    );
}

export default About;