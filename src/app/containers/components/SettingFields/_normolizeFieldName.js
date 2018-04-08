export const normolizeFieldName = (name) => {
    switch (name) {
    case 'link':
        return 'Link';
    case 'alt':
        return 'Alt text';
    case 'imageSize':
        return 'Image size';
    case 'margin':
        return 'Margin';
    case 'align':
        return 'Align';
    case 'color':
        return 'Color';
    case 'borderColor':
        return 'Color';
    case 'border':
        return 'Border';
    case 'topBottomMargin':
        return 'Top & Bottom margin';
    case 'leftRightMargin':
        return 'Left & Right margin';
    case 'textAlign':
        return 'Align';
    case 'textFont':
        return 'Font';
    case 'imgWithLink':
        return 'Image Link';
    case 'buttonText':
        return 'Button text';
    case 'textSize':
        return 'Text size';
    case 'buttonColor':
        return 'Button color';
    case 'textColor':
        return 'Text color';
    case 'width':
        return 'Width';
    case 'height':
        return 'Height';
    case 'style':
        return 'Style';
    case 'borderStyle':
        return 'Style';
    case 'borderHeight':
        return 'Border height';
    case 'videoLink':
        return 'YouTube link';
    case 'code':
        return 'HTML code';
    case 'iconStyle':
        return 'Icons style';
    case 'networkSetting':
        return 'Networks settings';
    default:
        return name;
    }
};
