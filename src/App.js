import logo from './logo.svg';
import './App.css';
import UseReducer from './useReducer';
import { useState } from 'react';

function App() {
  const [text, setText] = useState("")

  const [state, distpach] = UseReducer(reducer, "")


  function inputValue (e) {
      distpach({
        type: "SET_TEXT",
        payload: e.target.value
      })
  }

  function reducer(state, action) {
      if (action.type === "SET_TEXT") {
        setText(action.payload)
        console.log(text);
      }
  }  
  return (
    <div className="App">
      <input type='text' value={text} onChange={inputValue} />
    </div>
  );
}

export default App;
