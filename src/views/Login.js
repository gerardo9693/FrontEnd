
import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Input from '../components/Input';
import useForm from '../hooks/userForm';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import { Redirect } from 'react-router-dom';

const LOGIN = gql`
     mutation LOGIN($cCorreo:String!,$cContrasenia:String!){
        Login(cCorreo:$cCorreo,cContrasenia:$cContrasenia){
            token
        }
    }
`


const Login = ({ isOpen,setShow }) => {
    const [isLogged,setLogget]=useState(false);
    const  [sendLogin] = useMutation(LOGIN);
	const submitLogin = async(fields) =>{
		const mutation = await sendLogin({variables:{...fields}})
                                .catch( e => console.log(e))
                                
         console.log(fields);                       
		if(mutation){
			const login = mutation.data;
            localStorage.setItem('blogToken',login.Login.token);
            console.log("Se ha autentificado");
            setLogget(true);
            
		}
		
    } 
    
	const {inputs,handleInputChange,handleSubmit} =  useForm(submitLogin);

    //  isOpen = show!=null ? true : false;


    return isLogged ? <Redirect to="/"/> : (

        <div>
            {/* <link
                rel='stylesheet'
                href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'
            /> */}

            <Modal isOpen={isOpen} className="">
                <ModalHeader style={{ background: "#1f1510" }}>Iniciar Sesión</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit}>


                        <Input name="cCorreo"
                            label="Correo"
                            placeholder="Correo"
                            value={inputs.cCorreo}
                            type="email"
                            onChange={handleInputChange}
                            required
                        />

                        <Input name="cContrasenia"
                            label="Contraseña"
                            placeholder="Contraseña"
                            value={inputs.cContrasenia}
                            type="password"
                            onChange={handleInputChange}
                            required
                        />

                        <ModalFooter>
                            <button type="submit" color='primary' >Enviar</button>
                            <Button type="button" color='secondary'
                                onClick={e => {
                                    setShow(false);
                                }}
                            >Cancelar</Button>
                        </ModalFooter>
                    </form>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default Login;