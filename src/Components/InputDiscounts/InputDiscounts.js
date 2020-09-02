import React, {Component} from 'react';
import Input from "../Input/Input";

export default class InputDiscounts extends Component {
    render() {
        const {values: {base, percentINSS, baseIRPF, percentIRPF}} = this.props;

        return (
            <>
                <form className="col s12">
                    <div className="row ">
                        <Input value={base} idElement="baseINSS" textLabel="Base INSS"/>
                        <Input value={percentINSS} idElement="discountINSS" textLabel="Desconto INSS"/>
                        <Input value={baseIRPF} idElement="baseIRPF" textLabel="Base IRPF"/>
                        <Input value={percentIRPF} idElement="discountIRPF" textLabel="Desconto IRPF"/>
                    </div>
                </form>
            </>
        );
    }
}


