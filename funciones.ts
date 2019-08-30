
setTimeOut(function(){
        console.log(this);	//	Elemento	Que	llama	a	la	función
},2000);

setTimeOut(()	=>	{
        console.log(this);//	Elemento	que	contiene	esta	función
},2000);

function	padLeft(value:	string,	padding:	string	|	number)	{
        if(typeof	padding	===	"number"){																	
                return	Array(padding	+	1).join("	")	+	value;													
        }
        if(typeof	padding	===	"string")	{																
                return	Array(padding.length	+	1).join("	")	+	value;		
        }
        //	Si	existiera	Any	tendriamos	que	controlar	la	excepción													
        //	Como	buenas	practicas	y	ya	que	este	código	al	fin	y	al	cabo													
        //	será	javascript	y	es	vulnerable	a	inyeción	siempre	está	bien													
        //	realizar	el	control	de	las	posibles	excepciones													
        throw	new	Error(`Expected	String	or	number,	got	'${padding}'	`);

}
console.log(padLeft("hello",	"aaa"));	//	Ejemplo	de	función	con	texto	->	Funciona				
console.log(padLeft("hello",	5));	//	Ejemplo	de	función	con	número	->	Funciona				
console.log(padLeft("hello",	true));	//	Ejemplo	de	función	con	texto	->	NO	FUNCION A	(no	compila)Funciones27
