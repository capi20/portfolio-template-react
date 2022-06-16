import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { AiFillProject } from "react-icons/ai";
import { filterOptions, portfolioData } from "./utils";
import "./styles.scss";
const Portfolio = () => {
	const [filterValue, setFilterValue] = useState(1);

	const handleFilter = (id) => {
		setFilterValue(id);
	};

	const filteredPortfolioData =
		filterValue === 1
			? portfolioData
			: portfolioData.filter((item) => item.sectionId === filterValue);

	return (
		<section id="portfolio" className="portfolio">
			<PageHeaderContent
				headerText="Portfolio"
				icon={<AiFillProject size={40} />}
			/>
			<div className="portfolio__content">
				<ul className="portfolio__content__filter">
					{filterOptions.map((option, key) => (
						<li key={key} onClick={() => handleFilter(option.id)}>
							{option.label}
						</li>
					))}
				</ul>
				<div className="portfolio__content__cards">
					{filteredPortfolioData.map((item, key) => (
						<div key={key} className="portfolio__content__cards__item">
							<div className="portfolio__content__cards__item__img-wrapper">
								<a>
									<img src={item.image} alt="project image" />
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
