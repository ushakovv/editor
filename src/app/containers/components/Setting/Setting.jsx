import React, { Component } from 'react';

export default class Setting extends Component {
    constructor(props) {
        super(props);

        this.fontSize = [10, 11, 13, 15, 19, 24, 32];
        this.fontTypes = ['Arial', 'Bitter', 'Cabin', 'Georgia', 'Helvetica'];
        this.lineHeight = [1, 2, 3, 4];

        this.saveSettings = this.saveSettings.bind(this);
    }
    currentSetting() {
        return this.props.settings;
    }
    saveSettings(event) {
        const self = $(event.target);
        const name = self.attr('name').split('.');
        const val = self.val();

        let block = '';
        let filter = {};

        if (name.length === 2) {
            block = name[0];
            filter = name[1];
        } else if (name.length === 3) {
            block = name[0];
            filter = {
                field: name[1],
                type: name[2],
            };
        } else {
            block = name[0];
        }
        this.props.onSettingsChange(block, val, this.currentSetting(), filter);
    }
    componentDidMount() {
        $('#set').buttonset();
        $('.colorSelector').each(function(index, val) {
            $(val).ColorPicker({
                onShow: (colpkr) => {
                    $(colpkr).fadeIn(500);
                    return false;
                },
                onHide: (colpkr) => {
                    $(colpkr).fadeOut(500);
                    return false;
                },
                onChange: function(input, hsb, hex, rgb) {
                    $(input).find('div').css('backgroundColor', `#${hex}`);
                    $(input).next().val(`#${hex}`).click();
                },
                input: this,
                color: $(this).data('color'),
            });
        });
        $('.dropdown-list select').selectmenu({
            change: (event, ui) => {
                ui.item.element.parent().trigger('click');
            },
        });
    }
    render() {
        return (
            <div className="control__page control__page_settings">
                <form>
                    <div className="control__block_inline">
                        <h3 className="control__header">Color settings</h3>
                        {
                            this.props.settings.COLOR_SETTINGS.map((color, i) => (
                                <div className="control__block" key={i}>
                                    <p className="control__legend">{color.name}</p>
                                    <div
                                        className="control__colorpicker colorSelector"
                                        data-color={color.backgroundColor}
                                    >
                                        <div
                                            className="colorpicker-btn"
                                            style={{ backgroundColor: color.backgroundColor }}
                                        ></div>
                                    </div>
                                    <input
                                        type="text"
                                        className="control__input"
                                        name={`COLOR_SETTINGS.${color.type}`}
                                        readOnly="true"
                                        defaultValue={color.backgroundColor}
                                        onClick={this.saveSettings}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        <h3 className="control__header">Font settings</h3>
                        {
                            this.props.settings.FONT_SETTINGS.map((font, i) => (
                                <div className="control__block" key={i}>
                                    <p className="control__legend">{font.name}</p>
                                    <div className="control__colorpicker colorSelector">
                                        <div className="colorpicker-btn"></div>
                                    </div>
                                    <input
                                        type="text"
                                        className="control__input control__input_text control__input_hidden"
                                        name={`FONT_SETTINGS.color.${font.type}`}
                                        readOnly="true"
                                        onClick={this.saveSettings}
                                    />
                                    <div className="dropdown-list dropdown-list_num">
                                        <select
                                            name={`FONT_SETTINGS.size.${font.type}`}
                                            className="font-size-h1"
                                            defaultValue={font.size}
                                            onClick={this.saveSettings}
                                        >
                                            {
                                                this.fontSize.map((size, i) => {
                                                    return <option value={size} key={i}>{size}</option>;
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="dropdown-list dropdown-list_text">
                                        <select
                                            name={`FONT_SETTINGS.font.${font.type}`}
                                            className="font-size-h1"
                                            defaultValue={font.font}
                                            onClick={this.saveSettings}
                                        >
                                            {
                                                this.fontTypes.map((type, i) => {
                                                    return <option value={type} key={i}>{type}</option>;
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        <h3 className="control__header">Line height</h3>
                        <div className="control__block">
                            <p className="control__legend">Spacing</p>
                            <div id="set">
                                {
                                    this.lineHeight.map((lineHeight, i) => (
                                        <span key={i} className="line-height__wrapper">
                                            <input
                                                type="radio"
                                                id={`radio${lineHeight}`}
                                                name="LINE_HEIGHT"
                                                className="line-height__input"
                                                checked={this.props.settings.LINE_HEIGHT === lineHeight}
                                                value={lineHeight}
                                                onChange={this.saveSettings}
                                            />
                                            <label
                                                htmlFor={`radio${lineHeight}`}
                                                className={`line-height__btn
                                                line-height__btn_spacing line-height__btn_${i}`}
                                            />
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
