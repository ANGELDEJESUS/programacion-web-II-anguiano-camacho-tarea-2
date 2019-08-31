class Bird {
    fly(){
        console.log("pajaro");
    }
    layEggs(){
        console.log("pone huevos")
    }
}

class Fish {
    constructor(){
        //solo ejemplo
    }
    Swim(){
        console.log("PEZ");
    }
    layEggs(){
        console.log("pone huevos");
    }
}

function getAnimal() : Fish | Bird {
    var a : Fish = new Fish();
    return a;
}

let pet = getAnimal();
console.log(getAnimal());
pet.layEggs();

if((<Fish>pet).swim){
    (<Fish>pet).Swim();
}else if((<Bird>pet).fly) {
    (<Bird>pet).fly();
}