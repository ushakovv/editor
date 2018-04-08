import { combineReducers } from 'redux';

import settings from './settings';
import mails from './mails';

import _rowSettings from './_rowSettings';
import _panelSettings from './_panelSettings';

export default combineReducers({
    settings,
    mails,
    _rowSettings,
    _panelSettings,
});
