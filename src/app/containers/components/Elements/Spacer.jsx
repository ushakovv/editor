import React from 'react';

import { ElementEnhance } from './ComponentElementHOC';

const Spacer = ({ onElementClick, element }) => {
    const _style = {
        margin: `${parseInt(element.attribute.spaceHeight, 10)}px 0`,
    };
    return (
        <div onClick={onElementClick} className="overflow-hidden">
            <p className="input__spacer" style={_style}></p>
        </div>
    );
};

export default ElementEnhance(Spacer);
