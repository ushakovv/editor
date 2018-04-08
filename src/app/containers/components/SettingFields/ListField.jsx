import React, { Component } from 'react';

import { ucFirst } from '../../../helpers/Helpers';

export default class ListField extends Component {
    constructor(props) {
        super(props);
        this.types = props.list || [];
    }
    componentDidMount() {
        this.$el = $(this.el);
        this.$el.selectmenu(this.getCallback());
    }
    componentDidUpdate() {
        if (this.props.update) {
            this.reinitEvents();
        }
    }
    getCallback() {
        return {
            change: (event, ui) => {
                ui.item.element.parent().trigger('click');
            },
        };
    }
    reinitEvents() {
        this.$el.selectmenu('destroy').selectmenu(this.getCallback());
    }
    render() {
        return (
            <div className="dropdown-list dropdown-list_text">
                <p className="control__legend">{this.props.text}</p>
                <select
                    name={this.props.name}
                    className="font-size-h1"
                    defaultValue={this.props.val}
                    onClick={this.props.handler}
                    ref={(el) => this.el = el}
                >
                    {
                        this.types.map((type, i) => {
                            return <option value={type} key={i}>{ucFirst(type)}</option>;
                        })
                    }
                </select>
            </div>
        );
    }
}
