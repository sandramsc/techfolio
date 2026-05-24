/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from 'react';
import styled from 'styled-components';
import PItemAttr from './PItemAttr';
import DOMPurify from 'dompurify';

const Info= styled.div`
    width: 30%;
    margin-left: 40px;
    display: flex;
    flex-direction: column;

        h1{
            font-family: "Urbanist";
            font-weight: 600;
            font-size: 26px;
            line-height: 27px;
            margin: 0px;
            margin-bottom: 16px;
            color: #26282a;
        }
        h2 {
            font-family: "Urbanist";
            font-weight: 400;
            font-size: 24px;
            line-height: 27px;
            margin: 0px;
            margin-bottom: 32px;
            color: #26282a;
        }
        button {
            width: 100%;
            padding: 16px 32px;
            min-height: 52px;
            background-color: #5ece7b;
            font-family: "Urbanist";
            font-weight: 600;
            font-size: 16px;
            color: white;
            border: 0px;
            margin-bottom: 20px;
            box-sizing: border-box;
            text-align: center;
            &:hover{
                background: #3fa35a;
                cursor: pointer;
            }
            &:active{
                background: #3fa35a;
                color: #26282a;
            }
        }
`;
const ItemAttr= styled.div`
    display: flex;
    flex-direction: column;
`;
const ItemPrice= styled.div`
    h2{
        font-family: "Urbanist";
        font-weight: 700;
        font-size: 20px;
        line-height: 18px;
        margin: 0px;
        margin-bottom: 10px;
        color: #26282a;
    }
    p{
        font-family: "Urbanist";
        font-weight: 700;
        font-size: 20px;
        line-height: 40px;
        margin: 0px;
        margin-bottom: 20px;
        color: #26282a;
    }
`;
const NoStock= styled.div`
    width: 100%;
    padding: 16px 32px;
    min-height: 52px;
    background-color: #5ece7b;
    font-family: "Urbanist";
    font-weight: 600;
    font-size: 16px;
    color: white;
    border: 0px;
    margin-bottom: 20px;
    box-sizing: border-box;
    text-align: center;
    opacity: 0.7;
    filter: brightness(0.8);
`;
const ItemDesc= styled.div`
    font-family: "Urbanist";
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #26282a;
    display: flex;
    flex-direction: column;
    width: 350px;
    margin-right: 10px;
    flex-shrink: 0;
    height: 170px;
    overflow-y: auto;
    overflow-x: hidden;

        &::-webkit-scrollbar {
            width: 6px;
        }

        &::-webkit-scrollbar-track {
            background: rgb(243, 243, 245);
            border-radius: 6px;
        }

        &::-webkit-scrollbar-thumb {
            background: rgb(199, 199, 199);
            border-radius: 6px;
        }
        
        &::-webkit-scrollbar-thumb:hover {
            background: rgb(166, 166, 166);
            border-radius: 6px;
        }

        &::-webkit-scrollbar-thumb:active {
            background: rgb(140, 140, 140);
            border-radius: 6px;
        }
`;

export class PItemInfo extends Component {

    render(){
        const {name, brand, attributes,chosenAttributes,id, chooseAttribute, 
            description, addToBasket, price, inStock } = this.props;
        return (
            <Info>
                <h1>{brand}</h1>
                <h2>{name}</h2>
            <ItemAttr>
           {attributes.map((attribute, attrIdx) => {
           return(
                <PItemAttr
                key={id + attribute.id}
                inStock={inStock}
                attribute={attribute}
                attrIdx={attrIdx}
                chosenAttributes={chosenAttributes}
                chooseAttribute={chooseAttribute}
                />
           )            
           })}
            </ItemAttr>
                <ItemPrice>
                    <h2>PRICE: </h2>
                    <p>{price.currency.symbol + "" + price.amount}</p>
                </ItemPrice>
                {inStock ? ( <button onClick={addToBasket}>ADD TO CART</button>
                ) : (<NoStock>OUT OF STOCK</NoStock>
                )}
                {/* convert pure HTML to text */}
                <ItemDesc dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(description),
                  }}></ItemDesc>
            </Info>
        );
    }
}

export default PItemInfo;