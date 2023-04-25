export interface Passenger {
    name: string;
    children?: string[];
}


const passenger1: Passenger = {
    name: 'Diego'
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia', 'Elizabeth']
}

const returnChildrenNumber = (passenger: Passenger): number => {

    const howManyChildren = passenger.children?.length || 0;
    // const howManyChildren = passenger.children!.length || 0;

    console.log(howManyChildren);

    return howManyChildren;
}

returnChildrenNumber(passenger1);
returnChildrenNumber(passenger2);