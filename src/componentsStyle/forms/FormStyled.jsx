import styled from "styled-components";

export const FormStyled = styled.form`
  margin-top: 2em;
  width: 40%;
  height: auto;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 4px 30px #00000014;
  display: flex;
  flex-direction: column;
  padding: 3em;
`;

export const ContainerFormImage = styled.div`
  margin: 0 auto;
  width: 60%;
  height: 10em;
  margin-bottom: 5em;
  box-shadow: 0px 4px 30px #00000014;
  text-align: center;

  img {
    width: 100%;
    height: 100%;
    margin-bottom: 4em;
  }
  h1 {
    margin-top: 2em;
    color: #135846;
    font-size: 1.6rem;
  }
`;

export const LabelFormStyled = styled.label`
  color: #135846;
  font-size: 1.6rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
`;

export const SelectFormStyled = styled.select`
  color: #135846;
  font-size: 1.2rem;
  font-weight: 600;
  width: 50%;
  margin-bottom: 2em;
  option {
    border-radius: 0;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

export const InputFormStyled = styled.input`
  color: #135846;
  font-size: 1.2rem;
  font-weight: 600;
  width: 50%;
  margin-bottom: 2em;
`;

export const TextAreaFormStyled = styled.textarea`
  color: #135846;
  font-size: 1.2rem;
  font-weight: 600;
  width: 100%;
  height: auto;
  margin-bottom: 2em;
  padding: 1em;
`;

export const ButtonFormStyled = styled.button`
  margin: 0 auto;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  width: 44%;
  margin-bottom: 2em;
  background-color: #135846;
  border-radius: 12px;
  padding: 1em 2em;
`;
