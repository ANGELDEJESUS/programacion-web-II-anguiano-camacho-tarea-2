function echo(arg) {
    console.log(arg.length);
    return arg;
}
var a = echo("aaa");
var t = echo({ length: 2, name: "aa" });
