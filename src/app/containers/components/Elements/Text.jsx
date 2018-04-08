import React, { Component } from 'react';

import { ElementEnhance } from './ComponentElementHOC';

class Text extends Component {
    constructor(props) {
        super(props);
        this.create = false;
        this.onElementClick = this.props.onElementClick.bind(this);
        this.createTinymce = this.createTinymce.bind(this);
    }
    componentDidMount() {
        this.styleWrapper = {
            overflow: 'hidden',
        };
        this.$el = $(this.el);
        this.initTinyEditor();
    }
    shouldComponentUpdate() {
        if (this.create) {
            return false;
        }
        return true;
    }
    componentWillUpdate() {
        this.initTinyEditor();
    }
    initTinyEditor() {
        tinymce.init({
            selector: `div#tiny-id-${this.props.uniqueId}`,
            inline: true,
            init_instance_callback: (editor) => {
                editor.on('click', () => {
                    $(`div#tiny-id-${this.props.uniqueId}`).focus();
                });
                editor.on('change', (event) => {
                    $('#field-tinymce-content').val($(event.target.targetElm).html()).click();
                });
            },
            plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table contextmenu paste',
            ],
            toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify| bullist numlist outdent indent',
        });
    }
    createTinymce() {
        return { __html: this.props.element.attribute.content };
    }
    render() {
        const style = {
            color: this.props.element.attribute.color,
            textAlign: this.props.element.attribute.textAlign,
            fontFamily: this.props.element.attribute.textFont,
            padding: `${parseInt(this.props.element.attribute.topBottomMargin, 10)}px
            ${parseInt(this.props.element.attribute.leftRightMargin, 10)}px`,
            boxSizing: 'border-box',
        };
        return (
            <div style={this.styleWrapper} onClick={this.onElementClick}>
                <div
                    ref={el => this.el = el}
                    id={`tiny-id-${this.props.uniqueId}`}
                    style={style}
                    dangerouslySetInnerHTML={this.createTinymce()}
                />
            </div>
        );
    }
}

export default ElementEnhance(Text);
