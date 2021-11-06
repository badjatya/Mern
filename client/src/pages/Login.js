import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// Importing Styles
import {
  Container,
  SignupContainer,
  FormContainer,
  Heading,
  ImageContainer,
  Image,
  NavLink,
} from "./styles/login.styles";

// Importing Image
import loginIMG from "../assets/images/login.svg";

// Icons
import { MdMail } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";

// Importing Components
import Input from "../components/Input";
import CustomButton from "../components/CustomButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (data.status === 422 || !data) {
      window.alert("Invalid user");
      console.log("Invalid user");
    } else {
      window.alert(" Login Successful");
      console.log(" Login Successful");

      history.push("/");
    }
  };

  return (
    <Container>
      <SignupContainer>
        <ImageContainer>
          <Image src={loginIMG} alt="Login Image" />
        </ImageContainer>

        <FormContainer>
          <Heading>Login</Heading>
          <form method="POST">
            <Input
              type="email"
              id="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={<MdMail className="icon-medium" />}
            />

            <Input
              type="password"
              id="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={<AiFillLock className="icon-big" />}
            />

            <CustomButton title="Login" onClick={handleSubmit} />

            <NavLink to="/register">Don't have an account? Register</NavLink>
          </form>
        </FormContainer>
      </SignupContainer>
    </Container>
  );
};

export default Login;
