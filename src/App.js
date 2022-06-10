import "./App.css";
import { Routes, Route } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./containers/home";
import About from "./containers/about";
import Skills from "./containers/skills";
import Resume from "./containers/resume";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import Navbar from "./components/navBar";
import particlesConfig from "./components/helpers/particlesConfig";

function App() {
	const particlesInit = async (main) => {
		await loadFull(main);
	};

	return (
		<div className="App">
			<Particles
				id="particles"
				options={particlesConfig}
				init={particlesInit}
			/>
			<Navbar />
			<Routes>
				<Route path="/" index element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/resume" element={<Resume />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
