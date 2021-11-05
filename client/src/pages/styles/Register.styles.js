import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f0f0;
  height: 100vh;

  @media (max-width: 768px) {
    height: 100%;
  }
`;

export const SignupContainer = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  background-color: #fff;
  /* box-shadow: 14px 13px 17px 2px rgba(0, 0, 0, 0.12); */

  box-shadow: 14px 13px 17px -5px rgba(0, 0, 0, 0.12);
  padding: 50px;
  border-radius: 15px;
  width: 60%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    margin-top: 100px;
    margin-bottom: 100px;
  }

  @media (max-width: 426px) {
    padding: 20px;
    width: 70%;
  }
`;

export const FormContainer = styled.div`
  width: 45%;

  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 426px) {
    width: 90%;
  }
`;

export const Heading = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
`;

export const ImageContainer = styled.div`
  width: 45%;

  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto 30px auto;
  }

  @media (max-width: 426px) {
    width: 90%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const NavLink = styled(Link)`
  color: #000;
  text-decoration: none;
  margin-top: 7px;
  display: block;
  font-size: 0.9rem;

  &:hover {
    color: #000;
    /* text-decoration: none; */
  }
`;
