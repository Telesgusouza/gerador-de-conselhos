import styled from "styled-components";

export const Container = styled.main`
  background-color: hsl(217, 19%, 24%);
  box-shadow: 0 0 50px hsl(218, 23%, 16%);

  padding: 30px;
  min-width: 180px;
  max-width: 560px;
  text-align: center;
  border-radius: 10px;

  span {
    color: hsl(150, 100%, 66%);
    text-transform: uppercase;
    font-size: 0.9em;
  }

  h1 {
    color: white;
    font-size: 1.35em;
    margin: 20px 0;
  }

  @media (max-width: 580px) {
    span {
      font-size: 0.8em;
    }
  }
`;

export const ContainerOptionsAdvice = styled.div`
  img {
    width: 100%;
    margin-top: 20px;
  }
`;

export const ContainerImg = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 20px;

  div {
    background-color: hsl(150, 100%, 66%);
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    position: absolute;
    transition: all 0.2s ease-out;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 20px hsl(150, 100%, 66%);
    }
  }

  img {
    margin: 0;
    width: 18px;
  }
`;
