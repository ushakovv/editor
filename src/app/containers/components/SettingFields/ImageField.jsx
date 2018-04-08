import React, { Component } from 'react';

import { Image } from '../../../model/Image';
import { getFrameData } from '../../../helpers/Helpers';


export default class ImageField extends Component {
    constructor(props) {
        super(props);
        this.uploadImage = this.uploadImage.bind(this);
    }
    componentDidMount() {
        this.$input = $(this.input);
        this.$activeField = $(this.activeField);
    }
    uploadImage() {
        const _self = this;
        const options = getFrameData();
        const image = new FormData(this.$input[0]);
        image.set('template_id', options.id);
        Image.upload(options, image, (response) => {
            _self.$activeField.val(response.data.result.image.url).click();
        });
    }
    render() {
        return (
            <div>
                <p className="control__legend">Background image</p>
                <label htmlFor="row-img-loader" className="btn__wrapper">
                    <button type="button" className="btn btn_grey">
                        <span>{this.props.text || 'upload image'}</span>
                    </button>
                    <form action="" ref={(input) => this.input = input}>
                        <input
                            type="file"
                            name="file"
                            className="btn_hidden"
                            onChange={this.uploadImage}
                        />
                    </form>
                </label>
                <input
                    type="hidden"
                    name={this.props.name}
                    className="btn_hidden"
                    onClick={this.props.handler}
                    ref={(activeField) => this.activeField = activeField}
                />
                <p className="control__legend">
                    Not every e-mail client can show background image properly.
                    According to that, set also similar background color.
                </p>
            </div>
        );
    }
}
