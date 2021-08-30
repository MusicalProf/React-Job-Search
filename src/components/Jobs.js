import React from "react";
import styled from "styled-components";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

export default function Jobs(props) {
  console.log(props.jobsData);

  return (
    <Container>
      {props.jobsData.map((job) => {
        return (
          <Card>
            <Header>
              <img src={job.logo} alt="PBS" />
              <CustomDots />
            </Header>
            <Role>
              <p>{job.roleName}</p>
            </Role>
            <Description>
              <p>{job.requirements.description}</p>
            </Description>
            <Buttons>
              <Button>Apply Now</Button>
              <MessageButton>Message</MessageButton>
            </Buttons>
          </Card>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  background-color: #11121a;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  gap: 40px;
  @media screen and (max-width: 930px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  background: #1c1c24;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: #fff;
  padding: 20px;
  transition: transform;

  h1 {
    margin: 15px 0;
    font-size: 20px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  img {
    height: 50px;
    width: 50px;
    border-radius: 10px;
  }
`;

const CustomDots = styled(MoreHorizIcon)`
  color: white;
`;

const Role = styled.div`
  padding: 20px 0;
  p {
    font-size: 22px;
  }
`;

const Description = styled.div`
  padding: 20px 0;
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  font-size: 20px;
  color: #96939b;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  height: 45px;
  margin-top: 20px;
`;

const Button = styled.div`
  color: #fff;
  background: #3060ff;
  border-radius: 10px;
  font-size: 14px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 50%;
  max-width: 120px;

  &:hover {
    background-color: #5c82ff;
  }
`;

const MessageButton = styled(Button)`
  background-color: #2e2e39;
  color: #96939b;
  &:hover {
    background-color: #96939b;
    color: #2e2e39;
  }
`;
