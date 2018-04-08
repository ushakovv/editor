import React, { Component } from 'react';

import { ucFirst, strToObj } from '../../../helpers/Helpers';

export default class SocialField extends Component {
    constructor(props) {
        super(props);
        this.social = strToObj(props._panelSettings.networkSetting);
        this.socialNames = Object.keys(this.social);
        this.socialAll = ['facebook', 'twitter', 'instagram', 'google', 'pinterest', 'linkedin'];
        this.getImgLink = this.getImgLink.bind(this);
        this.renderSocialItem = this.renderSocialItem.bind(this);
        this.removeSocialItem = this.removeSocialItem.bind(this);
    }
    componentDidMount() {
        this.$el = $(this.el);
        this.$input = $(this.input);
        this.$addButton = $(this.addButton);
        this.$socialList = $(this.socialList);

        this.$el.sortable({
            change: (event, ui) => {
                const sortedObj = {};
                ui.item.siblings().each((index, val) => {
                    const type = $(val).attr('data-social-type') || $(ui.item).attr('data-social-type');
                    sortedObj[type] = this.social[type];
                });
                this.$input.val(JSON.stringify(sortedObj)).click();
            },
        }).disableSelection();
        this.$el.find('.icon-edit').on('click', (event) => {
            $(event.target).parents('.social-list__item').toggleClass('social-list__item_active');
        });
        this.$addButton.on('click', () => {
            this.$addButton.toggleClass('social-list__add_hide');
            this.$socialList.toggleClass('social-list__item_hide');
        });
        this.$socialList.find('.social-list__wrap_block').on('click', (event) => {
            const self = $(event.currentTarget);
            const socialName = self.attr('data-type');
            this.social[socialName] = '';
            this.$addButton.toggleClass('social-list__add_hide');
            this.$socialList.toggleClass('social-list__item_hide');
            this.$input.val(JSON.stringify(this.social)).click();
        });
    }
    componentWillUpdate(nextProps) {
        this.social = strToObj(nextProps._panelSettings.networkSetting);
        this.socialNames = Object.keys(this.social);
    }
    componentDidUpdate() {
        this.reInitEvents();
    }
    getImgLink(name) {
        if (name === 'google') {
            return `https://plus.${name}.com/PROFILE`;
        }
        return `https://www.${name}.com/PROFILE`;
    }
    reInitEvents() {
        this.$socialList.find('.social-list__wrap_block').off('click').on('click', (event) => {
            const self = $(event.currentTarget);
            const socialName = self.attr('data-type');
            this.social[socialName] = '';
            this.$addButton.toggleClass('social-list__add_hide');
            this.$socialList.toggleClass('social-list__item_hide');
            this.$input.val(JSON.stringify(this.social)).click();
        });
    }
    removeSocialItem(event) {
        const item = $(event.target).parents('.social-list__item');
        const type = item.data('social-type');
        delete this.social[type];
        this.$input.val(JSON.stringify(this.social)).click();
    }
    renderSocialItem(social, i = 0) {
        return (
            <li className="social-list__item" key={i} data-social-type={social}>
                <p className="social-list__wrap">
                    <img
                        src={`/img/${social}.png`}
                        alt={social}
                        className="social-list__cell social-list__img"
                    />
                    <span className="social-list__cell social-list__text">{ucFirst(social)}</span>
                    <span className="social-list__cell social-list__active-block">
                        <i className="icon-edit social-list__active" />
                        <i className="icon-trash social-list__active" onClick={this.removeSocialItem} />
                        <i className="icon-th social-list__active" />
                    </span>
                </p>
                <p className="social-list__wrap social-list__wrap_input">
                    <i className="el-input__icon el-icon-link" />
                    <input
                        type="text"
                        className="social-list__input"
                        defaultValue={this.getImgLink(social)}
                    />
                </p>
            </li>
        );
    }
    render() {
        return (
            <div>
                <p className="control__legend">{this.props.text}</p>
                <ul className="social-list" ref={el => this.el = el}>
                    {
                        this.socialNames.map((social, i) => this.renderSocialItem(social, i))
                    }
                </ul>
                <div>
                    <span className="social-list__add" ref={addButton => this.addButton = addButton}>
                        <i className="icon-plus" />
                        Add another
                    </span>
                    <div
                        className="social-list__item social-list__item_block social-list__item_hide"
                        ref={socialList => this.socialList = socialList}
                    >
                        {
                            this.socialAll
                                .filter(socName => typeof this.social[socName] !== 'string').map((socName, i) => (
                                    <p
                                        className="social-list__wrap social-list__wrap_block"
                                        key={i}
                                        data-type={socName}
                                    >
                                        <img
                                            src={`/img/${socName}.png`}
                                            alt={socName}
                                            className="social-list__cell social-list__img social-list__cell_block"
                                        />
                                    </p>
                                ))
                        }
                    </div>
                </div>
                <div>
                    <input
                        placeholder="Link here ..."
                        className="field__text"
                        type="hidden"
                        name={this.props.name}
                        value={JSON.stringify(this.social)}
                        onClick={this.props.handler}
                        ref={input => this.input = input}
                    />
                </div>
            </div>
        );
    }
}
