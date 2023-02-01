import React, { useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { useNavigate } from "react-router-dom";
import { Form } from "../components";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import * as ROUTES from '../constants/routes'

export default function Signin() {

    const navigate = useNavigate();
    const { firebase } = useContext(FirebaseContext)

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const isInvalid = password === '' || emailAddress === '';
    const handleSignIn = (event) => {
        event.preventDefault();

        firebase.auth().signInWithEmailAndPassword(emailAddress, password).then(() => {
            navigate(ROUTES.BROWSE, { replace: true });
        }).catch((error) => {
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        })
    }
    // check form input elements are valid 
    //email and pw

    return (
        <>

            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    <p style={{ color: "white" }}>Use these credentials to sign in:</p>
                    <p style={{ color: "white" }}> Email: user@gmail.com {"\n"} Password: 123456</p>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignIn} method='POST'>
                        <Form.Input
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)} />
                        <Form.Input
                            type="password"
                            placeholder="Password"
                            autoComplete="off"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)} />
                        <Form.Submit disabled={isInvalid}>Sign In</Form.Submit>

                    </Form.Base>
                    <Form.Text>
                        New to Netflix? <Form.Link to="/signup">Sign up now</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>

    )
}