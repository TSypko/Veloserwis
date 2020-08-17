import React from 'react';
import { GlobalStyles } from './GlobalStyles';
import Wrapper from "./components/Wrapper"
import LogoContainer from "./components/LogoContainer/index"
import Navigation from "./components/Navigation"
import NavigationMenu from "./components/NavigationMenu"
import Main from "./components/Main"
import Section from "./components/Section"
import Hero from "./components/Hero"

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Navigation>
          <LogoContainer />
          <NavigationMenu />
        </Navigation>
      </Wrapper>
      <Main>
        <Section
        body={
          <Hero/>
        }
        />
      </Main>
    </>
  );
}

export default App;
