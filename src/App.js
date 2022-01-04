import { useState } from "react";
import { NavItem } from "react-bootstrap";

export default function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  let [counter, setCounter] = useState(0);

  return (
    <div>
      <div className="fs-2">Like {counter}</div>
      <input
        type="button"
        value="Like Me.."
        onClick={() => setCounter(counter++)}
      />
    </div>
  );
}
