/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from 'react';
import styled from 'styled-components';
import TextAttr from './TextAttr';
import SwatchAttr from './SwatchAttr';

const Attr = styled.div`
    margin: 0px 0px 5px 0px;
    display: inline-block;
    justify-content: flex-start;
        h2{
            font-family: "Urbanist";
            font-weight: 700 !important;
            font-size: 20px !important;
            line-height: 18px;
            margin: 0px;
            margin-bottom: 10px;
            color: #26282a;
            text-transform: uppercase;
        }
`;
const AttrOptions = styled.div.attrs(props => ({
    className: props.className,
}))`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
`;

export class PItemAttr extends Component {
render(){
    const { attribute, chooseAttribute, chosenAttributes, attrIdx } = this.props;
    const {id, items, type, name} = attribute;
 
    return(
        <Attr key={id}>
            <h2>{name}: </h2>
            <AttrOptions>
            {items.map((item, itemIdx) => {
                const {displayValue, value} = item;
                const confirmed =
				Object.keys(chosenAttributes).length !== 0 &&
				chosenAttributes[attrIdx] === itemIdx;
                let choiceItem = null;
                
                if(type === 'text')
                choiceItem = <TextAttr text={value} confirmed={confirmed}
                    displayValue={displayValue} />

                else if (type === 'swatch')
                choiceItem = <SwatchAttr color={value} confirmed={confirmed} />;

                return (
                    <div
                    htmlFor={item.value}
                    key={item.id}
                    onClick={() => chooseAttribute(attrIdx, itemIdx)}>
                        
                    {choiceItem}
                    </div>
                );
            })}
            </AttrOptions>
        </Attr>
    );
}
}

export default PItemAttr;