import { useState } from "react";

export default function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  let [counter, setCounter] = useState(0);
  const increment = () => {
    counter++;
    setCounter(counter);
  };
  return (
    <div>
      <h1>Like Application</h1>
      <input
        className="btn btn-outline-danger my-1"
        type="button"
        value="Like Me."
        onClick={increment}
      />

      <div>Like {counter}</div>
      <div>Like {counter}</div>
      <div>Like {counter}</div>
      <div>Like {counter}</div>
      <div>Like {counter}</div>
      <div>Like {counter}</div>
      <div>Like {counter}</div>
      <div>Like {counter}</div>
      <div>Like {counter}</div>
      <div>Like {counter}</div>
      <div>Like {counter}</div>
      <div>Like {counter}</div>
      <div>Like {counter}</div>
      <div>Like {counter}</div>
    </div>
  );
}
