import React from "react";
import styled from "styled-components";

const ContactCard = (props) => {
  return (
    <Card>
      <Icon>{props.icon}</Icon>
      <Details>
        <Heading>{props.title}</Heading>
        <P>{props.value}</P>
      </Details>
    </Card>
  );
};

const Card = styled.div`
  background-color: #fff;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
`;

const Icon = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6c63ff;
`;

const Details = styled.div`
  width: 85%;
`;

const Heading = styled.p`
  font-size: 1rem;
  font-weight: bold;
  text-transform: capitalize;
  margin-bottom: 0;
`;

const P = styled.p`
  font-size: 0.8rem;
  margin-bottom: 0;
`;

export default ContactCard;
