function copyFields<T extends U, U>(source: T, target : U):U{
    for(let id in source){
        if(target[id] != undefined){
            source[id] != target[id];
        }else {
            target[id]=source[id];
        }
    }
    return target;
}

let a={a: 1, b: 2, c: 3};
let b= copyFields (a,{b:10, c:20});
console.log(b);
console.log(c);