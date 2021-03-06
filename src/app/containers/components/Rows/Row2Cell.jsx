import React from 'react';

import { RowEnhance } from './ComponentRowHOC';

const RowTo2 = ({ cellStyle, cellPadding, renderElement }) => (
    <div
        className="mail__drop"
        data-droppable-list="true"
        style={{ backgroundColor: cellStyle, paddingTop: cellPadding, paddingBottom: cellPadding }}
    >
        { renderElement.map((elem, i) => (
            <div className="mail__drop-area_2" key={i}>
                { elem }
            </div>
        )) }
    </div>
);

export default RowEnhance(RowTo2);
