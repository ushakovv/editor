export default function _panelSettings(state = {}, action) {
    switch (action.type) {
    case 'SET_PANEL_SETTING':
        return { ...action.newSetting };
    default:
        return state;
    }
}
