/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from 'react';
import styled from 'styled-components';

const ImgShowcase= styled.div`
    display: flex;
    flex-direction: column;
    width: 120px;
    margin-right: 30px;
    flex-shrink: 0;
    height: 530px;
    overflow-y: auto;
    overflow-x: hidden;

        &::-webkit-scrollbar {
            width: 6px;
        }

        &::-webkit-scrollbar-track {
            background: rgb(243, 243, 245);
            border-radius: 6px;
        }

        &::-webkit-scrollbar-thumb {
            background: rgb(189, 187, 187);
            border-radius: 6px;
        }
        
        &::-webkit-scrollbar-thumb:hover {
            background: rgb(146, 146, 146);
            border-radius: 6px;
        }

        &::-webkit-scrollbar-thumb:active {
            background: rgb(110, 110, 110);
            border-radius: 6px;
        }

        img{
            width: 100px;
            height: 120px;
            object-fit: fill;
            margin: 0px 0px 10px 0px;
            &:hover{
                cursor: pointer;
                border: 2px solid green;
            }

        }
`;
const CenterImg= styled.div`
    width: 50%;
    max-height: 67vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
        div{
            max-height: 100%;
            img{
                object-fit: scale-down;
                max-width: 100%;
                max-height: 100%;
            }
        }
`;

export class PItemInfo extends Component {
    constructor(props){
        super(props);
       this.thumbImg=React.createRef();
    }

    render(){
        const { gallery, name } = this.props;
        return(
            <>
            <ImgShowcase>
            {gallery.map((item, idx)=>(
                <div key={item}>
                    <img src={item} alt={name + idx}
                        onClick={()=>{this.thumbImg.current.src = item;
                    }} />
                </div>     
            ))}
            </ImgShowcase>
            <CenterImg>
                <div>
                    <img ref={this.thumbImg} src={gallery[0]} alt={name + " center img"}/>
                </div>
            </CenterImg>
            </>
        );
    }
}

export default PItemInfo;