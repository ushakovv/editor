import React from 'react';

export const NumberField = (props) => (
    <div>
        <p className="control__legend">{props.text}</p>
        <div>
            <input
                className="field__text input__number"
                type="number"
                name={props.name}
                value={props.val}
                onChange={props.handler}
            />
        </div>
    </div>
);
