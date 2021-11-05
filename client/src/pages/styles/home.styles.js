import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: relative;
`;

export const LeftContainer = styled.div`
  /* background-color: #c3c0f0; */
  background-color: #eeedf5;
  height: 100vh;
  width: 50%;
`;
export const RightContainer = styled.div`
  background-color: #fff;
  height: 100vh;
  width: 50%;
`;

export const HomeContainer = styled.div`
  /* position: absolute;
  top: 50%;
  left: 50%; */

  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

export const Message = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  color: #6c63ff;
  text-align: center;
`;

export const Heading = styled.p`
  font-size: 2rem;
  text-transform: capitalize;
  text-align: center;
`;
