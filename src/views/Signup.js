import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Input from '../components/Input';
function Signup(){
    return (
        <>
        <Navbar/>
        <Header/>
        <main className="container">
            <section className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <form>
                        <Input name="first_name"
                        label="First name"
                        placeholder="First name"
                        value={''}
                        onChange
                        required
                        />
                        
                        <Input name="last_name"
                        label="last name"
                        placeholder="last name"
                        value={''}
                        type="text"
                        onChange
                        required
                        />

                        <Input name="email"
                        label="email"
                        placeholder="email"
                        value={''}
                        type="email"
                        onChange
                        required
                        />

                        <Input name="password"
                        label="password"
                        placeholder="password"
                        value={''}
                        type="password"
                        onChange
                        required
                        />

                        <Input name="Confirm_Password"
                        label="Confirm Password"
                        placeholder="Confirm Password"
                        value={''}
                        type="password"
                        onChange
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