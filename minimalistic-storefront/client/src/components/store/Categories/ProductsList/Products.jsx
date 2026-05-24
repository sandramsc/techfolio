/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from 'react';
import { GET_PRODUCTS } from '../../../../graphql/queries';
import client from '../../../../graphql/client';
import styled from 'styled-components';
import Product from './Product';

const Container = styled.div`
    body {
        margin: 0px 60px 60px 60px;
        padding: 0px 70px 0px 80px;
    }
`;
const CategoryNav = styled.div`
    font-family: "Urbanist";
    font-weight: 400;
    font-size: 36px;
    margin: 40px 0;
    color: #26282a;
    span {
        color: #26282a;
    }
`;
const ProductList = styled.div`
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(3, 320px);
    margin-bottom: 80px;
   
`;

export class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products:[],
        };
    }

    // fetch products
    componentDidMount() {
        client.query({ query: GET_PRODUCTS,
                variables: {
                    category: this.props.shownCategory,
                },
            })
            .then((output)=> this.setState(()=> {
                    let products = output.data.category.products;
                    return {products};
                })
            )
            .catch((error)=> console.log(error));
    }

    // update products type by category if user changed category
    componentDidUpdate(prevCat) {
        if (this.props.shownCategory !== prevCat.shownCategory) {
            client.query({ query: GET_PRODUCTS,
                    variables: {
                        category: this.props.shownCategory,
                    },
                })
                .then((output) => this.setState(() => {
                    let products = output.data.category.products;
                    return { products };
                    })
                )
                .catch((error)=> console.log(error))
        }
    }

    render() {

        return(
            <Container>
                <CategoryNav>
                    <span>{this.props.shownCategory.toUpperCase()}</span>
                </CategoryNav>
                    <ProductList>
                        {this.state.products.map((product) => {
                            return(
                                <Product 
                                key={product.id + ""}
                                product={product}
                                addToBasket={this.props.addToBasket}
                                shownCurrency={this.props.shownCurrency}
                                />
                            );
                        })}
                    </ProductList>
            </Container>
        );
    }
}

export default Products;