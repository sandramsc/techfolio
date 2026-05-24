/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import MBIcon from '../miniBasketItems/MBIcon';
import MBItem from '../miniBasketItems/MBItem';
import Header from '../miniBasketItems/Header';
import Footer from '../miniBasketItems/Footer';


const Container = styled.div.attrs(props => ({
  className: props.className,
}))`

    & .hidden {
        display: none;
    }
    & .mbBackground {
        display: block;
        position: absolute;
        z-index: 1;
        top: 80px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        max-height: 100vh;
        height: 100%;
        background-color: rgba(57, 55, 72, 0.22);
    }
    & .mbItems {
        display: flex;
        flex-direction: column;
        z-index: 10;
        background-color: white;
        position: absolute;
        width: 300px;
        max-height: 450px;
        overflow-y: auto;
        top: 80px;
        right: 100px;
        box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
        padding: 16px;
    }
`;

export class MBasket extends Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleBasketClick = this.handleBasketClick.bind(this);

        this.state = {
            viewMB: false,
        }
        // component ref
        this.ref = React.createRef();
    }

    handleClick() {
        if (!this.state.popupVisible) {
          // attach/remove event handler
          document.addEventListener('click', this.handleBasketClick, false);
        } else {
          document.removeEventListener('click', this.handleBasketClick, false);
        }
      }

    // handle mini basket (open&close)
    setViewMB = () => {
        const viewMB = !this.state.viewMB;
            this.setState((previous) => {
            return {...previous, viewMB}
        });
    };
      
    handleBasketClick(e) {
        // ignore clicks on the component itself
        if (this.ref.current.contains(e.target)) {
          return;
        }
        this.setViewMB();
    }

render() {
const { shownCurrency, basket, plusQnty, minusQnty, sumTotal } = this.props;
    return(
        <Container>
        <div className={this.state.viewMB ? "mbBackground" : "hidden"}></div>
        <div ref={this.ref}>
        <MBIcon 
        length={basket.length}
        setViewMB={this.setViewMB} />
        <div className={this.state.viewMB ? "mbItems" : "hidden"}>
            <Header length={basket.length} />
            { // basket items
                basket.map((item, idx)=>{
                    return(
                        <MBItem  
                        key={idx}
                        plusQnty={plusQnty}
                        minusQnty={minusQnty}
                        item={item}
                        idx={idx}
                        shownCurrency={shownCurrency}
                        />
                    );
                })}
            <Footer 
            length={basket.length}
            setPopMBasket={this.setPopMBasket}
            sumTotal={sumTotal} />
        </div>
        </div>
        </Container>
    );
  }
}

export default MBasket;