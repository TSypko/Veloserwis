import React from 'react';
import { GlobalStyles } from './GlobalStyles';
import Wrapper from "./components/Wrapper"
import LogoContainer from "./components/LogoContainer/index"
import Navigation from "./components/Navigation"
import NavigationMenu from "./components/NavigationMenu"
import Main from "./components/Main"

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper isRed={true}>
      <Navigation>
        <LogoContainer />
        <NavigationMenu />
      </Navigation>
      </Wrapper>
      <Wrapper>
        <Main>
        </Main>
      </Wrapper>
    </>
  );
}

export default App;
