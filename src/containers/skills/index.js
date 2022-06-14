import React from "react";
import { GiSkills } from "react-icons/gi";
import PageHeaderContent from "../../components/pageHeaderContent";
import { skillsData } from "./utils";
import { Line } from "rc-progress";

const Skills = () => {
	return (
		<section id="skills" className="skills">
			<PageHeaderContent headerText="My skills" icon={<GiSkills size={40} />} />
			<div className="skills__content-wrapper">
				{skillsData.map((item, key) => (
					<div key={key} className="skills__content-wrapper__inner-content">
						<h3 className="skills__content-wrapper__inner-content__category">
							{item.label}
						</h3>
						<div>
							{item.data.map((dataItem, index) => (
								<div className="progressbar-wrapper" key={index}>
									<p>{dataItem.skillName}</p>
									<Line
										percent={dataItem.percentage}
										strokeColor="var(--selected-theme-main-color)"
										strokeWidth="2"
										strokeLinecap="square"
										trailWidth="2"
									/>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
