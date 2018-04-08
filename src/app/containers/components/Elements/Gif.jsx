import React from 'react';

import { ElementEnhance } from './ComponentElementHOC';

const Gif = ({ onElementClick, element }) => {
    const _style = {
        width: `${parseInt(element.attribute.imageSize, 10)}%`,
        height: 'auto',
        padding: `${parseInt(element.attribute.margin, 10)}px 0`,
    };
    const _wrapperStype = {
        textAlign: element.attribute.align,
    };
    return (
        <div onClick={onElementClick} style={_wrapperStype}>
            <img
                src={element.attribute.imgWithLink || '/img/default.gif'}
                alt="default-gif"
                className="input__img"
                style={_style}
            />
        </div>
    );
};

export default ElementEnhance(Gif);
