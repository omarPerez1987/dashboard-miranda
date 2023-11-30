import styled from "styled-components";

export const FooterTableStyled = styled.div`
  margin: 2em 0em;
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

  & .pagination {
    display: flex;
    list-style: none;
    padding: 0;
    gap: 1em;
  }

  & .pagination li {
    margin-right: 5px;
  }

  & .pagination a {
    text-decoration: none;
    padding: 1em 2em;
    border: 1px solid #ddd;
    color: #333;
    font-size: 1rem;
    background-color: transparent;
    border: none;
    border-radius: 12px;
    cursor: pointer;
  }

  & .pagination .active a {
    background-color: #135846;
    color: #fff;
  }
`;
