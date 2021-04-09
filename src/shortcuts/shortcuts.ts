/*
* Przeprogramowani.ts - https://przeprogramowani.pl/typescript/
*
* Shortcuts
* ------------------
*
* Goal: Make sure that everything works fine - it's that simple!
* 
* Hint: https://www.typescriptlang.org/docs/handbook/classes.html
*/

class Bag {
    constructor(
        protected items: string[]
    ) { }

    lookInside() {
        return this.items;
    }
}

class BrandedBag extends Bag {
    constructor(
        public logo: string,
        public brand: string,
        items: string[]
    ) {
        super(items);
        this.logo = logo;
        this.brand = brand;
    }

    checkBrand() {
        return `Brand - ${this.brand}`;
    }
}

const devBag = new BrandedBag('<P/>', 'Przeprogramowani.pl', ['keys', 'sunglassess', 'books']);

/* Do not modify tests */

test('should contain proper brand', () => {
    expect(devBag.checkBrand()).toBe('Brand - Przeprogramowani.pl');
})

test('should contain keys', () => {
    expect(devBag.lookInside().includes('keys')).toBeTruthy();
})

test('should contain a logo', () => {
    expect(devBag.logo).toBe('<P/>');
})