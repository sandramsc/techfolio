/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from 'react';
import styled from 'styled-components';
import TextAttr from '../../Categories/ProductsListItems/TextAttr';
import SwatchAttr from '../../Categories/ProductsListItems/SwatchAttr';

const MBAttr = styled.div.attrs(props => ({
  className: props.className,
}))`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0px;
  text-transform: uppercase;
`;
const Name = styled.div`
  font-family: "Urbanist";
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  margin: 5px 0px;
  color: #26282a;
`;

export class MBItemAttr extends Component {
  render() {
    const { attribute, chosenAttributes, attrIdx} = this.props;
    const { items, type, name} = attribute;
 
    return(
      <>
      <Name>{name}: </Name>
      <MBAttr>
        {items.map((item, itemIdx) => {
          const {id, value} = item;

          const confirmed = Object.keys(chosenAttributes).length !== 0 &&
              chosenAttributes[attrIdx] === itemIdx;
              let choiceItem = null;
      
              if(type === 'text') 
                  choiceItem = <TextAttr className="test" text={value} confirmed={confirmed} />

              else if (type === 'swatch')
                  choiceItem = <SwatchAttr className="test" color={value} confirmed={confirmed} />;

              return (
                <div key={name+ id}>

                  {choiceItem}
                </div>
              );
        })}
      </MBAttr>
      </>
    );
  }
}

export default MBItemAttr;