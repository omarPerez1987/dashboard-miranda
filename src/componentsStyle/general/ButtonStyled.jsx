import styled, { css } from "styled-components";

export const CreateButton = styled.button`
  padding: 0.5em 2em;
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
  background-color: #135846;
  border-radius: 1.2rem;
  border: none;
  cursor: pointer;
`;

export const NewestButton = styled.button`
  font-size: 1.2rem;
  border: 1px solid #135846;
  border-radius: 1.2rem;
  width: 8em;
  height: 2.5em;
  display: flex;
  align-items: center;
  gap: 0.8em;
  justify-content: center;
  color: #135846;
  background-color: transparent;
`;

export const ButtonVariantStyled = styled.button`
  text-decoration: none;
  padding: 0.5em 1em;
  height: auto;
  font-size: 1.2rem;
  border-radius: 12px;
  border: none;
  font-weight: 500;
  background-color: transparent;
  cursor: pointer;

  ${(props) => {
    switch (props.type) {
      case "available":
        return css`
          font-weight: 500;
          width: 90px;
          height: 40px;
          background-color: #5ad07a;
          color: #ffffff;
        `;
      case "booked":
        return css`
          font-weight: 500;
          width: 90px;
          height: 40px;
          background-color: #e23428;
          color: #ffffff;
        `;
      case "in":
        return css`
          width: 100px;
          height: 35px;
          color: #e8ffee;
          background-color: #5ad07a;
        `;
      case "out":
        return css`
          width: 100px;
          height: 35px;
          color: #e23428;
          background-color: #ffedec;
        `;
      case "pending":
        return css`
          width: 100px;
          height: 35px;
          color: #212121;
          background-color: #dfdf1eb0;
        `;
      case "view-active":
        return css`
          color: #212121;
          background-color: #eef9f2;
          padding: 0.5em 2.5em;
        `;
      case "view-inactive":
        return css`
          color: #799283;
          border: 1px solid #799283;
          padding: 0.5em 2.5em;
        `;
      case "true":
        return css`
          background-color: transparent;
          color: #5ad07a;
          font-weight: 600;
        `;
      case "false":
        return css`
          background-color: transparent;
          color: #e23428;
          font-weight: 600;
        `;
      case "archived":
        return css`
          width: 9rem;
          background-color: #e23428;
          color: #ffffff;
        `;
      case "publish":
        return css`
          width: 9rem;
          background-color: #5ad07a;
          color: #ffffff;
        `;
    }
  }}
`;
