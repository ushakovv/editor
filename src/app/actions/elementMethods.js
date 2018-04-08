import { defaultStateByType } from '../containers/components/Elements/ElementDefaultState';
import { findById, getFrameData } from '../helpers/Helpers';
import { Template as Tpl } from '../model/Template';

export const elementAdd = (dispatch, rid, cid, type, list) => {
    const state = defaultStateByType(type);
    const cell = findById(list, rid, true);

    list[cell.index].value[cid] = state;
    dispatch({ type: 'ELEMENT_ADD', newList: list });
};

export const setPanelSettings = (dispatch, rid, cid, list) => {
    const setting = findById(list, rid, true);
    setting.item.value[cid].attribute._curds = {
        rid: rid,
        cid: cid,
    };
    dispatch({ type: 'SET_PANEL_SETTING', newSetting: setting.item.value[cid].attribute });
};

export const savePanelSettings = (dispatch, list, newSetting) => {
    const setting = findById(list, newSetting._curds.rid, true);
    list[setting.index].value[newSetting._curds.cid].attribute = newSetting;
    dispatch({ type: 'SAVE_PANEL_SETTING', newSetting: list });
};

export const asyncInsertShemaData = () => (dispatch) => {
    const options = getFrameData();
    if (options) {
        Tpl.get(options, (response) => {
            const structure = response.data.result.template.structure;
            if (structure) {
                const structureParse = JSON.parse(structure);
                dispatch({ type: 'INSERT_SCHEMA', payload: structureParse.mails });
                dispatch({ type: 'INSERT_SETTING', payload: structureParse.settings });
            }
        });
    }
};
