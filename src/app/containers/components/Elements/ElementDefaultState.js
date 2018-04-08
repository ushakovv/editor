export const ElementDefaultState = [
    {
        type: 'text',
        attribute: {
            textFont: 'Arial',
            color: '#000000',
            textAlign: 'left',
            content: 'Click here to edit!',
            topBottomMargin: 0,
            leftRightMargin: 20,
            _default: ['Arial', 'Bitter', 'Cabin', 'Georgia', 'Helvetica', 'Roboto'],
        },
    },
    {
        type: 'image',
        attribute: {
            imgWithLink: '/img/default.jpg',
            alt: 'default-img',
            align: 'center',
            imageSize: 100,
            margin: 0,
        },
    },
    {
        type: 'gif',
        attribute: {
            imgWithLink: '/img/default.gif',
            alt: 'default-img',
            align: 'left',
            imageSize: 100,
            margin: 0,
        },
    },
    {
        type: 'button',
        attribute: {
            buttonText: 'Click me!',
            link: 'https://google.com',
            align: 'left',
            border: 'radius',
            buttonColor: '#e85034',
            textColor: '#ffffff',
            textSize: 14,
            topBottomMargin: 10,
            leftRightMargin: 20,
        },
    },
    {
        type: 'divider',
        attribute: {
            borderStyle: 'solid',
            borderColor: '#e85034',
            borderHeight: 1,
            height: 10,
            width: 0,
            _default: ['solid', 'dotted', 'dashed'],
        },
    },
    {
        type: 'spacer',
        attribute: {
            spaceHeight: 10,
        },
    },
    {
        type: 'code',
        attribute: {
            code: "<span style=\"font-size: 11px; color: #67b021\">\n" +
            "Napište krátké shrnutí vašeho e-mailu, \n" +
            "tzv. \"preheader\"\n" +
            "</span>",
        },
    },
    {
        type: 'social',
        attribute: {
            iconStyle: 'outlined',
            align: 'center',
            networkSetting: {
                facebook: 'https://www.facebook.com/PROFILE',
                twitter: 'https://www.twitter.com/PROFILE',
                google: 'https://plus.google.com/PROFILE',
            },
            _default: ['rounded', 'outlined', 'squared', 'outlined'],
        },
    },
    {
        type: 'video',
        attribute: {
            videoLink: '',
            imageSize: 100,
            margin: 0,
        },
    },
];

export const defaultStateByType = (type) => {
    let state = false;
    ElementDefaultState.map((val) => {
        if (val.type === type) {
            state = val;
        }
    });
    return { ...state };
};
