import React, {Component} from 'react';
import './App.css';

import {Discounts} from "./Components/Container/Content/Discounts/Discounts";
import {Liquid} from "./Components/Container/Content/Liquid/Liquid";

import * as helpers from './Helpers/Helpers';
import {Content} from "./Components/Container/Content/Content";
import {Header} from "./Components/Container/Header/Header";
import {Container} from "./Components/Container/Container";
import {InfoBar} from "./Components/Container/Content/InfoBar/InfoBar";
import {Footer} from "./Components/Container/Footer/Footer";

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            salary: 0.0,
            baseINSS: 0.0,
            discountINSS: 0.0,
            percentINSS: 0,
            baseIRPF: 0.0,
            discountIRPF: 0.0,
            percentIRPF: 0,
            liquid: 0.0,
            style: 'scale-transition scale-out',
            backgroundImage: require('./Assets/Img/background.jpg')
        }
    }


    handleInputSalary = (event) => {
        const salary = event.target.value;

        const base = helpers.baseINSS(salary);
        const discountINSS = helpers.discountINSS(base);
        let liquid;
        let baseIRPF;
        let discountIRPF;

        if (salary < 1904) {
            baseIRPF = helpers.round(0);
            discountIRPF = helpers.round(0);
            liquid = helpers.baseIRPF(base, discountINSS);
        } else {
            baseIRPF = helpers.baseIRPF(base, discountINSS);
            discountIRPF = helpers
                .round(helpers.discountIRPF(base) * -1 * -1);
            liquid = helpers.liquid(baseIRPF, discountIRPF);
        }

        const style = (
            salary == 0.0 || salary === undefined
                ? 'scale-transition scale-out'
                : 'scale-transition scale-in'
        );

        this.setState({
            baseINSS: base,
            percentINSS: discountINSS,
            baseIRPF: baseIRPF,
            percentIRPF: discountIRPF,
            liquidSalary: liquid,
            style: style
        });
    }

    render() {
        const {baseINSS, percentINSS, baseIRPF, percentIRPF, liquidSalary} = this.state;
        return (
            <Container>
                <Header handleFullySalary={this.handleInputSalary}/>
                <Content salary={liquidSalary}>
                    <Discounts values={{baseINSS, percentINSS, baseIRPF, percentIRPF, liquidSalary}}/>
                    <Liquid value={liquidSalary} idElement="liquidSalary" textLabel="Salário Líquido"/>
                    <InfoBar percentINSS={percentINSS} liquidSalary={liquidSalary} percentIRPF={percentIRPF}/>
                    <hr/>
                </Content>
                <Footer/>
            </Container>
        );
    }
}
