import React from "react";
import styled from "styled-components";

const CustomButton = (props) => {
  return <Button onClick={props.onClick}>{props.title}</Button>;
};

const Button = styled.button`
  background-color: #6c63ff;
  width: 100%;
  cursor: pointer;
  border: none;
  display: inline-block;
  padding: 10px 15px;
  border-radius: 5px;
  color: #fff;

  &:hover {
    background-color: #8781e3;
  }
`;

export default CustomButton;
