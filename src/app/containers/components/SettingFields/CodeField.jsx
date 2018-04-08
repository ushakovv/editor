import React, { Component } from 'react';

export default class CodeField extends Component {
    constructor(props) {
        super(props);
        this.timerId = 0;
        this.editor = false;
        this.createMakup = () => (
            { __html: this.props.element.attribute.code }
        );
    }
    componentDidMount() {
        this.$el = $(this.el);
        this.$input = $(this.input);
        this.initAceCode();
    }
    componentDidUpdate() {
        this.initAceCode();
    }
    initAceCode() {
        if (this.editor) {
            this.editor.destroy();
        }
        this.editor = ace.edit(this.$el.attr('id'));
        this.editor.setTheme('ace/theme/monokai');
        this.editor.resize();
        this.editor.session.setMode('ace/mode/html');
        this.editor.session.on('change', () => {
            clearTimeout(this.timerId);
            this.timerId = setTimeout(() => {
                this.$input.val(this.editor.getValue()).click();
            }, 800);
        });
    }
    render() {
        return (
            <div>
                <p className="control__legend">{this.props.text}</p>
                <div onChange={this.props.handler} ref={(el) => this.el = el} id="ace-editor">
                    {this.props.val}
                </div>
                <input
                    type="hidden"
                    ref={(input) => this.input = input}
                    value={toString(this.props.val)}
                    onClick={this.props.handler}
                    name={this.props.name}
                />
            </div>
        );
    }
}
