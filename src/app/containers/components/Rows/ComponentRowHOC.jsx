import React, { Component } from 'react';

import { ElementsFactory } from '../Elements/ElementsFactory';
import { isEmptyObject } from '../../../helpers/Helpers';

export const RowEnhance = ComposedComponent => class extends Component {
    constructor(props) {
        super(props);
        this.element = {};
        this.cloneRow = this.cloneRow.bind(this);
        this.removeRow = this.removeRow.bind(this);
        this.renderElement = this.renderElement.bind(this);
        this.rowEdit = this.rowEdit.bind(this);
    }
    componentWillMount() {
        this.element = this.currentState();
    }
    componentDidMount() {
        this.initCell();
        $(this.mailRow).mouseenter(() => {
            $(this.mailRow).addClass('mail__row_active');
        });
        $(this.mailRow).mouseleave(() => {
            $(this.mailRow).removeClass('mail__row_active');
        });
    }
    componentWillUpdate() {
        this.element = this.currentState();
    }
    componentDidUpdate() {
        this.initCell();
    }
    getStructureList() {
        return [...this.props.mails];
    }
    cloneRow(e) {
        e.stopPropagation();
        this.props.onRowClone(this.getStructureList(), this.props.rowId);
    }
    removeRow(e) {
        e.stopPropagation();
        const recalculation = this.currentState();
        this.props.onRowRemove(recalculation.index);
    }
    currentState() {
        let item = {};
        this.props.mails.forEach((val, i) => {
            if (val.id === this.props.rowId) {
                item = {
                    index: i,
                    row: val,
                };
            }
        });
        return item;
    }
    initCell() {
        $('.mail__cell').droppable({
            accept: el => (el.hasClass('panel')),
            drop: (event, ui) => {
                event.stopPropagation();
                const rowId = $(event.target).parents('[data-id]').data('id');
                const cellId = $(event.target).data('cell-id');
                const type = ui.draggable.data('type');
                this.addElement(rowId, cellId, type, this.getStructureList());
            },
            hoverClass: 'mail__cell_hover',
        });
        $('[data-droppable-list="true"]').sortable({
            handle: '.mail__icon_move_cell',
        });
    }
    addElement(rid, cid, type, list) {
        this.props.onElementAdd(rid, cid, type, list);
    }
    rowEdit(event) {
        event.stopPropagation();
        Menu.goTo('structure', 'rows_menu');
        const newIndex = this.currentState();
        this.props.onRowSettingsChange({ ...this.element.row.setting, index: newIndex.index });
    }
    defaultValue(id) {
        return (
            <div className="mail__cell" data-cell-id={id}>
                <div className="mail__action" />
            </div>
        );
    }
    renderElement() {
        const elements = [];
        this.element.row.value.map((elem, i) => {
            if (isEmptyObject(elem.attribute)) {
                return elements.push(this.defaultValue(i));
            }
            elements.push(ElementsFactory(elem, i, this.props));
        });
        return elements;
    }
    render() {
        return (
            <div
                className="mail__row"
                data-id={this.props.rowId}
                style={{
                    backgroundColor: this.props.settings.COLOR_SETTINGS[0].backgroundColor,
                    padding: this.element.row.setting.layout === 'fluid' && 0,
                }}
                ref={mailRow => this.mailRow = mailRow}
                onClick={this.rowEdit}
            >
                <div className="mail__btn_group mail__btn_group_row">
                    <button className="mail__icon_copy mail__icon" onClick={this.cloneRow}>
                        <i className="icon-files-o" />
                    </button>
                    <button className="mail__icon_remove mail__icon" onClick={this.removeRow}>
                        <i className="icon-trash" />
                    </button>
                    <div className="mail__icon_move mail__icon_move_row mail__icon">
                        <i className="icon-arrows" />
                    </div>
                </div>
                <ComposedComponent
                    cellStyle={this.element.row.setting.color || this.props.settings.COLOR_SETTINGS[1].backgroundColor}
                    cellPadding={parseInt(this.element.row.setting.margin, 10)}
                    renderElement={this.renderElement()}
                />
            </div>
        );
    }
};
