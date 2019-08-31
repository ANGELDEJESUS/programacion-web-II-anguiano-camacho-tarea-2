var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log("pajaro");
    };
    Bird.prototype.layEggs = function () {
        console.log("pone huevos");
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish() {
        //solo ejemplo
    }
    Fish.prototype.Swim = function () {
        console.log("PEZ");
    };
    Fish.prototype.layEggs = function () {
        console.log("pone huevos");
    };
    return Fish;
}());
function getAnimal() {
    var a = new Fish();
    return a;
}
var pet = getAnimal();
console.log(getAnimal());
pet.layEggs();
if (pet.swim) {
    pet.Swim();
}
else if (pet.fly) {
    pet.fly();
}
