import { Button, Form, Container } from "react-bootstrap";
import React, { useState } from "react";
import { auth } from "../base";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Container className="mt-5">
        <h1>Signup</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              placeholder="Email"
              type="email"
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              placeholder="Password"
              type="password"
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            />
          </Form.Group>
        </Form>
        <Button className="mt-3 btn-success" onClick={handleSubmit}>
          Signup
        </Button>
      </Container>
    </div>
  );
};

export default Signup;
