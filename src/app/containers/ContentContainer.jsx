import React, { Component } from 'react';

import { Panel } from './components/Panel/Panel';
import { Structure } from './components/Structure/Structure';

import Setting from './components/Setting/Setting';

import PanelMenu from './components/PanelMenu/PanelMenu';
import RowsMenu from './components/RowsMenu/RowsMenu';

export default class Content extends Component {
    componentDidMount() {
        $('[data-contentn-drag="drag"]').draggable({
            revert: 'invalid',
            helper: 'clone',
        });

        $('[data-drag-with-list="drag"]').draggable({
            connectToSortable: '.mail',
            helper: 'clone',
            revert: 'invalid',
        });
    }
    render() {
        return (
            <div>
                <Panel />
                <Structure />
                <Setting {...this.props} />
                <PanelMenu {...this.props} />
                <RowsMenu {...this.props} />
            </div>
        );
    }
}
