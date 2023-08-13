import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1 style={titleStyle}>Ingredient List</h1>
            <Link style={linkStyle} to="/" >Home</Link> | <Link style={linkStyle} to="about">About</Link> | <Link style={linkStyle} to="budget">Budget</Link> | <Link style={linkStyle} to="shops">Shops</Link>
        </header>
    )
}

const headerStyle = {
    background: '#45046a',
    color: '#f1ebbb',
    textAlign: 'center',
    padding: '20px'
}
const linkStyle = {
    color: '#ccc',
    textDecoration: 'none',
    fontSize: "30px"
}

const titleStyle = {
    fontSize: "46px"
}

export default Header;