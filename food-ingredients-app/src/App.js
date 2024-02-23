/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Ingredients from './components/Ingredients';
import AddIngredient from './components/AddIngredient';
import About from './components/pages/About';
import Budget from './components/pages/Budget';
import Shops from './components/pages/Shops';

import { v4 as uuidv4 } from 'uuid';

import './App.css';


class App extends Component {
  state = {
    ingredients: [
      {
        id: uuidv4(),
        name: 'Chicken Mince (Keema)',
        inPantry: false,
      },
      {
        id: uuidv4(),
        name: 'Samosa Patti',
        inPantry: false,
      },
      {
        id: uuidv4(),
        name: 'Green chillies',
        inPantry: false,
      },
      {
        id: uuidv4(),
        name: 'Coriander leaves',
        inPantry: true,
      },
      {
        id: uuidv4(),
        name: 'Turmeric Powder',
        inPantry: false,
      },
      {
        id: uuidv4(),
        name: 'Garam Masala Powder',
        inPantry: true,
      },
      {
        id: uuidv4(),
        name: 'Ginger Garlic Paste',
        inPantry: false,
      },
    ]
  }

  // Action Complete
  actionComplete = (id) => {
    this.setState({ ingredients: this.state.ingredients.map(ingredient => {
      if(ingredient.id === id) {
        ingredient.inPantry = !ingredient.inPantry
      }
      return ingredient;
    }) });
  }

  // Delete Ingredient
  delIngredient = (id) => {
    this.setState({ ingredients: [...this.state.ingredients.filter(ingredient => ingredient.id !==id)] });
  }

  // Add Ingredient
  addIngredient = (name) => {
    const newIngredient = {
      id: uuidv4(),
      name,
      inPantry: false
    }
    this.setState({ ingredients: [...this.state.ingredients, newIngredient] });
  }

  render() {
  return (
    <Router>
    <div className="App">
      <div className="container">
        <Header />
        <Route exact path="/" render={props => (
          <React.Fragment>
          <AddIngredient addIngredient={this.addIngredient} />
          <Ingredients ingredients={this.state.ingredients} actionComplete={this.actionComplete} 
          delIngredient={this.delIngredient} />
          </React.Fragment>
        )} />
        <Route path="/about" component={About} />
        <Route path="/budget" component={Budget} />
        <Route path="/shops" component={Shops} />
      </div>
    </div>
    </Router>
  );
}
}

export default App;
