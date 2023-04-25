/*
    ===== Código de TypeScript =====
*/

interface SuperHero {
    name: string,
    age: number,
    address: Address,
    showAddress: () => string,
}

interface Address {
    strip: string,
    country: string,
    city: string,
}


const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        strip: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};
