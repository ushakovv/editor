import React from 'react';

import { ElementEnhance } from './ComponentElementHOC';

const Video = ({ onElementClick, element }) => {
    const _style = {
        width: `${parseInt(element.attribute.imageSize, 10)}%`,
        height: 'auto',
        padding: `${parseInt(element.attribute.margin, 10)}px 0`,
    };
    const _wrapperStype = {
        textAlign: element.attribute.align,
    };
    const getYtImg = (ytLink) => {
        if (!ytLink) {
            return false;
        }
        const ytVideoId = ytLink.match(/v=(.*)$/i);
        if (ytVideoId && ytVideoId[1]) {
            return `https://img.youtube.com/vi/${ytVideoId[1]}/0.jpg`;
        }
        return false;
    };
    return (
        <div onClick={onElementClick} style={_wrapperStype}>
            <img
                src={getYtImg(element.attribute.videoLink) || '/img/video-overlay.jpg'}
                alt="default-img"
                className="input__img"
                style={_style}
            />
        </div>
    );
};

export default ElementEnhance(Video);
