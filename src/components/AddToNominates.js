import React from "react";
import styled from "styled-components";

const AddToNominates = ({isNominated}) => {
  return (
    <Container>
      <Add>Add to Nominates</Add>
      <Heart
        width="1em"
        height="1em"
        backgroundColor="transparent"
        viewBox="0 0 16 16"
        className="bi bi-heart-fill"
        fill="red"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        />
      </Heart>
    </Container>
  );
};

export default AddToNominates;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  padding: 0.5em;
`;

const Heart = styled.svg`
  background-color: transparent;
`;

const Add = styled.p`
  margin: 0;
  color: white;
  margin-right: 0.5em;
  background-color: transparent;
`;
