import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddIngredient extends Component {
state = {
    name: ''
}

onSubmit = (e) => {
    e.preventDefault();
    this.props.addIngredient(this.state.name);
    this.setState({ name: '' })
}

onChange = (e) => this.setState({ [e.target.name]: e.target.value});

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                type="text"
                name="name" 
                style={{flex: '10', padding: '15px', fontSize:"20px"}}
                placeholder="Add Ingredient..." 
                value={this.state.name}
                onChange={this.onChange}
                />
                <input 
                type="submit"
                value="Add Item"
                className="btn"
                style={{flex: '1', fontSize:"20px"}}
                />
            </form>
        )
    }
}

AddIngredient.propTypes = {
    addIngredient: PropTypes.func.isRequired
}

export default AddIngredient
