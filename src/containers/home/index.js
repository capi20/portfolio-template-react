import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import "./styles.scss";

const Home = () => {
	return (
		<section className="home" id="home">
			<div className="home__text-wrapper">
				<h1>
					Hello, I'm Shyam
					<br />
					Front End Developer
				</h1>
			</div>
			<div className="contact-me">
				<div className="contact-me__buttons-wrapper">
					<button>Hire me</button>
					<a>Download resume</a>
				</div>
				<div className="contact-me__socials-wrapper">
					<FaLinkedin size={32} />
					<FaFacebook size={32} />
					<FaTwitter size={32} />
					<FaInstagram size={32} />
				</div>
			</div>
		</section>
	);
};

export default Home;
