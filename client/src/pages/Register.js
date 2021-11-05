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
} from "./styles/Register.styles";

// Importing Image
import signupIMG from "../assets/images/signup.svg";

// Icons
import { FaUser, FaPhoneAlt, FaGraduationCap } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { AiFillLock, AiOutlineLock } from "react-icons/ai";

// Importing Components
import Input from "../components/Input";
import CustomButton from "../components/CustomButton";

const Register = () => {
  return (
    <Container>
      <SignupContainer>
        <FormContainer>
          <Heading>Sign up</Heading>
          <form>
            <Input
              type="text"
              id="name"
              placeholder="Your Name"
              required
              icon={<FaUser className="icon" />}
            />

            <Input
              type="email"
              id="email"
              placeholder="Your Email"
              required
              icon={<MdMail className="icon-medium" />}
            />

            <Input
              type="number"
              id="number"
              placeholder="Your Number"
              required
              icon={<FaPhoneAlt className="icon" />}
            />

            <Input
              type="text"
              id="profession"
              placeholder="Your Profession"
              required
              icon={<FaGraduationCap className="icon-big" />}
            />

            <Input
              type="password"
              id="password"
              placeholder="Password"
              required
              icon={<AiFillLock className="icon-big" />}
            />

            <Input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              required
              icon={<AiOutlineLock className="icon-big" />}
            />

            <CustomButton title="Signup" />

            <NavLink to="/login">Already have a account? Login</NavLink>
          </form>
        </FormContainer>
        <ImageContainer>
          <Image src={signupIMG} alt="Signup Image" />
        </ImageContainer>
      </SignupContainer>
    </Container>
  );
};

export default Register;
