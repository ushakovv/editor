import React from 'react';

import { ElementEnhance } from './ComponentElementHOC';

const Code = ({ onElementClick, element }) => {
    const createMakup = () => {
        return {
            __html: element.attribute.code,
        };
    };
    return (
        <div
            className="input__code"
            name="ckeditor"
            onClick={onElementClick}
            dangerouslySetInnerHTML={createMakup()}
        />
    );
};

export default ElementEnhance(Code);
