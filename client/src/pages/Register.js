import React from "react";

// Importing Styles
import {
  Container,
  SignupContainer,
  FormContainer,
  Heading,
  ImageContainer,
  Image,
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
              icon={<FaUser className="icon" />}
            />

            <Input
              type="email"
              id="email"
              placeholder="Your Email"
              icon={<MdMail className="icon-medium" />}
            />

            <Input
              type="number"
              id="number"
              placeholder="Your Number"
              icon={<FaPhoneAlt className="icon" />}
            />

            <Input
              type="text"
              id="profession"
              placeholder="Your Profession"
              icon={<FaGraduationCap className="icon-big" />}
            />

            <Input
              type="password"
              id="password"
              placeholder="Password"
              icon={<AiFillLock className="icon-big" />}
            />

            <Input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              icon={<AiOutlineLock className="icon-big" />}
            />

            <CustomButton title="Signup" />
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
