import React from "react";
import Logo from "../components/Logo/Logo";

const javaScriptNotes = () => {
  return Logo();
};
const introductionToJavaScript = () => {
  let js1 = `
 # JavaScript
   - JavaScript is primarily known as the language of most modern web browsers, and its early quirks gave it a bit of a bad reputation. 
   - However, the language has continued to evolve and improve.
   - JavaScript is a powerful, flexible, and fast programming language now being used for increasingly complex web development and beyond!
   - The first ever JavaScript was created by Brendan Eich at Netscape. And its source code was written in total of 9 days.

 # JavaScript name evolution
   -	Mocha
   -	LiveScript 
   -	JavaScript

 JavaScript is a dynamically typed language

 # Console
   - The console is a panel that displays important messages, like errors, for developers.
   - Much of the work the computer does with our code is invisible to us by default.
   - In JavaScript, the console keyword refers to an object, a collection of data and actions, that we can use in our code.
   - Keywords are words that are built into the JavaScript language, so the computer will recognize them and treats them specially.
   - One action, or method, that is built into the console object is the .log() method.

         Console.log(10);
         Console.log(‘Hello from console’);
         
 # Comments
   - Programming is often highly collaborative. 
   - In addition, our own code can quickly become difficult to understand when we return to it— sometimes only an hour later! 
   - For these reasons, it’s often useful to leave notes in our code for other developers or ourselves.
   - As we write JavaScript, we can write comments in our code that the computer will ignore as our program runs. 
   - These comments exist just for human readers.

   There are two types of code comments in JavaScript:
       1.A single line comment will comment out a single line and is denoted with two forward slashes // preceding it. 
       2.A multi-line comment will comment out multiple lines and is denoted with /* to begin the comment, and */ to end the comment.
     
       //console.log(‘This line will not print due to single line comment’)
       /*I will also not print due to multi line comment*/

 # Data Types
   Data types are the classifications we give to the different kinds of data that we use in programming. In JavaScript, there are seven fundamental data types:
     •	Number: Any number, including numbers with decimals: 4, 8, 1516, 23.42.
     •	String: Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes: ' ... ' or double quotes " ... ". Though we prefer single quotes. 
     •	Boolean: This data type only has two possible values— either true or false (without quotes). It’s helpful to think of Booleans as on and off switches .
     •	Null: This data type represents the intentional absence of a value and is represented by the keyword   null (without quotes).
     •	Undefined: This data type is denoted by the keyword undefined (without quotes). It also represents the absence of a value though it has a different use than null.
     •	Symbol: A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.
     •	Object: Collections of related data.

   The first 6 of those types are considered primitive data types. They are the most basic data types in the language. Objects are more complex, and you’ll learn much more about them as you progress through JavaScript. 

           Let _data = 40;
           console.log(_data);     //Number 
           _data=’I love to code’;
           console.log(_data);    //String
           _data=true;
           cosole.log(_data);     //Boolean
           _data=null;
           console.log(_data);   //null

 # Operators
   Arithmetic Operators
   - An operator is a character that performs a task in our code. JavaScript has several built-in in arithmetic operators, that allow us to perform mathematical calculations on numbers. 
   - These include the following operators and their corresponding symbols:
       1.	Add: +
       2.	Subtract: -
       3.	Multiply: *
       4.	Divide: /
       5.	Remainder: %

                 console.log(5+2);  //Add
                 console.log(5-2);  //Subtract
                 console.log(5*2); //Multiply
                 console.log(5/2); //Divide
                 console.log(5%2);//Reminder


 # String Concatenation
   - Operators aren’t just for numbers! When a + operator is used on two strings, it appends the right string to the left string:
   - console.log(‘I love to‘ +’ ’ +’code’);
   - This process of appending one string to another is called concatenation. 

 # Properties
   - When you introduce a new piece of data into a JavaScript program, the browser saves it as an instance of the data type. 
   - Every string instance has a property called length that stores the number of characters in that string. 
   - You can retrieve property information by appending the string with a period and the property name:

         console.log(‘I love to code’.length);

   The . is another operator! We call it the dot operator.

 # Methods
   - JavaScript provides a number of string methods.
   We call, or use, these methods by appending an instance with:
     •	a period (the dot operator)
     •	the name of the method
     •	opening and closing parentheses
   E.g. 'example string'.methodName().

   - Does that syntax look a little familiar? When we use console.log() we’re calling the .log() method on the console object. 
   - Let’s see console.log() and some real string methods in action!

         console.log(‘code’.toUpperCase());
         console.log(‘code’.startsWith(‘c’));
         console.log(‘ codeme ’.trim());

           Learn more about methods – 
           https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String 

 # Built-in Objects

   - In addition to console, there are other objects built into JavaScript. 
   - JavaScript has the built-in Math object. For Useful mathematic computation
   - The great thing about objects is that they have methods! Let’s call the .random() method from the built-in Math object:

         console.log( Math.random ( ) );
         console.log( Math.random ( )*50);
         console.log( Math.floor( Math.random( ) ) );
         console.log( Math.ceil(23.9)); //return the smallest integer greater than or equal to decimal number.
         console.log( Math.isInteger(2017));

         Learn more –
         https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

 # Variables

   - In programming, a variable is a container for a value. You can think of variables as little containers for information that live in a computer’s memory. Information stored in variables, such as a username, account number, or even personalized greeting can then be found in memory.
         Var name = ‘Hari’ 
         console.log(name);
         Let name;
         console.log(name);  //undefined

         [ when we declare a variable without assigning the variable a value. In such a case, the variable will be automatically initialized with a value of undefined ]
         
         name = ‘Hari’;
         console.log(name);
         const name = ‘Hari’
         console.log(name);
         name = ‘code’;
         console.log(name); // error

 # String Interpolation

   - In the ES6 version of JavaScript, we can insert, or interpolate, variables into strings using template literals. 
   - Check out the following example where a template literal is used to log strings together:

         Let name = ‘code’;
         console.log('I love to ${name}');

 # typeof operator
   - While writing code, it can be useful to keep track of the data types of the variables in your program. 
   - If you need to check the data type of a variable’s value, you can use the typeof operator.

           Let _data = 100;
           console.log(typeof _data);
           _data=’code’
           console.log(typeof _data);
           _data=true;
           console.log(typeof _data);

  `;
  return <pre>{js1}</pre>;
};
const conditionalOperators = () => {
  let js2 = ``;
  return <pre>{js2}</pre>;
};
const functions = () => {
  let js3 = ``;
  return <pre>{js3}</pre>;
};
const scopeBlock = () => {
  let js4 = ``;
  return <pre>{js4}</pre>;
};
const arrays = () => {
  let js5 = ``;
  return <pre>{js5}</pre>;
};
const loops = () => {
  let js6 = ``;
  return <pre>{js6}</pre>;
};
const higherOrderFunction = () => {
  let js7 = ``;
  return <pre>{js7}</pre>;
};
const iterators = () => {
  let js8 = ``;
  return <pre>{js8}</pre>;
};
const object = () => {
  let js9 = ``;
  return <pre>{js9}</pre>;
};
const advanceobject = () => {
  let js10 = ``;
  return <pre>{js10}</pre>;
};
const classes = () => {
  let js11 = ``;
  return <pre>{js11}</pre>;
};
const transpilation = () => {
  let js12 = ``;
  return <pre>{js12}</pre>;
};
const moduleExportImport = () => {
  let js13 = ``;
  return <pre>{js13}</pre>;
};
const promises = () => {
  let js14 = ``;
  return <pre>{js14}</pre>;
};
const asyncAwait = () => {
  let js15 = ``;
  return <pre>{js15}</pre>;
};
const requestGetPost = () => {
  let js16 = ``;
  return <pre>{js16}</pre>;
};
const requestFetch = () => {
  let js17 = ``;
  return <pre>{js17}</pre>;
};
const whatNext = () => {
  let js18 = ``;
  return <pre>{js18}</pre>;
};

export {
  javaScriptNotes,
  introductionToJavaScript,
  conditionalOperators,
  functions,
  scopeBlock,
  arrays,
  loops,
  higherOrderFunction,
  iterators,
  object,
  advanceobject,
  classes,
  transpilation,
  moduleExportImport,
  promises,
  asyncAwait,
  requestGetPost,
  requestFetch,
  whatNext,
};
