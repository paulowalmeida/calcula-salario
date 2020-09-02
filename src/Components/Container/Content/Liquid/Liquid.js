import React, {Component} from 'react';
import {findStyle} from "../../../../Helpers/css";
import {formatter} from "../../../../Helpers/Helpers";

export const Liquid = ({idElement, textLabel, value}) => {
    const style = findStyle(idElement);

    return (
        <>
            <form className="col s12">
                <div className="row center-align justify-content">
                    <div className="input-field col s4 offset-s4">
                        <span style={{fontSize: '18px', fontFamily: "Raleway Medium"}}>{textLabel}</span>
                        <input style={style} className="z-depth-3" id={idElement} type="text" readOnly
                               value={formatter.format(value)}/>
                    </div>
                </div>
            </form>
        </>
    );
}



