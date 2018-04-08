import React, { Component } from 'react';
import { connect } from 'react-redux';

import { rowAdd, rowSort, rowClone } from '../actions/rowMethods';
import { elementAdd, setPanelSettings, savePanelSettings, asyncInsertShemaData } from '../actions/elementMethods';
import { saveSettingChange } from '../actions/settingMethods';

import Content from './ContentContainer';
import Template from './TemplateContainer';

import { Template as Tpl } from '../model/Template';
import { Mail } from '../model/Mail';
import { getFrameData } from '../helpers/Helpers';

import config from '../config';


class Layout extends Component {
    constructor(props) {
        super(props);

        this.getMailStructure = this.getMailStructure.bind(this);
        this.switchToPrev = this.switchToPrev.bind(this);
        this.switchToMobile = this.switchToMobile.bind(this);
        this.saveTpl = this.saveTpl.bind(this);
    }
    componentDidMount() {
        this.$btn = $(this.btn);
        this.$previewBlock = $(this.previewBlock);
        this.$root = $(this.preview);
        this.$root = $(this.preview);
        this.$testMail = $(this.testMail);
        this.$mailForm = $(this.mailForm);
        this.$btn.on('click', (event) => {
            $(event.currentTarget).toggleClass('device-changer__btn_mobile');
        });
        this.$mailForm.on('submit', (event) => {
            event.preventDefault();
            const options = getFrameData();
            const mail = this.$testMail.val();
            const formData = `template_id=${options.id}&email=${mail}`;
            Mail.send(options, formData, () => {
                notific8('Email was send', {
                    life: 3000,
                    theme: 'materialish',
                    icon: 'check-mark-2',
                    color: 'creamsicle',
                    horizontalEdge: 'bottom',
                    verticalEdge: 'right',
                    zindex: 1500,
                    closeText: 'close',
                });
            });
        });
        this.emitEventNavMenu();
        this.props.onInsertSchema();
    }
    saveTpl() {
        const data = {
            mails: this.props.mails,
            settings: this.props.settings,
        };
        const options = getFrameData();
        Tpl.save(JSON.stringify(data), options, () => {
            notific8('Current template saved', {
                life: 3000,
                theme: 'materialish',
                icon: 'check-mark-2',
                color: 'creamsicle',
                horizontalEdge: 'bottom',
                verticalEdge: 'right',
                zindex: 1500,
                closeText: 'close',
            });
        });
    }
    saveAndDownloadTpl() {
        const options = getFrameData();
        Tpl.download(options);
    }
    getMailStructure() {
        const _self = this;
        const options = getFrameData();
        const data = JSON.stringify({
            mails: this.props.mails,
            settings: this.props.settings,
        });
        Tpl.preview(options, data, (response) => {
            _self.$previewBlock.html(response.data.result.template.content_html);
        });
    }
    switchToPrev(event) {
        this.$root.toggleClass('preview');
        if ($(event.currentTarget).hasClass('template__show_desktop')) {
            this.getMailStructure();
        }
    }
    switchToMobile() {
        this.$previewBlock.toggleClass('preview-template_mobile');
    }
    emitEventNavMenu() {
        class Menu {
            constructor(context) {
                this.nav = context.find('.control__nav');
                this.tab = context.find('.control__tab');
                this.pages = context.next();

                this.init();

                window.Menu = this;
            }
            init() {
                this.tab.on('click', (event) => {
                    const type = $(event.target).data('type');

                    this.goTo(type);
                });
            }
            goTo(type, pageType) {
                let shift = 0;

                switch (type) {
                case 'content':
                    shift = 0;
                    break;
                case 'structure':
                    shift = 100;
                    break;
                case 'settings':
                    shift = 200;
                    break;
                default:
                    shift = 0;
                }

                this.nav.css('transform', `translateX(${shift}%)`);

                this.tab.removeClass('control__tab_active');
                this.tab.addClass('control__tab_active');

                pageType ? type = pageType : false;

                this.pages.find('.control__page').removeClass('control__page_active');
                this.pages.find(`.control__page_${type}`).addClass('control__page_active');
            }
        }
        new Menu($(this.Nav));
    }
    render() {
        const options = getFrameData();
        return (
            <div ref={(root) => this.preview = root}>
                <section className="control">
                    <nav className="control__menu" data-js="controlMenu" ref={input => this.Nav = input}>
                        <li className="control__nav"></li>
                        <li className="control__tab control__tab_active" data-type="content">Content</li>
                        <li className="control__tab" data-type="structure">Structure</li>
                        <li className="control__tab" data-type="settings">Settings</li>
                    </nav>
                    <Content {...this.props} />
                </section>
                <section className="template">
                    <div className="template__title">
                        <span className="template__show template__show_desktop" onClick={this.switchToPrev}>
                            <i className="icon-desktop"></i>
                             Preview & testing
                        </span>
                        <span className="template__show template__show_back" onClick={this.switchToPrev}>
                            <i className="icon-reply"></i>
                            Back to editor
                        </span>
                        <a href={`${options.rest}/template_archive?template_id=${options.id}`} className="btn btn_blue">
                            Save & Download
                        </a>
                        <button className="btn" onClick={this.saveTpl}>Save</button>
                    </div>
                    <div className="template__title template__title_prev template__prev_nav">
                        <div className="device-changer">
                            <div className="icon-desktop device-changer_icon" />
                            <div className="device-changer__switch">
                                <div
                                    className="device-changer__btn"
                                    onClick={this.switchToMobile}
                                    ref={(btn) => this.btn = btn}
                                />
                            </div>
                            <div className="icon-mobile device-changer_icon" />
                        </div>
                        <form className="template__prev_form" ref={(mailForm) => this.mailForm = mailForm}>
                            <p className="template__prev_legend">SEND YOURSELF A TEST E-MAIL</p>
                            <input
                                type="text"
                                name="email"
                                placeholder="E-mail address"
                                className="template__prev_input"
                                ref={(testMail) => this.testMail = testMail}
                            />
                            <button
                                type="submit"
                                className="el-button el-button--success is-disabled template__prev_btn"
                            >
                                <span>
                                    <i className="icon-send" />
                                </span>
                            </button>
                        </form>
                    </div>
                    <Template {...this.props} />
                    <div className="preview-template" ref={(previewBlock) => this.previewBlock = previewBlock} />
                </section>
            </div>
        );
    }
}

