import Nav from "./Home/Nav";
import Main from "./Home/Main";
// import Footer from "./Home/Footer";

import "./App.css";

function App() {
	return (
        <div className="container mx-auto p-8">
            <Nav></Nav>
            <Main></Main>
            {/* <Footer></Footer> */}
        </div>
    );
}

export default App;
