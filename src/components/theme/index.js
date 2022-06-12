import React, { useState } from "react";
import { ImCog } from "react-icons/im";
import "./styles.scss";

const colorsArray = [
	{
		id: "yellow",
		bgcolor: "#ffdd40"
	},
	{
		id: "red",
		bgcolor: "#e82a2a"
	},
	{
		id: "green",
		bgcolor: "#6ac045"
	},
	{
		id: "blue",
		bgcolor: "#5078ff"
	}
];

const Theme = () => {
	const [theme, setTheme] = useState("yellow");
	const [toggle, setToggle] = useState(false);

	const handleToggleTheme = (currentId) => {
		setTheme(currentId);
		setToggle(false);
	};

	return (
		<div className={`theme-wrapper ${toggle ? "active" : ""}`}>
			<div className="theme-wrapper__toggle-icon">
				<ImCog onClick={() => setToggle(!toggle)} size={40} />
			</div>
			<div className="theme-wrapper__menu">
				<h4>Theme color</h4>
				<ul>
					{colorsArray.map((item, key) => (
						<li
							onClick={() => handleToggleTheme(item.id)}
							key={key}
							style={{ background: item.bgcolor }}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Theme;
