import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class IngredientName extends Component {
    getStyle = () => {
        return {
            background: '#9bdeac',
            padding: '15px',
            fontSize: '26px',
            borderBottom: '2px #fbfd8a dotted',
            textDecoration: this.props.ingredient.inPantry ?
            'line-through' : 'none'
        }
    }

    render() {
        const { id, name } = this.props.ingredient;
        return (
            <div style={this.getStyle()}>
               <p>
                    <input type="checkbox" onChange={this.props.actionComplete.bind (this, id)} />
                    { '' }
                    { name }
                    <button onClick={this.props.delIngredient.bind(this, id)} style={btnStyle}>✘</button>
                </p> 
            </div>
        )
    }
}

// PropTypes
IngredientName.propTypes = {
    ingredient: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#c70039',
    color: '#fff',
    border: 'none',
    padding: '6px 9px',
    borderRadius: '20%',
    cursor: 'pointer',
    float: 'right',
    marginTop: "5px"
}

// PropTypes
IngredientName.propTypes = {
    ingredient: PropTypes.object.isRequired,
    actionComplete: PropTypes.func.isRequired,
    delIngredient: PropTypes.func.isRequired,
}


export default IngredientName
