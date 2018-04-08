import React from 'react';

export const Structure = () => (
    <div className="control__page control__page_structure">
        <div className="structure" data-col="col_one" data-drag-with-list="drag" draggable="true">
            <div className="structure__col structure__col_one"></div>
        </div>
        <div className="structure" data-col="col_two" data-drag-with-list="drag" draggable="true">
            <div className="structure__col structure__col_two"></div>
            <div className="structure__col structure__col_two"></div>
        </div>
        <div className="structure" data-col="col_three" data-drag-with-list="drag" draggable="true">
            <div className="structure__col structure__col_three"></div>
            <div className="structure__col structure__col_three"></div>
            <div className="structure__col structure__col_three"></div>
        </div>
        <div className="structure" data-col="col_four" data-drag-with-list="drag" draggable="true">
            <div className="structure__col structure__col_four"></div>
            <div className="structure__col structure__col_four"></div>
            <div className="structure__col structure__col_four"></div>
            <div className="structure__col structure__col_four"></div>
        </div>
        <div className="structure" data-col="one_big" data-drag-with-list="drag" draggable="true">
            <div className="structure__col structure__col_one_big"></div>
            <div className="structure__col structure__col_one_mid"></div>
        </div>
        <div className="structure" data-col="one_mid" data-drag-with-list="drag" draggable="true">
            <div className="structure__col structure__col_one_mid"></div>
            <div className="structure__col structure__col_one_big"></div>
        </div>
    </div>
);
