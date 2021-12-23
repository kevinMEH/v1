import React from 'react';

import Landing from "./components/Landing";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

const Main = () => {
    return (
        <div className="space-y-48 sm:space-y-44 lg:space-y-48">
            <Landing></Landing>
            <About></About>
            <Portfolio></Portfolio>
            <Contact></Contact>
        </div>
    );
}

export default Main;