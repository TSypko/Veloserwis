import React from "react";
import styled from "styled-components";

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
        width: 50%;
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
}
`;

const ListItem = styled.li`
    padding: 15px 20px 0px 20px;
    letter-spacing: 1px;
    font-size: 20px;
    font-weight: 300;
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

const NavigationList = () => (
    <List>
        <ListItem>
            <ListLink href="#">start</ListLink>
        </ListItem>
        <ListItem>
            <ListLink href="#">o&nbsp;nas</ListLink>
        </ListItem>
        <ListItem>
            <ListLink href="#">cennik</ListLink>
        </ListItem>
        <ListItem>
            <ListLink href="#">kontakt</ListLink>
        </ListItem>
    </List>
);

export default NavigationList;