import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import NavbarComponent from "./components/Navbar";
import Protected from "./components/Private";
import { ProtectedRoot } from "./components/Private";
import Signup from "./components/Signup";
import { UserAuthContextProvider } from "./components/userAuth";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavbarComponent />
        <UserAuthContextProvider>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoot>
                  <Login />
                </ProtectedRoot>
              }
            ></Route>
            <Route
              path="signup"
              element={
                <ProtectedRoot>
                  <Signup />
                </ProtectedRoot>
              }
            ></Route>
            <Route
              path="home"
              element={
                <Protected>
                  <Home />
                </Protected>
              }
            />
          </Routes>
        </UserAuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
