const rowSettingsInitState = {
    backgroundImage: '',
    cells: 1,
    color: '',
    layout: 'contain',
    margin: 20,
};

export default function _rowSettings(state = rowSettingsInitState, action) {
    switch (action.type) {
    case 'SET_ROW_SETTING':
        return { ...action.settings };
    default:
        return state;
    }
}
