import Landing from "./components/Landing";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

const Main = () => {
    return (
        <div className={"grid grid-cols-6 gap-8"}>
            <Landing></Landing>
            <About></About>
            <Portfolio></Portfolio>
            <Contact></Contact>
        </div>
    );
}

export default Main;