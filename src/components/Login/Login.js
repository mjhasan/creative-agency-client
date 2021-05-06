import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from '../../firebaseConfig';
import { UserContext } from '../../App';
import { Col, Container, Row } from 'react-bootstrap';
import './Login.css';
import googleIcon from '../../img/icons/google.svg'
import logo from '../../img/logos/logo.png'
import { Link } from 'react-router-dom';
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [user, updateUser] = useContext(UserContext)
    var provider = new firebase.auth.GoogleAuthProvider();
    const loginWithGoogle = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                updateUser(result.user)
                history.replace(from);
            }).catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    return (
        <Container>
            <Row>
                <Col className="text-center pt-5" md={{ span: 6, offset: 3 }}>
                    <Link to="/">
                        <img src={logo} alt="logo" width="130px" />
                    </Link>
                    <div className="App login-main">
                        <h5 className="pb-3">Login With</h5>
                        <div onClick={loginWithGoogle} className="login d-flex">
                            <img src={googleIcon} alt="" /> <p>Login with Google</p>
                        </div>
                        <div className="login-text d-flex justify-content-center pt-2">
                            <p className="mr-1">Don't have an account? </p> <a href="#">Create an account</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;