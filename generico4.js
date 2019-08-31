function copyFields(source, target) {
    for (var id in source) {
        if (target[id] != undefined) {
            source[id] != target[id];
        }
        else {
            target[id] = source[id];
        }
    }
    return target;
}
var a = { a: 1, b: 2, c: 3 };
var b = copyFields(a, { b: 10, c: 20 });
console.log(b);
console.log(c);
