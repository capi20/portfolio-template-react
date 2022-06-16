import ImageOne from "../../images/bazaarPro.PNG";
import ImageTwo from "../../images/bookPro.png";
import ImageThree from "../../images/budgetPro.png";
import ImageFour from "../../images/chatPro.PNG";
import ImageFive from "../../images/homeShowPro.PNG";

export const filterOptions = [
	{
		label: "All",
		id: 1
	},
	{
		label: "Front end",
		id: 2
	},
	{
		label: "Full stack",
		id: 3
	}
];

export const portfolioData = [
	{
		sectionId: 2,
		projectName: "Sbka Bazaar",
		projectLink: "https://sbka-bazaar.web.app/",
		image: ImageOne
	},
	{
		sectionId: 2,
		projectName: "Book store",
		projectLink: "https://e-commerce-app-f4775.web.app/",
		image: ImageTwo
	},
	{
		sectionId: 3,
		projectName: "Budget Manager",
		projectLink: "https://gulluck.herokuapp.com/",
		image: ImageThree
	},
	{
		sectionId: 2,
		projectName: "Chat App",
		projectLink: "https://chat-web-app-e97c8.web.app/",
		image: ImageFour
	},
	{
		sectionId: 2,
		projectName: "OTT platform",
		projectLink: "https://homeshow-434a4.web.app/",
		image: ImageFive
	}
];
