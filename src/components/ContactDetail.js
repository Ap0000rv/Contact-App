import React from "react";
import { Link,useLocation } from "react-router-dom";
import apoorv from "../images/apoorv.png";

const ContactDetail = () => {
    const location = useLocation()
    var contact = location.state.contact;
    console.log(location);

	return (
		<div className="main">
			<div className="ui card centered">
				<div className="image">
					<img src={apoorv} alt="user" />
				</div>
				<div className="content">
					<div className="header">{contact.name}</div>
					<div className="description">{contact.email}</div>
				</div>
			</div>
			<div className="center-div">
				<Link to="/">
					<button className="ui button blue center">
						Back to Contact List
					</button>
				</Link>
			</div>
		</div>
	);
};

export default ContactDetail;
