import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Input from '../components/Input';
import useForm from '../hooks/userForm';
import { useMutation } from 'react-apollo-hooks';
import Footer from '../components/Footer';
import Pedido from '../images/Pedido.jpg';
import payload from '../utils/payload';

const SINGLECOMIDA = gql`
	query SingleComida($id:ID!){
		singleComida(id:$id){
			cNombre,
			cDescripcion,
			cPrecio,
			cUrlImagen
		}
	}
`;

const SINGLEDIRECCION = gql`
	query SingleDireccion($id:ID!){
  singleDireccion(id:$id){
    _id,
    cCalle,
    Cliente{
      _id,
    }
  }
}
`;

const LOGIN = gql`
     mutation LOGIN($cCorreo:String!,$cContrasenia:String!){
        Login(cCorreo:$cCorreo,cContrasenia:$cContrasenia){
            token
        }
    }
`
const CREAR_PEDIDO = gql`
    mutation CrearPedido ($data:CrearPedido!){
  crearpedido(data:$data){
    _id,
    cliente{
      _id,
      cNombre
    },
    direccionEntrega,
    total
  }
}

`
const identificador=payload().user._id;
var DatoDireccion="";
 function Post({ match }) {
	const { id } = match.params;

	const { data, loading, error } = useQuery(SINGLECOMIDA, { variables: { id } })
console.log(payload().user._id);

	// const { dataDir} = useQuery(SINGLEDIRECCION, { variables: payload().user._id })
	const [PedidoCrear] = useMutation(CREAR_PEDIDO);

	const direction = useQuery(SINGLEDIRECCION,{variables:{identificador}});

	console.log(direction.loading);

	var datos="";

	if(direction.loading) {
		datos=direction.data;
		console.log(datos);
	};

	const catchSubmit = async (fields) => {
		console.log(fields);
		
		const mutation = await PedidoCrear({ variables: { ...DatoDireccion.singleDireccion._id } })
			.catch(e => console.log(e))
	}


	const { inputs, handleInputChange, handleSubmit } = useForm(catchSubmit)

	var SubTotal = 0;
	var cantidad = inputs.cCantidad != "undefined" ? inputs.cCantidad : "0";

	if (data != "undefined") {
		try {
			SubTotal += parseFloat(data.singleComida.cPrecio) * parseFloat(cantidad);

		} catch (error) {

		}

	};

	if (!SubTotal) SubTotal = "0";

	
	return (
		<>
			{

				loading ? <h4>Cargando....</h4> :
					error ? <h4>Hubo un error</h4> :
						(
							<>
								<Navbar />
								<Header Nombre={data.singleComida.cNombre} imagen={Pedido}/>
							
								<article>
									<div className="container">
										<div className="row">
											<div className="col-lg-8 col-md-10 mx-auto">
												<h2>{}</h2>

												<p>{data.singleComida.cDescripcion}</p>
											</div>
										</div>
									</div>
								</article>
								<main className="container my-4">
									<section className="row">
										<div className="col-lg-8 col-md-10 mx-auto">
											<form onSubmit={handleSubmit}>

												<div className="control-group">
													<div className="fom-group floating-lable-form-group controls">
														{/* <input value={data.singleComida.cNombre}/>
									<textarea name="cDescripcion" 
											  placeholder="Content"
											  value=""
											  cols="60" 
											  rows="10">{data.singleComida.cNombre}</textarea>
								 */}
														<Input name="cPrecio"
															label="Precio"
															placeholder="Precio.."
															type="text"
															value={data.singleComida.cPrecio}
															onChange={handleInputChange}
															required
														/>
														<Input name="cCantidad"
															label="Cantidad"
															placeholder="Cantidad.."
															type="Number"
															value={inputs.cCantidad}
															onChange={handleInputChange}
															required
														/>
														<Input name="cTotal"
															label="Total"
															placeholder="Total.."
															type="text disabled"
															value={inputs.SubTotal = `${SubTotal.toString()}`}
															onChange={handleInputChange}
															required
														/>

													</div>
												</div>



												<button type="submit" style={{ borderRadius: "5px" }} className="btn btn-primary mt-4">Guardar</button>

											</form>
										</div>
									</section>
								</main>

							</>
						)
			}
			<Footer/>

		</>
	)

}

export default Post;