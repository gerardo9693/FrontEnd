import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo-hooks';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Input from '../components/Input';
import useForm from '../hooks/userForm';
import Registro from '../images/Registro.jpg';
import Footer from '../components/Footer';

const ADD_AUTHOR = gql`
	mutation crearCliente($data:RegistroUsuario!){
  	Registro(data:$data){
    _id,
    cNombre
  }
}
`


function Signup({ history }) {
	const [sendSignup, { error }] = useMutation(ADD_AUTHOR)

	const catchSubmit = async (fields) => {
		console.log(fields);
		if (fields.cContrasenia === fields.confirm_password) {
			delete fields.confirm_password
			await sendSignup({ variables: { data: { ...fields } } })
			error ? alert("Hubo un error") : history.push('/')
		} else {
			alert("Los Passwords no coinciden")
		}

	}

	const { inputs, handleInputChange, handleSubmit } = useForm(catchSubmit)

	return (
		<>
			<Navbar />
        <Header Nombre="Registrase" imagen={Registro}/>
			
			<main className="container">
				<section className="row">
					<div className="col-lg-8 col-md-10 mx-auto">
						<form onSubmit={handleSubmit}>
							<Input name="cNombre"
								label="Nombre"
								placeholder="Nombre.."
								type="text"
								value={inputs.cNombre}
								onChange={handleInputChange}
								required
							/>

							<Input name="cApellidoP"
								label="Apellido Paterno"
								type="text"
								placeholder="Apellido Paterno..."
								value={inputs.cApellidoP}
								onChange={handleInputChange}
								required
							/>

							<Input name="cApellidoM"
								label="Apellido Materno"
								type="text"
								placeholder="Apellido Materno..."
								value={inputs.cApellidoM}
								onChange={handleInputChange}
								required
							/>
							
							<Input name="cGenero"
								label="Genero"
								type="select"
								placeholder="Genero..."
								value={inputs.cGenero}
								onChange={handleInputChange}
								required
							/>

							<Input name="cTelefono"
								label="Telefono"
								type="tel"
								placeholder="Telefono..."
								value={inputs.cTelefono}
								onChange={handleInputChange}
								required
							/>

							<Input name="cCorreo"
								label="Correo"
								type="email"
								placeholder="Correo..."
								value={inputs.cCorreo}
								onChange={handleInputChange}
								required
							/>

							<Input name="cContrasenia"
								label="Contraseña"
								type="Password"
								placeholder="Contraseña"
								value={inputs.cContrasenia}
								onChange={handleInputChange}
								required
							/>

							<Input name="confirm_password"
								label="Confirmar contraseña"
								type="Password"
								placeholder="Confirmar contraseña"
								value={inputs.confirm_password}
								onChange={handleInputChange}
								required
							/>

							<button type="submit" className="btn btn-primary EnviarComida">Registrar</button>

						</form>
					</div>
				</section>
			</main>
			<Footer/>
		</>
	)
}

export default Signup;