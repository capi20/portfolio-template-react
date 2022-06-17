import React from "react";
import { RiContactsFill } from "react-icons/ri";
import PageHeaderContent from "../../components/pageHeaderContent";
const Contact = () => {
	return (
		<section id="contact" className="contact">
			<PageHeaderContent
				headerText="Contact me"
				icon={<RiContactsFill size={40} />}
			/>
			<div className="contact__content">
				<h3 className="section-heading">Let's Talk</h3>
				<div className="contact__content__form">
					<div className="nameWrapper">
						<input name="name" className="inputName" type="text" />
						<label htmlFor="name" className="nameLabel">
							Name
						</label>
					</div>
					<div className="emailWrapper">
						<input name="email" className="inputEmail" type="text" />
						<label htmlFor="email" className="emailLabel">
							Email
						</label>
					</div>
					<div className="descriptionWrapper">
						<textarea
							name="description"
							className="inputDescription"
							type="text"
							rows={"5"}
							style={{ resize: "none" }}
						/>
						<label htmlFor="description" className="descriptionLabel">
							Description
						</label>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
