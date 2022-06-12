import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
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
import Theme from "./components/theme";

function App() {
	const location = useLocation();

	const shouldRenderParticleJS = location.pathname === "/";

	const particlesInit = async (main) => {
		await loadFull(main);
	};

	return (
		<div className="app">
			{shouldRenderParticleJS && (
				<Particles
					id="particles"
					options={particlesConfig}
					init={particlesInit}
				/>
			)}
			<div className="app__navbar-wrapper">
				<Navbar />
			</div>
			<div className="app__main-content-wrapper">
				<Theme />
				<Routes>
					<Route path="/" index element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/resume" element={<Resume />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
