const mailsInitState = [
    {
        id: 1,
        order: 0,
        value: [{}],
        setting: {
            layout: 'container',
            margin: 20,
            backgroundImage: '',
            color: '',
            cells: 1,
        },
    },
];

export default function mails(state = mailsInitState, action) {
    switch (action.type) {
    case 'CLONE_ROW':
        return [...action.payload];
    case 'REMOVE_ROW':
        state.splice(action.position, 1);
        return [...state];
    case 'ADD_ROW':
        return [
            ...state,
            action.payload,
        ];
    case 'SORT_ROW':
        return [...action.sortedStore];
    case 'ELEMENT_ADD':
        return [...action.newList];
    case 'ELEMENT_REMOVE':
        return [...action.payload];
    case 'ELEMENT_CLONE':
        return [...action.payload];
    case 'SAVE_ROW_SETTING':
        // TODO splice index key from setting data in future
        const rowData = state[action.newSetting.index];
        if (parseInt(action.newSetting.cells, 10) !== parseInt(rowData.setting.cells, 10)) {
            if (action.newSetting.cells > rowData.setting.cells) {
                rowData.value.push({ ...rowData.value[rowData.value.length - 1] });
            } else if (action.newSetting.cells <= rowData.setting.cells) {
                rowData.value.splice(-1, 1);
            }
        }
        rowData.setting = { ...rowData.setting, ...action.newSetting };
        return [...state];
    case 'SAVE_PANEL_SETTING':
        return [...action.newSetting];
    case 'INSERT_SCHEMA':
        return [...action.payload];
    case 'SAVE_SOCIAL':
        return [...action.newSocial];
    default:
        return state;
    }
}
