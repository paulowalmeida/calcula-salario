import React from 'react';
import {findStyle} from '../../../../../Helpers/css';
import {formatter} from '../../../../../Helpers/Helpers';

export const Input = ({idElement, textLabel, value}) => {
    const style = findStyle(idElement);
    return (
        <div className="input-field col s3 center-align">
            <span style={{fontSize: '18px', fontFamily: "Raleway Medium"}}>{textLabel}</span>
            <input style={style} id={idElement} type="text" readOnly value={formatter.format(value)}/>
        </div>
    );
}

