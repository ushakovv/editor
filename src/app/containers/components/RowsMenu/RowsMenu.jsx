import React, { Component } from 'react';

import { normalizeFormData } from '../../../helpers/Helpers';

import ColorPickerField from '../SettingFields/ColorPickerField';
import ImageField from '../SettingFields/ImageField';
import SliderField from '../SettingFields/SliderField';
import { CounterField } from '../SettingFields/CounterField';
import { LayoutField } from '../SettingFields/LayoutField';

export default class RowsMenu extends Component {
    constructor(props) {
        super(props);

        this.alignType = ['fluid', 'contain'];
        this.update = false;
        this.editRow = 0;
        this.saveSettings = this.saveSettings.bind(this);
    }
    componentDidMount() {
        this.$form = $(this.formRowSave);

        $('.column-counter__btn').click(event => {
            const direc = $(event.target).data('type');
            const counter = $('.column-counter__counter');
            let value = parseInt(counter.val(), 10);

            if (direc === 'increase') {
                if (value < 4) {
                    ++value;
                }
            } else {
                if (value > 1) {
                    --value;
                }
            }

            counter.val(value).click();
        });
    }
    shouldComponentUpdate(nextProps) {
        if (nextProps._rowSettings.index &&
            parseInt(nextProps._rowSettings.index, 10) !== parseInt(this.editRow, 10)) {
            this.editRow = nextProps._rowSettings.index;
            this.update = true;
        }
        return true;
    }
    componentDidUpdate() {
        if (this.update) {
            this.update = false;
        }
    }
    saveSettings() {
        const arrFieldDestruct = normalizeFormData(this.$form.serialize());
        this.props.onRowSettingsChange(arrFieldDestruct);
        this.props.onRowSettingsSave(arrFieldDestruct);
    }
    render() {
        return (
            <div className="control__page control__page_rows_menu">
                <form ref={(input) => this.formRowSave = input}>
                    <CounterField
                        handler={this.saveSettings}
                        val={this.props._rowSettings.cells}
                    />
                    <LayoutField
                        handler={this.saveSettings}
                        val={this.props._rowSettings.layout}
                        alignType={this.alignType}
                    />
                    <SliderField
                        text="Top & Bottom margin"
                        val={this.props._rowSettings.margin}
                        handler={this.saveSettings}
                        update={this.update}
                    />
                    <ImageField
                        text="image#1"
                        handler={this.saveSettings}
                    />
                    <ColorPickerField
                        handler={this.saveSettings}
                        val={this.props._rowSettings.color}
                        color={this.props._rowSettings.color}
                        update={this.update}
                    />
                    <input type="hidden" name="index" defaultValue={this.props._rowSettings.index} />
                </form>
            </div>
        );
    }
}
