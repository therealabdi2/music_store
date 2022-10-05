import Home from "./pages/Home";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

const About = () => {
    return (
        <div style={{ color: "white" }}>
            <h4>Version 1.0.0</h4>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
};

export default About;
