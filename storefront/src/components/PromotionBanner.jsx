/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background-color: #5ece7b;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;


const PromotionBanner = () => {
  return (
    <Container>Über Savings! Free Shipping on Orders over €50</Container>
  )
}

export default PromotionBanner;