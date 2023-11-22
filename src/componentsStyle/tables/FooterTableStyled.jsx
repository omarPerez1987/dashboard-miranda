import styled from "styled-components";

export const FooterTableStyled = styled.div`
  margin: 2.8em 0em;
  width: 90%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  & .container-pagination {
    gap: 0.5em;
    display: flex;
    color: #135846;
  }
  p {
    color: #135846;
    font-size: 1.6rem;
  }
  button {
    font-size: 1.3rem;
    padding: 1em 2em;
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
    padding: 1em 2em;
  }
`;
