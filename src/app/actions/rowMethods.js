import { sortByQueue, applyNewItem } from '../helpers/Helpers';

export const rowAdd = (dispatch, type) => {
    const payload = {
        id: 0,
        order: 1,
        value: [],
        setting: {
            layout: 'container',
            margin: 20,
            backgroundImage: '',
            color: '',
            cells: 1,
        },
    };

    switch (type) {
    case 'col_one':
        payload.setting.cells = 1;
        payload.value = [{}];
        break;
    case 'col_two':
        payload.setting.cells = 2;
        payload.value = [{}, {}];
        break;
    case 'col_three':
        payload.setting.cells = 3;
        payload.value = [{}, {}, {}];
        break;
    case 'col_four':
        payload.setting.cells = 4;
        payload.value = [{}, {}, {}, {}];
        break;
    case 'one_big':
        payload.setting.cells = 5;
        payload.value = [{}, {}];
        break;
    case 'one_mid':
        payload.setting.cells = 6;
        payload.value = [{}, {}];
        break;
    default:
        payload.setting.cells = 1;
        payload.value = [{}];
    }

    dispatch({ type: 'ADD_ROW', payload });
};

export const rowClone = (dispatch, list, id) => {
    dispatch({ type: 'CLONE_ROW', payload: applyNewItem(list, id) });
};

export const rowSort = (dispatch, list, queue) => {
    dispatch({ type: 'SORT_ROW', sortedStore: sortByQueue(list, queue) });
};
