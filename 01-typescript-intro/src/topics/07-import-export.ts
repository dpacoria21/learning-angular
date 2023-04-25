
import {Product} from './06-function-destructuring'
import { taxCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 150
    },
    {
        description: 'iPad',
        price: 250,
    }
];

const [total, tax] = taxCalculation({
    tax: 0.15,
    products: shoppingCart    
});

console.log('Total', total);
console.log('Tax', tax);




export {}