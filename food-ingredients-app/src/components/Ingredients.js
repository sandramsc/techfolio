import React, { Component } from 'react';
import IngredientName from './IngredientName';
import PropTypes from 'prop-types';

class Ingredients extends Component {
 

  render() {   
  return  this.props.ingredients.map((ingredient) => (
      <IngredientName key= {ingredient.id} ingredient={ingredient} actionComplete={this.props.actionComplete} delIngredient={this.props.delIngredient}/>
  ));
}
}

// PropTypes
Ingredients.propTypes = {
    ingredients: PropTypes.array.isRequired,
    actionComplete: PropTypes.func.isRequired,
    delIngredient: PropTypes.func.isRequired,
}

export default Ingredients;
