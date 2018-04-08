import React, { Component } from 'react';

export const ElementEnhance = ComposedComponent => class extends Component {
    constructor(props) {
        super(props);
        this.cellId = 0;
        this.rowId = 0;
        this.element = {};
        this.onRemoveCell = this.onRemoveCell.bind(this);
        this.onCloneCell = this.onCloneCell.bind(this);
        this.onElementClick = this.onElementClick.bind(this);
    }
    componentWillMount() {
        this.cellId = this.props.cellId;
        this.rowId = this.props.rowId;
        this.element = this.props.element;
    }
    componentDidMount() {
        $(this.mailCell).mouseenter((event) => {
            event.stopPropagation();
            $(this.mailCell).addClass('mail__cell_item_active');
            $(this.mailCell).parents('.mail__row').removeClass('mail__row_active');
        });
        $(this.mailCell).mouseleave(() => {
            $(this.mailCell).removeClass('mail__cell_item_active');
            $(this.mailCell).parents('.mail__row').addClass('mail__row_active');
        });
    }
    onRemoveCell(event) {
        this.props.mails[this.rowId - 1].value[this.cellId] = {};
        event.stopPropagation();
        this.props.onElementRemove(this.props.mails);
    }
    onCloneCell(event) {
        debugger;
        event.stopPropagation();
        //this.props.onElementClone();
    }
    onElementClick(event) {
        event.stopPropagation();
        this.props.onPanelSettingsSet(this.rowId, this.cellId, this.props.mails);
        Menu.goTo('content', 'panel_menu');
    }
    render() {
        return (
            <div className="mail__cell_item" ref={mailCell => this.mailCell = mailCell}>
                <div className="mail__btn_group">
                    <button className="mail__icon_copy mail__icon" onClick={this.onCloneCell}>
                        <i className="icon-files-o" />
                    </button>
                    <button className="mail__icon_remove mail__icon" onClick={this.onRemoveCell}>
                        <i className="icon-trash" />
                    </button>
                    <div className="mail__icon_move mail__icon_move_cell mail__icon">
                        <i className="icon-arrows" />
                    </div>
                </div>
                <ComposedComponent
                    onElementClick={this.onElementClick}
                    element={this.element}
                    settings={this.props.settings}
                    uniqueId={this.rowId + '' + this.cellId}
                />
            </div>
        );
    }
};
