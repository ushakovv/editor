import React from 'react';

import Text from './Text';
import Button from './Button';
import Image from './Image';
import Gif from './Gif';
import Divider from './Divider';
import Spacer from './Spacer';
import Code from './Code';
import Video from './Video';
import Social from './Social';

export const ElementsFactory = (elem, cellId, props) => {
    switch (elem.type) {
    case 'text':
        return <Text element={elem} cellId={cellId} {...props} />;
    case 'image':
        return <Image element={elem} cellId={cellId} {...props} />;
    case 'gif':
        return <Gif element={elem} cellId={cellId} {...props} />;
    case 'button':
        return <Button element={elem} cellId={cellId} {...props} />;
    case 'divider':
        return <Divider element={elem} cellId={cellId} {...props} />;
    case 'spacer':
        return <Spacer element={elem} cellId={cellId} {...props} />;
    case 'code':
        return <Code element={elem} cellId={cellId} {...props} />;
    case 'video':
        return <Video element={elem} cellId={cellId} {...props} />;
    case 'social':
        return <Social element={elem} cellId={cellId} {...props} />;
    default:
        break;
    }
};
