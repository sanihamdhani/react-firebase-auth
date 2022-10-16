import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../base";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLogiPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );

      navigate("/home");
      console.log(user);
    } catch (error) {
      console.log(error.message);
      alert("Email Belum Ditemukan");
    }
  };

  const loginGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential);
        navigate("/home");
      })
      .catch((error) => {
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
      });
  };

  return (
    <div>
      <Container className="mt-5">
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              placeholder="Email"
              type="email"
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              placeholder="Password"
              type="password"
              onChange={(event) => {
                setLogiPassword(event.target.value);
              }}
            />
          </Form.Group>
        </Form>
        <Button className="mt-3 btn-success" onClick={handleSubmit}>
          Login
        </Button>

        <Button className="mt-4 m-1 " onClick={loginGoogle}>
          <FaGoogle />
        </Button>
      </Container>
    </div>
  );
};

export default Login;
