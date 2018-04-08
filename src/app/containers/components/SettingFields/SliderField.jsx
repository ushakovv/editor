import React, { Component } from 'react';

export default class SliderField extends Component {
    constructor(props) {
        super(props);

        this.update = true;
    }
    getCallback() {
        return {
            create: (event) => {
                $(event.target).slider('option', 'value', parseInt($(event.target).find('input').val(), 10));
            },
            slide: (event, ui) => {
                $(event.target).find('input').val(ui.value).click();
            },
        };
    }
    reinitEvents() {
        this.$el.slider('destroy').slider(this.getCallback());
    }
    componentDidMount() {
        this.$el = $(this.el);
        this.$el.slider(this.getCallback());
    }
    componentDidUpdate() {
        if (this.props.update) {
            this.reinitEvents();
        }
    }
    componentWillUnmount() {
        // TODO Somehow component unmounted and again mount broken slider
    }
    render() {
        return (
            <div>
                <p className="control__legend">{this.props.text || 'Some text here'}</p>
                <div className="settings-slider" ref={(el) => this.el = el}>
                    <input
                        type="hidden"
                        name={this.props.name || 'margin'}
                        value={parseInt(this.props.val, 10) || 0}
                        onClick={this.props.handler || (() => {})}
                    />
                </div>
            </div>
        );
    }
}
