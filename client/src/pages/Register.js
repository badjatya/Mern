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
  //Nav
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    profession: "",
    password: "",
    confirmPassword: "",
  });

  // Handle Change
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  // handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // const { name, email, number, profession, password, confirmPassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        phone: user.number,
        work: user.profession,
        password: user.password,
        confirmPassword: user.confirmPassword,
      }),
    });

    const data = res.json();
    console.log(data);

    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert(" Registration Successful");
      console.log(" Registration Successful");

      history.push("/login");
    }
  };

  return (
    <Container>
      <SignupContainer>
        <FormContainer>
          <Heading>Sign up</Heading>
          <form method="POST">
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              value={user.name}
              onChange={handleChange}
              icon={<FaUser className="icon" />}
            />

            <Input
              type="email"
              id="email"
              placeholder="Your Email"
              required
              name="email"
              value={user.email}
              onChange={handleChange}
              icon={<MdMail className="icon-medium" />}
            />

            <Input
              type="number"
              id="number"
              placeholder="Your Number"
              required
              name="number"
              value={user.number}
              onChange={handleChange}
              icon={<FaPhoneAlt className="icon" />}
            />

            <Input
              type="text"
              id="profession"
              placeholder="Your Profession"
              required
              name="profession"
              value={user.profession}
              onChange={handleChange}
              icon={<FaGraduationCap className="icon-big" />}
            />

            <Input
              type="password"
              id="password"
              placeholder="Password"
              required
              name="password"
              value={user.password}
              onChange={handleChange}
              icon={<AiFillLock className="icon-big" />}
            />

            <Input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              required
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
              icon={<AiOutlineLock className="icon-big" />}
            />

            <CustomButton title="Signup" onClick={handleSubmit} />

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
