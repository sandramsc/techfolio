import React from 'react';
import styled from 'styled-components';

const CopyRightContainer= styled.div`
  display: flex;
  height: 2vh;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  flex-direction: column;
  margin-bottom: 30px;
  color: gray;
`;
const CopyrightText = () => {
  return (
    <CopyRightContainer>
     © 2022  Storefront - designed by Sandra Ashipala. All rights reserved.
  </CopyRightContainer>
  )
}

export default CopyrightText;