/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from 'react';
import styled from 'styled-components';
import BItemAttr from './BItemAttr';
import BItemQnty from './BItemQnty';
import BItemImg from './BItemImg';

const Container = styled.div`
    padding: 18px 0px;
    border-top: 1px solid #e5e5e5;
    display: flex;
    justify-content: space-between;
`;
const Info = styled.div`
    font-family: "Urbanist";
    font-size: 20px;
    line-height: 28px;
    color: #26282a;
        h3{
            margin: 0px 0px 12px 0px;
            font-weight: 600;
        }
        h4{
            margin: 0px 0px 10px 0px;
            font-weight: 400;
        }
        p{
            font-family: "Urbanist";
            font-weight: 700;
            font-size: 16px;
            color: #26282a;
            margin: 0px 0px 10px 0px;
            margin: 0px;
        }
`;
const ItemOptions = styled.div`
    display: flex;
`;

export class BasketItem extends Component {

    render() {
        const { idx, item,  price, plusQnty, minusQnty } = this.props;
        const { product, qnty } = item;
        const { id, name, attributes, gallery, brand, chosenAttributes, chooseAttribute } = product;
     
        return(
            <Container key={item.product.id}>
                <Info>
                    <h3>{brand}</h3>
                    <h4>{name}</h4>
                    <p>{price.currency.symbol + "" + price.amount}</p>
                    <div>
                        {attributes.map((attribute, attrIdx) => {
                            return(
                                <BItemAttr
                                    key={id + attrIdx}
                                    attribute={attribute}
                                    attrIdx={attrIdx}
                                    chosenAttributes={chosenAttributes}
                                    chooseAttribute={chooseAttribute}
                                />
                            );
                        })}
                    </div>
                </Info>
                <ItemOptions>
                <BItemQnty 
                    idx={idx}
                    qnty={qnty}
                    plusQnty={plusQnty}
                    minusQnty={minusQnty} />
                    
                <BItemImg gallery={gallery}  id={id} />   
                </ItemOptions>
            </Container>
        );
    }
}

export default BasketItem;