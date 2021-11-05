import React from "react";
import styled from "styled-components";

const Input = (props) => {
  return (
    <InputContainer>
      <Label htmlFor={props.id}>{props.icon}</Label>
      <TextInput
        type={props.type}
        id={props.id}
        {...props}
        placeholder={props.placeholder}
      />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #000;
  margin-bottom: 22px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
  width: 7%;
`;

const TextInput = styled.input`
  border: none;
  outline: none;
  display: block;
  width: 90%;
  font-size: 0.9rem;
`;

export default Input;
