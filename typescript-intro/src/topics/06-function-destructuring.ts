interface Product {
    description: string,
    price: number,

}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

interface taxCalculationOptions {
    tax: number,
    products: Product[],
}

function taxCalculation( options: taxCalculationOptions ): [number, number] {

    const {tax, products} = options;

    let total = 0;

    products.forEach( ({price}) => {
        total += price;
    });

    return [total, total*tax];

}



const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxTotal] = taxCalculation({
    tax,
    products: shoppingCart
});

// const [total, taxTotal] = result;

console.log(`Total, ${total}`);
console.log(`Tax, ${taxTotal}`);


export {}