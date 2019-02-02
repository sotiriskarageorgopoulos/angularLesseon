import { Component } from '@angular/core';

function log(target, name , descriptor)
{
  console.log(target, name , descriptor)
  //store the original function to a variable
  const original = descriptor.value
  //do some manipulation with descriptor.value
  //descriptor.value = function(){
   // console.log("This function is hacked!!!")
 // }

  descriptor.value = function(...args){

    console.log("The arguments are",args,"were passed")
    const result = original.apply(this,args)
    console.log("The result is ",result)
    return descriptor
  }

  //return the descriptor
 //return descriptor.value
  return descriptor
}

function decOfClass(className)
{
  console.log(className)
}

function decOfExampleClass(className)
{
  console.log(className)

  return (function(...args){
    console.log("The arguments are: ",args)
    return  new className(...args)
  })();
}

@decOfExampleClass //class decorator
class myExampleClass{
   
  constructor(a,b)
  {
    console.log("Constructor fired!")
  }
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@decOfClass //class decorator
export class AppComponent {
  title = 'intro2angular';
   
   constructor(){
     console.log("The constructor excuted this value: ",this.aSimpleMethod(5,6,5))
    
   }

  @log //member decorator
   aSimpleMethod(a,b,c){
     return a*b*c
   }
}
