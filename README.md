# The #100DaysofCode Challenge

An 100 day challenge where I strive to expand & develop current & new skills & technologies as a Frontend Developer.

## The Challenge

:fire:**Current Streak**: 1d

### Rules

* Code for 1hr every day for 100 days.
* No day breaks are allowed.
* Create a minimum of 5 small projects within the 100 days.
* If I fail, I restart from Day 1. 
* Don't sucumb to burn out, take breaks within your sessions.

## Outline

| Day | Overview        | What I have learnt                                                                                                                     |
| --- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
|  1  | Values          | **Values** are essentially large chunks of bits                                                                                        |
|     | Numbers         | Numbers are numeric values                                                                                                             |
|     |                 | adding ```e``` to a number will add an exponent ( 2.998e8 = 2.998 * 10^8 )                                                             |
|     | Special Numbers | ```Infinity``` & ```-Infinity``` represent positive and negative infinities                                                            |
|     |                 | ```NaN``` means "not a number", is displayed when numeric operations don't create a meaningful result                                  |
|     | Operators       | Operators are symbols such as ```*``` and ```/```                                                                                      |
|     |                 | Putting an operator between values will apply it to those values and create a new value as a result                                    |
|     |                 | When operators appear together without parentheses, the order they are applied is to do with their [precendence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table) |
|     |                 | **Unary Operators** are operators which only take *1 value*                                                                            |
|     |                 | **Binary Operators** are operators which take *2 values*                                                                               |
|     |                 | **Ternary Operators** are operators which take *3 values*                                                                              |
|     |                 | ```typeof``` produces a string value naming the data type you give it. e.g. ```console.log(typeof "x") -> string```                    |
|     | Strings         | **Strings** are used to represent text                                                                                                 |
|     |                 | ```alert(`...`);``` - **template literals** can contain placeholders and can include newlines without escaping                         |
|     |                 | ```".."``` and ```'...'``` are virtually the same thing (single and double quotes)                                                     |
|     |                 | ```\t``` is used in a string when inline whitespace is needed and ```\n``` is used when a newline is needed                            |
|     |                 | Strings can be used with the ```+``` operator to **concatenate** (glue) strings together                                               |
|     |                 | when you write something inside ```${}``` within a template literal, it's result will be converted to a string and included within     |
|  2  | Booleans        | a **Boolean** value has just two values: *true* or *false*                                                                             |
|     |                 | can use the greater than ```>``` and less than ```<``` symbols on both numbers and strings (e.g. ```console.log("A" < "Z")```is true ) |
|     |                 | ```>=``` = greater than or equal to                                                                                                    |
|     |                 | ```<=``` = less than or equal to                                                                                                       |
|     |                 | ```==``` = equal to                                                                                                                    |
|     |                 | ```!=``` = not equal to                                                                                                                |
|     |                 | ```console.log(Nan == Nan);``` is false as NaN means Not a Number                                                                      |
|     |                 | ```&&``` represents the logical **and**, it's a binary operator, and its result is only true *only if both of the values are true*     |
|     |                 | ```||``` represents the logical **or**, and produces true *only if at least one of the values within it are true*                      |
|     |                 | ```!``` represents **not** and is a unary operator which flips the value given to it                                                   |
|     | Conditional     | ```?``` represents the **conditional operator**, also know as the ternary operator as it is the only one in JavaScript                 |
|     |                 | the value on the left of the conditional operator will choose which of the other two values will come out                              |
|     |                 | when ```true```, it will choose the middle value, when ```false```, will choose the value on the right                                 |
|     | Empty Values    | **```null```** and **```undefined```** are used to denote the absence of *meaningful* value and carry no information                   |
|     | Automatic Type Conversion | when an operator is applied to the wrong type of value, JavaScript will convert the value to the type it needs to avoid fail |