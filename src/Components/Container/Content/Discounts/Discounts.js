import React from 'react';
import {Input} from "./Input/Input";

export const Discounts = ({values: {baseINSS, percentINSS, baseIRPF, percentIRPF}}) => {
    return (
        <>
            <form className="col s12">
                <div className="row">
                    <Input value={baseINSS} idElement="baseINSS" textLabel="Base INSS"/>
                    <Input value={percentINSS} idElement="discountINSS" textLabel="Desconto INSS"/>
                    <Input value={baseIRPF} idElement="baseIRPF" textLabel="Base IRPF"/>
                    <Input value={percentIRPF} idElement="discountIRPF" textLabel="Desconto IRPF"/>
                </div>
            </form>
        </>
    );
}


