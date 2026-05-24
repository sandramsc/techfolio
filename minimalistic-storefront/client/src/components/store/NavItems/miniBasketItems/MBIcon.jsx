/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from 'react';
import styled from 'styled-components';
import { BIcon } from '../../../../assets/icons/BIcon';

const Icon = styled.div`
  position: relative;
`;
const Button = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    cursor: pointer;
}
`;
const Length = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  z-index: 1;
  font-family: "Urbanist";
  width: 16px;
  height: 16px;
  line-height: 15px;
  font-weight: 700;
  font-size: 14px;
  color: white;
  background-color: #26282a;
  border-radius: 50%;
  text-align: center;
`;

export class MBIcon extends Component {
  render(){
      //mini basket number of items display 
    const {length, setViewMB} = this.props;
   
    return(
     <Button onClick={setViewMB}>
         <Icon>
            <BIcon />
            {length === 0 ? "" : <Length>{length}</Length>}
         </Icon>
     </Button>
    );
  }
}

export default MBIcon;