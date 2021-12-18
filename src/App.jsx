import React from "react";

import Nav from "./Home/Nav";
import Main from "./Home/Main";
import Footer from "./Home/Footer";

import "./App.css";

function App() {
	return (
        <div className="graphBg">
            <div className="container py-8 px-8 m-0 mx-auto">
                <Nav></Nav>
                <Main></Main>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default App;
