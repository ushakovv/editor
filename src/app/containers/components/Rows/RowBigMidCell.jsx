import React from 'react';

import { RowEnhance } from './ComponentRowHOC';

const RowToBig = ({ cellStyle, cellPadding, renderElement }) => (
    <div
        className="mail__drop mail__drop-area mail__drop_big"
        data-droppable-list="true"
        style={{ backgroundColor: cellStyle, padding: `${cellPadding}px 0` }}
    >
        { renderElement.map((elem, i) => (
            <div className="mail__drop_cell" key={i}>
                { elem }
            </div>
        )) }
    </div>
);

export default RowEnhance(RowToBig);
