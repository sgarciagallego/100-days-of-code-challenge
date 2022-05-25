/*
  ? The usual case of starting to learn React is to run the create-react-app package, which sets up everything you need for React.
  ? In the src/app.js file, we will be presented with the only React class in the whole app
*/

// The React class looks as follows:

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App">
//           <header className="App-header">
//             <img src={logo} className="App-logo" alt="logo" />
//             <p>
//               Edit <code>src/App.js</code> and save to reload.
//             </p>
//             <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//               Learn React
//             </a>
//           </header>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

// right now this looks like mumbo jumbo

// TODO - ES6 Classes

/*
  ! Class Syntax Construction

  ? class syntax is followed by an identifier (or simply a name for the class)
  ? these class identifiers can be used to create new objects
  ? the constructor method is always called in object initialization
  ? any parameters passed into the object will be passed into the new object

  here is some live code to see this in action
*/

class Developer {
  constructor(name) {
    this.name = name;
  }

  hello() {
    return 'Hello World! I am ' + this.name + ' and I am a web developer.';
  }
}

var sergio = new Developer('Sergio');

console.log(sergio.hello());    // -> Hello World! I am Sergio and I am a Web Developer.

// ! a class can define as many methods as the requirements needed, and in this case, we have the hello method which returns a string

// lets have another go

// ? remember: a declaring a class is followed by a class identifier, and a constructor method is called in object initialisation

class Description {
  constructor(intro, name) {
    this.intro = intro;
    this.name = name;
  }

  about() {
    return this.intro;
  }
}

var myDesc = new Description('I am really looking forward to creating react applications.');

console.log(myDesc.about());

// ! a class can entend the definition of another class, and a new object initialized from that class will have all the methods of both classes

// class ReactDeveloper extends Developer {
//   installReact() {
//     return "Installing React...\nDone.";
//   }
// }

// var sergio = new ReactDeveloper("Sergio");

// console.log(sergio.hello());
// console.log(sergio.installReact());

/*
  * the class that extends another class is usually called the child class or a subclass, alternatively the class that is being extended is not called the parent class or super class
  ! a child class can override the methods defined in the parent class, meaning it will replace the method definition with the new method defined

  for example, lets override the hello function
*/ 

class ReactDeveloper extends Developer {
  installReact() {
    return 'Installing React...\nDone.';
  }

  hello() {
    return 'Hello World! I am ' + this.name + ' and I am a React Developer!';
  }
}

var sergio = new ReactDeveloper('Sergio');
console.log(sergio.hello() + ' ' + sergio.installReact());

// the hello method from Developer has now been overriden

