/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React from 'react';
import styled from 'styled-components';
import Cart from '../assets/icons/cart_icon';

const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    font-weight: none;
    cursor: pointer;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Center = styled.div`
    flex: 1;
    align-items: center;
`;

const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    font-weight: 300;
    cursor: pointer;
    margin-left: 25px;
`;

const Logo = styled.h1`
    text-dcoration: none;
    color: black;
`;


const NavBar = () => {
  return (
    <Container>
        <Wrapper>
        <Left>
        <Language>EN</Language>
        </Left>
        <Center>
            <Logo>STOREFRONT.</Logo>
        </Center>
        <Right>
            <MenuItem>LOGIN</MenuItem>
            <MenuItem>
                    <Cart />
            </MenuItem>
        </Right>
        </Wrapper>
    </Container>
  )
}

export default NavBar;