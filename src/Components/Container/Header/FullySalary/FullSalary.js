import React from 'react';
import css from './FullSalary.module.css'

export const FullSalary = ({handleValueSalary}) => {

    const handleInput = (event) => {
        handleValueSalary(event);
    }

    return (
        <form className="col s12">
            <div className="row center-align justify-content">
                <div className="input-field col s4 offset-s4">
                    <span className={css.spanSalary}>Salário Bruto</span>
                    <input placeholder="R$"
                           id="fullySalary"
                           type="number"
                           min={0.0} max={1000000}
                           className={css.fullSalary}
                           onChange={handleInput}
                    />
                </div>
            </div>
        </form>
    );
}



