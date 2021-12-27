/**
 * Creating main content
 */
const _IntroductionToJS = () => {
  let _pre = document.createElement("pre");
  _pre.innerHTML = `
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
  return _pre;
};
const _ConditionalOperators = () => {
  let _pre = document.createElement("pre");
  _pre.innerHTML = `
      # Conditional Operator
        - In life, we make decisions based on circumstances. Think of an everyday decision as mundane as falling asleep — if we are tired, we go to bed, otherwise, we wake up and start our day.
        - These if-else decisions can be modeled in code by creating conditional statements. A conditional statement checks a specific condition(s) and performs a task based on the condition(s).
    
      # If Statement
        - We often perform a task based on a condition. For example, if the weather is nice today, then we will go outside. If the alarm clock rings, then we’ll shut it off. If we’re tired, then we’ll go to sleep.
        - If...Else Statements
        - In the previous exercise, we used an if statement that checked a condition to decide whether or not to run a block of code. In many cases, we’ll have code we want to run if our condition evaluates to false.
    
                Let sale = true;
                If(sale)    
                {	  console.log(‘Time to but the stuff’);   }
                Else  
                {	  console.log(‘Time to wait for a sale’); }
    
    
      # Comparison Operators
      When writing conditional statements, sometimes we need to use different types of operators to compare values. These operators are called comparison operators.
      Here is a list of some handy comparison operators and their syntax:
              •	Less than: <
              •	Greater than: >
              •	Less than or equal to: <=
              •	Greater than or equal to: >=
              •	Is equal to: ===
              •	Is not equal to: !==
    
    
      # Logical Operators
        - Working with conditionals means that we will be using booleans, true or false values. 
        - In JavaScript, there are operators that work with boolean values known as logical operators. We can use logical operators to add more sophisticated logic to our conditionals. 
    
        There are three logical operators:
              •	the and operator (&&)
              •	the or operator (||)
              •	the not operator, otherwise known as the bang operator (!)
    
    
      # Truthy and Falsy
        - Let’s consider how non-boolean data types, like strings or numbers, are evaluated when checked inside a condition.
        - Sometimes, you’ll want to check if a variable exists and you won’t necessarily want it to equal a specific value — you’ll only check to see if the variable has been assigned a value.
              •	0
              •	Empty strings like "" or ''
              •	null which represent when there is no value at all
              •	undefined which represent when a declared variable lacks a value
              •	NaN, or Not a Number
    
                let _data;
                if(_data)
                { 	console.log(‘we have a data’)		}
                Else
                {	console.log(‘data is empty’);		}
                Let _data=0;
                If(_data)
                {	console.log(‘_data has value’);	}
                Else
                {	console.log(‘Data is empty’);	}
    
      # Truthy and Falsy Assignment
      Truthy and falsy evaluations open a world of short-hand possibilities!
    
                Let userName;
                Let defaultName;
                If(userName)
                {	defaultName = userName; 		}
                Else
                {	defaultName = ‘Customer’		}
                console.log(defaultName);
    
              Try with concept of short-circuit evaluation.
              Let defaultName = userName || ‘Customer’ ;
    
    
      # Ternary Operator
        - In the spirit of using short-hand syntax, we can use a ternary operator to simplify an if...else statement.
        - Let nightTime = true;
    
                If(nightTime)
                {	console.log(‘Turn on the light !!!’);		}
                Else
                {	console.log(‘Turn of the light !!!’);		}
        We can use a ternary operator to perform the same functionality:
    
                nightLight ? console.log(‘Turn on the light !!!’) : console.log(‘Turn of the light !!!’);
    
    
      # Else If Statements
        - We can add more conditions to our if...else with an else if statement. The else if statement allows for more than two possible outcomes. 
        - You can add as many else if statements as you’d like, to make more complex conditionals!
    
      # The switch keyword
        - else if statements are a great tool if we need to check multiple conditions. 
        - In programming, we often find ourselves needing to check multiple values and handling each of them differently. 
    
                Let _item =’mobile’;
                If(_item === ‘laptop’)
                {	console.log(‘Price for laptop is 200 rs’);		}
                Else if(item===’mobile’)
                {	console.log(‘Price for mobile is 100 rs’);		}
                Else if(item ===’camera’)
                {	console.log(‘Price for camera is 50 rs’);		}
                Else
                {	console.log(‘Item not found ’);		}
    
      A switch statement provides an alternative syntax that is easier to read and write. A switch statement looks like this:
    
                Switch(item)
                {
                  Case ‘laptop’:
                    console.log(‘Price for laptop is 200 rs’);
                break;
                          Case ’mobile’:
                    console.log(‘Price for mobile is 100 rs’);
                break;		
                Case ’camera’:
                    console.log(‘Price for camera is 50 rs’);
                break;
                default:
                console.log(‘Item not found ’);
                break;
                }
    
      `;
  return _pre;
};
const _Function = () => {
  let _pre = document.createElement("pre");
  _pre.innerHTML = `
      # Function
        - A function is a reusable block of code that groups together a sequence of statements to perform a specific task.
    
      # Function Declarations
        - In JavaScript, there are many ways to create a function. One way to create a function is by using a function declaration. 
        - Just like how a variable declaration binds a value to a variable name, a function declaration binds a function to a name, or an identifier. 
        - Take a look at the anatomy of a function declaration below:
    
                  function codeWorld()
                  {
                    Console.log(‘Hello from the function call codeWorld’);
                  }
                  codeWorld();
    
      # Parameters and Arguments
        - Parameters allow functions to accept input(s) and perform a task using the input(s). 
        - We use parameters as placeholders for information that will be passed to the function when it is called.
    
                  function calculateArea(length , width)
                  {
                    Console.log(length * width);
                  }
                  calculateArea(8,9);
                  const length=8;
                  const width = 9;
                  calculateArea(length.width);
    
      # Default Parameters
        - One of the features added in ES6 is the ability to use default parameters. 
        - Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is undefined when called.
    
                  function customerName(name = ‘Stranger’)
                  {
                    console.log('Hello ${name}');
                  }
                  customerName();
                  customerName(‘codeme’);
    
      # Return
        - When a function is called, the computer will run through the function’s code and evaluate the result of calling the function. By default that resulting value is undefined.
    
                  function calculateArea(length,width)
                  {
                    Let area = length*width;
                    return area;
                  }
                  console.log(calculateArea(5,8));
                  function calculateArea(length,width)
                  {
                    If(length<0 || width<0)
                      return ‘Length should be greater than 0’;
                    return length*width;
                  }
                  Console.log(calculateArea(0,8));
                  Console.log(calculateArea(5,8));
    
    
      # Helper Functions
        - We can also use the return value of a function inside another function. These functions being called within another function are often referred to as helper functions. 
    
                    function mainfunction(length,width)
                    {
                      If(length<0 || width<0)
                        return ‘length should be greater than 0’;
                      return helpfunction(length,width);
                    }
                    Function helperfunction(length,width)
                    {
                      Let area = length*width;
                      return area;
                    }
                    Console.log(mainfunction(0,8));
                    Console.log(mainfunction(5,8));
    
      # Arrow Functions
        - ES6 introduced arrow function syntax, a shorter way to write functions by using the special “fat arrow” () => notation.
    
                Const calculateArea = (length,width) =>{
                  If(length<0 || width<0)
                    return ‘Length should be greater than 0’;
                  return length*width;
                }
    
      # Concise Body Arrow Functions
        - JavaScript also provides several ways to refactor arrow function syntax. The most condensed form of the function is known as concise body. 
        - We’ll explore a few of these techniques below:
            1.Functions that take only a single parameter do not need that parameter to be enclosed in parentheses. However, if a function takes zero or multiple parameters, parentheses are required.
      
                    const functionName = () =>{ 	}       //zero parameter
                    const functionName = paramone =>{ 		}	//one parameter
                    const functionName = (paramone,paramtwo) =>{	 	}	//two or more parameter
          
            2.A function body composed of a single-line block does not need curly braces. Without the curly braces, whatever that line evaluates will be automatically returned. 
              The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as implicit return.
      
        - So if we have a function:
    
                  const squareNum = (num) =>{
                    return num*num;
                  }
                  
        - We can refactor the function to:
        - const squareNum = num => num*num;
                Notice the following changes:
                •	The parentheses around num have been removed, since it has a single parameter.
                •	The curly braces { } have been removed since the function consists of a single-line block.
                •	The return keyword has been removed since the function consists of a single-line block.
    
      `;
  return _pre;
};
const _ScopeBlock = () => {
  let _pre = document.createElement("pre");
  _pre.innerHTML = `
      # Scope
        - An important idea in programming is scope. Scope defines where variables can be accessed or referenced. 
        - While some variables can be accessed from anywhere within a program, other variables may only be available in a specific context.
    
      # Blocks and Scope
        - Before we talk more about scope, we first need to talk about blocks.A block is the code found inside a set of curly braces {}.
        - Blocks help us group one or more statements together and serve as an important structural marker for our code.
    
                const name = ‘codeMe’
                function giveInformation()
                {
                  let carrier = ‘Software Developer’;
                  return name + ' is a ' + carrier;
                }
                console.log(name);
                console.log(giveInformation());
                console.log(carrier);   //Error
    
      # Global Scope
    
        - Scope is the context in which our variables are declared. We think about scope in relation to blocks because variables can exist either outside of or within these blocks.
        - In global scope, variables are declared outside of blocks. These variables are called global variables. Because global variables are not bound inside a block, 
              they can be accessed by any code in the program, including code in blocks.
    
                function items()
                {
                  return item1+item2+item3;
                }
                const item1=’mobile’;
                const item2=’laptop’;
                const item3=’camera’;
                console.log(items());
    
      # Scope Pollution
        - It may seem like a great idea to always make your variables accessible, but having too many global variables can cause problems in a program.
        - When you declare global variables, they go to the global namespace. The global namespace allows the variables to be accessible from anywhere in the program. 
        - These variables remain there until the program finishes which means our global namespace can fill up really quickly.
        - Scope pollution is when we have too many global variables that exist in the global namespace, or when we reuse variables across different scopes. 
        - Scope pollution makes it difficult to keep track of our different variables and sets us up for potential accidents. 
        
        For example, globally scoped variables can collide with other variables that are more locally scoped, causing unexpected behavior in our code.
    
                const item1=’mobile’;
                const item2=’laptop’;
                let item3=’camera’;
                function items()
                {
                  Item 3 = ‘mouse’;
                  return item1+item2+item3;
                }
                console.log(items());
                console.log(item3);
    
    
      # Practice Good Scoping
        - Given the challenges with global variables and scope pollution, we should follow best practices for scoping our variables as tightly as possible using block scope.
                function items()
                {
                  const item1 = ‘laptop;
                  let item2 = ‘mobile’;
                  if(item1 ===’laptop’)
                  {
                    Item2 = ‘mouse’;
                    console.log(item1,item2);
                  }
                  console.log(item1,item2);
                }
                console.log(item1,item2); // reference error
    
      `;
  return _pre;
};
const _Array = () => {
  let _pre = document.createElement("pre");
  _pre.innerHTML = `
      # Arrays
        - Organizing and storing data is a foundational concept of programming.
        - One way we organize data in real life is by making lists. Let’s make one here:
    
                let item1 = ‘Laptop’;
                let item2 = ‘camera’;
                let item3 = ‘mobile’;
                console.log(item1, item2, item3);
    
        - other way is to store in an array:
                let item = [‘Laptop’ , ‘camera’ , ‘mobile’];
    
      # Create an Array
        - One way we can create an array is to use an array literal. An array literal creates an array by wrapping items in square brackets []. 
        - Remember from the previous exercise, arrays can store any data type — we can have an array that holds all the same data types or an array that holds different data types.
    
                Let data = [‘codeMe’ , 10 , true]
    
      # Accessing Elements
        - Each element in an array has a numbered position known as its index.We can access individual items using their index, which is similar to referencing an item in a list based on the item’s position.
        - Arrays in JavaScript are zero-indexed, meaning the positions start counting from 0 rather than 1. Therefore, the first item in an array will be at position 0. Let’s see how we could access an element in an array:
    
              let item = [‘Laptop’ , ‘camera’ , ‘mobile’];
              console.log(item[0]);
              console.log(item[1]);
              console.log(item[2]);
    
        - Imp here String are also treated as an string of characters
              let data = ‘I love to code with codeme’
              console.log(data[5]);
    
      # Update Elements
        - In the previous exercise, you learned how to access elements inside an array or a string by using an index. Once you have access to an element in an array, you can update its value.
              let item = [‘Laptop’ , ‘camera’ , ‘mobile’];
              console.log(item);
              item[1]=’keyboard’
              console.log(item);
              console.log(item[4]);
    
      # Arrays with let and const
        - You may recall that you can declare variables with both the let and const keywords. Variables declared with let can be reassigned.
        - Variables declared with the const keyword cannot be reassigned. However, elements in an array declared with const remain mutable. 
        - Meaning that we can change the contents of a const array, but cannot reassign a new array or a different value.
              let item = [‘Laptop’ , ‘camera’ , ‘mobile’];
              const items = [‘Laptop’ , ‘camera’ , ‘mobile’];
              let item=[‘laptop’];
              const items=[‘laptop’];  //Error
    
        Imp – the only difference bw const and let keyword declaration that we cannot declare the const again.
    
      # The .length property
        - One of an array’s built-in properties is length and it returns the number of items in the array. We access the .length property just like we do with strings.
              let item = [‘Laptop’ , ‘camera’ , ‘mobile’];
              console.log(item.length);
    
    
      # The .push() Method
        - Let’s learn about some built-in JavaScript methods that make working with arrays easier. 
        - These methods are specifically called on arrays to make common tasks, like adding and removing elements, more straightforward.
        - One method, .push() allows us to add items to the end of an array.
              let item = [‘Laptop’ , ‘camera’ , ‘mobile’];
              item.push(‘cpu’,’keyboard’,’screen’);
              console.log(item);
    
      # The .pop() Method
        - Another array method, .pop(), removes the last item of an array
              let item = [‘Laptop’ , ‘camera’ , ‘mobile’];
              const remove = item.pop();
              console.log(item);
              console.log(remove);
    
      # More Array Methods
        - There are many more array methods than just .push() and .pop(). 
        - .pop() and .push() mutate the array on which they’re called. However, there are times that we don’t want to mutate the original array and we can use non-mutating array methods. 
        - Be sure to check MDN to understand the behavior of the method you are using.
        - Some arrays methods that are available to JavaScript developers include: .join(), .slice(), .splice(), .shift(), .unshift(), and .concat() amongst many others. Using these built-in methods make it easier to do some common tasks when working with arrays.
    
            Reference read - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    
              let item = [‘Laptop’ , ‘camera’ , ‘mobile’, ‘cpu’,’keyboard’,’screen’];
              item.shift();
              console.log(item);
              item.unshift(‘new_Item’);
              console.log(item);
              console.log(item.slice(1,3));
              console.log(item.indexOf(‘mobile’));
    
      # Arrays and Functions
        - Take a look at the following example where we call .push() on an array inside a function. Recall, the .push() method mutates, or changes, an array:
              let item = [‘Laptop’ , ‘camera’ , ‘mobile’, ‘cpu’,’keyboard’,’screen’];
              function changeArray(arr)
              {
                arr[0]=’Array_changed’
              }
              changeArray(item);
              console.log(item);
              const removeElement = arr =>{
              arr.pop();
              }
              removeElement (item);
              console.log(item);
    
    
      # Nested Arrays
        - An array can also able to store another array. When an array contains another array it is known as a nested array.
            const data = [[1,2],[3,4],[‘codeme’,code]];
            console.log(data[2][1]);
    
      `;
  return _pre;
};
const _Loop = () => {
  let _pre = document.createElement("pre");
  _pre.innerHTML = `
      # Loops
        - A loop is a programming tool that repeats a set of instructions until a specified condition, called a stopping condition is reached. As a programmer, you’ll find that you rely on loops all the time! 
    
        The For Loop
        Instead of writing out the same code over and over, loops allow us to tell computers to repeat a given block of code on its own. One way to give computers these instructions is with a for loop.
        A for loop contains three expressions separated by ; inside the parentheses:
        1.	an initialization starts the loop and can also be used to declare the iterator variable.
        2.	a stopping condition is the condition that the iterator variable is evaluated against— if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
        3.	an iteration statement is used to update the iterator variable on each loop.
              for(int i=0 ;i<10;i++)
              {
                Console.log(i);
              }
    
      # Looping in Reverse
        What if we want the for loop to log 3, 2, 1, and then 0? With simple modifications to the expressions, we can make our loop run backward!
        To run a backward for loop, we must:
        •	Set the iterator variable to the highest desired value in the initialization expression.
        •	Set the stopping condition for when the iterator variable is less than the desired amount.
        •	The iterator should decrease in intervals after each iteration
              for ( int i=5 ; i>=0 ;i--)
              {
              Console.log(i);
              }
    
      # Looping through Arrays
        - for loops are very handy for iterating over data structures. For example, we can use a for loop to perform the same operation on each element on an array. 
        - Arrays hold lists of data, like customer names or product information. Imagine we owned a store and wanted to increase the price of every product in our catalog. 
        - That could be a lot of repeating code, but by using a for loop to iterate through the array we could accomplish this task easily.
    
            const _items = [ ‘mobile’ , ‘laptop’ , ‘camera’];
            for(int i=0;i<_items.length;i++)
            {
              Console.log(items[i]);
            }
    
      # Nested Loops
        - When we have a loop running inside another loop, we call that a nested loop. One use for a nested for loop is to compare the elements in two arrays. 
        - For each round of the outer for loop, the inner for loop will run completely.
    
              const _frontEnd = [‘Html’ , ‘CSS’ ,’JavaScript’];
              const _BackEnd = [‘Node.js’ , ‘Asp.net’ , ‘C#’];
              for ( int i=0 ;i<_frontEnd.length;i++)
              {
                for( int j=0;j<_BackEnd.length;j++)
                {
                  console.log(frontEnd[i] + ' ----- ' + BackEnd[i]);
                }
              }
    
      # The While Loop
        - You’re doing great! We’re going to teach you about a different type of loop: the while loop. To start, let’s convert a for loop into a while loop:
              const data = [‘JavaScript’ , ‘c#’ , ‘Java’ , ‘Python’];
              let dataSelected ;
              while(dataSelected != ‘c#’)
              {
                dataSelected = data[Math.floor(Math.random()*4)];
                console.log(dataSelected);
              }
    
      # Do...While Statements
        - In some cases, you want a piece of code to run at least once and then loop based on a specific condition after its initial run. This is where the do...while statement comes in.
        - A do...while statement says to do a task once and then keep doing it until a specified condition is no longer met.
              let i=5;
              do
              {
              console.log(‘Hi’);
              i++;
              }
              While(i<5)
    
      # The break Keyword
        - The break keyword allows programs to “break” out of the loop from within the loop’s block.
    
      `;
  return _pre;
};
const _HigherOrderFunction = () => {
  let _pre = document.createElement("pre");
  _pre.innerHTML = `
      # Functions as Data
        - JavaScript functions behave like any other data type in the language; we can assign functions to variables, and we can reassign them to new variables.
        - Documentation link - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
        - Below, we have an annoyingly long function name that hurts the readability of any code in which it’s used. Let’s pretend this function does important work and needs to be called repeatedly!
    
              const iAmDoingSomeImportantWork = () =>
              {
                Console.log(‘I am Doing some Important work today please don’t disturb’);
              }
              const busy = iAmDoingSomeImportantWork;
              busy();
    
      # Functions as Parameters
        - Since functions can behave like any other type of data in JavaScript, it might not surprise you to learn that we can also pass functions (into other functions) as parameters. 
        - A higher-order function is a function that either accepts functions as parameters, returns a function, or both! 
        - We call the functions that get passed in as parameters and invoked callback functions because they get called during the execution of the higher-order function.
        - When we pass a function in as an argument to another function, we don’t invoke it. Invoking the function would evaluate to the return value of that function call. 
        - With callbacks, we pass in the function itself by typing the function name without the parentheses (that would evaluate to the result of calling the function):
    
              let t1;
              let t2;
              const timeFuncRuntime = funcParameter => {
                  t1 = Date.now();
                funcParameter();
                  t2 = Date.now();
                return t2 - t1;
              }
    
              const addOneToOne = () => 1 + 1;
    
              console.log(timeFuncRuntime(addOneToOne));
              console.log(t1,t2);
    
        - We wrote a higher-order function, timeFuncRuntime(). It takes in a function as an argument, saves a starting time, 
        - invokes the callback function, records the time after the function was called, and returns the time the function took to run by subtracting the starting time from the ending time.
        - This higher-order function could be used with any callback function which makes it a potentially powerful piece of code.
      `;
  return _pre;
};
const _Iterators = () => {
  let _pre = document.createElement("pre");
  _pre.innerHTML = `
      # Introduction to Iterators
        - Imagine you had a grocery list and you wanted to know what each item on the list was. 
        - You’d have to scan through each row and check for the item. This common task is similar to what we have to do when we want to iterate over, or loop through, an array.
        - One tool at our disposal is the for loop. However, we also have access to built-in array methods which make looping easier.
        - The built-in JavaScript array methods that help us iterate are called iteration methods, at times referred to as iterators. Iterators are methods called on arrays to manipulate elements and return values.
    
    
      # The .forEach() Method
        - The first iteration method that we’re going to learn is .forEach()
    
              const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
    
              //First Methord
              fruits.forEach(
                function(fruitItems)
                {
                  console.log('I want to eat a ',fruitItems);
                }
              );
    
              //Second methord
              fruits.forEach(fruitItems => console.log('I want to eat a ',fruitItems))
    
              //Third Methord
              function printFruits(element)
              {
                console.log('I want to eat a ',element);
              }
              fruits.forEach(printFruits);
    
    
      # The .map() Method (Return Array)
        - The second iterator we’re going to cover is .map(). When .map() is called on an array, it takes an argument of a callback function and returns a new array!
        - const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
    
              // Create the secretMessage array below
              const secretMessage = animals.map(animals => animals[0]);
    
              console.log(secretMessage.join(''));
    
              const bigNumbers = [100, 200, 300, 400, 500];
    
              // Create the smallNumbers array below
              const smallNumbers = bigNumbers.map(bigNumbers =>{
                return bigNumbers/100;
              });
    
    
      # The .filter() Method (Return Arrays)
        - Another useful iterator method is .filter(). Like .map(), .filter() returns a new array. However, .filter() returns an array of elements after filtering out certain elements from the original array. 
        - The callback function for the .filter() method should return true or false depending on the element that is passed to it. The elements that cause the callback function to return true are added to the new array. 
        - Take a look at the following example:
    
        - const randomNumbers = [375, 200, 3.14, 7, 13, 852];
    
              // Call .filter() on randomNumbers below
              const smallNumbers = randomNumbers.filter(
                randomNumbers =>{
                  return randomNumbers <=250;
                }
              );
              console.log(randomNumbers);
              console.log(smallNumbers);
    
              const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
    
              // Call .filter() on favoriteWords below
              const longFavoriteWords = favoriteWords.filter(
                favoriteWords =>{ //ThisLineFavoriteWord is replacable
                  return favoriteWords.length >7;
                }
              );
              console.log(favoriteWords);
              console.log(longFavoriteWords);
    
    
      # The .findIndex() Method (Return element based on Index)
        - We sometimes want to find the location of an element in an array. 
        - That’s where the .findIndex() method comes in! Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function.
              const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
    
              const foundAnimal = animals.findIndex(
                animal =>{
                  return animal === 'elephant';
                }
              );
              console.log(foundAnimal);
    
              const startsWithS = animals.findIndex(
                animal =>{
                  return animal[0]==='s';
                }
              );
              console.log(startsWithS);
              console.log(animals[startsWithS])
    
    
      # The .reduce() Method
        - Another widely used iteration method is .reduce(). The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array.
    
            //First Methord
            const numbers = [1, 2, 4, 10];
    
            const summedNums = numbers.reduce((accumulator, currentValue) => {
              return accumulator + currentValue
            })
    
            console.log(summedNums) // Output: 17
    
            //Second methord
            const numbers = [1, 2, 4, 10];
    
            const summedNums = numbers.reduce((accumulator, currentValue) => {
              return accumulator + currentValue
            }, 100)  // <- Second argument for .reduce()
    
            console.log(summedNums); // Output: 117
    
            //Third methord
    
            const newNumbers = [1, 3, 5, 7];
    
            const newSum = newNumbers.reduce((accumulator, currentValue) => {
              console.log('The value of accumulator: ', accumulator);
              console.log('The value of currentValue: ', currentValue);
              return accumulator + currentValue;
            }, 10);
    
            console.log(newSum);
    
    
      # Iterator Documentation
        There are many additional built-in array methods, a complete list of which is on the MDN’s Array iteration methods page.
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods
        The documentation for each method contains several sections:
            1.	A short definition.
            2.	A block with the correct syntax for using the method.
            3.	A list of parameters the method accepts or requires.
            4.	The return value of the function.
            5.	An extended description.
            6.	Examples of the method’s use.
            7.	Other additional information.
    
    
              const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
    
              // Something is missing in the method call below
    
              console.log(words.some((word) => {
                return word.length < 6;
              }));
    
              // Use filter to create a new array
    
              const interestingWords = words.filter(
                word =>{
                  return word.length>5;
                }
              )
    
              // Make sure to uncomment the code below and fix the incorrect code before running it
    
              console.log(interestingWords.every((word) => { word >5} ));
    
    
              const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
    
              // Something is missing in the method call below
    
              console.log(words.some(word => {
                return word.length < 6;
              }));
    
              // Use filter to create a new array
              const interestingWords = words.filter((word) => {return word.length > 5});
    
              // Make sure to uncomment the code below and fix the incorrect code before running it
    
              console.log(interestingWords.every((word) => {return word.length > 5}));
    
    
              const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];
    
              const nums = [1, 50, 75, 200, 350, 525, 1000];
    
              //  Choose a method that will return undefined
              cities.forEach(city => console.log('Have you visited ' + city + '?'));
    
              // Choose a method that will return a new array
              const longCities = cities.filter(city => city.length > 7);
    
              // Choose a method that will return a single value
              const word = cities.reduce((acc, currVal) => {
                return acc + currVal[0]
              }, "C");
    
              console.log(word)
    
              // Choose a method that will return a new array
              const smallerNums = nums.map(num => num - 5);
    
              // Choose a method that will return a boolean value
              nums.every(num => num < 0);
              // OR nums.some(num => num < 0);
    
      `;
  return _pre;
};
const _Object = () => {
  let _pre = document.createElement("pre");
  _pre.innerHTML = `
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
              let myData = {
              }
      - Object Data can be filled in unordered data the data is organized into key-value pairs. A key is like a variable name that points to a location in memory that holds a value.
          let myData = {
            ‘Name’ : ‘Hari’
            ‘Designation’ : ‘Software Engineer’
          }
    
      # Accessing Properties
          There are two ways we can access an object’s property
            1.	dot notation, .
            2.	Bracket Notation
    
      # dot notation - 
            let myData = {
              ‘Name’ : ‘Hari’
              ‘Designation’ : ‘Software Engineer’
            }
    
          console.log(myData.Name);    // Print Hari
          console.log(myData.Designation);    // Print Software Engineer
    
      # Bracket Notation
          let myData = {
                ‘Name’ : ‘Hari’
                ‘Designation’ : ‘Software Engineer’
                ‘Total Exp’ :  ‘3Years’
          }
    
            console.log(myData[‘Name’]);    //Return Hari
            console.log(myData[‘Total Exp’]) // Return 3 Years
            console.log(myData[‘work’]) // Return undefined
    
      # Some Important Points
          1. Single Name Key value can be declare without ‘’ [Braces]  for Ex ‘Name’ can Name it will work in same Way
          2.But Key with Space cannot be declared without braces.
          3.Object Accessed with Bracket notation can always use with braces for example myData[ ‘ Total Exp ’ ]
    
      # With bracket notation you can also use a variable inside the brackets to select the keys of an object. This can be especially helpful when working with functions:
              let returnAnyProp = ( objectName , propName ) =>{
              objectName[propName];
              }
    
              returnAnyProp ( myData, ‘Designation’ );
    
    
      # Property Assignment
    
        - Once we’ve defined an object, we’re not stuck with all the properties we wrote. Objects are mutable meaning we can update them after we create them!
        - We can use either dot notation, ., or bracket notation, [], and the assignment operator, = to add new key-value pairs to an object or change an existing property.
        - One of two things can happen with property assignment:
            •	If the property already exists on the object, whatever value it held before will be replaced with the newly assigned value.
            •	If there was no property with that name, a new property will be added to the object.
    
          spaceship[‘Fuel Type’] = ‘vegetable oil’;
          spaceship.color = ‘gold’;
    
      # It’s important to know that although we can’t reassign an object declared with const, we can still mutate it, meaning we can add new properties and change the properties that are there.
    
          const spaceship = {type: 'shuttle'};
          spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
          spaceship.type = 'alien'; // Changes the value of the type property
          spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'
    
          Deleting the Property :-
          onst spaceship = {
            'Fuel Type': 'Turbo Fuel',
            homePlanet: 'Earth',
            mission: 'Explore the universe' 
          };
    
          delete spaceship.mission;  // Removes the mission property
    
    
      # Methods
        - When the data stored on an object is a function we call that a method. A property is what an object has, while a method is what an object does.
        - Do object methods seem familiar? That’s because you’ve been using them all along! For example console is a global javascript object and .log() is a method on that object. 
        - Math is also a global javascript object and .floor() is a method on it.
        - We can include methods in our object literals by creating ordinary, comma-separated key-value pairs. The key serves as our method’s name, while the value is an anonymous function expression.
              const alienShip = {
                invade: function () { 
                  console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
                }
              };
    
        - With the new method syntax introduced in ES6 we can omit the colon and the function keyword.
            const alienShip = {
              invade () { 
                console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
              }
            };
    
        - Object methods are invoked by appending the object’s name with the dot operator followed by the method name and parentheses:
            alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'
    
    
      # Nested Objects
        - In application code, objects are often nested— an object might have another object as a property which in turn could have a property that’s an array of even more objects!
        - In our spaceship object, we want a crew object. This will contain all the crew members who do important work on the craft. Each of those crew members are objects themselves. 
        - They have properties like name, and degree, and they each have unique methods based on their roles. We can also nest other objects in the spaceship such as a telescope or nest details about the spaceship’s computers inside a parent nanoelectronics object.
    
                const spaceship = {
                    telescope: {
                        yearBuilt: 2018,
                        model: '91031-XLT',
                        focalLength: 2032 
                    },
                    crew: {
                        captain: { 
                            name: 'Sandra', 
                            degree: 'Computer Engineering', 
                            encourageTeam() { console.log('We got this!') } 
                        }
                    },
                    engine: {
                        model: 'Nimbus2000'
                    },
                    nanoelectronics: {
                        computer: {
                            terabytes: 100,
                            monitors: 'HD'
                        },
                        'back-up': {
                          battery: 'Lithium',
                          terabytes: 50
                        }
                    }
                }; 
    
    
        - We can chain operators to access nested properties. We’ll have to pay attention to which operator makes sense to use in each layer. 
        - It can be helpful to pretend you are the computer and evaluate each expression from left to right so that each operation starts to feel a little more manageable.
                
                spaceship.nanoelectronics['back-up'].battery; // Returns 'Lithium'
        In the preceding code:
          •	First the computer evaluates spaceship.nanoelectronics, which results in an object containing the back-up and computer objects.
          •	We accessed the back-up object by appending ['back-up'].
          •	The back-up object has a battery property, accessed with .battery which returned the value stored there: 'Lithium'
    
      # Pass By Reference
        - Objects are passed by reference. This means when we pass a variable assigned to an object into a function as an argument, 
        - the computer interprets the parameter name as pointing to the space in memory holding that object.
        - As a result, functions which change object properties actually mutate the object permanently (even when the object is assigned to a const variable).
            const spaceship = {
              homePlanet : 'Earth',
              color : 'silver'
            };
    
            let paintIt = obj => {
              obj.color = 'glorious gold'
            };
    
            paintIt(spaceship);
    
            spaceship.color // Returns 'glorious gold'
            Our function paintIt() permanently changed the color of our spaceship object. However, reassignment of the spaceship variable wouldn’t work in the same way:
            let spaceship = {
              homePlanet : 'Earth',
              color : 'red'
            };
            let tryReassignment = obj => {
              obj = {
                identified : false, 
                'transport type' : 'flying'
              }
              console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}
    
            };
            tryReassignment(spaceship) // The attempt at reassignment does not work.
            spaceship // Still returns {homePlanet : 'Earth', color : 'red'};
    
            spaceship = {
              identified : false, 
              'transport type': 'flying'
            }; // Regular reassignment still works.
    
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
            let spaceship = {
              crew: {
                captain: { 
                  name: 'Lily', 
                  degree: 'Computer Engineering', 
                  cheerTeam() { console.log('You got this!') } 
                },
                'chief officer': { 
                  name: 'Dan', 
                  degree: 'Aerospace Engineering', 
                  agree() { console.log('I agree, captain!') } 
                },
                medic: { 
                  name: 'Clementine', 
                  degree: 'Physics', 
                  announce() { console.log('Jets on!') } },
                translator: {
                  name: 'Shauna', 
                  degree: 'Conservation Science', 
                  powerFuel() { console.log('The tank is full!') } 
                }
              }
            }; 
    
            // for...in
            for (let crewMember in spaceship.crew) {
              console.log('{crewMember}: {spaceship.crew[crewMember].name}');
            }
    
        - Our for...in will iterate through each element of the spaceship.crew object. 
        - In each iteration, the variable crewMember is set to one of spaceship.crew‘s keys, enabling us to log a list of crew members’ role and name.
    
      `;
  return _pre;
};
const _AdvanceObject = () => {
  let _pre = document.createElement("pre");
  _pre.innerHTML = `
      # Advanced Objects Introduction
        Remember, objects in JavaScript are containers that store data and functionality. In this lesson, we will build upon the fundamentals of creating objects and explore some advanced concepts.
        In this topic we will Discuss these topics:
        - how to use the this keyword.
        - conveying privacy in JavaScript methods.
        - defining getters and setters in objects.
        - creating factory functions.
        - using destructuring techniques.
    
      # The this Keyword
        - Objects are collections of related data and functionality. We store that functionality in methods on our objects:
        
              const Data = {
                  Name : 'Hari',
                  Language() {
                      console.log('JavaScript');
                    },
                  PrintName () {
                      console.log(Name);
                    }
                    }
    
            Data.PrintName(); //Return Reference Error
    
        - We are Encountered by reference Error because we can’t access the property of method Inside the Scope directly, We have to Use this keyword to Access another property of an object.
    
              const Data = {
                  Name : 'Hari',
                  Language() {
                      console.log('JavaScript');
                    },
                  PrintName () {
                      console.log(this.Name);
                    }
                    }
    
            Data.PrintName(); //Return Hari
    
            The this keyword references the calling object which provides access to the calling object’s properties.
    
      # Arrow Functions and this
    
        - Arrow functions inherently bind, or tie, an already defined this value to the function itself that is NOT the calling object. 
        - In the code snippet above, the value of this is the global object, or an object that exists in the global scope, which doesn’t have a dietType property and therefore returns undefined.
    
            const Data = {
                Name : 'Hari',
                Language() {
                  console.log('JavaScript');
                    },
                PrintName : () => {
                    console.log(this.Name);
                    }
                  }
    
            Data.PrintName(); //Return Undefined
    
        For More Understanding read the Document – 
        Global function - https://developer.mozilla.org/en-US/docs/Glossary/Global_object
        Arrow function - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    
      # Privacy
        - Accessing and updating properties is fundamental in working with objects. Sometimes we don’t want value to be updated in Object 
            const Data = {
              _name : 'Hari'
            }
            Data._name = 'Hello';
            console.log(Data._name)
    
        - Although Defining with const keyword we can change the value.we have to use getters and setters to restrict the value from User to read and update.
    
      # Getters
        - Getters are methods that get and return the internal properties of an object. But they can do more than just retrieve the value of a property!
            const Data = {
              _name : 'Hari',
              _Language : 'JavaScript',
              get Info(){
                if(this._name && this._Language){
                  return 'name - {this._name} and language - {this._Language}'
                }
                else{
                  return 'Missing name or langauge';
                }
              }
            }
    
          console.log(Data.Info)
        - Another thing to keep in mind when using getter (and setter) methods is that properties cannot share the same name as the getter/setter function. 
        - If we do so, then calling the method will result in an infinite call stack error.
    
      # Setters 
        - Along with getter methods, we can also create setter methods which reassign values of existing properties within an object.
            const Data = {
                _name : 'Hari',
                _Language : 'JavaScript',
                get Info(){
                      if(this._name && this._Language){
                        return 'name - {this._name} and language - {this._Language}'
                    }
                    else{
                        return 'Missing name or langauge';
                    }
                    },
                set name(_newName){
                    if(typeof _newName === 'string'){
                        this._name = _newName;
                      }
                    else{
                        console.log('Please Input valid Name');
                      }
                  }
              }
            console.log(Data.name = 'CodeMe');
            console.log(Data.Info)
            console.log(Data.name = 45);
    
    
      # Factory Functions
        - So far we’ve been creating objects individually, but there are times where we want to create many instances of an object quickly. Here’s where factory functions come in. 
        - A real world factory manufactures multiple copies of an item quickly and on a massive scale. A factory function is a function that returns an object and can be reused to make multiple object instances. 
        - Factory functions can also have parameters allowing us to customize the object that gets returned.
    
            const DataFactory = (name,Langauge,Designation) =>{
                return {
                    name : name,
                    Langauge : Langauge,
                    Designation : Designation,
                    Info() {
                        console.log('{this.name}'s object');
                      }
                  }
              }
    
            const Data = DataFactory('Hari','JavaScript','SE');
            Data.Info();
    
    
      # Property Value Shorthand 
        - ES6 introduced some new shortcuts for assigning properties to variables known as destructuring.
    
          const DataFactory = (name,Langauge,Designation) =>{
              return {
                  name,
                  Langauge,
                  Designation,
                  Info() {
                      console.log('{this.name}'s object');
                    }
                }
            }
    
          const Data = DataFactory('Hari','JavaScript','SE');
          Data.Info();
    
      # Destructured Assignment
          const Data = {
              name : 'Hari',
              Language : 'JavaScript',
              FrameWork : {
                  backend : 'Asp.net Core',
                  frontend : 'Angular'
                }
            }
    
          const name = Data.name;
          console.log(name);
    
          const { name } = Data; //ES6 Destruction Assigment
          console.log(name); 
    
      # Some Useful Build in Object
    
        learning in build objects  -  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods
        Learning object constructor  -  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods_of_the_Object_constructor
    
              const Data = {
                  name : 'Hari',
                  Language : 'JavaScript'
                }
              const DataKeys = Object.keys(Data);
              const DataEntries = Object.entries(Data);
    
              const _newData = {
                  frontend : 'Angular',
                  backend : 'Asp.net Core'
                }
              const newData = Object.assign(Data,_newData);
    
              console.log(DataKeys);
              console.log(DataEntries);
              console.log(newData);
    
      `;
  return _pre;
};
const _Classes = () => {
  let _pre = document.createElement("pre");
  _pre.innerHTML = `
      # Introduction to Classes
        - JavaScript is an object-oriented programming (OOP) language we can use to model real-world items.
            class Data {
              constructor(name){
                this._name = name;
                this._designation = 'SE';
                this._level = 3;
              }
    
              get name() {
                return this._name;
              }
    
              get Designation(){
                return this._designation;
              }
    
              get Level(){
                return this._level;
              }
              
              incrementCodinglevel(){
                this._level++;
              }
            }
            const hari = new Data('Hari');
            console.log(hari.name);
            console.log(hari.Designation);
            console.log(hari.Level);
            hari.incrementCodinglevel();//Calling increment 
            console.log(hari.Level);
    
      # Constructor
        - Although you may see similarities between class and object syntax, there is one important method that sets them apart. 
        - It’s called the constructor method. JavaScript calls the constructor() method every time it creates a new instance of a class.
    
            class data {
              constructor(name ,department){
                this.name = name;
                this.department = department;
              }
            }
    
    
      # Instance 
        - An instance is an object that contains the property names and methods of a class, but with unique property values. Let’s look at our Data class example.
            class data {
              constructor(name ,department){
                this.name = name;
                this.department = department;
              }
            }
            const Hari = new data('Hari','Developer');
            const Aman = new data('Aman','Tester');
    
      # Methods
        - Class method and getter syntax is the same as it is for objects except you can not include commas between methods.
            class Data {
              constructor(name, department) {
                this._name = name;
                this._department = department;
                this._remainingVacationDays = 20;
              }
              get name(){
                return this._name;
              }
              get department(){
                return this._department;
              }
              get remainingVacationDays(){
                return this._remainingVacationDays;
              }
              takeVacationDays(daysOff){
                this._remainingVacationDays = this._remainingVacationDays - daysOff;
              }
            }
    
      # Method Calls
        - Finally, let’s use our new methods to access and manipulate data from Data instances.
            const Hari = new data('Hari','Developer');
            console.log(Hari.name);
            Hari.takeVacationDays(3);
            console.log(Hari.remainingVacationDays)
    
      # Inheritance
        - When multiple classes share properties or methods, they become candidates for inheritance — a tool developers use to decrease the amount of code they need to write.
        - With inheritance, you can create a parent class (also known as a superclass) with properties and methods that multiple child classes (also known as subclasses) share. 
        - The child classes inherit the properties and methods from their parent class.
            class Data {
              constructor(name) {
                this._name = name;
                this._remainingVacationDays = 20;
              }
              get name() {
                return this._name;
              }
              get remainingVacationDays() {
                return this._remainingVacationDays;
              }
              takeVacationDays(daysOff) {
                this._remainingVacationDays -= daysOff;
              }
            }
            class Employee extends Data{
              constructor(name,certifications){
                super(name);
                this._certifications = certifications;
              }
            }
            const Hari = new Employee('Hari','JavaScript');
    
        We can also call methods which is described in Parent class.
            Hari.takeVacationDays(5);
            console.log(Hari.remainingVacationDays);
    
        In addition to the inherited features, child classes can contain their own properties, getters, setters, and methods.
            class Employee extends Data {
              constructor(name, certifications) {
                super(name);
                this._certifications = certifications;
              }
              get certifications(){
                return this._certifications;
              }
              addCertification(newCertification){
                this._certifications.push(newCertification);
              }
            }
            Hari.addCertification('Genetics');
            console.log(Hari.certifications);
    
        Sometimes you will want a class to have methods that aren’t available in individual instances, but that you can call directly from the class.
            static generatePassword(){
                return Math.floor(Math.random() * 10000);
              }
    
            console.log(Data.generatePassword);
        - You cannot access the .generateName() method from instances of the Animal class or instances of its subclasses
    
            console.log(newHari.generatePassword);//Undefined
    
            static generateName() {
                const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
                const randomNumber = Math.floor(Math.random()*5);
                return names[randomNumber];
              }
    
        - The example above will result in an error, because you cannot call static methods (.generateName()) on an instance (newHari)
    
      `;
  return _pre;
};
const _Transpilation = () => {
  let _pre = document.createElement("pre");
  _pre.innerHTML = `
      # Introduction to transpilation
        - You’re probably prompted to update your web browser every few months. Do you know why? A few reasons include addressing security vulnerabilities, adding features, and supporting new HTML, CSS, and JavaScript syntax.
        - This has become a widespread concern for web developers since Ecma International, the organization responsible for standardizing JavaScript, released a new version of it in 2015, called ECMAScript2015, commonly referred to as ES6. 
        - Note, the 6 refers to the version of JavaScript and is not related to the year it was released (the previous version was ES5).
          In this lesson, you will learn about two important tools for addressing browser compatibility issues.
              •	caniuse.com — A website that provides data on web browser compatibility for HTML, CSS, and JavaScript features. You will learn how to use it to look up ES6 feature support.
              •	Babel — A Javascript library that you can use to convert new, unsupported JavaScript (ES6), into an older version (ES5) that is recognized by most modern browsers.
    
      # caniuse.com
        - While most new browser versions support the majority of the ES6 library, there are still a couple sources of compatibility issues:
            •	Some users have not updated to the latest, ES6 supported web browser version.
            •	A few ES6 features, like modules, are still not supported by most web browsers.
        - Because companies add support for ES6 features gradually, it’s important for you to know how to look up browser support on a feature-by-feature basis. 
        - The website caniuse.com is the best resource for finding browser compatibility information.
    
      # Why ES6
        - The version of JavaScript that preceded ES6 is called JavaScript ES5. Three reasons for the ES5 to ES6 updates are listed below:
            •	Readability and economy of code — The new syntax is often easier to understand (more readable) and requires fewer characters to create the same functionality (economy of code).
            •	Addresses sources of ES5 bugs — Some ES5 syntax led to common bugs. With ES6, Ecma introduced syntax that mitigates some of the most common pitfalls.
            •	A similarity to other programming languages — JavaScript ES6 is syntactically more similar to other object-oriented programming languages. This leads to less friction when experienced, non-JavaScript developers want to learn JavaScript.
    
      # Transpilation With Babel
        - you manually converted ES6 code to ES5. Although manual conversion only took you a few minutes, it is unsustainable as the size of the JavaScript file increases.
        - Because ES6 is predictably backwards compatible, a collection of JavaScript programmers developed a JavaScript library called Babel that transpiles ES6 JavaScript to ES5.
        - Transpilation is the process of converting one programming language to another.
    
          We need to install 2 libraries for Babel.
            -	npm install babel-cli
            -	npm install babel-preset-env
          and at last write npm run build  to build the ES5 code.
    
      # Setup Project
    
      [npm init]
      The initial JavaScript project file structure is:
      project
      |_ src
      |___ main.js
    
        - Before we install Babel, we need to setup our project to use the node package manager (npm). Developers use npm to access and manage Node packages. 
        - Node packages are directories that contain JavaScript code written by other developers. You can use these packages to reduce duplication of work and avoid bugs.
        - Before we can add Babel to our project directory, we need to run npm init. The npm init command creates a package.json file in the root directory.
    
        A package.json file contains information about the current JavaScript project. Some of this information includes:
            •	Metadata — This includes a project title, description, authors, and more.
            •	A list of node packages required for the project — If another developer wants to run your project, npm looks inside package.json and downloads the packages in this list.
            •	Key-value pairs for command line scripts — You can use npm to run these shorthand scripts to perform some process. In a later exercise, we will add a script that runs Babel and transpiles ES6 to ES5.
    
        If you have Node installed on your computer, you can create a package.json file by typing npm init into the terminal.
    
      # Install Node Packages
        - We use the npm install command to install new Node packages locally. The install command creates a folder called node_modules and copies the package files to it. 
        - The install command also installs all of the dependencies for the given package.
        - To install Babel, we need to npm install two packages, babel-cli and babel-preset-env. However, npm installs over one hundred other packages that are dependencies for Babel to run properly.
        - The babel-cli package includes command line Babel tools, and the babel-preset-env package has the code that maps any JavaScript feature, ES6 and above (ES6+), to ES5.
    
        - The -D flag instructs npm to add each package to a property called devDependencies in package.json. 
        - Once the project’s dependencies are listed in devDependencies, other developers can run your project without installing each package separately. 
        - Instead, they can simply run npm install — it instructs npm to look inside package.json and download all of the packages listed in devDependencies.
        
        Once you npm install packages, you can find the Babel packages and all their dependencies in the node_modules folder. 
    
      # .babelrc
        - Now that you’ve downloaded the Babel packages, you need to specify the version of the source JavaScript code.
        - You can specify the initial JavaScript version inside of a file named .babelrc. In your root directory, you can run touch .babelrc to create this file.
        -	To use touch on windows install 2 libraries by command  - npm install touch-cli -g
    
            After adding add an object to babel file 
            {
              “”presets” : [“env”]
            }
      # Babel Source Lib
        - There’s one last step before we can transpile our code. We need to specify a script in package.json that initiates the ES6+ to ES5 transpilation.
    
        In package.json we need to add one property under “scripts”
              "build": "babel src -d lib"
        In the "scripts" object above, we add a property called "build". The property’s value, "babel src -d lib", is a command line method that transpiles ES6+ code to ES5. Let’s consider each argument in the method call:
              •	babel — The Babel command call responsible for transpiling code.
              •	src — Instructs Babel to transpile all JavaScript code inside the src directory.
              •	-d — Instructs Babel to write the transpiled code to a directory.
              •	lib — Babel writes the transpiled code to a directory called lib.
    
      # Build
        - We’re ready to transpile our code! In the last exercise, we wrote the following script in package.json:
              "build": "babel src -d lib"
        - Now, we need to call "build" from the command line to transpile and write ES5 code to a directory called lib.
        - From the command line, we type:
              npm run build
    
        After that new folder is created which has our translated code.
    
      `;
  return _pre;
};
const _ModuleExportImport = () => {
  let _pre = document.createElement("pre");
  _pre.innerHTML = `
      # Module Import/Export
        - JavaScript modules are reusable pieces of code that can be exported from one program and imported for use in another program.
        - Modules are particularly useful for a number of reasons. By separating code with similar logic into files called modules, we can:
            •	find, fix, and debug code more easily;
            •	reuse and recycle defined logic in different parts of our application;
            •	keep information private and protected from other modules;
            •	and, importantly, prevent pollution of the global namespace and potential naming collisions, by cautiously selecting variables and behavior we load into a program.
    
        we’ll cover two ways to implement modules in JavaScript: Node.js’s module.exports and require() syntax, as well as the ES6 import/export syntax.
    
      # module.exports
        - We can get started with modules by defining a module in one file and making the module available for use in another file with Node.js module.exports syntax. 
        - Every JavaScript file run in Node has a local module object with an exports property used to define what should be exported from the file.
    
              const Data = {};
              Data.name = 'Hari';
              Data.designation = 'SE';
              Data.langauge = 'JavaScript'
              module.export = Data;
    
      # require()
        - To make use of the exported module and the behavior we define within it, we import the module into another file. In Node.js, use the require() function to import modules.
    
              const Data = require('./Data.js');
              function displayData(){
                  console.log(Data.name);
                  console.log(Data.designation);
                  console.log(Data.language);
              }
    
              displayData();
    
      # module.exports II
        - We can also wrap any collection of data and functions in an object, and export the object using module.exports.
            module.exports ={
                name : 'Hari',
                designation : 'SE',
                langauge : 'JavaScript',
                displayData : function(){
                                return this.name + this.designation + this.langauge;
                    }
              }
    
            const Airplane = require('./Data.js');
            console.log(Airplane.displayData());
    
      # export default
        - Node.js supports require()/module.exports, but as of ES6, JavaScript supports a new more readable and flexible syntax for exporting modules. 
        - These are usually broken down into one of two techniques, default export and named exports.
              let Menu = {};
              export default Menu;
    
          1.	export default uses the JavaScript export statement to export JavaScript objects, functions, and primitive data types.
          2.	Menu refers to the name of the Menu object, the object that we are setting the properties on within our modules.
        - When using ES6 syntax, we use export default in place of module.exports. Node.js doesn’t support export default by default, so module.
        - exports is usually used for Node.js development and ES6 syntax is used for front-end development. As with most ES6 features, it is common to transpile code since ES6 is not supported by all browsers.
    
            let Data = {};
            Data.name = 'Hari',
            Data.language = [
                {
                  name : 'JavaScript',
                  type : 'frontEnd'
                },
                {
                  name : 'C#',
                  type : 'backEnd'
                }
            ]
    
            export default Data;
    
      # import
        - ES6 module syntax also introduces the import keyword for importing objects. In our order.js example, we import an object like this:
    
            import Data from './Data';
            function displayData(){
                  Data.language.forEach(function(element){
                  console.log('{element.name} - {element.type}');
                  });
            }
            displayData();
    
    
      # Named Exports
        - ES6 introduced a second common approach to export modules. In addition to export default, named exports allow us to export data through the use of variables.
            let _data = [
                {
                  name : 'hari',
                  designation : 'SE',
                  langauge : ['Angular','c#','Java','Python']
                },
                {
                  name : 'aryan',
                  designation : 'SE',
                  langauge : ['php','testing']
                }
            ]
    
            let requirement = {
                _devRequirement : 4,
                _testingRequirement : 2
            }
    
            let validateRequirement = (_ava,_req)=>{
                if(_ava.length >= _req)
                  return true;
                else
                  return false;
              }
    
            export {_data,requirement,validateRequirement};
    
      # Named Imports
        - To import objects stored in a variable, we use the import keyword and include the variables in a set of {}.
    
            import {_data,requirement,validateRequirement} from './data;
            console.log(requirement)
    
      # Export Named Exports
        - Named exports are also distinct in that they can be exported as soon as they are declared, by placing the keyword export in front of variable declarations.
            export let _data = [
                  {
                    name : 'hari',
                    designation : 'SE',
                    langauge : ['Angular','c#','Java','Python']
                  },
                  {
                    name : 'aryan',
                    designation : 'SE',
                    langauge : ['php','testing']
                }
              ]
    
            export let requirement = {
                _devRequirement : 4,
                _testingRequirement : 2
            }
    
            export let validateRequirement = (_ava,_req)=>{
              if(_ava.length >= _req)
              return true;
              else
              return false;
            }
    
    
      # Import Named Imports
        - To import variables that are declared, we simply use the original syntax that describes the variable name. 
        - In other words, exporting upon declaration does not have an impact on how we import the variables.
    
            import {_data,requirement,validateRequirement} from './data'
            console.log(requirement);
    
      # Export as
        - Named exports also conveniently offer a way to change the name of variables when we export or import them. We can do this with the as keyword.
        Let’s see how this works. In our menu.js example
    
            let speciallangauge = '';
            let isfrontend= function() {
              }; 
            let isbackend= function() {
            }; 
          
          export { specialty as chefsSpecial, isVegetarian as isVeg, isLowSodium };
    
      # Import as
        - To import named export aliases with the as keyword, we add the aliased variable in our import statement.
    
              import { chefsSpecial, isVeg } from './menu';
        - In orders.js
              1.	We import chefsSpecial and isVeg from the Menu object.
              2.	Here, note that we have an option to alias an object that was not previously aliased when exported. For example, the isLowSodium object that we exported could be aliased with the as keyword when imported: import {isLowSodium as saltFree} from 'Menu';
        - Another way of using aliases is to import the entire module as an alias:
    
              import * as data from './menu';
              
              data.speciallangauge;
              data.isfrontend();
              data.isbackend(); 
    
            1.	This allows us to import an entire module from menu.js as an alias Carte.
            2.	In this example, whatever name we exported would be available to us as properties of that module. For example, if we exported the aliases chefsSpecial and isVeg, these would be available to us. If we did not give an alias to isLowSodium, we would call it as defined on the Carte module.
    
      # Combining Export Statements
        - We can also use named exports and default exports together. In menu.js:
    
              let specialty = '';
              function speciallangauge() {
                }; 
              function isfrontend() {
                }; 
              function isbackend() {
                };
            
            export { speciallangauge as special, speciallangauge as lang};
            export default isbackend;
    
            Here we use the keyword export to export the named exports at the bottom of the file. Meanwhile, we export the isGlutenFree variable using the export default syntax.
            This would also work if we exported most of the variables as declared and exported others with the export default syntax.
    
            export let Menu = {};
            
            export let specialty = '';
            export let isVegetarian = function() {
            }; 
            export let isLowSodium = function() {
            }; 
            let isGlutenFree = function() {
            };
      
            export default isGlutenFree;
    
            Here we use the export keyword to export the variables upon declaration, and again export the isGlutenFree variable using the export default syntax
            While it’s better to avoid combining two methods of exporting, it is useful on occasion. 
            For example, if you suspect developers may only be interested in importing a specific function and won’t need to import the entire default export.
    
      # Combining Import Statements
        - We can import the collection of objects and functions with the same data.
        - We can use an import keyword to import both types of variables as such:
    
            import { specialty, isVegetarian, isLowSodium } from './menu';
            import GlutenFree from './menu';
    
      `;
  return _pre;
};
const _Promises = () => {
  let _pre = document.createElement("pre");
  _pre.innerHTML = `
        JAVASCRIPT PROMISES
        - In web development, asynchronous programming is notorious for being a challenging topic.
        - An asynchronous operation is one that allows the computer to “move on” to other tasks while waiting for the asynchronous operation to complete. 
        - Asynchronous programming means that time-consuming operations don’t have to bring everything else in our programs to a halt.
        - web development makes use of asynchronous operations. Operations like making a network request or querying a database can be time-consuming, 
        - but JavaScript allows us to execute other tasks while awaiting their completion.
    
        We will learn modern JavaScript handles asynchronicity using the Promise object, introduced with ES6.
    
      # What is a Promise?
          Promises are objects that represent the eventual outcome of an asynchronous operation. A Promise object can be in one of three states:
          •	Pending: The initial state— the operation has not completed yet.
          •	Fulfilled: The operation has completed successfully and the promise now has a resolved value. For example, a request’s promise might resolve with a JSON object as its value.
          •	Rejected: The operation has failed and the promise has a reason for the failure. This reason is usually an Error of some kind.
          We refer to a promise as settled if it is no longer pending— it is either fulfilled or rejected.
    
      # Constructing a Promise Object
          Let’s construct a promise! To create a new Promise object, we use the new keyword and the Promise constructor method:
          const executorFunction = (resolve, reject) => { };
          const myFirstPromise = new Promise(executorFunction);
    
          The Promise constructor method takes a function parameter called the executor function which runs automatically when the constructor is called. 
          The executor function generally starts an asynchronous operation and dictates how the promise should be settled.
          The executor function has two function parameters, usually referred to as the resolve() and reject() functions. The resolve() and reject() functions aren’t defined by the programmer. 
          When the Promise constructor runs, JavaScript will pass its own resolve() and reject() functions into the executor function.
          •	resolve is a function with one argument. Under the hood, if invoked, resolve() will change the promise’s status from pending to fulfilled, and the promise’s resolved value will be set to the argument passed into resolve().
          •	reject is a function that takes a reason or error as an argument. Under the hood, if invoked, reject() will change the promise’s status from pending to rejected, and the promise’s rejection reason will be set to the argument passed into reject().
          Let’s look at an example executor function in a Promise
    
            const executorFunction = (resolve, reject) => {
              if (someCondition) {
                  resolve('I resolved!');
              } else {
                  reject('I rejected!'); 
              }
            }
            const myFirstPromise = new Promise(executorFunction);
    
    
            Example
                //Data
                const data = {
                  Windows : 10,
                  Mac : 5,
                  iphone : 20
                }
                // promise Executor function
                const myExecutor = (resolve,reject) =>{
                  if(data.iphone > 0){
                    resolve('Iphone booking order processed.');
                  }
                  else{
                    reject('Iphone is not available in Stock.');
                  }
                }
                //Executor Function
                const orderIphone = () =>{
                  return new Promise(myExecutor)
                }
                const orderPromise = orderIphone();
                console.log(orderPromise);
    
      After that Run your program in CMD using node filename.js
    
      # The Node setTimeout() Function
        Knowing how to construct a promise is useful, but most of the time, knowing how to consume, or use, promises will be key. Rather than constructing promises, you’ll be handling Promise objects returned to you as the result of an asynchronous operation. These promises will start off pending but settle eventually.
        Moving forward, we’ll be simulating this by providing you with functions that return promises which settle after some time. To accomplish this, we’ll be using setTimeout(). setTimeout() is a Node API (a comparable API is provided by web browsers) that uses callback functions to schedule tasks to be performed after a delay. setTimeout() has two parameters: a callback function and a delay in milliseconds.
            const delayedHello = () => {
              console.log('Hi! This is an asynchronous greeting!');
            };
            setTimeout(delayedHello, 2000);
    
        This delay is performed asynchronously—the rest of our program won’t stop executing during the delay. Asynchronous JavaScript uses something called the event-loop. After two seconds, delayedHello() is added to a line of code waiting to be run. Before it can run, any synchronous code from the program will run. Next, any code in front of it in the line will run. This means it might be more than two seconds before delayedHello() is actually executed.
        Let’s look at how we’ll be using setTimeout() to construct asynchronous promises:
            const returnPromiseFunction = () => {
              return new Promise((resolve, reject) => {
                setTimeout(( ) => {resolve('I resolved!')}, 1000);
              });
            };
            
            const prom = returnPromiseFunction();
    
          Example
            console.log('Hi this is the first line of code');
    
            const usingSTO = () =>{
              console.log('Hi this is Middle line of code');
            }
            setTimeout(usingSTO,2000);
    
            console.log('Hi this is last line of code');
    
      # Consuming Promises
        The initial state of an asynchronous promise is pending, but we have a guarantee that it will settle. How do we tell the computer what should happen then? 
        Promise objects come with an aptly named .then() method. It allows us to say, “I have a promise, when it settles, then here’s what I want to happen…”
        .then() is a higher-order function— it takes two callback functions as arguments. We refer to these callbacks as handlers. 
        When the promise settles, the appropriate handler will be invoked with that settled value.
          •	The first handler, sometimes called onFulfilled, is a success handler, and it should contain the logic for the promise resolving.
          •	The second handler, sometimes called onRejected, is a failure handler, and it should contain the logic for the promise rejecting.
    
        We can invoke .then() with one, both, or neither handler! This allows for flexibility, but it can also make for tricky debugging. 
        If the appropriate handler is not provided, instead of throwing an error, .then() will just return a promise with the same settled value as the promise it was called on. 
        One important feature of .then() is that it always returns a promise. We’ll return to this in more detail in a later exercise and explore why it’s so important.
    
        The onFulfilled and onRejected Functions
        To handle a “successful” promise, or a promise that resolved, we invoke .then() on the promise, passing in a success handler callback function:
    
            const prom = new Promise((resolve, reject) => {
              resolve('Yay!');
            });
            
            const handleSuccess = (resolvedValue) => {
              console.log(resolvedValue);
            };
            
            prom.then(handleSuccess); // Prints: 'Yay!'
    
        With typical promise consumption, we won’t know whether a promise will resolve or reject, so we’ll need to provide the logic for either case. We can pass both an onFulfilled and onRejected callback to .then().
    
      Example 
            -Library.js
    
                  const data = {
                    windows : 10,
                    mac : 5,
                    iphone : 20
                  }
                  const checkInventory = (order) =>{
                    return new Promise((resolve,reject) =>{
                      setTimeout(()=>{
                        let checkStock = order.every(item => data[item[0]] >= item[1]);
                        if(checkStock) {
                          resolve('Thanks you for placing order.');
                        }
                        else{
                          reject('We're sorry. Order is Unsuccessful')
                        }
                      },1000);
                    })
                  };
    
                  module.export = { checkInventory };
    
            -App.js
    
                const {checkInventory} = require('./library.js');
    
                const order = [['mac',1] , ['iphone', 2]];
    
                const handleSuccess = (resolvedvalue) =>{
                  console.log(resolvedvalue);
                }
                const handleFailure = (rejectreason) =>{
                  console.log(rejectreason);
                }
    
                checkInventory(order)
                .then(handleSuccess,handleFailure);
    
      # Using catch() with Promises
        - One way to write cleaner code is to follow a principle called separation of concerns. Separation of concerns means organizing code into distinct sections each handling a specific task. 
        - It enables us to quickly navigate our code and know where to look if something isn’t working.
    
          Remember, .then() will return a promise with the same settled value as the promise it was called on if no appropriate handler was provided. 
          This implementation allows us to separate our resolved logic from our rejected logic. 
          Instead of passing both handlers into one .then(), we can chain a second .then() with a failure handler to a first .then() with a success handler and both cases will be handled.
                prom
                .then((resolvedValue) => {
                  console.log(resolvedValue);
                })
                .then(null, (rejectionReason) => {
                  console.log(rejectionReason);
                });
    
      Since JavaScript doesn’t mind whitespace, we follow a common convention of putting each part of this chain on a new line to make it easier to read. To create even more readable code, we can use a different promise function: .catch().
      The .catch() function takes only one argument, onRejected. In the case of a rejected promise, this failure handler will be invoked with the reason for rejection. Using .catch() accomplishes the same thing as using a .then() with only a failure handler.
    
      prom
        .then((resolvedValue) => {
          console.log(resolvedValue);
        })
        .catch((rejectionReason) => {
          console.log(rejectionReason);
        });
    
      # Chaining Multiple Promises
    
        One common pattern we’ll see with asynchronous programming is multiple operations which depend on each other to execute or that must be executed in a certain order. 
        We might make one request to a database and use the data returned to us to make another request and so on!
        Let’s illustrate this with another cleaning example, washing clothes:
        We take our dirty clothes and put them in the washing machine. If the clothes are cleaned, then we’ll want to put them in the dryer. 
        After the dryer runs, if the clothes are dry, then we can fold them and put them away.
        This process of chaining promises together is called composition. Promises are designed with composition in mind! Here’s a simple promise chain in code:
              firstPromiseFunction()
              .then((firstResolveVal) => {
                return secondPromiseFunction(firstResolveVal);
              })
              .then((secondResolveVal) => {
                console.log(secondResolveVal);
              });
    
              Example
              const store = {
                sunglasses: {
                  inventory: 817, 
                  cost: 9.99
                },
                pants: {
                  inventory: 236, 
                  cost: 7.99
                },
                bags: {
                  inventory: 17, 
                  cost: 12.99
                }
              };
    
              const checkInventory = (order) => {
                return new Promise ((resolve, reject) => {
                setTimeout(()=> {  
                const itemsArr = order.items;  
                let inStock = itemsArr.every(item => store[item[0]].inventory >= item[1]);
                
                if (inStock){
                  let total = 0;   
                  itemsArr.forEach(item => {
                    total += item[1] * store[item[0]].cost
                  });
                  console.log('All of the items are in stock. The total cost of the order is {total}.');
                  resolve([order, total]);
                } else {
                  reject('The order could not be completed because some items are sold out.');
                }     
              }, generateRandomDelay());
              });
              };
    
              const processPayment = (responseArray) => {
                const order = responseArray[0];
                const total = responseArray[1];
                return new Promise ((resolve, reject) => {
                setTimeout(()=> {  
                let hasEnoughMoney = order.giftcardBalance >= total;
                // For simplicity we've omited a lot of functionality
                // If we were making more realistic code, we would want to update the giftcardBalance and the inventory
                if (hasEnoughMoney) {
                  console.log('Payment processed with giftcard. Generating shipping label.');
                  let trackingNum = generateTrackingNumber();
                  resolve([order, trackingNum]);
                } else {
                  reject('Cannot process order: giftcard balance was insufficient.');
                }
                
              }, generateRandomDelay());
              });
              };
    
              const shipOrder = (responseArray) => {
                const order = responseArray[0];
                const trackingNum = responseArray[1];
                return new Promise ((resolve, reject) => {
                setTimeout(()=> {  
                  resolve('The order has been shipped. The tracking number is: {trackingNum}.');
              }, generateRandomDelay());
              });
              };
    
              // This function generates a random number to serve as a "tracking number" on the shipping label. In real life this wouldn't be a random number
              function generateTrackingNumber() {
                return Math.floor(Math.random() * 1000000);
              }
    
              // This function generates a random number to serve as delay in a setTimeout() since real asynchrnous operations take variable amounts of time
              function generateRandomDelay() {
                return Math.floor(Math.random() * 2000);
              }
    
              module.exports = {checkInventory, processPayment, shipOrder};
    
              const {checkInventory, processPayment, shipOrder} = require('./library.js');
    
              const order = {
                items: [['sunglasses', 1], ['bags', 2]],
                giftcardBalance: 79.82
              };
    
              checkInventory(order)
              .then((resolvedValueArray) => {
                // Write the correct return statement here:
                return processPayment(resolvedValueArray);
              })
              .then((resolvedValueArray) => {
                // Write the correct return statement here:
                return shipOrder(resolvedValueArray);
              })
              .then((successMessage) => {
                console.log(successMessage);
              })
              .catch((errorMessage) => {
                console.log(errorMessage);
              });
    
    
      # Avoiding Common Mistakes
            Promise composition allows for much more readable code than the nested callback syntax that preceded it. However, it can still be easy to make mistakes. In this exercise, we’ll go over two common mistakes with promise composition.
            Mistake 1: Nesting promises instead of chaining them.
            returnsFirstPromise()
            .then((firstResolveVal) => {
              return returnsSecondValue(firstResolveVal)
                .then((secondResolveVal) => {
                  console.log(secondResolveVal);
                })
            })
    
          Let’s break down what’s happening in the above code:
              •	We invoke returnsFirstPromise() which returns a promise.
              •	We invoke .then() with a success handler.
              •	Inside the success handler, we invoke returnsSecondValue() with firstResolveVal which will return a new promise.
              •	We invoke a second .then() to handle the logic for the second promise settling all inside the first then()!
              •	Inside that second .then(), we have a success handler which will log the second promise’s resolved value to the console.
    
        Instead of having a clean chain of promises, we’ve nested the logic for one inside the logic of the other. Imagine if we were handling five or ten promises!
        Mistake 2: Forgetting to return a promise.
              returnsFirstPromise()
              .then((firstResolveVal) => {
                returnsSecondValue(firstResolveVal)
              })
              .then((someVal) => {
                console.log(someVal);
              })
    
        Let’s break down what’s happening in the example:
          •	We invoke returnsFirstPromise() which returns a promise.
          •	We invoke .then() with a success handler.
          •	Inside the success handler, we create our second promise, but we forget to return it!
          •	We invoke a second .then(). It’s supposed to handle the logic for the second promise, but since we didn’t return, this .then() is invoked on a promise with the same settled value as the original promise!
    
              const {checkInventory, processPayment, shipOrder} = require('./library.js');
    
              const order = {
                items: [['sunglasses', 1], ['bags', 2]],
                giftcardBalance: 79.82
              };
    
              // Refactor the code below:
    
              checkInventory(order)
                  .then((resolvedValueArray) => {
                      processPayment(resolvedValueArray)
                          .then((resolvedValueArray) => {
                              shipOrder(resolvedValueArray)
                                  .then((successMessage) => {
                                      console.log(successMessage);
                                  });
                          });
                  });
                  
                  
    
              Correct order
              const {checkInventory, processPayment, shipOrder} = require('./library.js');
    
              const order = {
                items: [['sunglasses', 1], ['bags', 2]],
                giftcardBalance: 79.82
              };
    
      // Refactor the code below:
    
              checkInventory(order)
                  .then((resolvedValueArray) => {
                      return processPayment(resolvedValueArray)
                  })
                  .then((resolvedValueArray) => {
                      return shipOrder(resolvedValueArray)
                  })
                  .then((successMessage) => {
                      console.log(successMessage);
                  })
    
      # Using Promise.all()
          When done correctly, promise composition is a great way to handle situations where asynchronous operations depend on each other or execution order matters. 
          What if we’re dealing with multiple promises, but we don’t care about the order? Let’s think in terms of cleaning again.
          For us to consider our house clean, we need our clothes to dry, our trash bins emptied, and the dishwasher to run. We need all of these tasks to complete but not in any particular order. 
          Furthermore, since they’re all getting done asynchronously, they should really all be happening at the same time!
          To maximize efficiency we should use concurrency, multiple asynchronous operations happening together. With promises, we can do this with the function Promise.all().
    
          Promise.all() accepts an array of promises as its argument and returns a single promise. That single promise will settle in one of two ways:
            •	If every promise in the argument array resolves, the single promise returned from Promise.all() will resolve with an array containing the resolve value from each promise in the argument array.
            •	If any promise from the argument array rejects, the single promise returned from Promise.all() will immediately reject with the reason that promise rejected. This behavior is sometimes referred to as failing fast.
    
          let myPromises = Promise.all([returnsPromOne(), returnsPromTwo(), returnsPromThree()]);
      
          myPromises
            .then((arrayOfValues) => {
              console.log(arrayOfValues);
            })
            .catch((rejectionReason) => {
              console.log(rejectionReason);
            });
    
        Let’s break down what’s happening:
          •	We declare myPromises assigned to invoking Promise.all().
          •	We invoke Promise.all() with an array of three promises— the returned values from functions.
          •	We invoke .then() with a success handler which will print the array of resolved values if each promise resolves successfully.
          •	We invoke .catch() with a failure handler which will print the first rejection message if any promise rejects.
    
      # Example
              const checkAvailability = (itemName, distributorName) => {
                  console.log('Checking availability of {itemName} at {distributorName}...');
                  return new Promise((resolve, reject) => {
                      setTimeout(() => {
                          if (restockSuccess()) {
                              console.log('{itemName} are in stock at {distributorName}')
                              resolve(itemName);
                          } else {
                              reject('Error: {itemName} is unavailable from {distributorName} at this time.');
                          }
                      }, 1000);
                  });
              };
    
              module.exports = { checkAvailability };
    
              // This is a function that returns true 80% of the time
              // We're using it to simulate a request to the distributor being successful this often
              function restockSuccess() {
                  return (Math.random() > .2);
              }
    
    
              const {checkAvailability} = require('./library.js');
    
              const onFulfill = (itemsArray) => {
                console.log('Items checked: {itemsArray}');
                console.log('Every item was available from the distributor. Placing order now.');
              };
    
              const onReject = (rejectionReason) => {
                console.log(rejectionReason);
              };
    
              const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
              const checkPants = checkAvailability('pants', 'Favorite Supply Co.'); 
              const  checkBags = checkAvailability('bags', 'Favorite Supply Co.');
    
              Promise.all([checkSunglasses, checkPants, checkBags])
                .then(onFulfill)
                .catch(onReject);
    
      `;
  return _pre;
};
const _AsyncAwait = () => {
  let _pre = document.createElement("pre");
  _pre.innerHTML = `
      # Introduction
        - Often in web development, we need to handle asynchronous actions— actions we can wait on while moving on to other tasks. We make requests to networks, databases, or any number of similar operations. 
        - JavaScript is non-blocking: instead of stopping the execution of code while it waits, JavaScript uses an event-loop which allows it to efficiently execute other tasks while it awaits the completion of these asynchronous actions.
        - Originally, JavaScript used callback functions to handle asynchronous actions. The problem with callbacks is that they encourage complexly nested code which quickly becomes difficult to read, debug, and scale. 
        - With ES6, JavaScript integrated native promises which allow us to write significantly more readable code. JavaScript is continually improving, and ES8 provides a new syntax for handling our asynchronous action, async...await. 
        - The async...await syntax allows us to write asynchronous code that reads similarly to traditional synchronous, imperative programs.
        - The async...await syntax is syntactic sugar— it doesn’t introduce new functionality into the language, but rather introduces a new syntax for using promises and generators. 
        - Both of these were already built in to the language. Despite this, async...await powerfully improves the readability and scalability of our code. Let’s learn how to use it!
    
      # The async Keyword
        - The async keyword is used to write functions that handle asynchronous actions. We wrap our asynchronous logic inside a function prepended with the async keyword. Then, we invoke that function.
              async function myFunc() {
                // Function body here
              };
              
              myFunc();
    
        We’ll be using async function declarations throughout this lesson, but we can also create async function expressions:
          const myFunc = async () => {
            // Function body here
          };
      
          myFunc();
    
        - async functions always return a promise. This means we can use traditional promise syntax, like .then() and .catch with our async functions. An async function will return in one of three ways:
            •	If there’s nothing returned from the function, it will return a promise with a resolved value of undefined.
            •	If there’s a non-promise value returned from the function, it will return a promise resolved to that value.
            •	If a promise is returned from the function, it will simply return that promise
    
          async function fivePromise() { 
            return 5;
          }
          
          fivePromise()
          .then(resolvedValue => {
              console.log(resolvedValue);
            })  // Prints 5
    
        In the example above, even though we return 5 inside the function body, what’s actually returned when we invoke fivePromise() is a promise with a resolved value of 5.
        Let’s write an async function!
    
          async function withAsyncNumberCheck(num){
            return new Promise((resolve,reject)=>{
              //Checking if number is positive
              if(num >0){
                resolve('Positive number')
              }
              else{
                resolve('Negative number')
              }
            })
          }
    
          withAsyncNumberCheck(-10)
            .then(resolveValue=>{
              console.log(resolveValue);
            })
      # The await Operator
        - In the last exercise, we covered the async keyword. By itself, it doesn’t do much; async functions are almost always used with the additional keyword await inside the function body.
        - The await keyword can only be used inside an async function. await is an operator: it returns the resolved value of a promise. 
        - Since promises resolve in an indeterminate amount of time, await halts, or pauses, the execution of our async function until a given promise is resolved.
        - In most situations, we’re dealing with promises that were returned from functions. Generally, these functions are through a library, and, in this lesson, we’ll be providing them. 
        - We can await the resolution of the promise it returns inside an async function. In the example below, myPromise() is a function that returns a promise which will resolve to the string "I am resolved now!".
            async function asyncFuncExample(){
              let resolvedValue = await myPromise();
              console.log(resolvedValue);
            }
        
            asyncFuncExample(); // Prints: I am resolved now!
    
        - Within our async function, asyncFuncExample(), we use await to halt our execution until myPromise() is resolved and assign its resolved value to the variable resolvedValue. 
        - Then we log resolvedValue to the console. We’re able to handle the logic for a promise in a way that reads like synchronous code.
        
        Example – 
            const libraryLanguage = () =>{
              return new Promise((resolve,reject) =>{
                setTimeout(()=>{
                  console.log('Do you want to learn programming...')
                  setTimeout(()=>{
                    console.log('Do you want to learn backend...')
                    setTimeout(()=>{
                      console.log('Do you want to learn frontend...')
                      setTimeout(()=>{
                        console.log('Do you want to learn frameWork...')
                        setTimeout(()=>{
                          console.log('let learn Special langauge to use in backend as well as frontend...')
                          resolve('JavaScript')
                        },1000)
                      },1000)
                    },1000)
                  },1000)
                },1000)
              })
            }
          module.exports = libraryLanguage
    
          const libraryLanguage = require('./library.js')
    
          function learnlangauge(){
            libraryLanguage().then((language)=>{
              console.log('I want to start leaning {langauge}');
            })
          }
    
          async function learnlanguage(){
            let langauge = await libraryLanguage();
            console.log('I Want to start learning {langauge}');
          }
          learnlangauge()
    
      # Writing async Functions
        - We’ve seen that the await keyword halts the execution of an async function until a promise is no longer pending. 
        - Don’t forget the await keyword! It may seem obvious, but this can be a tricky mistake to catch because our function will still run— it just won’t have the desired results.
    
        We’re going to explore this using the following function, which returns a promise that resolves to 'Yay, I resolved!' after a 1 second delay:
    
          let myPromise = () => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve('Yay, I resolved!')
              }, 1000);
            });
          }
    
        Now we’ll write two async functions which invoke myPromise():
          async function noAwait() {
          let value = myPromise();
          console.log(value);
          }
          
          async function yesAwait() {
          let value = await myPromise();
          console.log(value);
          }
          
          noAwait(); // Prints: Promise { <-pending> }
          yesAwait(); // Prints: Yay, I resolved!
    
        In the first async function, noAwait(), we left off the await keyword before myPromise(). In the second, yesAwait(), we included it. The noAwait() function logs Promise { <-pending> } to the console. 
        Without the await keyword, the function execution wasn’t paused. The console.log() on the following line was executed before the promise had resolved.
        Remember that the await operator returns the resolved value of a promise. When used properly in yesAwait(), the variable value was assigned the resolved value of the myPromise() promise, 
        whereas in noAwait(), value was assigned the promise object itself.
    
        Example
            const shopForElectronics = () =>{
              return new Promise((resolve,reject) => {
                const electronics = ['Iphone','Samsung','Mac','Windows','Linux','Mouse','keyBoard']
                setTimeout(()=>{
                  let randomIndex = Math.floor(Math.random()*7)
                  let electronic = electronics[randomIndex]
                  console.log('2. I bought {electronic} beacuse I want it.')
                  resolve(electronic);
                },1000)
              })
            }
            module.exports = shopForElectronics
            const shopForElectronics = require('./library.js');
    
            //Simple function
            function getElectronics(){
              console.log('1. Going to Bug electronics from Store...')
              let value = shopForElectronics()
              console.log('3. Great! I'm ahpppy to get {value}')
            }
            //Async await function
            async function getElectronics(){
              console.log('1. Going to Bug electronics from Store...')
              let value = await shopForElectronics()
              console.log('3. Great! I'm ahpppy to get {value}')
            }
    
            getElectronics()
    
      # Handling Dependent Promises
        - The true beauty of async...await is when we have a series of asynchronous actions which depend on one another. For example, we may make a network request based on a query to a database. 
        - In that case, we would need to wait to make the network request until we had the results from the database. With native promise syntax, we use a chain of .then() functions making sure to return correctly each one:
            function nativePromiseVersion() {
                returnsFirstPromise()
                .then((firstValue) => {
                    console.log(firstValue);
                    return returnsSecondPromise(firstValue);
                })
              .then((secondValue) => {
                    console.log(secondValue);
                });
            }
    
        - Here’s how we’d write an async function to accomplish the same thing:
            async function asyncAwaitVersion() {
            let firstValue = await returnsFirstPromise();
            console.log(firstValue);
            let secondValue = await returnsSecondPromise(firstValue);
            console.log(secondValue);
            }
    
        Though using the async...await syntax can save us some typing, the length reduction isn’t the main point. Given the two versions of the function, 
        the async...await version more closely resembles synchronous code, which helps developers maintain and debug their code. 
        The async...await syntax also makes it easy to store and refer to resolved values from promises further back in our chain which is a much more difficult task with native promise syntax. 
        Let’s create some async functions with multiple await statements!
            const shopForElectronics = () =>{
              return new Promise((resolve,reject) => {
                const electronics = ['Iphone','Samsung','Mac','Windows','Linux','Mouse','keyBoard']
                setTimeout(()=>{
                  let randomIndex = Math.floor(Math.random()*7)
                  let electronic = electronics[randomIndex]
                  console.log('I want to buy  {electronic}.')
                  resolve(electronic);
                },1000)
              })
            }
    
            let prepareTheOrder = (product) =>{
              return new Promise((resolve,reject) =>{
                console.log('Time to pack the Order...')
                setTimeout(()=>{
                  console.log('{product} is Packing...')
                  resolve(true)
                },1000)
              })
            }
    
            let placeTheOrder = (packedOrder) =>{
              return new Promise((resolve,reject) =>{
                console.log('Order is Shipping...')
                setTimeout(()=>{
                  if(packedOrder){
                    console.log('....Your Order is Shipped !!');
                    resolve('\n\n Thanks for Shopping :) ')
                  }
                  else{
                    console.log('....Order Shipping is failed');
                    reject('\n\n Please try after sometime.')
                  }
                },1000)
              })
            }
    
            module.exports = {shopForElectronics,prepareTheOrder,placeTheOrder}
    
            const {shopForElectronics,prepareTheOrder,placeTheOrder} = require('./library.js');
    
            async function orderItem(){
              let cart = await shopForElectronics()
              let placeorder = await prepareTheOrder(cart)
              let shipping = await placeTheOrder(placeorder);
              console.log(shipping);
            }
    
            orderItem();
    
      # Handling Errors
        - When .catch() is used with a long promise chain, there is no indication of where in the chain the error was thrown. This can make debugging challenging.
        - With async...await, we use try...catch statements for error handling. By using this syntax, not only are we able to handle errors in the same way we do with synchronous code, 
        - but we can also catch both synchronous and asynchronous errors. This makes for easier debugging!
    
            async function usingTryCatch() {
            try {
              let resolveValue = await asyncFunction('thing that will fail');
              let secondValue = await secondAsyncFunction(resolveValue);
            } catch (err) {
              // Catches any errors in the try block
              console.log(err);
            }
            }
            
            usingTryCatch();
    
        Remember, since async functions return promises we can still use native promise’s .catch() with an async function
    
          async function usingPromiseCatch() {
            let resolveValue = await asyncFunction('thing that will fail');
          }
          
          let rejectedPromise = usingPromiseCatch();
          rejectedPromise.catch((rejectValue) => {
          console.log(rejectValue);
          })
    
        Example
            let randomSuccess = () => {
            let num = Math.random();
            if (num < .5 ){
              return true;
            } else {
              return false;
            }
            };
    
      # Handling Independent Promises
        - Remember that await halts the execution of our async function. This allows us to conveniently write synchronous-style code to handle dependent promises. 
        - But what if our async function contains multiple promises which are not dependent on the results of one another to execute?
            async function waiting() {
            const firstValue = await firstAsyncThing();
            const secondValue = await secondAsyncThing();
            console.log(firstValue, secondValue);
            }
            
            async function concurrent() {
            const firstPromise = firstAsyncThing();
            const secondPromise = secondAsyncThing();
            console.log(await firstPromise, await secondPromise);
            }
    
        - In the waiting() function, we pause our function until the first promise resolves, then we construct the second promise. Once that resolves, we print both resolved values to the console.
        - In our concurrent() function, both promises are constructed without using await. We then await each of their resolutions to print them to the console.
        - With our concurrent() function both promises’ asynchronous operations can be run simultaneously. 
        - If possible, we want to get started on each asynchronous operation as soon as possible! Within our async functions we should still take advantage of concurrency, 
        - the ability to perform asynchronous actions at the same time.
            Note: if we have multiple truly independent promises that we would like to execute fully in parallel, we must use individual .then() functions and avoid halting our execution with await.
    
          Example - 
              let bookWindows = () =>{
                return new Promise ((resolve,reject) =>{
                  setTimeout(()=>{
                    resolve('Windows')
                  },1000)
                })
              }
              let bookMac = () =>{
                return new Promise ((resolve,reject) =>{
                  setTimeout(()=>{
                    resolve('Mac')
                  },1000)
                })
              }
              let bookIphone = () =>{
                return new Promise ((resolve,reject) =>{
                  setTimeout(()=>{
                    resolve('Iphone')
                  },1000)
                })
              }
              let bookAndroid = () =>{
                return new Promise ((resolve,reject) =>{
                  setTimeout(()=>{
                    resolve('Android')
                  },1000)
                })
              }
              module.exports = {bookWindows,bookMac,bookIphone,bookAndroid}
    
              let {bookWindows,bookMac,bookIphone,bookAndroid} = require('./library.js')
              async function purchase(){
                let windows = await bookWindows()
                let mac = await bookMac()
                let iphone = await bookIphone()
                let android = await bookAndroid()
                console.log('Hi we have following Stuff Available....')
                console.log(windows)
                console.log(mac)
                console.log(iphone)
                console.log(android)
              }
    
              async function Purchase(){
                let windows = bookWindows()
                let mac = bookMac()
                let iphone = bookIphone()
                let android = bookAndroid()
                console.log('Hi we have following Stuff Available....')
                console.log(await windows)
                console.log(await mac)
                console.log(await iphone)
                console.log(await android)
              }
    
              purchase()
              Purchase()
    
      # Await Promise.all()
              Another way to take advantage of concurrency when we have multiple promises which can be executed simultaneously is to await a Promise.all().
              We can pass an array of promises as the argument to Promise.all(), and it will return a single promise. This promise will resolve when all of the promises in the argument array have resolved. This promise’s resolve value will be an array containing the resolved values of each promise from the argument array.
              async function asyncPromAll() {
                const _resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);
                for (let i = 0; i<_resultArray.length; i++){
                  console.log(resultArray[i]); 
                }
              }
    
          In our above example, we await the resolution of a Promise.all(). This Promise.all() was invoked with an argument array containing four promises (returned from required-in functions). 
          Next, we loop through our resultArray, and log each item to the console. The first element in resultArray is the resolved value of the asyncTask1() promise, 
          the second is the value of the asyncTask2() promise, and so on.
    
          Promise.all() allows us to take advantage of asynchronicity— each of the four asynchronous tasks can process concurrently. Promise.all() also has the benefit of failing fast, 
          meaning it won’t wait for the rest of the asynchronous actions to complete once any one has rejected. 
          As soon as the first promise in the array rejects, the promise returned from Promise.all() will reject with that reason. 
          As it was when working with native promises, Promise.all() is a good choice if multiple asynchronous tasks are all required, but none must wait for any other before executing.
    
        Example - 
            let {bookWindows,bookMac,bookIphone,bookAndroid} = require('./library.js')
            async function purchase(){
              let item = await Promise.all([bookWindows(),bookMac(),bookIphone(),bookAndroid()])
              console.log('Hi we have following Stuff Available....')
              for (let i = 0; i<_item.length; i++){
                console.log(item[i]); 
              }
            }
            purchase()
      `;
  return _pre;
};
const _RequestGetPost = () => {
  let _pre = document.createElement("pre");
  _pre.innerHTML = `
      # HTTP Requests
        - One of JavaScript’s greatest assets is its non-blocking properties, or that it is an asynchronous language.
        - Newspaper website take advantage of non-blocking property to provide a better user experiance. 
        - Genreally a code is written so that user don't wait for gaint image to load before being allowed to read the actual article
        - In above approach text is rendered first and image is loading in the background.
    
      # JavaScript Event loop
        - JavaScript used an event loop to handle asyncronous function calls.
        - When a program run, function calls are made and added to a stack.
        - The function that make request that need to wait for server to response then get sent to a separate queue.
        - Once the stack has cleared, them the function in the queue are executed.
        - So for this concept we need to understand the system of Asyncronous JavaScript and XML or AJAX
    
      # Event Pool - https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
    
      # code snipets 
        console.log('First message!');
        setTimeout(() => {
        console.log('This message will always run last...');
        }, 0);
        console.log('Second message!');
    
        // output
        First message!
        Second message!
        This message will always run last...
    
      # XHR GET Requests #
        - Asyncronous JavaScript and XML (AJAX), enables requests to be made after the initial page load.
        - Initially, AJAX was used only for XML formatted data, now it can be used to make requests that have many different formats.
        - MDN XML - https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction
        - The XMLHttpRequest(XHR) API, named for XML, can be used to make many kinds of requests and supports other forms of data.
        - We use GET to retrieve data from a source. Take a look at the boilerplate code in the diagram to see how to make an XHR GET request.
    
      # code snipets syntax - GET
          const xhr = new XMLHttpRequest() // creating a new request to get the data
          const url = 'https://api-to-call.com/endpoint' // defining the URL
          xhr.responseType = 'json' // getting the data in form of JSON body
          xhr.onreadystatechange = () =>{
            if (xhr.readyState === XMLHttpRequest.DONE) {
              return xhr.response;
            }
          }
          // opening request and send the object
          xhr.open('GET',url);
          xhr.send()
    
      # code snipets example
    
          // Information to reach API
          const url = 'https://api.datamuse.com/words?'
          const queryParams = 'rel_rhy='
    
          // Selecting page elements
          const inputField = document.querySelector('#input');
          const submit = document.querySelector('#submit');
          const responseField = document.querySelector('#responseField');
    
          // AJAX function
          const getSuggestions = () => {
            const wordQuery = inputField.value
            const endpoint = '{url}{queryParams}{wordQuery}';
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'json'
            xhr.onreadystatechange=()=>{
              if (xhr.readyState === XMLHttpRequest.DONE) {
                // renderRawResponse(xhr.response)
                renderResponse(xhr.response)
              }
            }
            xhr.open('GET',endpoint)
            xhr.send()
          }
    
          // Clear previous results and display results to webpage
          const displaySuggestions = (event) => {
            event.preventDefault();
            while(responseField.firstChild){
              responseField.removeChild(responseField.firstChild);
            };
            getSuggestions();
          }
    
          submit.addEventListener('click', displaySuggestions);
    
      #  XHR GET Requests - UsingQuery string
        - Here we are using the het request using query string 
        - Query string - https://en.wikipedia.org/wiki/Query_string
        - A query string is seperated from the URL using a ? character. After ?, you can then create a parameter which is a key value pair joined by a =.
        - Example of Query string 'https://api.datamuse.com/words?key=value'
        - Is we want to add additional parameter we are going to use the & character to separate your parameters.
        - Example of Query saperation = 'https://api.datamuse.com/words?key=value&anotherKey=anotherValue'
    
      # code snipets using Query
          // Information to reach API
          const url = 'https://api.datamuse.com/words?';
          const queryParams = 'rel_jjb='
          const additionalParams = '&topics='
    
          // Selecting page elements
          const inputField = document.querySelector('#input');
          const topicField = document.querySelector('#topic');
          const submit = document.querySelector('#submit');
          const responseField = document.querySelector('#responseField');
    
          // AJAX function
          const getSuggestions = () => {
            const wordQuery = inputField.value;
            const topicQuery =  topicField.value
            const endpoint = '{url}{queryParams}{wordQuery}{additionalParams}{topicQuery}';
            
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
    
            xhr.onreadystatechange = () => {
              if (xhr.readyState === XMLHttpRequest.DONE) {
                renderResponse(xhr.response);
              }
            }
            
            xhr.open('GET', endpoint);
            xhr.send();
          }
    
          // Clear previous results and display results to webpage
          const displaySuggestions = (event) => {
            event.preventDefault();
            while(responseField.firstChild){
              responseField.removeChild(responseField.firstChild);
            }
            getSuggestions();
          }
    
          submit.addEventListener('click', displaySuggestions);
    
      # XHR POST Request 
        - The main difference b/w get and post request is that a POST request requires additional information to be sent through the request. 
        - This additional information is sent in the body of the post request
      
      # code snipets for post request 
          const xhr = new XMLHttpRequest();
          const url = 'https://api-to-call.com/endpoint'
          const data = JSON.stringify({id: '200'});
          xhr.responseType = 'json'
    
          xhr.onreadystatechange = () =>{
            if(xhr.readyState === XMLHttpRequest.DONE){
              return xhr.response;
            }
          }
    
          xhr.open('POST',url);
          xhr.send(data)
    
      # code snipets for post request
          // Information to reach API
          const apiKey = 'KeySecret';
          const url = 'https://api.rebrandly.com/v1/links';
    
          // Some page elements
          const inputField = document.querySelector('#input');
          const shortenButton = document.querySelector('#shorten');
          const responseField = document.querySelector('#responseField');
    
          // AJAX functions
          const shortenUrl = () => {
            const urlToShorten = inputField.value;
            const data = JSON.stringify({destination: urlToShorten});
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'json'
            xhr.onreadystatechange = () =>{
              if (xhr.readyState === XMLHttpRequest.DONE) {
                // renderRawResponse(xhr.response);
                renderResponse(xhr.response)
                }
            }
    
            xhr.open('POST',url);
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.setRequestHeader('apikey', apiKey);
            xhr.send(data)
          }
    
          // Clear page and call AJAX functions
          const displayShortUrl = (event) => {
            event.preventDefault();
            while(responseField.firstChild){
              responseField.removeChild(responseField.firstChild);
            }
            shortenUrl();
          }
    
          shortenButton.addEventListener('click', displayShortUrl);
      `;
  return _pre;
};
const _RequestFetch = () => {
  let _pre = document.createElement("pre");
  _pre.innerHTML = `Coming Soon`;
  return _pre;
};
const _WhatNext = () => {
  let _pre = document.createElement("pre");
  _pre.innerHTML = `¯\_(ツ)_/¯`;
  return _pre;
};

/**
 * Creating main section
 */
const _startNavigation = () => {
  console.warn("|>_ Creating the Div in Application");
  let body = document.body;
  const _bodyDiv = ["root", "main", "copyright"];
  for (let i = 0; i < _bodyDiv.length; i++) {
    let _div = document.createElement("div");
    _div.className = _bodyDiv[i];
    body.appendChild(_div);
  }
};

/**
 * Creating side navigation bar
 */
const _createNavigation = () => {
  console.warn("|>_ Creating the element");
  // creating the sidenavigation bar
  let _sideNavdiv = document.createElement("div");
  _sideNavdiv.id = "sidenav";
  _sideNavdiv.className = "sidenav";

  // storing the side scroll value
  const _navMenu = [
    "JavaScript Notes",
    "Introduction to JavaScript",
    "Conditional Operators",
    "Function",
    "Scope & Blocks",
    "Arrays",
    "Loops",
    "Higher Order Functiuon",
    "Iterators",
    "Object",
    "Advance Object",
    "Classes",
    "Transpilation",
    "Module Export/Import",
    "Promises",
    "Async/Await",
    "Request - GET/POST",
    "Request - FETCH",
    "What Next ¯_(ツ)_/¯",
  ];
  for (let i = 0; i < _navMenu.length; i++) {
    let _aNav = document.createElement("button");
    _aNav.id = "navbutton";
    _aNav.className = "navbutton";
    _aNav.onclick = function (event) {
      clickFunctionality(event);
    };
    // _aNav.href = "#" + _navMenu[i];
    _aNav.appendChild(document.createTextNode(`${_navMenu[i]}`));
    _sideNavdiv.appendChild(_aNav);
  }
  let root = document.getElementsByClassName("root")[0];
  root.appendChild(_sideNavdiv);
};

/**
 * Rendering the main content in function
 */
const _mainContentRendered = (content) => {
  const _navMenu = [
    "JavaScript Notes",
    "Introduction to JavaScript",
    "Conditional Operators",
    "Function",
    "Scope &amp; Blocks",
    "Arrays",
    "Loops",
    "Higher Order Functiuon",
    "Iterators",
    "Object",
    "Advance Object",
    "Classes",
    "Transpilation",
    "Module Export/Import",
    "Promises",
    "Async/Await",
    "Request - GET/POST",
    "Request - FETCH",
    "What Next ¯_(ツ)_/¯",
  ];
  const _navMenuFunction = [
    _IntroductionToJS,
    _ConditionalOperators,
    _Function,
    _ScopeBlock,
    _Array,
    _Loop,
    _HigherOrderFunction,
    _Iterators,
    _Object,
    _AdvanceObject,
    _Classes,
    _Transpilation,
    _ModuleExportImport,
    _Promises,
    _AsyncAwait,
    _RequestGetPost,
    _RequestFetch,
    _WhatNext,
  ];
  if (content == _navMenu[0]) {
  } else {
    let _main = document.getElementsByClassName("main")[0];
    let _div = document.createElement("div");
    _div.id = content;
    _div.className = "maincontent";
    let _h1 = document.createElement("h1");
    _h1.innerHTML = content;
    _h1.id = "heading";
    let _ndiv = document.createElement("div");
    _ndiv.id = "pre";
    // Implementing the children node
    _main.appendChild(_div);
    document.getElementsByClassName("maincontent")[0].appendChild(_h1);
    document.getElementById(`${content}`).appendChild(_ndiv);
    console.warn(`|>_ Rendering ${content}`);
    // checking condition for rendering
    let _conditionCall;
    for (let i = 1; i < _navMenu.length; i++) {
      if (content == _navMenu[i]) {
        _conditionCall = _navMenuFunction[i - 1];
        break;
      }
    }
    console.log("------->", _conditionCall);
    document.getElementById(`pre`).appendChild(_conditionCall());
  }
};

/**
 * Creating click functionality
 */
const clickFunctionality = (event) => {
  _deleteElement();
  _navigation(event);
  console.warn(`Rendering the element ----> ${event.target.innerHTML} `);
  _mainContentRendered(event.target.innerHTML);
};

/**
 * Deleting the DOM element attribute
 */
const _deleteElement = () => {
  try {
    let _div = document.getElementsByClassName("maincontent")[0];
    _div.remove();
  } catch (e) {
    console.warn(`Element not present to delete`);
  }
};

/**
 * For Navigation Active functionality
 */
const _navigation = (event) => {
  let _nav = document.getElementsByClassName("navbutton active");
  for (let i = 0; i < _nav.length; i++) {
    _nav[0].className = "navbutton";
  }
  event.currentTarget.className += " active";
};

/**
 * Creating copyright content
 */
const _copyright = () => {
  let _cright = document.getElementsByClassName("copyright")[0];
  let _line = document.createElement("p");
  _line.className = "copyrightline";
  _line.innerHTML =
    "Copyright @ 2021 Hariom Gola. All Right Reserved Not to be Used for Making profit";
  _cright.appendChild(_line);
};

/**
 * Running functionality start from here
 */
const startApplication = () => {
  _startNavigation();
  setTimeout(() => {
    // _landupContent();
    _createNavigation();
    _copyright();
  }, 10);
};

startApplication();
