import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function EditContact(props) {
	const location = useLocation();
	const { id, name, email } = location.state.contact;
	const [contact, setContact] = useState({
		id,
		name,
		email,
	});

	const navigate = useNavigate(); // alternative of history.push

	function handleChange(event) {
		const { name, value } = event.target;
		setContact((prevContact) => {
			return {
				...prevContact,
				[name]: value,
			};
		});
		console.log(contact);
	}

	function update(event) {
		event.preventDefault();
		props.updateContactHandler(contact);
		// console.log(contact);
		setContact({
			name: "",
			email: "",
		});
		navigate("/");
	}

	return (
		<div className="ui main">
			<h1>Edit Contact</h1>
			<form className="ui form" onSubmit={update}>
				<div className="field">
					<label>Name</label>
					<input
						type="text"
						name="name"
						placeholder="Name"
						value={contact.name}
						onChange={handleChange}
					/>
				</div>
				<div className="field">
					<label>Email</label>
					<input
						type="email"
						name="email"
						placeholder="Email"
						value={contact.email}
						onChange={handleChange}
					/>
				</div>
				<button className="ui button blue">Update</button>
				<Link to="/">
					<button className="ui button blue right">
						Contact List
					</button>
				</Link>
			</form>
		</div>
	);
}
export default EditContact;
