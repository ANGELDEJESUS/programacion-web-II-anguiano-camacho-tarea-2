class	Base	{
    		log()	{
            console.log('hello	world');	
        } }
class	Child	extends	Base	{		log()	{	super.log()	}; 
}

class	Base	{
            //	realizamos	una	función	mediante	el	uso	de	fat	arrow		l
    log	=	()	=>	{	console.log('hello	world');	
} } 
class	Child	extends	Base	{
            logWorld()	{	this.log()	};
     }
