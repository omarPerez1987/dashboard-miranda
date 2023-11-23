import styled from "styled-components";

export const TdbodyStyled = styled.td`
  color: #393939;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: start;
  max-width: 200px;
  padding: 1em 1em 1em 0em;

  p {
    font-size: 1.2rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5em;
  }

  span {
    font-size: 1rem;
    font-weight: 400;
  }

  button,
  a {
    text-decoration: none;
    padding: 0.5em 1em;
    height: auto;
    font-size: 1.2rem;
    border-radius: 12px;
    border: none;
    font-weight: 600;
    cursor: pointer;
  }

  h6 {
    color: #135846;
    font-size: 1rem;
    font-weight: 600;
  }
  .archived {
    background-color: #e23428;
    color: #ffffff;
  }
  .available {
    padding: 1em 2.5em;
    font-weight: 500;
    width: 125px;
    height: 48px;
    background-color: #5ad07a;
    color: #ffffff;
  }
  .available::before {
    content: "Available";
  }

  .booked {
    padding: 1em 2.5em;
    font-weight: 500;
    background-color: #e23428;
    color: #ffffff;
  }
  .booked::before {
    content: "Booked";
  }

  .view-active {
    padding: 0.5em 2em;
    color: #212121;
    background-color: #eef9f2;
  }
  .view-desactive {
    padding: 0.5em 2em;
    color: #799283;
    border: 1px solid #799283;
    background-color: transparent;
  }

  .--inactive {
    background-color: transparent;
    color: #e23428;
  }
  .--inactive::before {
    content: "INACTIVE";
  }

  .--active {
    background-color: transparent;
    color: #5ad07a;
  }
  .--active::before {
    content: "ACTIVE";
  }

  .--red {
    color: #e23428;
    background-color: #ffedec;
  }
  .--red::before {
    content: "Check Out";
  }

  .--green {
    color: #e8ffee;
    background-color: #5ad07a;
  }
  .--green::before {
    content: "Check In";
  }

  .--yellow {
    color: #212121;
    background-color: #dfdf1eb0;
  }
  .--yellow::before {
    content: "In Progress";
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;
