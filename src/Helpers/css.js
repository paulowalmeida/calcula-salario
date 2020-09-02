const css = [
    {
        name: 'baseINSS',
        style:{
            fontWeight: 'bold',
            color: 'black'
        }
    },
    {
        name: 'discountINSS',
        style:{
            fontWeight: 'bold',
            color: 'orange'
        }
    },
    {
        name: 'baseIRPF',
        style:{
            fontWeight: 'bold',
            color: 'balck'
        }
    },
    {
        name: 'discountIRPF',
        style: {
            fontWeight: 'bold',
            color: 'red'
        }
    },
    {
        name: 'liquidSalary',
        style:{
            color: 'teal',
            fontWeight: 'bold'
        }
    }
]

export const findStyle = (nameElement) => {
    return css.find(item => item.name === nameElement).style;
}

