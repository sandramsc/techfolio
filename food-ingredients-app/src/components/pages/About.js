import React from 'react'

export function About() {
    return (
        <React.Fragment>
            <h1 style={titleStyle}>About</h1>
            <p style={paraStyle}>This is the Ingredients App v1.0.0. It is my first React.js application. *(sajustsmile)*</p>
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

export default About;