class Person {
    constructor (name = 'Anonymous',age = '0') {
        this.name =name;
        this.age = age;
    }
   
    getGretting () { 
        //return 'Hi.!'+ this.name + ' How are you';    //traditional method

        return `Hi I am ${this.name} and my age is ${this.age} !`     //template Strings a new feature in ES6
    }
    getDescription() {
        return ` ${this.name} is ${this.age} year(s) old.`
    }

}

class Student extends Person {

    constructor (name, age , major) {
        super(name,age);
        this.major = major;
   }
   hasMajor() {
      return !!this.major;
   }
   getDescription() {
       let description = super.getDescription();
       if(this.hasMajor){
           description += ` Their major is ${this.major}`;
       }
       return description;
    
   }
}

class Traveller extends Person {
    constructor (name,age,location = 'Nomad')
    {
        super(name,age);
        this.location = location;
    }
    getGretting() {
        let locationData = super.getGretting();
        if(this.location)
        {
            locationData += `  and the location is ${this.location}`;
        }
        return locationData;
    }

}

const me = new Traveller('Krishna Kumar',25,'Delhi');
console.log(me.getGretting());
const other = new Traveller();
console.log(other.getGretting());