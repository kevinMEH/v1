import React from "react";

import Nav from "./Home/Nav";
import Main from "./Home/Main";
import Footer from "./Home/Footer";

import "./App.css";

function App() {
	return (
        <div className="graphBg">
            <div className="container m-0 mx-auto
            p-8 md:py-14 md:px-16 lg:px-18
            space-y-32 lg:space-y-64">
                <Nav></Nav>
                <Main></Main>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default App;
