import React from 'react'

export function Budget() {
    return (
        <React.Fragment>
            <h1 style={titleStyle}>Budget</h1>
            <p style={paraStyle}>This is the budget section of the app.</p>
        </React.Fragment>
    )
}

const titleStyle = {
    marginLeft: "20px",
    fontSize: "38px",
 }
 const paraStyle = {
    marginLeft: "20px",
    fontSize: "26px",
 }

export default Budget;
