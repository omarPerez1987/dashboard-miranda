import styled from "styled-components";

export const FooterTableStyled = styled.div`
  margin: 1.8em 0em;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.1em;

  & .container-pagination {
    display: flex;
    gap: 1em;
    color: #135846;
  }
  button {
    font-size: 0.8rem;
    padding: 0.8em 1.6em ;
    background-color: transparent;
    border: none;
    border-radius: 12px;
  }
  button:hover {
    background-color: #135846;
    color: #FFFFFF;
  }

  & .prev-next {
    border: 1px solid #135846;
    background-color: #FFFFFF;
    color: #135846;
    padding: 0.8em 1.6em;
  }
`;
