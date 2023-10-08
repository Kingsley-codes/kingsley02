import React from 'react';
import ReactDOM from 'react-dom/client';
import Garage from './Garage.js';
import Car from './Car.js';
import FavoriteColor from './Button.js';
import NewCar from './NewCar.js';
import './index.css';



const just = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);

const myElement = <h1 className="text-3xl font-bold underline">React is {5 + 5} times better with JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

const table = document.getElementById('just');
const just1 = ReactDOM.createRoot(table);
just1.render(just)


const title = document.getElementById('head');
const head = ReactDOM.createRoot(title);
head.render(<h1>Just Making A Website That's Superb!</h1>)

const justice = document.getElementById('justice');
const garage = ReactDOM.createRoot(justice);
garage.render(<Garage />);

const jut = ReactDOM.createRoot(document.getElementById('jut'));
jut.render(<Car brand = 'Volvo' />);

function MissedGoal() {
  return <h1>YOU MISSED!</h1>;
}

function MadeGoal() {
  return <h1>IT'S A GOAL!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
 return (
  <>
    { isGoal ? <MadeGoal/> : <MissedGoal/> }
  </>
 );
}

const jet = ReactDOM.createRoot(document.getElementById('jet'));
jet.render(<Goal isGoal= {true} />);


const jest = ReactDOM.createRoot(document.getElementById('jest'));
jest.render(<FavoriteColor />);


const jesti = ReactDOM.createRoot(document.getElementById('jesti'));
jesti.render(<NewCar />);


