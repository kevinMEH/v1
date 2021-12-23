import React from "react";

import Nav from "./Home/Nav";
import Main from "./Home/Main";
import Footer from "./Home/Footer";

import "./App.css";

function App() {
	return (
        <div className="graphBg">
            <div className="container m-0 mx-auto
            p-8 md:py-14 lg:pt-10 md:px-20 lg:px-24
            space-y-36 md:space-y-28 lg:space-y-20">
                <Nav></Nav>
                <Main></Main>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default App;
