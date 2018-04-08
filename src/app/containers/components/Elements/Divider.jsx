import React from 'react';

import { ElementEnhance } from './ComponentElementHOC';

const Divider = ({ onElementClick, element }) => {
    const _style = {
        margin: `${parseInt(element.attribute.height, 10)}px ${parseInt(element.attribute.width, 10)}px`,
        borderTop: `${parseInt(element.attribute.borderHeight, 10)}px ${element.attribute.borderStyle} ${element.attribute.borderColor}`,
    };
    return (
        <div className="wrapper-block" onClick={onElementClick}>
            <p className="input__divider" style={_style}></p>
        </div>
    );
};

export default ElementEnhance(Divider);
