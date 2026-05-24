/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from 'react';
import styled from 'styled-components';
import ScrollBtn from '../NavItems/ScrollBtn';
import CurrencyOption from '../NavItems/CurrencyOptions';
import Logo from '../../../assets/icons/logo';
import { Link } from 'react-router-dom';
import MBasket from '../NavItems/miniBasket/MBasket';

const Container = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 0px;
`;
const Center = styled.div`
    margin: 20px 0px;
    width: 30%;
    display: flex;
    justify-content: center;
`;
const MenuItem = styled.div`
    margin: 20px 0px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 30%;
`;

export class Nav extends Component {
    render() {
        return (
            <Container>
                <ScrollBtn
                    shownCategory={this.props.shownCategory}
                    setCategory={this.props.setCategory}
                />
                <Center>
                    <Link to="/"><Logo /></Link>
                </Center>
                <MenuItem>
                    <CurrencyOption setCurrency={this.props.setCurrency} /> 
                    <MBasket 
                        basket={this.props.basket}
                        shownCurrency={this.props.shownCurrency}
                        plusQnty={this.props.plusQnty}
                        minusQnty={this.props.minusQnty}
                        sumTotal={this.props.sumTotal}
                        checkOut={this.props.checkOut}
                        /> 
                </MenuItem> 
            </Container>
        );
    }

}

export default Nav;