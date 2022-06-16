import React, { useEffect, useState } from "react";
import { ImCog } from "react-icons/im";
import "./styles.scss";
import setTheme from "../../helpers/theme";

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
	const [theme, setCurrentTheme] = useState("yellow");
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		setTheme(theme);
	}, [theme]);

	const handleToggleTheme = (currentId) => {
		setCurrentTheme(currentId);
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
