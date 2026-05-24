/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from 'react';
import { GET_PRODUCT } from '../../../../graphql/queries';
import client from '../../../../graphql/client';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BasketIcon from '../../../../assets/icons/basket_icon';

const Container = styled.div.attrs(props => ({
    className: props.className,
}))`
  position: relative;

    a{
        color: inherit;
        text-decoration: inherit;
    }
    &:hover {
        display: flex;
        align-items: center;
        justify-content: center;
        transform: scale(1.1);

        & .bIcon {
            display: none;
            position: absolute;
            bottom: 83px;
            right: 25px;
            border-radius: 50%;
            background-color: rgba(94, 206, 123, 1);
            width: 52px;
            height: 52px;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            &:hover {
                transform: scale(1.1);
                filter: brightness(1.3);
                cursor: pointer;
              }
        }
      }
    & .addToBasket {
        padding: 10px;
        margin: 10px 0px 10px 0px;
        width: 300px;
        display: flex;
        flex-direction: column;
        img{
            width: 300px;
            height: 355px;
            object-fit: fill;
        }
        &:hover{box-shadow: 0px 4px 35px 0px rgba(168, 172, 176, 0.19);}
      }
      & .outOfStock {
          padding: 10px;
          margin: 10px 0px 10px 0px;
          width: 300px;
          display: flex;
          flex-direction: column;
          opacity: 0.5;
          img{
              width: 300px;
              height: 355px;
              object-fit: fill;
          }
          &:hover{box-shadow: 0px 4px 35px 0px rgba(168, 172, 176, 0.19);}
        }
`;
const Name = styled.div`
  font-family: "Urbanist";
  font-weight: 300;
  font-size: 18px;
  line-height: 28px;
  color: #26282a;
  margin-top: 24px;
`;
const Price = styled.div`
  font-family: "Urbanist";
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #26282a;
`;
const NoStock = styled.div`
  color: #000;
  font-family: "Urbanist";
  font-weight: 400;
  font-size: 24px;
  line-height: 38.4px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  top: 150px;
`;

export class Product extends Component {
 
    // fetch product by id and add to cart with attributes added after
    addToBasket = () => {
        client.query({query: GET_PRODUCT,
                variables: { id: this.props.product.id },
        })
        .then((output) => {
            const product = output.data.product;
            let chosenAttributes = [];

            if(product.attributes) {
                chosenAttributes = Array(product.attributes.length).fill(0);
            }
            this.props.addToBasket({ ...product, chosenAttributes });
        })
        .catch((error) => console.log(error));
    };

    render(){
        const { prices, name, inStock, id, gallery } = this.props.product;
        const price = prices.find((due) => {
            return due.currency.label === this.props.shownCurrency;
        });

        return (
          <Container>
            <Link to={"/product/" + id}>
              <div className={inStock ? "addToBasket" : "outOfStock"}>
                <img src={gallery[0]} alt="gallery" />
                <Name>{name}</Name>
                <Price>{price.currency.symbol + "" + price.amount}</Price>
                  {inStock ? "" : <NoStock>OUT OF STOCK</NoStock>}
              </div>
            </Link>
                  {inStock ? (
                  <div className="bIcon" onClick ={this.addToBasket}>
                    <BasketIcon />
                  </div>
                ) : ("")}
          </Container>
      );
    }
}

export default Product;