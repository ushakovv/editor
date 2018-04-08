const controlsInitState = {
    COLOR_SETTINGS: [
        {
            name: 'Background color',
            backgroundColor: '#ffffff',
            type: 'rowColor',
        },
        {
            name: 'Background block',
            backgroundColor: '',
            type: 'cellColor',
        },
        {
            name: 'Button color',
            backgroundColor: '',
            type: 'buttonColor',
        },
        {
            name: 'Link color',
            backgroundColor: '',
            type: 'linkColor',
        },
    ],
    FONT_SETTINGS: [
        {
            type: 'heading#1',
            name: 'Heading 1',
            color: '',
            size: 32,
            font: 'Cabin',
            teg: 'h1',
        },
        {
            type: 'heading#2',
            name: 'Heading 2',
            color: '',
            size: 24,
            font: 'Georgia',
            teg: 'h2',
        },
        {
            type: 'heading#3',
            name: 'Heading 3',
            color: '',
            size: 19,
            font: '',
            teg: 'h3',
        },
        {
            type: 'paragraph#1',
            name: 'Paragraph',
            color: '',
            size: 15,
            font: '',
            teg: 'p',
        },
        {
            type: 'buttonTexts#1',
            name: 'Button texts',
            color: '',
            size: 13,
            font: '',
            teg: 'button',
        },
    ],
    LINE_HEIGHT: 2,
};

export default function controls(state = controlsInitState, action) {
    switch (action.type) {
    case 'CHANGE_SETTING':
        return { ...action.settings };
    case 'INSERT_SETTING':
        return { ...action.payload };
    default:
        return state;
    }
}
