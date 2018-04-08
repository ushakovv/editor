import React, { Component } from 'react';

import Row1Cell from './components/Rows/Row1Cell';
import Row2Cell from './components/Rows/Row2Cell';
import Row3Cell from './components/Rows/Row3Cell';
import Row4Cell from './components/Rows/Row4Cell';
import RowBigMidCell from './components/Rows/RowBigMidCell';
import RowMidBigCell from './components/Rows/RowMidBigCell';

import { sortMailsOrder } from '../helpers/Helpers';

export default class Template extends Component {
    constructor(props) {
        super(props);
        this.create = false;
        this.queue = [];
    }
    componentDidMount() {
        this.$mail = $(this.mail);
        this.initRow();
    }
    componentWillUpdate() {
        this.reInitRow();
    }
    getStateImmediately() {
        return this.props.mails;
    }
    reInitRow() {
        this.$mail.sortable('destroy').droppable('destroy');
        this.initRow();
    }
    initRow() {
        this.$mail.sortable({
            revert: true,
            scroll: false,
            handle: '.mail__icon_move_row',
            tolerance: 'intersect',
            change: () => {
                this.queue = [];
                this.$mail.find('.mail__row, .ui-sortable-placeholder').each((index, val) => {
                    if (!$(val).hasClass('ui-sortable-placeholder')) {
                        this.queue.push($(val).data('id'));
                    } else {
                        this.queue.push(0);
                    }
                });
            },
            stop: () => {
                this.props.onSortList.call(this, this.props.mails, this.queue);
            },
        }).droppable({
            accept: '.structure',
            helper: 'clone',
            greedy: true,
            drop: (event, ui) => {
                ui.draggable.remove();
                this.props.onRowAdd.call(this, ui.draggable.data('col'));
                this.props.onSortList.call(this, this.props.mails, this.queue);
            },
        });
    }
    renderGlobalStyle() {
        let globalStyle = '';
        this.props.settings.FONT_SETTINGS.map((val) => {
            globalStyle += `${val.teg} {color: ${val.color}; size: ${val.size}px; font-family: ${val.font};}`;
        });
        if (this.props.settings.COLOR_SETTINGS[3].backgroundColor) {
            globalStyle += `a {color: ${this.props.settings.COLOR_SETTINGS[3].backgroundColor};}`;
        }
        globalStyle += `h1, h2, h3, h4, h5, h6, span, p, {line-height: ${this.props.settings.LINE_HEIGHT}}`;
        return { __html: globalStyle };
    }
    render() {
        return (
            <main className="mail" ref={(mail) => this.mail = mail} >
                <style dangerouslySetInnerHTML={this.renderGlobalStyle()} />
                {sortMailsOrder(this.props.mails).map((row) => {
                    switch (parseInt(row.setting.cells, 10)) {
                    case 1:
                        return <Row1Cell key={row.id} rowId={row.id} {...this.props} />;
                    case 2:
                        return <Row2Cell key={row.id} rowId={row.id} {...this.props} />;
                    case 3:
                        return <Row3Cell key={row.id} rowId={row.id} {...this.props} />;
                    case 4:
                        return <Row4Cell key={row.id} rowId={row.id} {...this.props} />;
                    case 5:
                        return <RowBigMidCell key={row.id} rowId={row.id} {...this.props} />;
                    case 6:
                        return <RowMidBigCell key={row.id} rowId={row.id} {...this.props} />;
                    default:
                        return <Row1Cell key={row.id} rowId={row.id} {...this.props} />;
                    }
                })}
            </main>
        );
    }
}
