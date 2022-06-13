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
					<h3 className="developerContent">Front end developer</h3>
					<p>
						I completed my B.Tech in Computer Science & Engineering from Jaypee
						Institute of Information Technology, Noida. I'm a passionate
						front-end developer with 2+ years of expercience in front end
						development. I am currently working as a associate technology L2 at
						Publicis Sapient. I aspire to create web applications that not only
						operates efficiently behind the scene, but also provides rich user
						experiences. I love learning new and better ways to create seamless
						user experiences with clean, efficient, and scalable code. For me
						work is an ongoing education, and work place is an institute where
						every one has something to share. Besides of the professional
						things, I like to read books and watch movies in my free time.
					</p>
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
