import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Filter from "./Filter";

export default function Main() {
  return (
    <Container>
      <Filter />
      <Card />
    </Container>
  );
}

const Container = styled.div`
  background-color: green;
  height: 100vh;
  width: 80%;
  display: flex;
  justify-content: space-around;
  flex-wrap: row;
`;
