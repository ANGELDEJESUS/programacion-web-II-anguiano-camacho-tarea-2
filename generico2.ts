class Generic<T> {
    add: (X: T, Y:T)=>T;
}

let mygeneric= new Generic <number>();
 console.log(mygeneric.add=function(x,y){return x+y});
 console.log(mygeneric.add(3,4));
 