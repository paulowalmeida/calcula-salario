import React from 'react';
import {FullSalary} from "./FullySalary/FullSalary";

export const Header = ({handleFullySalary}) => {

    return (
        <div className="container">
            <h1>Calcula Salário</h1>
            <FullSalary handleValueSalary={handleFullySalary}/>
        </div>
    );
}