/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from 'react';
import { GET_CURRENCIES  } from '../../../graphql/queries';
import client from '../../../graphql/client';
import styled from 'styled-components';
import UpArrow from '../../../assets/icons/up_arrow';
import DownArrow from '../../../assets/icons/down_arrow';

const Container = styled.div.attrs(props => ({
  className: props.className,
}))`
    font-family: "Urbanist";
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #26282a;
    margin-right: 5px;

        & .chooseList{
            display: flex;
            flex-direction: column;
            z-index: 1;
            background-color: white;
            position: absolute;
            width: 100px;
            right: 136px;
            top: 60px;
            box-shadow: 0px 4px 35px 0px #a8acb030;
            align-items: center;
            justify-content: center;
        }
        & .closed{
            display: none;
        }

        & .dropdown{
            padding: 7px 0px;
            text-align: center;
            width:100%;
            &:hover{
                background-color: rgba(57, 55, 72, 0.22);
                cursor: pointer;
            }
        }
`;
const ChosenCurr = styled.div`
    width: 100px;
    height: 30px;
    padding: 0px 3px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        cursor: pointer;
    }
`;

export class CurrencyOptions extends Component {
    constructor(props){
        super(props);
        this.state = {
            //fecth currency list
            currencies: [],
            shownCurrencySymbol: "",
            popCurrencyList: false,
        };
        // assigning ref to instance property for referencing
    this.ref = React.createRef();
}

//listens for clicks outside the target element
componentDidMount(){
    document.addEventListener("click", this.handleClick.bind(this));
    client
        .query({ query: GET_CURRENCIES })
        .then((output)=>
            this.setState((previous)=> {
                const currencies = output.data.currencies;
                const shownCurrencySymbol = currencies[0].symbol;
                this.props.setCurrency(currencies[0].label);
                return{ ...previous, currencies, shownCurrencySymbol }
            })
        )
        .catch((error) => console.log(error));
}
    componentWillUnmount() {
        document.removeEventListener("click", this.handleClick.bind(this));
    }
    //closes if clicks outside detected
    handleClick(event){
        if (this.ref.current && !this.ref.current.contains(event.target)){
            if(this.state.popCurrencyList){
                //closes in set state
                this.setPopCurrencyList();
            }
        }
    }

    //user changed currency
    setChosenCurrency = (shownCurrencySymbol) => {
        this.setState((previous)=> {
            return{ ...previous, shownCurrencySymbol}
        })
    } 

    // toggle currency list
    setPopCurrencyList = () => {
        const popCurrencyList = !this.state.popCurrencyList;
        this.setState((previous)=> {
            return { ...previous, popCurrencyList };
        })
    }

    render(){

    const { popCurrencyList, currencies, shownCurrencySymbol } = this.state;
    
    return(
        <Container ref={this.ref}>
            <ChosenCurr className="chosenCurrency" onClick={this.setPopCurrencyList}>
                <p>{shownCurrencySymbol}</p>
                {popCurrencyList ? <UpArrow /> : <DownArrow />}
            </ChosenCurr>
            <div className={popCurrencyList ? "chooseList": "closed"}>
                {currencies.map((currency) => {
                    return(
                        <div 
                            className="dropdown"
                            key={currency.label}
                            onClick={() => {
                                //close currency list
                                this.setPopCurrencyList();
                                //change curreny option
                                this.setChosenCurrency(currency.symbol);
                                //change curreny option in Main.js
                                this.props.setCurrency(currency.label)
                            }}
                        >
                            {currency.symbol + " " + currency.label}
                        </div>
                    );
                })}
            </div>
        </Container>
    );
}
}

export default CurrencyOptions;
