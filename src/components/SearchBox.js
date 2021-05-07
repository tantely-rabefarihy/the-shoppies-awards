import React from "react";
import styled from "styled-components";

const SearchBox = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <InputCont>
        <Input
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          placeholder="Search a movie.."
        />
      </InputCont>
    </>
  );
};

export default SearchBox;

const InputCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Input = styled.input`
  max-width: 600px;
  background-color: #fff;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
`;
