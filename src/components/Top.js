import React from "react";
import styled from "styled-components";

export default function Top() {
  return (
    <Header>
      <Logo>
        <img
          src="	https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
          alt="Clever Programmer Logo"
          className="picture"
        />
        <h1>CleverJobs</h1>
      </Logo>
    </Header>
  );
}

const Header = styled.div`
  width: 100%;
  height: 70px;
  background-color: #1c1c24;
  display: flex;
  justify-content: center;
`;

const Logo = styled.div`
  width: 100%;
  max-width: 1250px;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  gap: 10px;
  img {
    height: 50px;
  }
  h1 {
    color: white;
    font-size: 20px;
  }
`;
