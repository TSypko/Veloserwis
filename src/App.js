import React, { useState } from 'react';
import { GlobalStyles } from './GlobalStyles';
import Wrapper from "./components/Wrapper"
import LogoContainer from "./components/LogoContainer/index"
import Navigation from "./components/Navigation"
import NavigationMenu from "./components/NavigationMenu"
import Main from "./components/Main"
import Section from "./components/Section"
import Hero from "./components/Hero"
import About from "./components/About"
import Pricing from "./components/Pricing"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import SocialInfo from "./components/SocialInfo"
import BurgerButton from "./components/Burger"

function App() {
  const [isOpened, setIsOpened] = useState(false);

    const openMenu = () => {
        setIsOpened(!isOpened);
    };

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Navigation>
          <LogoContainer />
          <NavigationMenu openMenu={openMenu} isOpened={isOpened} />
          <BurgerButton openMenu={openMenu} isOpened={isOpened} />
        </Navigation>
      </Wrapper>
      <Main>
        <Section
          body={<Hero />}
        />
        <Section
          body={<About />}
        />
        <Section
          body={<Pricing />}
        />
        <Section
          body={<Contact />}
        />
      </Main>
      <Footer>
        <Section
          body={<SocialInfo />}
        />
      </Footer>
    </>
  );
}

export default App;
