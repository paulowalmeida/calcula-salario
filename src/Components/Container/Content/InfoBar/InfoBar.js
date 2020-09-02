import React from 'react';
import Bar from "./Bar/Bar";
import css from './InfoBar.module.css';

export const InfoBar = ({percentINSS, percentIRPF, liquidSalary}) => {
    return (
        <div className={css.styleBar}>
            <Bar value={percentINSS} color="orange" title="INSS"/>
            <Bar value={percentIRPF} color="red" title="IRPF"/>
            <Bar value={liquidSalary === 0 ? 100 : liquidSalary} color="teal" title="Líquido"/>
        </div>
    );
}