export default connect(
    state => ({
        mails: state.mails,
        settings: state.settings,
        _rowSettings: state._rowSettings,
        _panelSettings: state._panelSettings,
    }),
    dispatch => ({
        onRowAdd: (type) => {
            rowAdd(dispatch, type);
        },
        onRowSort: (type, queue) => {
            rowAdd(dispatch, type);
            dispatch({ type: 'SORT_ROW', sort: queue });
        },
        onRowClone: (list, id) => {
            rowClone(dispatch, list, id);
        },
        onRowRemove: (pos) => {
            dispatch({ type: 'REMOVE_ROW', position: pos });
        },
        onSortList: (list, queue) => {
            rowSort(dispatch, list, queue);
        },
        onElementAdd: (rid, cid, type, list) => {
            elementAdd(dispatch, rid, cid, type, list);
        },
        onElementRemove: (list) => {
            dispatch({ type: 'ELEMENT_REMOVE', payload: list });
        },
        onElementClone: (list) => {
            dispatch({ type: 'ELEMENT_CLONE', payload: list });
        },
        onSettingsChange: (block, val, list, filter) => {
            saveSettingChange(dispatch, block, val, list, filter);
        },
        onRowSettingsChange: (setting) => {
            dispatch({ type: 'SET_ROW_SETTING', settings: setting });
        },
        onRowSettingsSave: (setting) => {
            dispatch({ type: 'SAVE_ROW_SETTING', newSetting: setting });
        },
        onInsertSchema: () => {
            dispatch(asyncInsertShemaData());
        },
        onPanelSettingsSet: (rid, cid, list) => {
            setPanelSettings(dispatch, rid, cid, list);
        },
        onPanelSettingsSave: (list, newSetting) => {
            savePanelSettings(dispatch, list, newSetting);
        },
    }),
)(Layout);
