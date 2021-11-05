import React from "react";

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
  return (
    <Container>
      <SignupContainer>
        <ImageContainer>
          <Image src={loginIMG} alt="Login Image" />
        </ImageContainer>

        <FormContainer>
          <Heading>Login</Heading>
          <form>
            <Input
              type="email"
              id="email"
              placeholder="Your Email"
              required
              icon={<MdMail className="icon-medium" />}
            />

            <Input
              type="password"
              id="password"
              placeholder="Password"
              required
              icon={<AiFillLock className="icon-big" />}
            />

            <CustomButton title="Login" />

            <NavLink to="/register">Don't have an account? Register</NavLink>
          </form>
        </FormContainer>
      </SignupContainer>
    </Container>
  );
};

export default Login;
