function	ParameterDecorator(	target:	Function,	//	The	prototype	of	the	class
            propertyKey:	string	|	symbol,	//	The	name	of	the	method	
            parameterIndex:	number	//	The	index	of	parameter	in	the	list	of	the	function's	par ameters				
            )	{console.log("ParameterDecorator	called	on:	",	target,	propertyKey,	parameterIndex) ; }
class	ParameterDecoratorExample	{method(@ParameterDecorator	param1:	string,	@ParameterDecorator	param2:	number)	{	

			} }
ParameterDecorator	called	on:		{
        method:	[Function]	}	
        method:	 ParameterDecorator	called	on:		{	
        method:	[Function]	}