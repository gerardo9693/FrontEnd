import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo-hooks';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Input from '../components/Input';
import useForm from '../hooks/userForm';
import isAuthenticated from '../utils/IsAuthenticated';

const AGREGAR_COMIDA = gql`
	mutation comida($data:crearComidaInput!){
        CrearComida(data:$data){
			_id,
			cNombre,
            cDescripcion,
            cPrecio
		}
	}
`

function RegistrarComida ({history}){
    const [cUrlImagen,setcUrlImagen] = useState('');
    const [Imagen,setImagen] =  useState('');
    
    const [ registrarComida, {data,error}]  = useMutation(AGREGAR_COMIDA);

    const handleImagen = event =>{
		const reader = new FileReader();
		const file =  event.target.files[0]

		reader.onloadend = () => {
			setcUrlImagen(file)
			setImagen(reader.result)
		}

		reader.readAsDataURL(file);
    }
    
    const catchComida = async(fields) => {
        console.log(fields);
		await registrarComida({variables:{data:{...fields,cUrlImagen}}})
		if(data) history.push(`/post/${data.CrearComida._id}`)
		if(error) console.log(error);
    }
    
    const {inputs,handleInputChange,handleSubmit}  = useForm(catchComida)

    return(
        <>
            <Navbar/>
			<Header/>
            <main className="container">
				<section className="row">
					<div className="col-lg-8 col-md-10 mx-auto">
						<form onSubmit={handleSubmit}>
							<Input name="cNombre"
							label="Nombre"
							placeholder="Nombre"
							type="text"
							value={inputs.cNombre}
							onChange={handleInputChange}
							required 
							/>
                            <textarea name="cDescripcion" 
							onChange={handleInputChange}
							placeholder="Descripción"
                            value={inputs.cDescripcion}
							cols="60" 
							rows="10"
                            required
                            />
							<Input name="cPrecio"
							label="Precio"
							type="Number"
							placeholder="Precio"
							value={inputs.cPrecio}
							onChange={handleInputChange}
							required 
							/>
							<Input 
								name="cUrlImagen" 
								label="Imagen"
								type="file"
								placeholder="Imagen"
								onChange={handleImagen}
								required
							/>

							<img src={Imagen} alt="preview" className="d-block w-50" />

							<button type="submit" className="btn btn-primary">Guardar</button>

						</form>
					</div>
				</section>
			</main>
        </>
    )
}

export default isAuthenticated(RegistrarComida);