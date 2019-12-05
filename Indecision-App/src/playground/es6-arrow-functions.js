const multiplier = {
    numbers : [10,20,30],
    multiplyBy : 3, 
    multiply() { 
        return this.numbers.map((num) => this.multiplyBy * num);
    }
}

console.log(multiplier.multiply());


console.log(currentLocation('Delhi'));

const userObject = {
    name : 'Krishna Kumar',
    age : 25,
    location : 'Delhi',
    cities : ['Del','Bel','GDC'],
    printCitiesLived() { 
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(userObject.printCitiesLived());