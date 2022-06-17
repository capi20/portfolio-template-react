import React from "react";
import { RiContactsFill } from "react-icons/ri";
import PageHeaderContent from "../../components/pageHeaderContent";
import "./styles.scss";

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
					<div className="contact__content__form-wrapper">
						<div className="nameWrapper">
							<input name="name" className="inputName" type="text" required />
							<label htmlFor="name" className="nameLabel">
								Name
							</label>
						</div>
						<div className="emailWrapper">
							<input name="email" className="inputEmail" type="text" required />
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
								required
							/>
							<label htmlFor="description" className="descriptionLabel">
								Description
							</label>
						</div>
					</div>
					<button className="primary-btn">Submit</button>
				</div>
			</div>
		</section>
	);
};

export default Contact;
