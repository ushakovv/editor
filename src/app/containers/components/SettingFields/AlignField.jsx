import React from 'react';

const alignType = ['left', 'center', 'right'];

export const AlignField = ({ val, handler, name, text }) => (
    <div>
        <p className="control__legend">{text}</p>
        <div className="row-layout">
            {
                alignType.map((type, i) => (
                    <span className="line-height__wrapper" key={i}>
                        <input
                            id={`align-${type}`}
                            type="radio"
                            name={name}
                            className="line-height__input"
                            onChange={handler}
                            value={alignType[i]}
                            defaultChecked={val === type && true}
                        />
                        <label
                            htmlFor={`align-${type}`}
                            className="line-height__btn line-height__btn_with_icon"
                        >
                            {
                                type === 'left' && <i className="icon-btn-left2"></i>
                            }
                            {
                                type === 'center' && <i className="icon-btn-centered2"></i>
                            }
                            {
                                type === 'right' && <i className="icon-btn-right2"></i>
                            }
                        </label>
                    </span>
                ))
            }
        </div>
    </div>
);
