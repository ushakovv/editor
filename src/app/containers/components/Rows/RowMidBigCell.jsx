import React from 'react';

import { RowEnhance } from './ComponentRowHOC';

const RowToMid = ({ cellStyle, cellPadding, renderElement }) => (
    <div
        className="mail__drop mail__drop-area mail__drop_mid"
        data-droppable-list="true"
        style={{ backgroundColor: cellStyle, paddingTop: cellPadding, paddingBottom: cellPadding }}
    >
        { renderElement.map((elem, i) => (
            <div className="mail__drop_cell" key={i}>
                { elem }
            </div>
        )) }
    </div>
);

export default RowEnhance(RowToMid);
