///code goes here 

function receivesAFunction(fnCallBack){


    console.log(fnCallBack ());
    }


function returnsANamedFunction(){

   return function namedFunction()
   {
return `This is a function inside a function`
   }
}
function returnsAnAnonymousFunction(){

   return function ()
   {

   };
  
}
    
