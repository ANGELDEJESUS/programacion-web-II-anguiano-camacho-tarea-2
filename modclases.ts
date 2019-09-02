class	FooBase	{	
        public	x:	number;
        private	y:	number;		
        protected z:	number; 
    }
//	EFECTOS	EN	UNA	INSTANCIA 
var	foo	=	new	FooBase(); 
foo.x;	//	OK 
foo.y;	//	ERROR	:	
foo.z;	//	ERROR	:	protected
//	EFECTOS	EN	UNA	CLASE	HIJA 
class	FooChild	extends	FooBase	{		
    constructor(){	
        super();
        this.x;	//	OK				
        this.y;	//	ERROR:	
        this.z;	//	okay		
    } 
}
