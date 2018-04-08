import { findByType } from '../helpers/Helpers';

export const saveSettingChange = (dispatch, block, val, list, filter) => {
    switch (block) {
    case 'COLOR_SETTINGS':
        let colorIndex = findByType(list[block], filter);
        list[block][colorIndex].backgroundColor = val;
        break;
    case 'FONT_SETTINGS':
        let fontIndex = findByType(list[block], filter.type);
        list[block][fontIndex][filter.field] = val;
        break;
    case 'LINE_HEIGHT':
        list[block] = parseInt(val, 10);
        break;
    default:
        break;
    }

    dispatch({ type: 'CHANGE_SETTING', settings: list });
};
