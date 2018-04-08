import React from 'react';

import { panels } from './panel-data';

export const Panel = () => (
    <div className="control__page control__page_content control__page_active">
        { panels.map((panel) => {
            if (panel.active !== 1) {
                return false;
            }
            const classNameConcat = `panel__i ${panel.className}`;
            return (
                <div className="panel" data-contentn-drag="drag" data-type={panel.type} draggable="true" key={panel.id}>
                    <i className={classNameConcat}></i>
                    <p className="panel__text">{panel.text}</p>
                </div>
            );
        })}
    </div>
);
