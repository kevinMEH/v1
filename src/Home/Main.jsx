import React from 'react';

import Landing from "./components/Landing";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

const Main = () => {
    return (
        <div className="space-y-32 md:space-y-48 lg:space-y-72
        md:mx-8 lg:mx-14 xl:mx-20">
            <Landing></Landing>
            <About></About>
            <Portfolio></Portfolio>
            <Contact></Contact>
        </div>
    );
}

export default Main;