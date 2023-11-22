import styled from "styled-components";

export const FooterTableStyled = styled.div`
  margin: 2.8em 0em;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6em;

  & .container-pagination {
    display: flex;
    gap: 1em;
    color: #135846;
  }
  p {
    color: #135846;
    font-size: 1.6rem;
  }
  button {
    font-size: 1.2rem;
    padding: 1.2em 2.5em;
    background-color: transparent;
    border: none;
    border-radius: 12px;
  }
  button:hover {
    background-color: #135846;
    color: #ffffff;
  }

  & .prev-next {
    border: 1px solid #135846;
    background-color: #ffffff;
    color: #135846;
    padding: 1.2em 2.5em;
  }
`;
