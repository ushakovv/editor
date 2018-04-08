export const normolizeFieldType = (name) => {
    const textType = ['alt', 'text', 'link', 'buttonText', 'videoLink'];
    const imgType = ['imgWithLink'];
    const listType = ['textFont', 'style', 'iconStyle', 'borderStyle'];
    const borderType = ['border'];
    const sliderType = [
        'imageSize',
        'margin',
        'topBottomMargin',
        'textSize',
        'leftRightMargin',
        'width',
        'height',
        'spaceHeight',
    ];
    const alignType = ['align'];
    const textAlignType = ['textAlign'];
    const colorType = ['buttonColor', 'color', 'textColor', 'borderColor'];
    const numberType = ['borderHeight'];
    const socialType = ['networkSetting'];

    if (textType.indexOf(name) !== -1) {
        return 'text';
    }

    if (imgType.indexOf(name) !== -1) {
        return 'file';
    }

    if (sliderType.indexOf(name) !== -1) {
        return 'slider';
    }

    if (alignType.indexOf(name) !== -1) {
        return 'align';
    }

    if (colorType.indexOf(name) !== -1) {
        return 'color';
    }

    if (borderType.indexOf(name) !== -1) {
        return 'border';
    }

    if (textAlignType.indexOf(name) !== -1) {
        return 'textAlign';
    }

    if (listType.indexOf(name) !== -1) {
        return 'list';
    }

    if (numberType.indexOf(name) !== -1) {
        return 'number';
    }

    if (socialType.indexOf(name) !== -1) {
        return 'social';
    }

    return name;
};
