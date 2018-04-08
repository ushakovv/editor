import React from 'react';

import { RowEnhance } from './ComponentRowHOC';

const Row = ({ cellStyle, cellPadding, renderElement }) => (
    <div
        className="mail__drop"
        style={{ backgroundColor: cellStyle, paddingTop: cellPadding, paddingBottom: cellPadding }}
    >
        { renderElement.map((elem, i) => (
            <div className="mail__drop-area" key={i}>
                { elem }
            </div>
        )) }
    </div>
);

export default RowEnhance(Row);
