import React from 'react';

const TextAlignType = ['left', 'center', 'right', 'justify'];

export const TextAlignField = ({ val, handler, name, text }) => (
    <div>
        <p className="control__legend">{text}</p>
        <div className="row-layout">
            {
                TextAlignType.map((type, i) => (
                    <span className="line-height__wrapper" key={i}>
                        <input
                            id={`align-${type}`}
                            type="radio"
                            name={name}
                            className="line-height__input"
                            onChange={handler}
                            value={TextAlignType[i]}
                            defaultChecked={val === type && true}
                        />
                        <label
                            htmlFor={`align-${type}`}
                            className="line-height__btn line-height__btn_with_icon"
                        >
                            {
                                type === 'left' && <i className="icon-align-left"></i>
                            }
                            {
                                type === 'center' && <i className="icon-align-center"></i>
                            }
                            {
                                type === 'right' && <i className="icon-align-right"></i>
                            }
                            {
                                type === 'justify' && <i className="icon-align-justify"></i>
                            }
                        </label>
                    </span>
                ))
            }
        </div>
    </div>
);
