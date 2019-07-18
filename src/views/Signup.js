import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo-hooks';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Input from '../components/Input';
import useForm from '../hooks/userForm';

const ADD_AUTHOR = gql`
	mutation CreateAuthor($data:createAuthorInput!){
		createAuthor(data:$data){
			_id,
			cNombre
		}
	}
`


function Signup({history}){
	const [sendSignup,{error}] = useMutation(ADD_AUTHOR)

	const catchSubmit = async(fields) => {
		if(fields.cContrasenia === fields.confirm_password){
			delete fields.confirm_password
			await sendSignup({variables:{data:{...fields}}})
			error ? alert("Hubo un error") : history.push('/login')
		}else{
			alert("Los Passwords no coinciden")
		}

	}
	const {inputs,handleInputChange,handleSubmit} = useForm(catchSubmit)

	return(
		<>
			<Navbar />
			<Header />
			<main className="container">
				<section className="row">
					<div className="col-lg-8 col-md-10 mx-auto">
						<form onSubmit={handleSubmit}>
							<Input name="first_name"
							label="First Name"
							placeholder="First Name"
							type="text"
							value={inputs.first_name}
							onChange={handleInputChange}
							required 
							/>
							<Input name="last_name"
							label="Last Name"
							type="text"
							placeholder="Last Name"
							value={inputs.last_name}
							onChange={handleInputChange}
							required 
							/>
							<Input name="email"
							label="Email"
							type="email"
							placeholder="Email"
							value={inputs.email}
							onChange={handleInputChange}
							required 
							/>
							<Input name="cContrasenia"
							label="Password"
							type="cContrasenia"
							placeholder="cContrasenia"
							value={inputs.cContrasenia}
							onChange={handleInputChange}
							required 
							/>
							<Input name="confirm_password"
							label="Confirm Password"
							type="cContrasenia"
							placeholder="Confirm Password"
							value={inputs.confirm_password}
							onChange={handleInputChange}
							required 
							/>

							<button type="submit" className="btn btn-primary">Send</button>

						</form>
					</div>
				</section>
			</main>
		</>
	)

}

export default Signup;