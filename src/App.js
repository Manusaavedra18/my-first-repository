import React ,{useState, useEffect, useMemo} from "react";
import './App.css';


function App() {
  const[count , setCount]=useState(0);
 
    const increase=()=>setCount(count+1);

     // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
        
    
  return (
    <div className="App">
     <div style={{margin:'50px'}}>
            <h1>Welcome to Geeks for Geeks </h1>
            <h3>Counter App using Functional Component : </h3>
          <h2>You clicked {count} times</h2>
            <button onClick={increase}>Increment</button>
        </div>
    </div>
  );
}


function App2() {
  //Interpolation with array
  const number = [1, 2, 3,];
  const message = `The numbers are ${number}`;
  //Interpolation with operators
  const n1 = 1;
  const n2 = 2;
  const sum = `The result of the sum is ${n1 + n2}`;
  //Interpolation with Function
  function Myfuc(num1, num2) {
    return num1 + num2;
  }
  const message2 = `The result of the sum2 is ${Myfuc(n1, n2)}`;
  //Interpolation with characters
  const messagec = `Some weird characters \${abc}`;
  //interpolation with helper variables
  const numa = 20;
  const numb = 20;
  const sumab = numa + numb;
  const restab = numa - numb;
  const message3 = `Sum: ${sumab} sustraccion: ${restab}`; 





  return (
    <div className="App2">
      <div style={{margin:'50px'}}>
        <h1>It´s a test of interpolation</h1>
        <h2>{message}</h2>
        <h2>{sum}</h2>
        <h3>{message2}</h3>
        <h3>{messagec}</h3>
        <h3>{message3}</h3>
      </div>
    </div>
  )
}



// Usage
function App3() {
  // State for our counter
  const [count, setCount] = useState(0);
  // State to keep track of current word in array we want to show
  const [wordIndex, setWordIndex] = useState(0);
  // Words we can flip through and view letter count
  const words = ["hey", "this", "is", "cool"];
  const word = words[wordIndex];
  // Returns number of letters in a word
  // We make it slow by including a large and completely unnecessary loop
  const computeLetterCount = (word) => {
    let i = 0;
    while (i < 1000000000) i++;
    return word.length;
  };
  // Memoize computeLetterCount so it uses cached return value if input array ...
  // ... values are the same as last time the function was run.
  const letterCount = useMemo(() => computeLetterCount(word), [word]);
  // This would result in lag when incrementing the counter because ...
  // ... we'd have to wait for expensive function when re-rendering.
  //const letterCount = computeLetterCount(word);
  return (
    <div style={{ padding: "15px" }}>
      <h2>Compute number of letters (slow 🐌)</h2>
      <p>
        "{word}" has {letterCount} letters
      </p>
      <button
        onClick={() => {
          const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1;
          setWordIndex(next);
        }}
      >
        Next word
      </button>
      <h2>Increment a counter (fast ⚡️)</h2>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}



export default App3;
