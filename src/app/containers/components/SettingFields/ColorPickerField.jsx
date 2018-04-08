import React, { Component } from 'react';

export default class ColorPickerField extends Component {
    componentDidMount() {
        this.$el = $(this.el);
        this.$el.ColorPicker({
            onShow: (colpkr) => {
                $(colpkr).fadeIn(500);
                return false;
            },
            onHide: (colpkr) => {
                $(colpkr).fadeOut(500);
                return false;
            },
            onChange: (input, hsb, hex) => {
                $(input).find('div').css('backgroundColor', `#${hex}`);
                $(input).next().val(`#${hex}`);
                $(input).next().click();
            },
            input: this.$el,
            color: this.$el.data('color'),
        });
    }
    render() {
        return (
            <div>
                <div className="control__block">
                    <p className="control__legend">{this.props.text || 'Color'}</p>
                    <div
                        className="control__colorpicker"
                        ref={(el) => this.el = el}
                    >
                        <div className="colorpicker-btn" style={{ backgroundColor: this.props.val }} />
                    </div>
                    <input
                        type="text"
                        className="control__input"
                        name={this.props.name || 'color'}
                        value={this.props.val}
                        onClick={this.props.handler}
                    />
                </div>
            </div>
        );
    }
}
