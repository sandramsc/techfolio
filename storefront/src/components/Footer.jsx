/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React from 'react';
import styled from 'styled-components';
import TikTok  from '../assets/icons/tiktok_icon';
import Instagram  from '../assets/icons/instagram_icon';
import Pintrest  from '../assets/icons/pintrest_icon';
import Phone  from '../assets/icons/phone_icon';
import Map  from '../assets/icons/map_icon';
import Email  from '../assets/icons/email_icon';
import ModeOne  from '../assets/icons/mode1';
import ModeTwo  from '../assets/icons/mode2';
import ModeThree  from '../assets/icons/mode3';

const Container = styled.div`
  display: flex;
  height: 35vh;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
width: 60%;
`;
const Desc = styled.p`
  padding: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Middle = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 60%;
  margin-bottom: 10px;
  cursor: pointer;
`;
const ContactItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const PaymentContainer = styled.div`
  display: flex;
`;
const PaymentMode = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <Left><Logo>STOREFRONT.</Logo>
      <Desc>Minimalistic fashion & tech at affordable rates for everyone.</Desc>
      <SocialContainer>
        <SocialIcon>
          <TikTok />
        </SocialIcon>
        <SocialIcon>
          <Pintrest />
        </SocialIcon>
        <SocialIcon>
          <Instagram/>
        </SocialIcon>
      </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>About Us</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Terms & Conditions</ListItem>
        </List>
      </Center>
      <Middle>
      <Title>Popular Categories</Title>
      <List>
        <ListItem>Technology</ListItem>
        <ListItem>Womens Fahion</ListItem>
      </List>
    </Middle>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Map />428 Schönhause Alle
        </ContactItem>
        <ContactItem>
        <Phone />+49 17624558712
        </ContactItem>
        <ContactItem>
        <Email />info@storefront.com
        </ContactItem>
        <PaymentContainer>
          <PaymentMode>
          <ModeOne />
          </PaymentMode>
          <PaymentMode>
          <ModeTwo />
          </PaymentMode>
          <PaymentMode>
          <ModeThree />
          </PaymentMode>
        </PaymentContainer>
      </Right>
 
    </Container>
    
  )
}

export default Footer;