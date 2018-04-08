import React from 'react';

import { ElementEnhance } from './ComponentElementHOC';

const _default = {
    color: '#ffffff',
    backgroundColor: '#e85034',
};

const _makeStyle = (element, settings) => {
    const __style = {
        fontFamily: settings.FONT_SETTINGS[4].font,
        fontSize: `${parseInt(element.attribute.textSize, 10)}px` || `${settings.FONT_SETTINGS[4].size}px`,
        padding: `${element.attribute.topBottomMargin}px ${element.attribute.leftRightMargin}px`,
        color: element.attribute.textColor || settings.FONT_SETTINGS[4].color,
        backgroundColor: element.attribute.buttonColor || settings.COLOR_SETTINGS[2].backgroundColor,
        borderRadius: element.attribute.border === 'radius' ? '15px' : 0,
    };
    if (settings.COLOR_SETTINGS[2].backgroundColor && element.attribute.buttonColor === _default.backgroundColor) {
        __style.backgroundColor = settings.COLOR_SETTINGS[2].backgroundColor;
    }
    if (settings.FONT_SETTINGS[4].color && element.attribute.textColor === _default.color) {
        __style.color = settings.FONT_SETTINGS[4].color;
    }
    return __style;
};

const Button = ({ onElementClick, element, settings }) => {
    const _style = _makeStyle(element, settings);
    return (
        <div style={{ textAlign: element.attribute.align }}>
            <button
                className="input__button"
                onClick={onElementClick}
                style={_style}
            >
                {element.attribute.buttonText}
            </button>
        </div>
    );
};

export default ElementEnhance(Button);
