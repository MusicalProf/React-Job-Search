import React from "react";
import styled from "styled-components";

export default function Filter() {
  return (
    <SearchBar>
      <input type="text" placeholder="Filter by type" className="input" />
      <Button></Button>
    </SearchBar>
  );
}

const SearchBar = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Button = styled.button``;
