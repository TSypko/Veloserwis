import React, { useState, useRef } from 'react';
import { GlobalStyles } from './GlobalStyles';
import Head from "./components/Head";
import Wrapper from "./components/Wrapper";
import LogoContainer from "./components/LogoContainer/index";
import Navigation from "./components/Navigation";
import NavigationMenu from "./components/NavigationMenu";
import Header from "./components/Header";
import Main from "./components/Main";
import Section from "./components/Section";
import Hero from "./components/Hero";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialInfo from "./components/SocialInfo";
import BurgerButton from "./components/Burger";
import MapElement from "./components/Map";

function App() {
  
  const openMenu = () => {
    setIsOpened(state => !state);
  };

  const [onScroll, setOnScroll] = useState(false);
  const navRef = useRef(null);

  const onScrollNavStyleChange = () => {
    if (window.pageYOffset > navRef.current) {
      setOnScroll(true)
    } else { setOnScroll(false) }
  };
  window.onscroll = onScrollNavStyleChange;

  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <Head />
      <GlobalStyles />
      <Wrapper isScrolled={onScroll}>
        <Navigation forwardRef={navRef}>
          <LogoContainer isScrolled={onScroll} />
          <NavigationMenu
            openMenu={openMenu}
            isOpened={isOpened}
            isScrolled={onScroll} />
          <BurgerButton
            openMenu={openMenu}
            isOpened={isOpened}
            isScrolled={onScroll} />
        </Navigation>
      </Wrapper>
      <Header>
        <Section
          body={<Hero />}
        />
      </Header>
      <Main >
        <Section
          body={<About />}
        />
        <Section
          body={<Pricing />}
        />
        <Section
          body={<Contact />}
        />
        <Section
          body={<MapElement />}
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
