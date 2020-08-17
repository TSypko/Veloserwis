import React from "react";
import styled from "styled-components";

const List = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: flex-end;
    padding: 10px 50px;
`;

const ListItem = styled.li`
    padding: 0px 20px;
    letter-spacing: 1px;
    font-size: 20px;
    font-weight: 300;
`;
const ListLink = styled.a`
    text-decoration: none;
    color: inherit;
    padding: 5px;
    &:hover {
        color: #FFF;
        border-bottom: 1px solid white;
    }
    &:active {
        color: #222;
        font-weight: 500;
        border-bottom: 1px solid #222;
    }
`;

const NavigationList = () => (
    <List>
        <ListItem>
            <ListLink href="#">start</ListLink>
        </ListItem>
        <ListItem>
            <ListLink href="#">o nas</ListLink>
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