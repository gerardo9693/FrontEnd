//  import React from 'react';
// import gql from 'graphql-tag';
// import {useMutation} from 'react-apollo-hooks';
// import Navbar from '../components/Navbar';
// import useForm from '../hooks/userForm';
// import Header from '../components/Header';
// import Input from '../components/Input';


// const LOGIN=gql`
//     mutation LOGIN($email:String!,$password:String!){
//         login(email:$email,password:$password){
//             token
//         }
//     }
// `

// function Login({history}){
//     const [sendLogin]=useMutation(LOGIN);

//     const submitLogin=async(fields)=>{
//         const mutation=await sendLogin({variables:{...fields}})
//                                     .catch(e=>console.log(e))

//         if(mutation){
//             const {login}=mutation.data;

//             localStorage.setItem('blogToken',login.token);

//             history.push('/');
//         }
//     }

//     const {inputs,hadleInputChange,hadleSubmit}= useForm(submitLogin);

//     return (
//         <>
//         <Navbar/>
//         <Header/>
//         <main className="container">
//             <section className="row">
//                 <div className="col-lg-8 col-md-10 mx-auto">
//                     <form onSubmit={hadleSubmit}>


//                         <Input name="email"
//                         label="email"
//                         placeholder="email"
//                         value={inputs.email}
//                         type="email"
//                         onChange={hadleInputChange}
//                         required
//                         />

//                         <Input name="password"
//                         label="password"
//                         placeholder="password"
//                         value={inputs.password}
//                         type="password"
//                         onChange={hadleInputChange}
//                         required
//                         />


//                         <button type="submit" className="btn btn-primary">Send</button>
//                     </form>
//                 </div>
//             </section>
//         </main>
//         </>
//     )
// }

// export default Login;
import React,{useState} from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Input from '../components/Input';
import useForm from '../hooks/userForm';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';

const LOGIN = gql`
    mutation LOGIN($email:String!,$password:String!){
        login(email:$email,password:$password){
            token
        }
    }
`


const Login = ({isOpen,history}) => {


    const [sendLogin] = useMutation(LOGIN);

    const submitLogin = async (fields) => {
        const mutation = await sendLogin({ variables: { ...fields } })
            .catch(e => console.log(e))

        if (mutation) {
            const { login } = mutation.data;

            localStorage.setItem('blogToken', login.token);

            history.push('/');
        }
    }
    const { inputs, hadleInputChange, hadleSubmit } = useForm(submitLogin);

const [show,setShow]=useState(false);

    return (
        <div>
            {/* <link
                rel='stylesheet'
                href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'
            /> */}
            
            <Modal isOpen={isOpen} className="">
                <ModalHeader style={{background:"black"}}>Iniciar Sesión</ModalHeader>
                <ModalBody>
                    <form onSubmit={hadleSubmit}>


                        <Input name="email"
                            label="email"
                            placeholder="email"
                            value={inputs.email}
                            type="email"
                            onChange={hadleInputChange}
                            required
                        />

                        <Input name="password"
                            label="password"
                            placeholder="password"
                            value={inputs.password}
                            type="password"
                            onChange={hadleInputChange}
                            required
                        />
                        
                        <ModalFooter>
                            <Button type="submit" color='primary' onClick="">Enviar</Button>{' '}
                            <Button color='secondary' 
                            onClick={e => {
									isOpen=false;
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