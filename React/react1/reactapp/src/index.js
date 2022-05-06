import React from 'react';
import ReactDOM from 'react-dom/client';
import userImage from './Images/vishal.jpg'


const getuser = (firstname, lastname, title,skill) => {
  return `${firstname}  ${lastname}, a ${title} developer. He knows ${skill}`
}

const skill = {'HTML', 'CSS', 'javascript'}
console.log(getUser("Abhash", "Malviya", 'frontend', skill));
//'Abhash Malviya , a frontend developer. he knoes HTML, CSS, Javascript

class parent {
  constructor(firstname, lastname, country, title){
    this.firstname = firstname
    this.lastname = lastname
    this.country = country
    this.title = title
   }
   getInfo(){
    return `${this.firstname}  ${this.lastname}, a ${this.title} developer. He is from ${this.country}`
   }
}


const headerstyle = {
  backgroundColor: 'cyan',
  fontFamily: 'Helvetic Neue', 
  padding:25,
  lineHeight: 1.5,

}



const header = (
  <header style={headerstyle}>
    <h1>Welcome to React JS</h1>
    <h2>Second React Session</h2>
    <p>First session for react</p>
    <small>April 28, 2022</small>
  </header>
);

const main = (
  <main>
    <p>This is the first para for development of react application</p>
    <ul>
      <li>HTml</li>
      <li>CSS</li>
      <li>javascript</li>
    </ul>
  </main>
);

const footer = (
  <footer>
    <p>copyright 2022</p>
  </footer>
);

const user = (
  <div>
    <img src={userImage} alt= 'Vishal' />
  </div>
);

const app = (
  <div>
    {header}
    {main}
    {user}
    {footer}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  app
);

