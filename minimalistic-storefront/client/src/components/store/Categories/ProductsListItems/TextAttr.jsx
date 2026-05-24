import React, { Component } from 'react';
import './text.css';
import styled from 'styled-components';

const Attr = styled.div`
	display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
`;

class TextAttr extends Component {
	render() {
		const { text, confirmed } = this.props;
		return (
			<Attr id={confirmed ? 'chosenTextAttr' : 'textAttrItem'}>{text}</Attr >
		);
	}
}

export default TextAttr;