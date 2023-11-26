import styled from "styled-components";

export const BookingDetailsStyled = styled.section`
  width: 90%;
  background-color: #ffffff;
  margin-top: 3em;
  height: auto;
  border-radius: 20px;
  display: flex;
`;

export const DetailsTextStyled = styled.div`
  width: 50%;
  height: 100%;
  padding: 3em;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DetailsInfoPersonStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 2em;
  margin-bottom: 3em;

  & img {
    width: 156px;
    height: 156px;
    border-radius: 20px;
  }
  & h1 {
    color: #212121;
    font-weight: 600;
    font-size: 2rem;
  }
  & h6 {
    color: #799283;
    font-size: 1.2rem;
    font-weight: 500;
  }
  & svg {
    color: #135846;
    width: 20px;
    height: 20px;
  }
  & .container-image-info {
    display: flex;
    gap: 2em;
  }

  & .container-namebutton {
    height: 156px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  & .container-phone {
    display: flex;
    align-items: center;
    width: 200px;
    gap: 1em;
  }
  & .container-phone__button {
    border-radius: 12px;
    width: 200px;
    height: 40px;
    background-color: #135846;
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    gap: 1em;
  }
  & .container-phone__button__icon {
    color: #ffffff;
  }
`;

export const DetailsCheckStyled = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  padding: 0em 3em 2em 0em;
  gap: 3em;
  border-bottom: 1px solid #6e6e6ec5;

  & h6 {
    color: #6e6e6e;
    font-size: 1.2em;
    font-weight: 500;
    margin-bottom: 0.5em;
  }
  & h3 {
    color: #212121;
    font-size: 1.2em;
    font-weight: 600;
  }
`;
export const DetailsInfoRoomStyled = styled.div`
  margin-top: 4em;
  width: 100%;
  height: 30%;
  padding: 0em 3em 2em 0em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  & .container-room {
    display: flex;
    width: 85%;
    justify-content: space-between;
    margin-bottom: 1em;
    &__info {
      h6 {
        color: #6e6e6e;
        font-size: 1.2em;
        font-weight: 500;
        margin-bottom: 0.5em;
      }
      h3 {
        color: #212121;
        font-size: 1.6em;
        font-weight: 600;
      }
    }
  }
  p {
    width: 100%;
    color: #363636;
    font-size: 1.2rem;
  }
`;
export const DetailsInfoFacilitiesStyled = styled.div`
  margin-top: 1em;
  width: 100%;
  height: 30%;
  padding: 0em 3em 2em 0em;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  & h6 {
    color: #6e6e6e;
    font-size: 1.2em;
    font-weight: 500;
    margin-bottom: 1em;
  }

  & .container-buttons {
    display: flex;
    gap: 3em;
  }
`;

export const DetailsButtonfacilitiesStyled = styled.button`
  padding: 1em;
  border-radius: 5px;
  border: none;
  background-color: #ebf1ef;
  color: #135846;
  font-weight: 600;
  font-size: 1.2rem;
`;

export const DetailsImageStyled = styled.div`
  width: 50%;
  height: 100%;
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
`;
