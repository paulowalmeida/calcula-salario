import React, {Component} from 'react';
import './App.css';

import InputFullSalary from "./Components/InputFullySalary/InputFullSalary";
import InputDiscounts from "./Components/InputDiscounts/InputDiscounts";
import InputLiquid from "./Components/InputLiquid/InputLiquid";

import * as helpers from './Helpers/Helpers';
import Bar from "./Components/Bar/Bar";

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            salary: 0.0,
            base: 0.0,
            discountINSS: 0.0,
            percentINSS: 0,
            baseIRPF: 0.0,
            discountIRPF: 0.0,
            percentIRPF: 0,
            liquidSalary: 0.0,
            style: 'scale-transition scale-out',
            backgroundImage: require('./Assets/Img/background.jpg')
        }
    }


    handleInputSalary = (event) => {
        const salary = event.target.value;

        const baseINSS = helpers.baseINSS(salary);
        const discountINSS = helpers.discountINSS(baseINSS);
        let liquidSalary;
        let discountIRPF;
        let baseIRPF;

        if (salary < 1904) {
            baseIRPF = helpers.round(0);
            discountIRPF = helpers.round(0);
            liquidSalary = helpers.baseIRPF(baseINSS, discountINSS);
        } else {
            baseIRPF = helpers.baseIRPF(baseINSS, discountINSS);
            discountIRPF = helpers
                .round(helpers.discountIRPF(baseINSS) * -1 * -1);
            liquidSalary = helpers.liquidSalary(baseIRPF, discountIRPF);
        }

        const style = (
            salary == 0.0 || salary === undefined
                ? 'scale-transition scale-out'
                : 'scale-transition scale-in'
        );

        this.setState({
            base: baseINSS,
            percentINSS: discountINSS,
            baseIRPF: baseIRPF,
            percentIRPF: discountIRPF,
            liquidSalary: liquidSalary,
            style: style
        });
    }

    render() {
        const {base, percentINSS, baseIRPF, percentIRPF, liquidSalary, style, background} = this.state;
        const values = {base, percentINSS, baseIRPF, percentIRPF, liquidSalary};
        console.log('Qual style? ', style);
        return (
            <>
                <div className="container">
                    <h1 style={{color: 'black', fontFamily: 'Raleway Medium'}}>Calcula Salário</h1>
                    <InputFullSalary handleInputSalary={this.handleInputSalary}/>
                    <div className={style}>
                        <InputDiscounts values={values}/>
                        <InputLiquid value={liquidSalary} idElement="liquidSalary" textLabel="Salário Líquido"/>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "left",
                                justifyContent: "left"
                            }}
                        >
                            <Bar value={percentINSS} color="orange" title="INSS"/>
                            <Bar value={percentIRPF} color="red" title="IRPF"/>
                            <Bar value={liquidSalary === 0 ? 100 : liquidSalary} color="teal" title="Líquido"/>
                        </div>
                        <hr/>
                    </div>

                    <p style={{textAlign: 'center', marginTop: '10px', fontSize: '18px',fontFamily: "Raleway Medium"}}>by P.W. Neo</p>
                </div>
            </>
        );
    }
}
