import React from 'react';

export const LayoutField = ({ handler, val, alignType }) => (
    <div>
        <p className="control__legend">Layout</p>
        <div className="row-layout">
            {
                alignType.map((type, i) => (
                    <span className="line-height__wrapper" key={i}>
                        <input
                            id={`row-layout-${type}`}
                            type="radio"
                            name="layout"
                            className="line-height__input"
                            onChange={handler}
                            value={alignType[i]}
                            defaultChecked={val === type && true}
                        />
                        <label
                            htmlFor={`row-layout-${type}`}
                            className="line-height__btn line-height__btn_with_icon"
                        >
                            {
                                type === 'fluid'
                                    ? (<i className="icon-two-cols-wide"></i>)
                                    : (<i className="icon-two-cols"></i>)
                            }
                        </label>
                    </span>
                ))
            }
        </div>
    </div>
);
