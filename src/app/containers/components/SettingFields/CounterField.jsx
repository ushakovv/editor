import React from 'react';

export const CounterField = ({ handler, val }) => {
    return (
        <div>
            <p className="control__legend">Columns</p>
            <div className="row-layout">
                <input
                    type="text"
                    value={val}
                    name="cells"
                    readOnly="true"
                    className="column-counter__counter"
                    onClick={handler}
                />
                <button type="button" className="column-counter__btn" data-type="increase">+</button>
                <button type="button" className="column-counter__btn" data-type="reduce">-</button>
            </div>
        </div>
    );
};
