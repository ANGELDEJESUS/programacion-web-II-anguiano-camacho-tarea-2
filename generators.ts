function*	logGenerator()	{		console.log(yield);		console.log(yield);		console.log(yield); }
var	gen	=	logGenerator();
//	the	first	call	of	next	executes	from	the	start	of	the	function //	until	the	first	yield	statement 
gen.next();
gen.next('pretzel');	//	pretzel 
gen.next('california');	//	california 
gen.next('mayonnaise');	//	mayonnaise

function*	generator()	{
    	try	{
                    yield	'foo';
                    throw	Error("Test");
                }catch(err)	{
                    console.log(err.message);	//	bar!				
        } }
var	iterator	=	generator(); //	Start	execution	till	we	get	first	yield	value 
var	foo	=	iterator.next(); console.log(foo.value);