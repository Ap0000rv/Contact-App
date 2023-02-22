import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddContact(props) {
	const [contact, setContact] = useState({
		name: "",
		email: "",
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

	function add(event) {
		event.preventDefault();
		props.addContactHandler(contact);
		// console.log(contact);
		setContact({
			name: "",
			email: "",
		});
		navigate("/");
	}

	return (
		<div className="ui main">
			<h1>Add Contact</h1>
			<form className="ui form" onSubmit={add}>
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
                <button className="ui button blue">Add</button>
                <Link to="/">
            <button className="ui button blue right">Contact List</button>
            </Link>
			</form>
		</div>
	);
}
export default AddContact;




// class based component of above code

// import React from "react";

// class AddContact extends React.Component {
//   state = {
//     name: "",
//     email: "",
//   };

//   add = (e) => {
//     e.preventDefault();
//     if (this.state.name === "" || this.state.email === "") {
//       alert("All the fields are mandatory!");
//       return;
//     }
//     this.props.addContactHandler(this.state);
//     this.setState({ name: "", email: "" });
//   };
//   render() {
//     return (
//       <div className="ui main">
//         <h2>Add Contact</h2>
//         <form className="ui form" onSubmit={this.add}>
//           <div className="field">
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={this.state.name}
//               onChange={(e) => this.setState({ name: e.target.value })}
//             />
//           </div>
//           <div className="field">
//             <label>Email</label>
//             <input
//               type="text"
//               name="email"
//               placeholder="Email"
//               value={this.state.email}
//               onChange={(e) => this.setState({ email: e.target.value })}
//             />
//           </div>
//           <button className="ui button blue">Add</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default AddContact;
