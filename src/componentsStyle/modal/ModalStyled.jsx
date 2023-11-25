import styled from "styled-components";

export const ModalStyled = styled.section`
  position: absolute;
  text-align: start;
  top: 25%;
  left: 30%;
  z-index: 99;
  padding: 3em;
  width: 40%;
  height: auto;
  backdrop-filter: blur(5px);
  border: 1px solid #135846;
  border-radius: 20px;
`;

export const ModalFormStyle = styled.form`
  margin: 0 auto;
  width: 90%;
  color: #135846;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  align-items: center;

  h1 {
    width: 100%;
    font-size: 2rem;
    text-align: center;
  }

  img {
    width: 100%;
    width: 100%;
  }
  select {
    width: 70%;
  }

  label {
    width: 70%;
    font-weight: 600;
    font-size: 1.2rem;
  }
  input {
    width: 70%;
  }


  svg {
    width: auto;
    height: 30px;
    align-self: end;
    color: #e23428;
  }
  svg:hover {
    background-color: #e23428;
    color: white;
    border-radius: 100%;
  }
`;

export const ContainerModalImageStyle = styled.div`
  width: 30%;
  height: 30%;
  border: 1px solid red;
`;

export const ContainerModalFlexStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 1em;
  flex-wrap: wrap;
`;

export const ButtonModal = styled.button`
  width: 109px;
  height: 48px;
  background-color: ${(props) =>
    props.color === "edit" ? "#FF9C3A" : "#E23428"};
  color: white;
  font-size: 1.6rem;
  font-weight: 600;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;