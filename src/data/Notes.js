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
  
  # JavaScript is a dynamically typed language
    
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
    
    - There are two types of code comments in JavaScript:
       1.A single line comment will comment out a single line and is denoted with two forward slashes // preceding it. 
       2.A multi-line comment will comment out multiple lines and is denoted with /* to begin the comment, and */ to end the comment.
          
        //console.log(‘This line will not print due to single line comment’)
        /*I will also not print due to multi line comment*/
    
  # Data Types
    - Data types are the classifications we give to the different kinds of data that we use in programming. In JavaScript, there are seven fundamental data types:
      •	Number: Any number, including numbers with decimals: 4, 8, 1516, 23.42.
      •	String: Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes: ' ... ' or double quotes " ... ". Though we prefer single quotes. 
      •	Boolean: This data type only has two possible values— either true or false (without quotes). It’s helpful to think of Booleans as on and off switches .
      •	Null: This data type represents the intentional absence of a value and is represented by the keyword   null (without quotes).
      •	Undefined: This data type is denoted by the keyword undefined (without quotes). It also represents the absence of a value though it has a different use than null.
      •	Symbol: A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.
      •	Object: Collections of related data.
    
    - The first 6 of those types are considered primitive data types. They are the most basic data types in the language. Objects are more complex, 
      and you’ll learn much more about them as you progress through JavaScript. 
        Let _data = 40;
        console.log(_data);     //Number 
        _data=’I love to code’;
        console.log(_data);    //String
        _data=true;
        cosole.log(_data);     //Boolean
        _data=null;
        console.log(_data);   //null
    
  # Operators
   • Arithmetic Operators
     - An operator is a character that performs a task in our code. 
     - JavaScript has several built-in in arithmetic operators, that allow us to perform mathematical calculations on numbers. 
     - These include the following operators and their corresponding symbols:
        1.	Add: +
        2.	Subtract: -
        3.	Multiply: *
        4.	Divide: /
        5.	Remainder: %
    
        |>_  console.log(5+2);  //Add
        |>_  console.log(5-2);  //Subtract
        |>_ console.log(5*2); //Multiply
        |>_  console.log(5/2); //Divide
        |>_  console.log(5%2);//Reminder
    
  # String Concatenation
    - Operators aren’t just for numbers! When a + operator is used on two strings, it appends the right string to the left string:
    - console.log(‘I love to‘ +’ ’ +’code’);
    - This process of appending one string to another is called concatenation. 
    
  # Properties
    - When you introduce a new piece of data into a JavaScript program, the browser saves it as an instance of the data type. 
    - Every string instance has a property called length that stores the number of characters in that string. 
    - You can retrieve property information by appending the string with a period and the property name:
        |>_ console.log(‘I love to code’.length);
    
    - The . is another operator! We call it the dot operator.
    
  # Methods
    - JavaScript provides a number of string methods.
    - We call, or use, these methods by appending an instance with:
      •	a period (the dot operator)
      •	the name of the method
      •	opening and closing parentheses
      E.g. 'example string'.methodName().
    
    - Does that syntax look a little familiar? When we use console.log() 
    - we’re calling the .log() method on the console object. 
    - Let’s see console.log() and some real string methods in action!
       |>_ console.log(‘code’.toUpperCase());
       |>_ console.log(‘code’.startsWith(‘c’));
       |>_ console.log(‘ codeme ’.trim());
    
    - Learn more about methods – 
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String 
    
  # Built-in Objects  
    - In addition to console, there are other objects built into JavaScript. 
    - JavaScript has the built-in Math object. For Useful mathematic computation
    - The great thing about objects is that they have methods! 
    - Let’s call the .random() method from the built-in Math object:  
       |>_ console.log( Math.random ( ) );
       |>_ console.log( Math.random ( )*50);
       |>_ console.log( Math.floor( Math.random( ) ) );
       |>_ console.log( Math.ceil(23.9)); //return the smallest integer greater than or equal to decimal number.
       |>_ console.log( Math.isInteger(2017));
    
    - Learn more –
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    
  # Variables  
    - In programming, a variable is a container for a value. 
    - You can think of variables as little containers for information that live in a computer’s memory. 
    - Information stored in variables, such as a username, account number, or even personalized greeting can then be found in memory.
       |>_ Var name = ‘Hari’ 
       |>_ console.log(name);
       |>_ Let name;
       |>_ console.log(name);  //undefined
    
    - when we declare a variable without assigning the variable a value. 
    - In such a case, the variable will be automatically initialized with a value of undefined   
       |>_ name = ‘Hari’;
       |>_ console.log(name);
       |>_ const name = ‘Hari’
       |>_ console.log(name);
       |>_ name = ‘code’;
       |>_ console.log(name); // error
    
  # String Interpolation  
    - In the ES6 version of JavaScript, we can insert, or interpolate, variables into strings using template literals. 
    - Check out the following example where a template literal is used to log strings together:
       |>_  Let name = ‘code’;
       |>_  console.log('I love to ',name);
    
  # typeof operator
    - While writing code, it can be useful to keep track of the data types of the variables in your program. 
    - If you need to check the data type of a variable’s value, you can use the typeof operator.
       |>_ Let _data = 100;
       |>_ console.log(typeof _data);
       |>_ _data=’code’
       |>_ console.log(typeof _data);
       |>_ _data=true;
       |>_ console.log(typeof _data);
  
  `;
  return <pre>{js1}</pre>;
};
const conditionalOperators = () => {
  let js2 = `
  # Conditional Operator
    - In life, we make decisions based on circumstances. 
    - Think of an everyday decision as mundane as falling asleep — if we are tired, we go to bed, otherwise, we wake up and start our day.
    - These if-else decisions can be modeled in code by creating conditional statements. 
    - A conditional statement checks a specific condition(s) and performs a task based on the condition(s).

  # If Statement
    - We often perform a task based on a condition. 
    - For example, if the weather is nice today, then we will go outside. 
    - If the alarm clock rings, then we’ll shut it off. If we’re tired, then we’ll go to sleep.
    - If...Else Statements
    - In the previous exercise, we used an if statement that checked a condition to decide whether or not to run a block of code. 
    - In many cases, we’ll have code we want to run if our condition evaluates to false.
        |>_  Let sale = true;
        |>_  If(sale)    
        |>_    {	console.log(‘Time to but the stuff’);   }
        |>_  Else  
        |>_    {	console.log(‘Time to wait for a sale’); }

  # Comparison Operators
    - When writing conditional statements, sometimes we need to use different types of operators to compare values. 
    - These operators are called comparison operators.
    - Here is a list of some handy comparison operators and their syntax:
       •	Less than: <
       •	Greater than: >
       •	Less than or equal to: <=
       •	Greater than or equal to: >=
       •	Is equal to: ===
       •	Is not equal to: !==

  # Logical Operators
    - Working with conditionals means that we will be using booleans, true or false values. 
    - In JavaScript, there are operators that work with boolean values known as logical operators. 
    - We can use logical operators to add more sophisticated logic to our conditionals. 
    - There are three logical operators:
       •	the and operator (&&)
       •	the or operator (||)
       •	the not operator, otherwise known as the bang operator (!)

  # Truthy and Falsy
    - Let’s consider how non-boolean data types, like strings or numbers, are evaluated when checked inside a condition.
    - Sometimes, you’ll want to check if a variable exists and you won’t necessarily want it to equal a specific value 
    - you’ll only check to see if the variable has been assigned a value.
       •	0
       •	Empty strings like "" or ''
       •	null which represent when there is no value at all
       •	undefined which represent when a declared variable lacks a value
       •	NaN, or Not a Number

       |>_  let _data;
       |>_  if(_data)
       |>_  { 	console.log(‘we have a data’)		}
       |>_  Else
       |>_  {	console.log(‘data is empty’);		}
       |>_  Let _data=0;
       |>_  If(_data)
       |>_  {	console.log(‘_data has value’);	}
       |>_  Else
       |>_  {	console.log(‘Data is empty’);	}

  # Truthy and Falsy Assignment
    - Truthy and falsy evaluations open a world of short-hand possibilities!
        |>_  Let userName;
        |>_  Let defaultName;
        |>_  If(userName)
        |>_  {	defaultName = userName; 		}
        |>_  Else
        |>_  {	defaultName = ‘Customer’		}
        |>_  console.log(defaultName);

      Try with concept of short-circuit evaluation.
      Let defaultName = userName || ‘Customer’ ;

  # Ternary Operator
    - In the spirit of using short-hand syntax, we can use a ternary operator to simplify an if...else statement.
    - Let nightTime = true;
        |>_  If(nightTime)
        |>_  {	console.log(‘Turn on the light !!!’);		}
        |>_  Else
        |>_  {	console.log(‘Turn of the light !!!’);		}
    - We can use a ternary operator to perform the same functionality:
        |>_  nightLight ? console.log(‘Turn on the light !!!’) : console.log(‘Turn of the light !!!’);

  # Else If Statements
    - We can add more conditions to our if...else with an else if statement. 
    - The else if statement allows for more than two possible outcomes. 
    - You can add as many else if statements as you’d like, to make more complex conditionals!

  # The switch keyword
    - else if statements are a great tool if we need to check multiple conditions. 
    - In programming, we often find ourselves needing to check multiple values and handling each of them differently. 
       |>_  Let _item =’mobile’;
       |>_  If(_item === ‘laptop’)
       |>_  {	console.log(‘Price for laptop is 200 rs’);	}
       |>_  Else if(item===’mobile’)
       |>_  {	console.log(‘Price for mobile is 100 rs’);	}
       |>_  Else if(item ===’camera’)
       |>_  {	console.log(‘Price for camera is 50 rs’);		}
       |>_  Else
       |>_  {	console.log(‘Item not found ’);		}

    - A switch statement provides an alternative syntax that is easier to read and write. A switch statement looks like this:
       |>_   Switch(item)
       |>_   {
       |>_     Case ‘laptop’:
       |>_       console.log(‘Price for laptop is 200 rs’);
       |>_   break;
       |>_             Case ’mobile’:
       |>_       console.log(‘Price for mobile is 100 rs’);
       |>_   break;		
       |>_   Case ’camera’:
       |>_       console.log(‘Price for camera is 50 rs’);
       |>_   break;
       |>_   default:
       |>_   console.log(‘Item not found ’);
       |>_   break;
       |>_   }

  `;
  return <pre>{js2}</pre>;
};
const functions = () => {
  let js3 = `
  # Function
    - A function is a reusable block of code that groups together a sequence of statements to perform a specific task.

  # Function Declarations
    - In JavaScript, there are many ways to create a function. One way to create a function is by using a function declaration. 
    - Just like how a variable declaration binds a value to a variable name, 
    - a function declaration binds a function to a name, or an identifier. 
    - Take a look at the anatomy of a function declaration below:
       |>_   function codeWorld() {
       |>_     Console.log(‘Hello from the function call codeWorld’);
       |>_   }
       |>_   codeWorld();

  # Parameters and Arguments
    - Parameters allow functions to accept input(s) and perform a task using the input(s). 
    - We use parameters as placeholders for information that will be passed to the function when it is called.
       |>_   function calculateArea(length , width) {
       |>_     Console.log(length * width);
       |>_   }
       |>_   calculateArea(8,9);
       |>_   const length=8;
       |>_   const width = 9;
       |>_   calculateArea(length.width);

  # Default Parameters
    - One of the features added in ES6 is the ability to use default parameters. 
    - Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is undefined when called.
        |>_  function customerName(name = ‘Stranger’){
        |>_    console.log('Hello ',name);
        |>_  }
        |>_  customerName();
        |>_  customerName(‘codeme’);

  # Return
    - When a function is called, the computer will run through the function’s code and evaluate the result of calling the function. 
    - By default that resulting value is undefined.
        |>_   function calculateArea(length,width){
        |>_     Let area = length*width;
        |>_     return area;
        |>_   }
        |>_   console.log(calculateArea(5,8));
        |>_   function calculateArea(length,width){
        |>_     If(length<0 || width<0)
        |>_       return ‘Length should be greater than 0’;
        |>_     return length*width;
        |>_   }
        |>_   Console.log(calculateArea(0,8));
        |>_   Console.log(calculateArea(5,8));

  # Helper Functions
    - We can also use the return value of a function inside another function. 
    - These functions being called within another function are often referred to as helper functions. 
        |>_   function mainfunction(length,width){
        |>_     If(length<0 || width<0)
        |>_       return ‘length should be greater than 0’;
        |>_     return helpfunction(length,width);
        |>_   }
        |>_   Function helperfunction(length,width){
        |>_     Let area = length*width;
        |>_     return area;
        |>_   }
        |>_   Console.log(mainfunction(0,8));
        |>_   Console.log(mainfunction(5,8));

  # Arrow Functions
    - ES6 introduced arrow function syntax, a shorter way to write functions by using the special “fat arrow” () => notation.
        |>_   Const calculateArea = (length,width) =>{
        |>_     If(length<0 || width<0)
        |>_       return ‘Length should be greater than 0’;
        |>_     return length*width;
        |>_   }

  # Concise Body Arrow Functions
    - JavaScript also provides several ways to refactor arrow function syntax. 
    - The most condensed form of the function is known as concise body. 
    - We’ll explore a few of these techniques below:
        1.Functions that take only a single parameter do not need that parameter to be enclosed in parentheses.
           - However, if a function takes zero or multiple parameters, parentheses are required.
            |>_  const functionName = () =>{ 	}       //zero parameter
            |>_  const functionName = paramone =>{ 		}	//one parameter
            |>_  const functionName = (paramone,paramtwo) =>{	 	}	//two or more parameter
      
        2.A function body composed of a single-line block does not need curly braces. Without the curly braces, whatever that line evaluates will be automatically returned. 
          The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as implicit return.
  
    - So if we have a function:
       |>_  const squareNum = (num) =>{
       |>_    return num*num;
       |>_  }
              
    - We can refactor the function to:
    - const squareNum = num => num*num;
    - Notice the following changes:
       •	The parentheses around num have been removed, since it has a single parameter.
       •	The curly braces { } have been removed since the function consists of a single-line block.
       •	The return keyword has been removed since the function consists of a single-line block.

  `;
  return <pre>{js3}</pre>;
};
const scopeBlock = () => {
  let js4 = `
  # Scope
    - An important idea in programming is scope. Scope defines where variables can be accessed or referenced. 
    - While some variables can be accessed from anywhere within a program, other variables may only be available in a specific context.

  # Blocks and Scope
    - Before we talk more about scope, we first need to talk about blocks.A block is the code found inside a set of curly braces {}.
    - Blocks help us group one or more statements together and serve as an important structural marker for our code.
       |>_   const name = ‘codeMe’
       |>_   function giveInformation()
       |>_   {
       |>_     let carrier = ‘Software Developer’;
       |>_      return name + ' is a ' + carrier;
       |>_   }
       |>_   console.log(name);
       |>_   console.log(giveInformation());
       |>_   console.log(carrier);   //Error

  # Global Scope
    - Scope is the context in which our variables are declared. 
    - We think about scope in relation to blocks because variables can exist either outside of or within these blocks.
    - In global scope, variables are declared outside of blocks. These variables are called global variables. 
    - Because global variables are not bound inside a block, 
    - they can be accessed by any code in the program, including code in blocks.
       |>_   function items(){
       |>_     return item1+item2+item3;
       |>_   }
       |>_   const item1=’mobile’;
       |>_   const item2=’laptop’;
       |>_   const item3=’camera’;
       |>_   console.log(items());

  # Scope Pollution
    - It may seem like a great idea to always make your variables accessible, 
    - but having too many global variables can cause problems in a program.
    - When you declare global variables, they go to the global namespace. 
    - The global namespace allows the variables to be accessible from anywhere in the program. 
    - These variables remain there until the program finishes which means our global namespace can fill up really quickly.
    - Scope pollution is when we have too many global variables that exist in the global namespace, or when we reuse variables across different scopes. 
    - Scope pollution makes it difficult to keep track of our different variables and sets us up for potential accidents. 
    - For example, globally scoped variables can collide with other variables that are more locally scoped, causing unexpected behavior in our code.
        |>_  const item1=’mobile’;
        |>_  const item2=’laptop’;
        |>_  let item3=’camera’;
        |>_  function items()
        |>_  {
        |>_    Item 3 = ‘mouse’;
        |>_    return item1+item2+item3;
        |>_  }
        |>_  console.log(items());
        |>_  console.log(item3);

  # Practice Good Scoping
    - Given the challenges with global variables and scope pollution, 
     - we should follow best practices for scoping our variables as tightly as possible using block scope.
         |>_   function items(){
         |>_     const item1 = ‘laptop;
         |>_     let item2 = ‘mobile’;
         |>_     if(item1 ===’laptop’){
         |>_       Item2 = ‘mouse’;
         |>_       console.log(item1,item2);
         |>_    }
         |>_     console.log(item1,item2);
         |>_   }
         |>_   console.log(item1,item2); // reference error

  `;
  return <pre>{js4}</pre>;
};
const arrays = () => {
  let js5 = `
  # Arrays
    - Organizing and storing data is a foundational concept of programming.
    - One way we organize data in real life is by making lists. Let’s make one here:
        |>_  let item1 = ‘Laptop’;
        |>_  let item2 = ‘camera’;
        |>_  let item3 = ‘mobile’;
        |>_  console.log(item1, item2, item3);
    - other way is to store in an array:
        |>_  let item = [‘Laptop’ , ‘camera’ , ‘mobile’];

  # Create an Array
    - One way we can create an array is to use an array literal. An array literal creates an array by wrapping items in square brackets []. 
    - Remember from the previous exercise, arrays can store any data type — 
    - we can have an array that holds all the same data types or an array that holds different data types.
        |>_  Let data = [‘codeMe’ , 10 , true]

  # Accessing Elements
    - Each element in an array has a numbered position known as its index.
    - We can access individual items using their index, which is similar to referencing an item in a list based on the item’s position.
    - Arrays in JavaScript are zero-indexed, meaning the positions start counting from 0 rather than 1. 
    - Therefore, the first item in an array will be at position 0. Let’s see how we could access an element in an array:
        |>_   let item = [‘Laptop’ , ‘camera’ , ‘mobile’];
        |>_   console.log(item[0]);
        |>_   console.log(item[1]);
        |>_   console.log(item[2]);

    - Imp here String are also treated as an string of characters
        |>_  let data = ‘I love to code with codeme’
        |>_  console.log(data[5]);

  # Update Elements
    - In the previous exercise, you learned how to access elements inside an array or a string by using an index. 
    - Once you have access to an element in an array, you can update its value.
        |>_  let item = [‘Laptop’ , ‘camera’ , ‘mobile’];
        |>_  console.log(item);
        |>_  item[1]=’keyboard’
        |>_  console.log(item);
        |>_  console.log(item[4]);

  # Arrays with let and const
    - You may recall that you can declare variables with both the let and const keywords. Variables declared with let can be reassigned.
    - Variables declared with the const keyword cannot be reassigned. However, elements in an array declared with const remain mutable. 
    - Meaning that we can change the contents of a const array, but cannot reassign a new array or a different value.
        |>_  let item = [‘Laptop’ , ‘camera’ , ‘mobile’];
        |>_  const items = [‘Laptop’ , ‘camera’ , ‘mobile’];
        |>_  let item=[‘laptop’];
        |>_  const items=[‘laptop’];  //Error

   # Imp – the only difference bw const and let keyword declaration that we cannot declare the const again.

  # The .length property
    - One of an array’s built-in properties is length and it returns the number of items in the array. 
    - We access the .length property just like we do with strings.
        |>_  let item = [‘Laptop’ , ‘camera’ , ‘mobile’];
        |>_  console.log(item.length);

  # The .push() Method
    - Let’s learn about some built-in JavaScript methods that make working with arrays easier. 
    - These methods are specifically called on arrays to make common tasks, like adding and removing elements, more straightforward.
    - One method, .push() allows us to add items to the end of an array.
        |>_  let item = [‘Laptop’ , ‘camera’ , ‘mobile’];
        |>_  item.push(‘cpu’,’keyboard’,’screen’);
        |>_  console.log(item);

  # The .pop() Method
    - Another array method, .pop(), removes the last item of an array
        |>_  let item = [‘Laptop’ , ‘camera’ , ‘mobile’];
        |>_  const remove = item.pop();
        |>_  console.log(item);
        |>_  console.log(remove);

  # More Array Methods
    - There are many more array methods than just .push() and .pop(). 
    - .pop() and .push() mutate the array on which they’re called. 
    - However, there are times that we don’t want to mutate the original array and we can use non-mutating array methods. 
    - Be sure to check MDN to understand the behavior of the method you are using.
    - Some arrays methods that are available to JavaScript developers include below method: 
    - .join(), .slice(), .splice(), .shift(), .unshift(), and .concat() amongst many others. 
    - Using these built-in methods make it easier to do some common tasks when working with arrays.

    - Reference read - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

        |>_  let item = [‘Laptop’ , ‘camera’ , ‘mobile’, ‘cpu’,’keyboard’,’screen’];
        |>_  item.shift();
        |>_  console.log(item);
        |>_  item.unshift(‘new_Item’);
        |>_  console.log(item);
        |>_  console.log(item.slice(1,3));
        |>_  console.log(item.indexOf(‘mobile’));

  # Arrays and Functions
    - Take a look at the following example where we call .push() on an array inside a function. 
    - Recall, the .push() method mutates, or changes, an array:
        |>_  let item = [‘Laptop’ , ‘camera’ , ‘mobile’, ‘cpu’,’keyboard’,’screen’];
        |>_  function changeArray(arr){
        |>_    arr[0]=’Array_changed’
        |>_  }
        |>_  changeArray(item);
        |>_  console.log(item);
        |>_  const removeElement = arr =>{
        |>_  arr.pop();
        |>_  }
        |>_  removeElement (item);
        |>_  console.log(item);


  # Nested Arrays
    - An array can also able to store another array. When an array contains another array it is known as a nested array.
        |>_  const data = [[1,2],[3,4],[‘codeme’,code]];
        |>_  console.log(data[2][1]);

  `;
  return <pre>{js5}</pre>;
};
const loops = () => {
  let js6 = `
  # Loops
    - A loop is a programming tool that repeats a set of instructions until a specified condition, called a stopping condition is reached. 
    - As a programmer, you’ll find that you rely on loops all the time! 

  # The For Loop
    - Instead of writing out the same code over and over, loops allow us to tell computers to repeat a given block of code on its own. 
    - One way to give computers these instructions is with a for loop.
    - A for loop contains three expressions separated by ; inside the parentheses:
      1.	an initialization starts the loop and can also be used to declare the iterator variable.
      2.	a stopping condition is the condition that the iterator variable is evaluated against— 
            if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
      3.	an iteration statement is used to update the iterator variable on each loop.
         |>_  for(int i=0 ;i<10;i++){
         |>_    Console.log(i);
         |>_  }

  # Looping in Reverse
    What if we want the for loop to log 3, 2, 1, and then 0? With simple modifications to the expressions, we can make our loop run backward!
    To run a backward for loop, we must:
    •	Set the iterator variable to the highest desired value in the initialization expression.
    •	Set the stopping condition for when the iterator variable is less than the desired amount.
    •	The iterator should decrease in intervals after each iteration
         |>_ for ( int i=5 ; i>=0 ;i--){
         |>_ Console.log(i);
         |>_ }

  # Looping through Arrays
    - for loops are very handy for iterating over data structures. 
    - For example, we can use a for loop to perform the same operation on each element on an array. 
    - Arrays hold lists of data, like customer names or product information. 
    - Imagine we owned a store and wanted to increase the price of every product in our catalog. 
    - That could be a lot of repeating code, but by using a for loop to iterate through the array we could accomplish this task easily.
        |>_  const _items = [ ‘mobile’ , ‘laptop’ , ‘camera’];
        |>_  for(int i=0;i<_items.length;i++){
        |>_    Console.log(items[i]);
        |>_  }

  # Nested Loops
    - When we have a loop running inside another loop, we call that a nested loop. 
    - One use for a nested for loop is to compare the elements in two arrays. 
    - For each round of the outer for loop, the inner for loop will run completely.
        |>_  const _frontEnd = [‘Html’ , ‘CSS’ ,’JavaScript’];
        |>_  const _BackEnd = [‘Node.js’ , ‘Asp.net’ , ‘C#’];
        |>_  for ( int i=0 ;i<_frontEnd.length;i++){
        |>_    for( int j=0;j<_BackEnd.length;j++){
        |>_      console.log(frontEnd[i] + ' ----- ' + BackEnd[i]);
        |>_    }
        |>_  }

  # The While Loop
    - You’re doing great! We’re going to teach you about a different type of loop: the while loop. 
    - To start, let’s convert a for loop into a while loop:
        |>_  const data = [‘JavaScript’ , ‘c#’ , ‘Java’ , ‘Python’];
        |>_  let dataSelected ;
        |>_  while(dataSelected != ‘c#’){
        |>_    dataSelected = data[Math.floor(Math.random()*4)];
        |>_    console.log(dataSelected);
        |>_  }

  # Do...While Statements
    - In some cases, you want a piece of code to run at least once and then loop based on a specific condition after its initial run. 
    - This is where the do...while statement comes in.
    - A do...while statement says to do a task once and then keep doing it until a specified condition is no longer met.
        |>_  let i=5;
        |>_  do{
        |>_    console.log(‘Hi’);
        |>_    i++;
        |>_  }
        |>_  While(i<5)

  # The break Keyword
    - The break keyword allows programs to “break” out of the loop from within the loop’s block.

  `;
  return <pre>{js6}</pre>;
};
const higherOrderFunction = () => {
  let js7 = `
  # Functions as Data
    - JavaScript functions behave like any other data type in the language; 
    - we can assign functions to variables, and we can reassign them to new variables.
    - Documentation link - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
    - Below, we have an annoyingly long function name that hurts the readability of any code in which it’s used. 
    - Let’s pretend this function does important work and needs to be called repeatedly!
        |>_   const iAmDoingSomeImportantWork = () => {
        |>_     Console.log(‘I am Doing some Important work today please don’t disturb’);
        |>_   }
        |>_   const busy = iAmDoingSomeImportantWork;
        |>_   busy();

  # Functions as Parameters
    - Since functions can behave like any other type of data in JavaScript, 
    - it might not surprise you to learn that we can also pass functions (into other functions) as parameters. 
    - A higher-order function is a function that either accepts functions as parameters, returns a function, or both! 
    - We call the functions that get passed in as parameters and invoked callback functions because they get called during the execution of the higher-order function.
    - When we pass a function in as an argument to another function, we don’t invoke it. Invoking the function would evaluate to the return value of that function call. 
    - With callbacks, we pass in the function itself by typing the function name without the parentheses (that would evaluate to the result of calling the function):
        |>_  let t1;
        |>_  let t2;
        |>_  const timeFuncRuntime = funcParameter => {
        |>_      t1 = Date.now();
        |>_    funcParameter();
        |>_      t2 = Date.now();
        |>_    return t2 - t1;
        |>_  }
        |>_
        |>_  const addOneToOne = () => 1 + 1;
        |>_
        |>_  console.log(timeFuncRuntime(addOneToOne));
        |>_  console.log(t1,t2);

    - We wrote a higher-order function, timeFuncRuntime(). It takes in a function as an argument, saves a starting time, 
    - invokes the callback function, records the time after the function was called, and returns the time the function took to run by subtracting the starting time from the ending time.
    - This higher-order function could be used with any callback function which makes it a potentially powerful piece of code.
  `;
  return <pre>{js7}</pre>;
};
const iterators = () => {
  let js8 = `
  # Introduction to Iterators
    - Imagine you had a grocery list and you wanted to know what each item on the list was. 
    - You’d have to scan through each row and check for the item. 
    - This common task is similar to what we have to do when we want to iterate over, or loop through, an array.
    - One tool at our disposal is the for loop. However, we also have access to built-in array methods which make looping easier.
    - The built-in JavaScript array methods that help us iterate are called iteration methods, at times referred to as iterators.
    - Iterators are methods called on arrays to manipulate elements and return values.

  # The .forEach() Method
    - The first iteration method that we’re going to learn is .forEach()
        |>_  const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
        |>_
        |>_  //First Methord
        |>_  fruits.forEach(
        |>_    function(fruitItems){
        |>_      console.log('I want to eat a ',fruitItems);
        |>_    }
        |>_  );
        |>_
        |>_ //Second methord
        |>_  fruits.forEach(fruitItems => console.log('I want to eat a ',fruitItems))
        |>_
        |>_  //Third Methord
        |>_  function printFruits(element){
        |>_    console.log('I want to eat a ',element);
        |>_  }
        |>_  fruits.forEach(printFruits);

  # The .map() Method (Return Array)
    - The second iterator we’re going to cover is .map(). 
    - When .map() is called on an array, it takes an argument of a callback function and returns a new array!
    - const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
         |>_  // Create the secretMessage array below
         |>_  const secretMessage = animals.map(animals => animals[0]);
         |>_  
         |>_  console.log(secretMessage.join(''));
         |>_  
         |>_  const bigNumbers = [100, 200, 300, 400, 500];
         |>_  
         |>_  // Create the smallNumbers array below
         |>_  const smallNumbers = bigNumbers.map(bigNumbers =>{
         |>_    return bigNumbers/100;
         |>_  });

  # The .filter() Method (Return Arrays)
    - Another useful iterator method is .filter(). Like .map(), .filter() returns a new array. 
    - However, .filter() returns an array of elements after filtering out certain elements from the original array. 
    - The callback function for the .filter() method should return true or false depending on the element that is passed to it.
    - The elements that cause the callback function to return true are added to the new array. 
    - Take a look at the following example:
         |>_  const randomNumbers = [375, 200, 3.14, 7, 13, 852];
         |>_  
         |>_  // Call .filter() on randomNumbers below
         |>_  const smallNumbers = randomNumbers.filter(
         |>_    randomNumbers =>{
         |>_      return randomNumbers <=250;
         |>_    }
         |>_  );
         |>_  console.log(randomNumbers);
         |>_  console.log(smallNumbers);
         |>_   
         |>_  const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
         |>_  
         |>_  // Call .filter() on favoriteWords below
         |>_  const longFavoriteWords = favoriteWords.filter(
         |>_    favoriteWords =>{ //ThisLineFavoriteWord is replacable
         |>_      return favoriteWords.length >7;
         |>_    }
         |>_  );
         |>_  console.log(favoriteWords);
         |>_  console.log(longFavoriteWords);

  # The .findIndex() Method (Return element based on Index)
    - We sometimes want to find the location of an element in an array. 
    - That’s where the .findIndex() method comes in! 
    - Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function.
         |>_  const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
         |>_     
         |>_  const foundAnimal = animals.findIndex(
         |>_    animal =>{
         |>_      return animal === 'elephant';
         |>_    }
         |>_  );
         |>_  console.log(foundAnimal);
         |>_     
         |>_  const startsWithS = animals.findIndex(
         |>_    animal =>{
         |>_      return animal[0]==='s';
         |>_    }
         |>_  );
         |>_  console.log(startsWithS);
         |>_  console.log(animals[startsWithS])

  # The .reduce() Method
    - Another widely used iteration method is .reduce(). 
    - The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array.

         |>_  //First Methord
         |>_  const numbers = [1, 2, 4, 10];
         |>_  const summedNums = numbers.reduce((accumulator, currentValue) => {
         |>_    return accumulator + currentValue
         |>_  })
         |>_   
         |>_  console.log(summedNums) // Output: 17
         |>_   
         |>_  //Second methord
         |>_  const numbers = [1, 2, 4, 10];
         |>_    
         |>_  const summedNums = numbers.reduce((accumulator, currentValue) => {
         |>_    return accumulator + currentValue
         |>_  }, 100)  // <- Second argument for .reduce()
         |>_    
         |>_  console.log(summedNums); // Output: 117
         |>_    
         |>_  //Third methord
         |>_   
         |>_  const newNumbers = [1, 3, 5, 7];
         |>_       
         |>_  const newSum = newNumbers.reduce((accumulator, currentValue) => {
         |>_    console.log('The value of accumulator: ', accumulator);
         |>_    console.log('The value of currentValue: ', currentValue);
         |>_    return accumulator + currentValue;
         |>_  }, 10);
         |>_   
         |>_  console.log(newSum);

  # Iterator Documentation
    - There are many additional built-in array methods, a complete list of which is on the MDN’s Array iteration methods page.
    - Ref - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods
    - The documentation for each method contains several sections:
        1.	A short definition.
        2.	A block with the correct syntax for using the method.
        3.	A list of parameters the method accepts or requires.
        4.	The return value of the function.
        5.	An extended description.
        6.	Examples of the method’s use.
        7.	Other additional information.

        |>_  const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
        |>_  // Something is missing in the method call below
        |>_   
        |>_  console.log(words.some((word) => {
        |>_    return word.length < 6;
        |>_  }));
        |>_    
        |>_  // Use filter to create a new array
        |>_   
        |>_ const interestingWords = words.filter(
        |>_   word =>{
        |>_     return word.length>5;
        |>_   }
        |>_ )
        |>_   
        |>_ // Make sure to uncomment the code below and fix the incorrect code before running it
        |>_   
        |>_ console.log(interestingWords.every((word) => { word >5} ));
        |>_     
        |>_   const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
        |>_     
        |>_   // Something is missing in the method call below 
        |>_    
        |>_   console.log(words.some(word => {
        |>_     return word.length < 6;
        |>_   }));
        |>_   
        |>_  // Use filter to create a new array
        |>_  const interestingWords = words.filter((word) => {return word.length > 5});
        |>_   
        |>_  // Make sure to uncomment the code below and fix the incorrect code before running it
        |>_      
        |>_  console.log(interestingWords.every((word) => {return word.length > 5}));
        |>_  
        |>_  const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];
        |>_  
        |>_   const nums = [1, 50, 75, 200, 350, 525, 1000];
        |>_     
        |>_   //  Choose a method that will return undefined
        |>_   cities.forEach(city => console.log('Have you visited ' + city + '?'));
        |>_    
        |>_   // Choose a method that will return a new array
        |>_   const longCities = cities.filter(city => city.length > 7);
        |>_   
        |>_   // Choose a method that will return a single value
        |>_   const word = cities.reduce((acc, currVal) => {
        |>_     return acc + currVal[0]
        |>_   }, "C");
        |>_   
        |>_   console.log(word)
        |>_    
        |>_   // Choose a method that will return a new array
        |>_   const smallerNums = nums.map(num => num - 5);
        |>_     
        |>_  // Choose a method that will return a boolean value
        |>_  nums.every(num => num < 0);
        |>_  // OR nums.some(num => num < 0);

  `;
  return <pre>{js8}</pre>;
};
const object = () => {
  let js9 = `
  # Introduction to Objects
    - It’s time to learn more about the basic structure that permeates nearly every aspect of JavaScript programming: objects.
    - You’re probably already more comfortable with objects than you think, because JavaScript loves objects! 
    - Many components of the language are actually objects under the hood, and even the parts that aren’t— like strings or numbers— can still act like objects in some instances.
    - There are only seven fundamental data types in JavaScript, and six of those are the primitive data types: string, number, boolean, null, undefined, and symbol. With the seventh type, objects, 
    - we open our code to more complex possibilities. We can use JavaScript objects to model real-world things, like a basketball, or we can use objects to build the data structures that make the web possible.
    - At their core, JavaScript objects are containers storing related data and functionality, but that deceptively simple task is extremely powerful in practice. 
    - You’ve been using the power of objects all along, but now it’s time to understand the mechanics of objects and start making your own!

  # Creating Object Literals
    - Objects can be assigned to variables just like any JavaScript type. We use curly braces, {}, to designate an object literal:
       |>_  let myData = {
       |>_  }
    - Object Data can be filled in unordered data the data is organized into key-value pairs. 
    - A key is like a variable name that points to a location in memory that holds a value.
      |>_  let myData = {
      |>_    ‘Name’ : ‘Hari’
      |>_    ‘Designation’ : ‘Software Engineer’
      |>_  }

  # Accessing Properties
      There are two ways we can access an object’s property
        1.	dot notation, .
        2.	Bracket Notation

  # dot notation - 
      |>_  let myData = {
      |>_    ‘Name’ : ‘Hari’
      |>_    ‘Designation’ : ‘Software Engineer’
      |>_  }
      |>_
      |>_  console.log(myData.Name);    // Print Hari
      |>_  console.log(myData.Designation);    // Print Software Engineer

  # Bracket Notation
     |>_  let myData = {
     |>_        ‘Name’ : ‘Hari’
     |>_        ‘Designation’ : ‘Software Engineer’
     |>_        ‘Total Exp’ :  ‘3Years’
     |>_  }

     |>_  console.log(myData[‘Name’]);    //Return Hari
     |>_  console.log(myData[‘Total Exp’]) // Return 3 Years
     |>_  console.log(myData[‘work’]) // Return undefined

  # Some Important Points
      1. Single Name Key value can be declare without ‘’ [Braces]  for Ex ‘Name’ can Name it will work in same Way
      2.But Key with Space cannot be declared without braces.
      3.Object Accessed with Bracket notation can always use with braces for example myData[ ‘ Total Exp ’ ]

  # With bracket notation you can also use a variable inside the brackets to select the keys of an object. This can be especially helpful when working with functions:
      |>_  let returnAnyProp = ( objectName , propName ) =>{
      |>_  objectName[propName];
      |>_  }
      |>_   
      |>_  returnAnyProp ( myData, ‘Designation’ );

  # Property Assignment
    - Once we’ve defined an object, we’re not stuck with all the properties we wrote. 
    - Objects are mutable meaning we can update them after we create them!
    - We can use either dot notation, ., or bracket notation, [], and the assignment operator, = to add new key-value pairs to an object or change an existing property.
    - One of two things can happen with property assignment:
        •	If the property already exists on the object, whatever value it held before will be replaced with the newly assigned value.
        •	If there was no property with that name, a new property will be added to the object.

       |>_  spaceship[‘Fuel Type’] = ‘vegetable oil’;
       |>_  spaceship.color = ‘gold’;

  # It’s important to know that although we can’t reassign an object declared with const, we can still mutate it, meaning we can add new properties and change the properties that are there.

      |>_  const spaceship = {type: 'shuttle'};
      |>_  spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
      |>_  spaceship.type = 'alien'; // Changes the value of the type property
      |>_  spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'

      |>_  Deleting the Property :-
      |>_  onst spaceship = {
      |>_    'Fuel Type': 'Turbo Fuel',
      |>_    homePlanet: 'Earth',
      |>_    mission: 'Explore the universe' 
      |>_  };

      delete spaceship.mission;  // Removes the mission property

  # Methods
    - When the data stored on an object is a function we call that a method. 
    - A property is what an object has, while a method is what an object does.
    - Do object methods seem familiar? That’s because you’ve been using them all along! 
    - For example console is a global javascript object and .log() is a method on that object. 
    - Math is also a global javascript object and .floor() is a method on it.
    - We can include methods in our object literals by creating ordinary, comma-separated key-value pairs. The key serves as our method’s name, while the value is an anonymous function expression.
      |>_  const alienShip = {
      |>_    invade: function () { 
      |>_      console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
      |>_    }
      |>_  };

    - With the new method syntax introduced in ES6 we can omit the colon and the function keyword.
      |>_ const alienShip = {
      |>_   invade () { 
      |>_     console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
      |>_   }
      |>_ };

    - Object methods are invoked by appending the object’s name with the dot operator followed by the method name and parentheses:
        alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'

  # Nested Objects
    - In application code, objects are often nested— an object might have another object as a property which in turn could have a property that’s an array of even more objects!
    - In our spaceship object, we want a crew object. This will contain all the crew members who do important work on the craft. Each of those crew members are objects themselves. 
    - They have properties like name, and degree, and they each have unique methods based on their roles.
    - We can also nest other objects in the spaceship such as a telescope or nest details about the spaceship’s computers inside a parent nanoelectronics object.

       |>_  const spaceship = {
       |>_      telescope: {
       |>_          yearBuilt: 2018,
       |>_          model: '91031-XLT',
       |>_          focalLength: 2032 
       |>_      },
       |>_      crew: {
       |>_          captain: { 
       |>_              name: 'Sandra', 
       |>_              degree: 'Computer Engineering', 
       |>_              encourageTeam() { console.log('We got this!') } 
       |>_          }
       |>_      },
       |>_      engine: {
       |>_          model: 'Nimbus2000'
       |>_      },
       |>_      nanoelectronics: {
       |>_          computer: {
       |>_              terabytes: 100,
       |>_              monitors: 'HD'
       |>_          },
       |>_         'back-up': {
       |>_            battery: 'Lithium',
       |>_            terabytes: 50
       |>_          }
       |>_      }
       |>_  }; 

    - We can chain operators to access nested properties. We’ll have to pay attention to which operator makes sense to use in each layer. 
    - It can be helpful to pretend you are the computer and evaluate each expression from left to right so that each operation starts to feel a little more manageable.
       |>_ spaceship.nanoelectronics['back-up'].battery; // Returns 'Lithium'

    In the preceding code:
      •	First the computer evaluates spaceship.nanoelectronics, which results in an object containing the back-up and computer objects.
      •	We accessed the back-up object by appending ['back-up'].
      •	The back-up object has a battery property, accessed with .battery which returned the value stored there: 'Lithium'

  # Pass By Reference
    - Objects are passed by reference. This means when we pass a variable assigned to an object into a function as an argument, 
    - the computer interprets the parameter name as pointing to the space in memory holding that object.
    - As a result, functions which change object properties actually mutate the object permanently (even when the object is assigned to a const variable).
       |>_  const spaceship = {
       |>_    homePlanet : 'Earth',
       |>_    color : 'silver'
       |>_  };
       |>_   
       |>_  let paintIt = obj => {
       |>_    obj.color = 'glorious gold'
       |>_  };
       |>_   
       |>_  paintIt(spaceship);
       |>_     
       |>_  spaceship.color // Returns 'glorious gold'

    - Our function paintIt() permanently changed the color of our spaceship object. 
    - However, reassignment of the spaceship variable wouldn’t work in the same way:
       |>_  let spaceship = {
       |>_    homePlanet : 'Earth',
       |>_    color : 'red'
       |>_  };
       |>_  let tryReassignment = obj => {
       |>_    obj = {
       |>_      identified : false, 
       |>_      'transport type' : 'flying'
       |>_    }
       |>_    console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}
       |>_    
       |>_  };
       |>_  tryReassignment(spaceship) // The attempt at reassignment does not work.
       |>_  spaceship // Still returns {homePlanet : 'Earth', color : 'red'};
       |>_   
       |>_  spaceship = {
       |>_    identified : false, 
       |>_    'transport type': 'flying'
       |>_  }; // Regular reassignment still works.

    Let’s look at what happened in the code example:
    •	We declared this spaceship object with let. This allowed us to reassign it to a new object with identified and 'transport type' properties with no problems.
    •	When we tried the same thing using a function designed to reassign the object passed into it, the reassignment didn’t stick (even though calling console.log() on the object produced the expected result).
    •	When we passed spaceship into that function, obj became a reference to the memory location of the spaceship object, but not to the spaceship variable. This is because the obj parameter of the tryReassignment() function is a variable in its own right. The body of tryReassignment() has no knowledge of the spaceship variable at all!
    •	When we did the reassignment in the body of tryReassignment(), the obj variable came to refer to the memory location of the object {'identified' : false, 'transport type' : 'flying'}, while the spaceship variable was completely unchanged from its earlier value.

  # Looping Through Objects
    - Loops are programming tools that repeat a block of code until a condition is met. 
    - We learned how to iterate through arrays using their numerical indexing, but the key-value pairs in objects aren’t ordered! 
    - JavaScript has given us alternative solution for iterating through objects with the for...in syntax .

        for...in will execute a given block of code for each property in an object.
      |>_ let spaceship = {
      |>_  crew: {
      |>_    captain: { 
      |>_      name: 'Lily', 
      |>_      degree: 'Computer Engineering', 
      |>_      cheerTeam() { console.log('You got this!') } 
      |>_    },
      |>_    'chief officer': { 
      |>_      name: 'Dan', 
      |>_       degree: 'Aerospace Engineering', 
      |>_      agree() { console.log('I agree, captain!') } 
      |>_   },
      |>_   medic: { 
      |>_     name: 'Clementine', 
      |>_     degree: 'Physics', 
      |>_     announce() { console.log('Jets on!') } },
      |>_   translator: {
      |>_     name: 'Shauna', 
      |>_     degree: 'Conservation Science', 
      |>_      powerFuel() { console.log('The tank is full!') } 
      |>_   }
      |>_  }
      |>_ }; 
         
      |>_  // for...in
      |>_  for (let crewMember in spaceship.crew) {
      |>_    console.log('{crewMember}: {spaceship.crew[crewMember].name}');
      |>_  }
        
    - Our for...in will iterate through each element of the spaceship.crew object. 
    - In each iteration, the variable crewMember is set to one of spaceship.crew‘s keys, enabling us to log a list of crew members’ role and name.

  `;
  return <pre>{js9}</pre>;
};
const advanceobject = () => {
  let js10 = `
  # Advanced Objects Introduction
    - Remember, objects in JavaScript are containers that store data and functionality. 
    - In this lesson, we will build upon the fundamentals of creating objects and explore some advanced concepts.
    - In this topic we will Discuss these topics:
    - how to use the this keyword.
    - conveying privacy in JavaScript methods.
    - defining getters and setters in objects.
    - creating factory functions.
    - using destructuring techniques.

  # The this Keyword
    - Objects are collections of related data and functionality. We store that functionality in methods on our objects:
       |>_  const Data = {
       |>_    Name : 'Hari',
       |>_    Language() {
       |>_        console.log('JavaScript');
       |>_      },
       |>_    PrintName () {
       |>_        console.log(Name);
       |>_      }
       |>_   }

       |>_ Data.PrintName(); //Return Reference Error

    - We are Encountered by reference Error because we can’t access the property of method Inside the Scope directly, 
    - We have to Use this keyword to Access another property of an object.

        |>_  const Data = {
        |>_      Name : 'Hari',
        |>_      Language() {
        |>_          console.log('JavaScript');
        |>_      },
        |>_      PrintName () {
        |>_          console.log(this.Name);
        |>_      }
        |>_   }

        |>_  Data.PrintName(); //Return Hari

    - The this keyword references the calling object which provides access to the calling object’s properties.

  # Arrow Functions and this
    - Arrow functions inherently bind, or tie, an already defined this value to the function itself that is NOT the calling object. 
    - In the code snippet above, the value of this is the global object, or an object that exists in the global scope, which doesn’t have a dietType property and therefore returns undefined.

       |>_  const Data = {
       |>_      Name : 'Hari',
       |>_      Language() {
       |>_        console.log('JavaScript');
       |>_      },
       |>_      PrintName : () => {
       |>_          console.log(this.Name);
       |>_      }
       |>_   }

       |>_Data.PrintName(); //Return Undefined

  # For More Understanding read the Document – 
     - Global function - https://developer.mozilla.org/en-US/docs/Glossary/Global_object
     - Arrow function - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

  # Privacy
    - Accessing and updating properties is fundamental in working with objects. Sometimes we don’t want value to be updated in Object 
       |>_  const Data = {
       |>_    _name : 'Hari'
       |>_  }
       |>_  Data._name = 'Hello';
       |>_  console.log(Data._name)

    - Although Defining with const keyword we can change the value.we have to use getters and setters to restrict the value from User to read and update.

  # Getters
    - Getters are methods that get and return the internal properties of an object. 
    - But they can do more than just retrieve the value of a property!
       |>_  const Data = {
       |>_    _name : 'Hari',
       |>_    _Language : 'JavaScript',
       |>_    get Info(){
       |>_      if(this._name && this._Language){
       |>_        return 'name - {this._name} and language - {this._Language}'
       |>_      }
       |>_      else{
       |>_        return 'Missing name or langauge';
       |>_      }
       |>_    }
       |>_  }

       |>_ console.log(Data.Info)
    - Another thing to keep in mind when using getter (and setter) methods is that properties cannot share the same name as the getter/setter function. 
    - If we do so, then calling the method will result in an infinite call stack error.

  # Setters 
    - Along with getter methods, we can also create setter methods which reassign values of existing properties within an object.
       |>_  const Data = {
       |>_      _name : 'Hari',
       |>_      _Language : 'JavaScript',
       |>_      get Info(){
       |>_            if(this._name && this._Language){
       |>_              return 'name - {this._name} and language - {this._Language}'
       |>_          }
       |>_          else{
       |>_              return 'Missing name or langauge';
       |>_          }
       |>_          },
       |>_      set name(_newName){
       |>_          if(typeof _newName === 'string'){
       |>_              this._name = _newName;
       |>_            }
       |>_          else{
       |>_              console.log('Please Input valid Name');
       |>_            }
       |>_        }
       |>_    }
       |>_  console.log(Data.name = 'CodeMe');
       |>_  console.log(Data.Info)
       |>_  console.log(Data.name = 45);

  # Factory Functions
    - So far we’ve been creating objects individually, but there are times where we want to create many instances of an object quickly. 
    - Here’s where factory functions come in. 
    - A real world factory manufactures multiple copies of an item quickly and on a massive scale. 
    - A factory function is a function that returns an object and can be reused to make multiple object instances. 
    - Factory functions can also have parameters allowing us to customize the object that gets returned.

       |>_  const DataFactory = (name,Langauge,Designation) =>{
       |>_      return {
       |>_          name : name,
       |>_          Langauge : Langauge,
       |>_          Designation : Designation,
       |>_          Info() {
       |>_              console.log('{this.name}'s object');
       |>_            }
       |>_        }
       |>_    }

       |>_   const Data = DataFactory('Hari','JavaScript','SE');
       |>_   Data.Info();

  # Property Value Shorthand 
    - ES6 introduced some new shortcuts for assigning properties to variables known as destructuring.
       |>_  const DataFactory = (name,Langauge,Designation) =>{
       |>_      return {
       |>_          name,
       |>_          Langauge,
       |>_          Designation,
       |>_          Info() {
       |>_              console.log('{this.name}'s object');
       |>_            }
       |>_        }
       |>_    }

       |>_  const Data = DataFactory('Hari','JavaScript','SE');
       |>_  Data.Info();

  # Destructured Assignment
       |>_  const Data = {
       |>_      name : 'Hari',
       |>_      Language : 'JavaScript',
       |>_      FrameWork : {
       |>_          backend : 'Asp.net Core',
       |>_          frontend : 'Angular'
       |>_        }
       |>_    }

       |>_  const name = Data.name;
       |>_  console.log(name);

       |>_  const { name } = Data; //ES6 Destruction Assigment
       |>_  console.log(name); 

  # Some Useful Build in Object
    - learning in build objects  -  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods
    - Learning object constructor  -  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods_of_the_Object_constructor

        |>_  const Data = {
        |>_      name : 'Hari',
        |>_      Language : 'JavaScript'
        |>_    }
        |>_  const DataKeys = Object.keys(Data);
        |>_  const DataEntries = Object.entries(Data);

        |>_  const _newData = {
        |>_      frontend : 'Angular',
        |>_      backend : 'Asp.net Core'
        |>_    }
        |>_  const newData = Object.assign(Data,_newData);

        |>_  console.log(DataKeys);
        |>_  console.log(DataEntries);
        |>_  console.log(newData);

  `;
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
