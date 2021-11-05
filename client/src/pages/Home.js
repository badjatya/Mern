import React from "react";

// Importing styles
import {
  Container,
  LeftContainer,
  RightContainer,
  HomeContainer,
  Message,
  Heading,
} from "./styles/home.styles";

const Home = () => {
  return (
    <Container>
      <LeftContainer />
      <RightContainer />
      <HomeContainer>
        <Message>Hello</Message>
        <Heading>I am mern stack developer</Heading>
      </HomeContainer>
    </Container>
  );
};

export default Home;
