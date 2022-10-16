import { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../base";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  onAuthStateChanged(auth, (curentUser) => {
    setUser(curentUser);
  });

  const Logout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.log(error.messagge);
    }
  };
  //

  return (
    <div>
      <Container>
        <h1>Hallo {user?.email}</h1>

        <Button className="mt-3 btn-danger" onClick={Logout}>
          Logout
        </Button>
      </Container>
    </div>
  );
};

export default Home;
