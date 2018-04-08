import React from 'react';

export const TextField = (props) => (
    <div>
        <p className="control__legend">{props.text || 'Some text here'}</p>
        <div>
            <input
                placeholder="Link here ..."
                className="field__text"
                type="text"
                name={props.name}
                value={props.val}
                onChange={props.handler}
            />
        </div>
    </div>
);
