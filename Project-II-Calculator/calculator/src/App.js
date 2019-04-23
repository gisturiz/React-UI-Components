import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';

const buttons = [
  {
    text: "clear",
    buttonStyle: "button-action"
  },
  {
    text: '÷',
    buttonStyle: "button-symbols"
  },
 
  {
    text: 7,
    buttonStyle: "button-numbers"
  },
  {
    text: 8,
    buttonStyle: "button-numbers"
  },
  {
    text: 9,
    buttonStyle: "button-numbers"
  },
  {
    text: 'x',
    buttonStyle: "button-symbols"
  },
  {
    text: 4,
    buttonStyle: "button-numbers"
  },
  {
    text: 5,
    buttonStyle: "button-numbers"
  },
  {
    text: 6,
    buttonStyle: "button-numbers"
  },
  {
    text: '-',
    buttonStyle: "button-symbols"
  },
  {
    text: 1,
    buttonStyle: "button-numbers"
  },
  {
    text: 2,
    buttonStyle: "button-numbers"
  },
  {
    text: 3,
    buttonStyle: "button-numbers"
  },
  {
    text: '+',
    buttonStyle: "button-symbols"
  },
  {
    text: 0,
    buttonStyle: "button-action"
  },
  {
    text: '=',
    buttonStyle: "button-symbols"
  }
]

const App = () => {
  return (
    <div className="app-container">
      <div className="calculator-display-app">
      <CalculatorDisplay />
      </div>
      {buttons.map(buttonFromMap => {
        return <NumberButton buttonProp={buttonFromMap} />
      })}
    </div>
  );
};

export default App;
