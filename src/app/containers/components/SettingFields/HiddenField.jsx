import React from 'react';

export const HiddenField = props => (
    <div>
        <input
            id="field-tinymce-content"
            type="hidden"
            name={props.name}
            value={props.val}
            onClick={props.handler}
        />
    </div>
);
