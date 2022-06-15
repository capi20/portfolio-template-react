import React from "react";
import { FaBlackTie } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import PageHeaderContent from "../../components/pageHeaderContent";
import {
	VerticalTimeline,
	VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { data } from "./utils";

const Resume = () => {
	return (
		<section className="resume" id="resume">
			<PageHeaderContent
				headerText="My resume"
				icon={<FaBlackTie size={40} />}
			/>
			<div className="timeline">
				<div className="timeline__experience">
					<h3 className="timeline__experience__header--text">Experience</h3>
					<VerticalTimeline
						layout="1-column"
						lineColor="var(--selected-theme-main-color)">
						{data.experience.map((item) => (
							<VerticalTimelineElement
								key={item.title}
								className="timeline__experience__vt-component"
								contentStyle={{
									background: "none",
									color: "var(--selected-theme-main-color)",
									border: "1.5px solid var(--selected-theme-main-color)"
								}}
								date={item.date}
								iconStyle={{
									background: "#181818",
									color: "var(--selected-theme-main-color)"
								}}
								icon={<MdWork />}
								dateClassName="vertical-timeline-element-custom-date">
								<div className="vertical-timeline-element-title-wrapper">
									<h3 className="vertical-timeline-element-title">
										{item.title}
									</h3>
									<h4 className="vertical-timeline-element">{item.location}</h4>
								</div>
								<p>{item.description}</p>
							</VerticalTimelineElement>
						))}
					</VerticalTimeline>
				</div>
				<div className="timeline__education"></div>
			</div>
		</section>
	);
};

export default Resume;
