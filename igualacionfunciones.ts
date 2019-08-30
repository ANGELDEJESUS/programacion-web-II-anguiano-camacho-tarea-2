let x=(a: number)=> 0;
let y= (b: number, s:string)=>0;
y=x//ok

let x=()=>({name: 'Alice'});
let y=()=>({name:'Alice', location:'mexico'});

x=y;