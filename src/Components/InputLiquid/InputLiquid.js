import React, {Component} from 'react';
import {findStyle} from "../../helpers/css";
import {formatter} from "../../helpers/Helpers";

export default class InputLiquid extends Component {
    render() {
        const {idElement, textLabel, value} = this.props;
        const style = findStyle(idElement);
        return (
            <>
                <form className="col s12">
                    <div className="row center-align justify-content">
                        <div className="input-field col s4 offset-s4">
                            <span style={{fontSize: '18px',fontFamily: "Raleway Medium"}}>{textLabel}</span>
                            <input style={style} className="z-depth-3" id={idElement} type="text" readOnly  value={formatter.format(value)}/>
                        </div>
                    </div>
                </form>
            </>
        );
    }
}



