import React, { useState, useRef } from 'react';
import { GlobalStyles } from './GlobalStyles';
import Wrapper from "./components/Wrapper";
import LogoContainer from "./components/LogoContainer/index";
import Navigation from "./components/Navigation";
import NavigationMenu from "./components/NavigationMenu";
import Main from "./components/Main";
import Section from "./components/Section";
import Hero from "./components/Hero";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialInfo from "./components/SocialInfo";
import BurgerButton from "./components/Burger";
import { useFetch } from "./useFetch";

function App() {
  const [isOpened, setIsOpened] = useState(false);

  const openMenu = () => {
    setIsOpened(!isOpened);
  };

  const [onScroll, setOnScroll] = useState(false);
  const navRef = useRef(null);

  const onScrollNavStyleChange = () => {
    if (window.pageYOffset > navRef.current) {
      setOnScroll(true)
    } else { setOnScroll(false) }
  };
  window.onscroll = onScrollNavStyleChange;

  const wpMainData = useFetch("https://tomek86.000webhostapp.com/wp-json/");

  const setDocumentHead = () => {
    if (wpMainData.response) {
      document.title = wpMainData.response.name;
      document.head.querySelector('meta[name="description"]').content = wpMainData.response.description;
    };
  };
  setDocumentHead();

  return (
    <>
      <GlobalStyles />
      <Wrapper isScrolled={onScroll}>
        <Navigation ref={navRef}>
          <LogoContainer isScrolled={onScroll}/>
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
      <Main >
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
