import React from 'react';

const borderType = ['normal', 'radius'];

export const BorderField = ({ val, handler, name, text }) => (
    <div>
        <p className="control__legend">{text}</p>
        <div className="row-layout">
            {
                borderType.map((type, i) => (
                    <span className="line-height__wrapper" key={i}>
                        <input
                            id={`align-${type}`}
                            type="radio"
                            name={name}
                            className="line-height__input"
                            onChange={handler}
                            value={borderType[i]}
                            defaultChecked={val === type && true}
                        />
                        <label
                            htmlFor={`align-${type}`}
                            className="line-height__btn line-height__btn_with_icon"
                        >
                            {
                                type === 'normal' ?
                                    (<i className="icon-border-sharp"></i>) :
                                    (<i className="icon-border-round"></i>)
                            }
                        </label>
                    </span>
                ))
            }
        </div>
    </div>
);
