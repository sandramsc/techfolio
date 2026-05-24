import { gql } from "@apollo/client";

// get currencies
export const GET_CURRENCIES = gql`
  query {
    currencies {
      label
      symbol
    }
  }
`;

// get categories
export const GET_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;

// get a specific product
// product id is input
export const GET_PRODUCT = gql`
  query GetProduct($id: String!) {
    product(id: $id) {
      name
      id
      inStock
      gallery
      description
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        amount
        currency {
          label
          symbol
        }
      }
      brand
    }
  }
`;

// get products in a specific category
// category name as input
export const GET_PRODUCTS = gql`
  query GetProducts($category: String!) {
    category(input: { title: $category }) {
      products {
        id
        name
        inStock
        gallery
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;