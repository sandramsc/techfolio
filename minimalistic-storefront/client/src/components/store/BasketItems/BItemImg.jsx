/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from 'react';
import styled from 'styled-components';
import LeftArrow from '../../../assets/icons/left_arrow';
import RightArrow from '../../../assets/icons/right_arrow';

const BasketItemImgSlider = styled.div`
	width: 130px;
	position: relative;
		img{
			width: 120px;
			height: 170px;
			object-fit: fill;
		}
`;
const Left = styled.div`
	position: absolute;
	top: 145px;
	left: 75px;
	background-color: #26282a;
	padding: 1px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 14px;
	height: 14px;
	&:hover {
		cursor: pointer;
	}
`;
const Right = styled.div`
	position: absolute;
	top: 145px;
	right: 17px;
	background-color: #26282a;
	padding: 1px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 14px;
	height: 14px;
	&:hover {
		cursor: pointer;
	}
`;

export class ItemImg extends Component {
    constructor (props) {
		super(props);
		this.state = {
			// sets first img as default img
			lastImg: 0,
		};
	}

	previousImg = (idx) => {
		if (this.state.lastImg > 0) {
			this.setState((previous) => {
				const lastImg = this.state.lastImg - 1;
				return { lastImg }
			});

		} else {
			this.setState((previous) => {
				const lastImg = this.props.gallery.length -1;
				return { lastImg };
			})
		}
	};
	
	nextImg = (idx) => {
		if (this.state.lastImg < this.props.gallery.length - 1) {
			this.setState((previous) => {
				const lastImg = this.state.lastImg + 1;
				return { lastImg };
			});
		} else {
			this.setState((previous) => {
				const lastImg = 0;
				return { lastImg }
			})
		}
	}
	
	render () {
        const { id, gallery } = this.props;

        return(
            <BasketItemImgSlider>
                <Left direction="left" onClick={ this.previousImg } >
                	<LeftArrow/>
                </Left>
                <img src={gallery[this.state.lastImg]} alt={id + " Bimg"} />
                <Right direction="right" onClick={ this.nextImg } >
                	<RightArrow/>
                </Right>
            </BasketItemImgSlider>
        )
		
	};
}
export default ItemImg;





