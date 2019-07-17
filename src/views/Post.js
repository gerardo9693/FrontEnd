import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const SINGLEPOST = gql`
	query SinglePost($id:ID!){
		singlePost(id:$id){
			title,
			content,
			cover_photo
		}
	}
`;


const CREATE_POST = gql`
	mutation CreatePost($data:createPostAuthor!){
		createPost(data:$data){
			_id,
			title
		}
	}
`

function Post({ match }) {
	const { id } = match.params;
	const { data, loading, error } = useQuery(SINGLEPOST, { variables: { id } })



	return (
		<>
			{
				loading ? <h4>Cargando....</h4> :
					error ? <h4>Hubo un error</h4> :
						(
							<>
								<Navbar />
								<Header cover={data.singlePost.cover_photo} />
								<article>
									<div className="container">
										<div className="row">
											<div className="col-lg-8 col-md-10 mx-auto">
												<h2>{data.singlePost.title}</h2>

												<p>{data.singlePost.content}</p>
											</div>
										</div>
									</div>
								</article>
								<main className="container my-4">
									<section className="row">
										<div className="col-lg-8 col-md-10 mx-auto">
											<form>

												<div className="control-group">
													<div className="fom-group floating-lable-form-group controls">
														{/* <input value={data.singlePost.title}/>
									<textarea name="content" 
											  placeholder="Content"
											  value=""
											  cols="60" 
											  rows="10">{data.singlePost.title}</textarea>
								 */}
														<FormGroup>
															<Label >Restaurante</Label>
															<Input className="Opciones" type="select" style={{width: "500px"}} name="select" id="sRestaurante">
																<option>1</option>
																<option>2</option>
																<option>3</option>
																<option>4</option>
																<option>5</option>
															</Input>
														</FormGroup>
														<FormGroup>
															<Label >Cantidad</Label>
															<Input className="Opciones" style={{width: "200px"}} type="select" name="select" id="sCantidad">
																<option>1</option>
																<option>2</option>
																<option>3</option>
																<option>4</option>
																<option>5</option>
															</Input>
														</FormGroup>
														<FormGroup>
															<Label >Precio</Label>
															<Input disabled className="Opciones" style={{width: "200px"}} type="text" name="select" id="txtPrecio"/>
														</FormGroup>


													</div>
												</div>



												<button type="submit" style={{borderRadius:"5px"}} className="btn btn-primary mt-4">Guardar</button>

											</form>
										</div>
									</section>
								</main>

							</>
						)
			}
		</>
	)

}

export default Post;