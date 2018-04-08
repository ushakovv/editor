import React from 'react';

import { ElementEnhance } from './ComponentElementHOC';

import { strToObj } from '../../../helpers/Helpers';

const Social = ({ onElementClick, element }) => {
    const _style = {
        width: `${parseInt(element.attribute.imageSize, 10)}px`,
        margin: `${parseInt(element.attribute.margin, 10)}px auto`,
        textAlign: element.attribute.align,
    };
    const getSocialList = (item, i) => {
        return (
            <a href="#" className="social-element__item" key={i}>
                <img className="social-element__img" src={`/img/${item}.png`} alt="" />
            </a>
        );
    };
    return (
        <div onClick={onElementClick} className="social-element" style={_style}>
            {
                Object.keys(strToObj(element.attribute.networkSetting)).map((item, i) => getSocialList(item, i))
            }
        </div>
    );
};

export default ElementEnhance(Social);
