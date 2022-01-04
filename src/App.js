import { useState } from "react";

export default function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  const [list] = useState(["Hello Worlddd"]);
  return (
    <div>
      <h1>Working with Input Element</h1>
      <input type="button" value="Tweet to Everyone" />
      {list.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
}
