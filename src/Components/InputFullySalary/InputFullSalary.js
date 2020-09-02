import React, {Component} from 'react';
import css from './InputFullSalary.module.css'

export default class InputFullSalary extends Component {

    handleInput = (event) => {
        this.props.handleInputSalary(event);
    }

    render() {
        return (
            <>
                <form className="col s12">
                    <div className="row center-align justify-content">
                        <div className="input-field col s4 offset-s4">
                            <span style={{fontSize: '18px',fontFamily: "Raleway Medium"}}>Salário Bruto</span>
                            <input placeholder="R$"
                                   id="fullySalary"
                                   type="number" min={0.0}
                                   className={css.fullSalary}
                                   onChange={this.handleInput}
                            />
                        </div>
                    </div>
                </form>
            </>
        );
    }
}



