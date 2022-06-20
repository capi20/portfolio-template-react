import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
import { personaldata } from "./utils";
import "./styles.scss";

const About = () => {
	return (
		<section className="about" id="about">
			<PageHeaderContent
				headerText="About me"
				icon={<BsInfoCircleFill size={40} />}
			/>
			<div className="about__content">
				<div className="about__content__personalWrapper">
					<div className="about__content__personalWrapper--intro">
						<h3 className="developerContent">Front end developer</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
					<div className="about__content__personalWrapper--details">
						<h3 className="personalContent">Personal Information</h3>
						<ul>
							{personaldata.map((item, key) => (
								<li key={key}>
									<span className="title">{item.label}</span>
									<span className="value">{item.value}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="about__content__servicesWrapper">
					<div className="about__content__servicesWrapper__innerContent">
						<div>
							<DiApple size={60} color="var(--selected-theme-main-color)" />
						</div>
						<div>
							<FaDatabase size={60} color="var(--selected-theme-main-color)" />
						</div>
						<div>
							<DiAndroid size={60} color="var(--selected-theme-main-color)" />
						</div>
						<div>
							<FaDev size={60} color="var(--selected-theme-main-color)" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
