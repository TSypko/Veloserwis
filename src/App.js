import React from 'react';
import { GlobalStyles } from './GlobalStyles';
import Wrapper from "./components/Wrapper"
import LogoContainer from "./components/LogoContainer/index"
import Navigation from "./components/Navigation"
import NavigationMenu from "./components/NavigationMenu"

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
    </>
  );
}

export default App;
