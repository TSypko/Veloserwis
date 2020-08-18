import React from "react";
import styled, { css } from "styled-components";

const List = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: flex-end;
    padding: 0px 50px;
    margin: 0;

    @media (max-width: 990px) {
        position: fixed;
        top: 50px;
        right: 0px;
        width: 70%;
        padding: 20px;
        background: black;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        opacity: 0;
        pointer-events: none;
        line-height: 2;
        transform: translateX(50%);

        ${({ open }) => open && css`
            opacity: 1;
            pointer-events: unset;
            transform: unset;
    `
    }
    }
`;

const ListItem = styled.li`
    padding: 15px 20px 0px 20px;
    letter-spacing: 1px;
    font-size: 20px;
    font-weight: 300;

    @media (max-width: 990px) {
        text-transform: uppercase;
    }

`;
const ListLink = styled.a`
    text-decoration: none;
    color: inherit;
    padding: 5px;
    &::after {
        content: "";
        display: block;
        width: 0;
        transition: width .3s;
    }
    &:hover::after {
        width: 110%;
        color: #FFF;
        padding-top: 5px;
        margin-bottom: -7px;
        border-bottom: 2px solid white;
    }
    &:active {
        color: #222;
        font-weight: 500;
    }
`;

const NavigationMenu = ({ openMenu, isOpened }) => (
    <List open={isOpened}>
        <ListItem>
            <ListLink onClick={openMenu} href="#">start</ListLink>
        </ListItem>
        <ListItem>
            <ListLink onClick={openMenu} href="#about">o&nbsp;nas</ListLink>
        </ListItem>
        <ListItem>
            <ListLink onClick={openMenu} href="#pricing">cennik</ListLink>
        </ListItem>
        <ListItem>
            <ListLink onClick={openMenu} href="#contact">kontakt</ListLink>
        </ListItem>
    </List>
);

export default NavigationMenu;