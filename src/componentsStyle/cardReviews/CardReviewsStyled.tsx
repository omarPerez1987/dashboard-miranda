import styled from "styled-components";

export const CardReviewsStyled = styled.article`
  width: 33em;
  height: 20em;
  border-radius: 20px;
  padding: 3rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #EBEBEB;

  &:hover {
    box-shadow: 0px 16px 30px #00000014;
  }

  p {
    font-size: 1rem;
    color: #4e4e4e;
    width: 85%;
  }

  img {
    width: 56px;
    height: 56px;
    background-color: #c5c5c5;
    border-radius: 8px;
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  .name-user {
    margin-left: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  h5 {
    color: #262626;
    font-size: 1.2rem;
  }

  span {
    color: #799283;
    font-size: 1rem;
  }

  .container-icons {
    display: flex;
    align-items: end;
    gap: 1em;
  }

  svg {
    color: #5ad07a;
    width: 24px;
    height: 24px;
  }
  .icon-red {
    color: #e23428;
  }
`;
