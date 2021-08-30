import styled from "styled-components";
import "./App.css";
import * as data from "./data.json";
import SearchIcon from "@material-ui/icons/Search";
import Jobs from "./components/Jobs";
import { useState } from "react";

function App() {
  const [jobs, setJobs] = useState(data.default);

  return (
    <Container>
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
      <MainContainer>
        <Main>
          <SearchBox>
            <CustomSearch />
            <input type="text" placeholder="Filter by title " />
            <button>Find Job</button>
          </SearchBox>
          <JobsList>
            <h1>Showing {jobs.length} jobs</h1>
            <JobsContainer>
              <Jobs jobsData={jobs} />
            </JobsContainer>
          </JobsList>
        </Main>
      </MainContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: #11121a;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
  height: 70px;
  background-color: #1c1c24;
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const Logo = styled.div`
  width: 100%;
  max-width: 1250px;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  gap: 10px;
  /* background: purple; */
  img {
    height: 50px;
  }
  h1 {
    color: white;
    font-size: 20px;
  }
`;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: transparent;
`;

const Main = styled.div`
  width: 100%;
  max-width: 1250px;
  padding: 0px 20px;
`;

const SearchBox = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  margin: 30px 0px;
  background-color: #1c1c24;
  border: 1px solid #222328;
  border-radius: 10px;
  overflow: hidden;
  input {
    margin: 0px 20px;
    flex: 1;
    background-color: transparent;
    color: #fff;
    outline: none;
    border: none;
    font-size: 20px;
  }
  button {
    background: #3060ff;
    width: 100px;
    padding: 20px;
    font-size: 14px;
    color: white;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    &:hover {
      background-color: #5a81ff;
      cursor: pointer;
    }
  }
`;

const CustomSearch = styled(SearchIcon)`
  margin-left: 25px;
  font-size: 30px;
  color: white;
`;

const JobsList = styled.div`
  /* background-color: blue; */
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  h1 {
    color: white;
    font-size: 20px;
    margin-bottom: 20px;
    padding: 0 25px;
  }
`;

const JobsContainer = styled.div`
  margin: 20px 0;
`;
