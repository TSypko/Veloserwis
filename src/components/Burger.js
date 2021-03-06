import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
    margin: 10px 80px 20px 20px;
    background-color: transparent;
    border: none;
    outline: none;
    transition: 0.5s;

    ${({ scroll }) => scroll && css`
        margin: 10px;
        `
        }

    @media (min-width: 990px) {
        display: none;
    }
    @media (max-width: 360px)
    {   
        margin: -10px 25px 0 0px;

        ${({ scroll }) => scroll && css`
        margin: -10px 5px 0 0px;
        `
        }
    }
`;

const Label = styled.span`
    border: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

const Burger = styled.span`
    position: relative;
    transition-timing-function: ease-in;
    display: inline-block;
    width: 40px;
    height: 5px;
    background-color: var(--secondary);
    border-radius: 5px;
    transition: 0.5s;
    @media (max-width: 360px) {   
        width: 30px;
        height: 3px;

    }
   
    &::before {
        content: '';
        display: inline-block;
        width: 40px;
        height: 5px;
        background-color: var(--secondary);
        border-radius: 5px;
        transition: 0.5s;
        transform: translateY(-16px);
        position: absolute;
        left: 0;

        @media (max-width: 360px) {   
            width: 30px;
            height: 3px;
            transform: translateY(-10px);
        }

        ${({ open }) => open && css`
            transform: rotate(45deg) translate(-72px, 72px);

            @media (max-width: 360px) 
            {   
                transform: rotate(45deg) translate(-72px, 72px)
            }
        `
        }
    }
       
  

    &::after {
        content: '';
        display: inline-block;
        width: 40px;
        height: 5px;
        background-color: var(--secondary);
        border-radius: 5px;
        transition: 0.5s;
        transform: translateY(16px);
        position: absolute;
        left: 0;

        @media (max-width: 360px)
        {   
            width: 30px;
            height: 3px;
            transform: translateY(10px);
        }

        ${({ open }) => open && css`
            transform: rotate(-45deg) translate(-72px, -72px);
            @media (max-width: 360px)
            {   
                transform: rotate(-45deg) translate(-72px, -72px);
            }
              
    ` 
        }
    }
    
    ${({ open }) => open && css`
        transform: translateX(100px);
        background-color: transparent;
        
    `
    }
    
`;

const BurgerButton = ({openMenu, isOpened, isScrolled}) => {

    return (
        <StyledButton scroll={isScrolled} onClick={openMenu}>
            <Label>Open/close menu</Label>
            <Burger open={isOpened} />
        </StyledButton>
    )
};



export default BurgerButton;