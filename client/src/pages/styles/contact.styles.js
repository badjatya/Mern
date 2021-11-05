import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 80px auto 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin: 80px auto 0 auto;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 426px) {
    flex-direction: column;
  }
`;

export const FormContainer = styled.div`
  width: 80%;
  margin: 10px auto 0 auto;
  padding: 50px;

  @media (max-width: 1024px) {
    width: 100%;
    margin: 10px auto 0 auto;
    padding: 30px;
  }
`;

export const Form = styled.form`
  background-color: #fff;
  border-radius: 10px;
  padding: 50px 80px;

  @media (max-width: 768px) {
    padding: 50px 40px;
  }
`;

export const Heading = styled.h3`
  margin-bottom: 20px;
`;

export const InputContainers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 426px) {
    flex-direction: column;
  }
`;
export const InputContainer = styled.div`
  width: 180px;

  @media (max-width: 426px) {
    margin-bottom: 20px;
    width: 100%;
  }
`;
export const Input = styled.input`
  border: 1px solid grey;
  outline: none;
  display: block;
  padding: 10px 20px;
  border-radius: 3px;
  width: 100%;
  font-size: 0.9rem;
`;

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 100px;
  margin-top: 30px;
  padding: 10px 20px;
  border: 1px solid grey;
  outline: none;
  margin-bottom: 30px;
  border-radius: 5px;

  @media (max-width: 426px) {
    margin-bottom: 20px;
    margin-top: 0;
  }
`;
