(() => {

    interface Hero {
        name: string,
        hp: number,
        skills: string[],
        homeTown?: string,
    }

    const skills: string[] = ['Bash', 'Counter', 'Healing'];

    const strider: Hero = {
        name: 'Strider',
        hp: 100,
        skills : ['Bash', 'Counter'],
    }

    console.log({skills, strider});

})();