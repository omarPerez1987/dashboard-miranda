import styled from "styled-components";

export const DashboardMainStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 3em;
  
  .container-kpis {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 3.8em;
  }
  
  .container-reviews {
    margin-top: 10em;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    gap: 3.8em;
    background-color: #ffffff;
    padding: 3em;
    & h3 {
      color: #393939;
      font-size: 1.6rem;
      font-weight: 600;
    }
    &__box-card {
      display: flex;
      flex-wrap: wrap;
      gap: 2em;
      justify-content: space-around;
    }
  }
`;
