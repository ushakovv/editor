import React from 'react';

import { ElementEnhance } from './ComponentElementHOC';

const Image = ({ onElementClick, element }) => {
    const getRealWidth = () => {
        const percent = parseInt(element.attribute.imageSize, 10);
        return `${((element.attribute._realSize / 100) * percent)}%`;
    };
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
                src={element.attribute.imgWithLink || '/img/default.jpg'}
                alt={element.attribute.alt}
                className="input__img"
                style={_style}
            />
        </div>
    );
};

export default ElementEnhance(Image);
