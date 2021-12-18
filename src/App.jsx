import React from "react";

import Nav from "./Home/Nav";
import Main from "./Home/Main";
import Footer from "./Home/Footer";

import "./App.css";

function App() {
	return (
        <div className="container mx-auto py-8 px-9 graphBg">
            <Nav></Nav>
            <Main></Main>
            <Footer></Footer>
        </div>
    );
}

export default App;
