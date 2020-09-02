export const round = (value) => {
    return value.toFixed(2);
}

export const discountINSS = (base) => {
    let result;

    if (base === 0.0) {
        result = 0;
    } else if (base <= 1045.00) {
        result = base * 7.5 / 100;
    } else if (base > 1045.00 && base < 2089.60) {
        result = base * 9 / 100;
    } else if (base > 2089.60 && base < 3134.40) {
        result = base * 12 / 100;
    } else if (base > 3134.40 && base < 6101.06) {
        result = base * 14 / 100;
    } else {
        result = 713;
    }
    return round(result);
}

export const discountIRPF = (base) => {
    return round(
        base < 1903.98
            ? 0
            : base < 2826.65
            ? base * 0.075 - 142.8
            : base < 3751.05
                ? base * 0.15 - 354.8
                : base < 4664.68
                    ? base * 0.225 - 636.13
                    : base * 0.275 - 869.36
    );
}

export const percentIRPF = (base) => {

}

export const baseINSS = (salary) => {
    return round(salary * 1);
}

export const baseIRPF = (baseINSS, percentINSS) => {
    return round(baseINSS - percentINSS);
}

export const liquid = (baseIRPF, percentIRPF) =>{
    return round(baseIRPF - percentIRPF);
}

export const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

