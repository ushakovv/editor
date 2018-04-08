import React, { Component } from 'react';

import { FieldsFactory } from '../SettingFields/FieldsFactory';
import { isEmptyObject, normalizeFormData, strToObj } from '../../../helpers/Helpers';

export default class PanelMenu extends Component {
    constructor(props) {
        super(props);

        this.fields = [];
        this.update = false;
        this.editCell = {};
        this.saveSettings = this.saveSettings.bind(this);
    }
    componentDidMount() {
        this.$form = $(this.formPanelSave);
    }
    shouldComponentUpdate(nextProps) {
        if (!!Object.keys(this.props._panelSettings).length &&
            nextProps._panelSettings.networkSetting &&
            Object.keys(strToObj(nextProps._panelSettings.networkSetting)).length ===
            Object.keys(strToObj(this.props._panelSettings.networkSetting)).length) {
            return false;
        }
        if (!!Object.keys(nextProps._panelSettings).length &&
            JSON.stringify(nextProps._panelSettings._curds) !== JSON.stringify(this.editCell)) {
            this.editCell = nextProps._panelSettings._curds;
            this.update = true;
        }
        return true;
    }
    componentDidUpdate() {
        if (this.update) {
            this.update = false;
        }
    }
    generateSettingForm() {
        const _setting = this.props._panelSettings;
        if (isEmptyObject(_setting)) {
            return false;
        }
        this.fields = [];
        const fieldsName = Object.keys(_setting);
        fieldsName.map((field) => {
            const list = this.props._panelSettings._default;
            this.fields.push(FieldsFactory(field, _setting[field], this.saveSettings, field, list, this.editCell, this.props));
        });
    }
    saveSettings() {
        const arrFieldDestruct = normalizeFormData(this.$form.serialize());
        const _curds = this.props._panelSettings._curds;
        arrFieldDestruct._curds = _curds;
        this.props.onPanelSettingsSave(this.props.mails, arrFieldDestruct);
        this.props.onPanelSettingsSet(_curds.rid, _curds.cid, this.props.mails);
    }
    render() {
        this.generateSettingForm();
        return (
            <div className="control__page control__page_panel_menu">
                <form ref={input => this.formPanelSave = input}>
                    {
                        this.fields.map((field, index) => {
                            return (<div key={index}>{field}</div>);
                        })
                    }
                </form>
            </div>
        );
    }
}
