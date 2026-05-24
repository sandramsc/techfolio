/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from 'react';
import styled from 'styled-components';
import MinusIcon from '../../../../assets/icons/minus_icon';
import PlusIcon from '../../../../assets/icons/plus_icon'; 

const Button = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #26282a;
  &:hover{
    background: #cdf0d2;
    cursor: pointer;
  }
  &:active{
    background: #9adfa6;
  }
`;
const Container = styled.div`
  width: 20px;
  height: 125px;
  margin-right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p{
    font-family: "Urbanist";
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #26282a;
    margin: 0px;
    text-align: center;
  }
`;

export class MBItemQnty extends Component {
  render() {
    const { idx, qnty, plusQnty, minusQnty } = this.props;
        return(
            <Container>
              <Button onClick={() => plusQnty(idx) }>
                <PlusIcon />
              </Button>
              <p>{qnty}</p>
              <Button onClick={() => minusQnty(idx) } >
                <MinusIcon />
              </Button>
            </Container>
        );
  }
}

export default MBItemQnty;