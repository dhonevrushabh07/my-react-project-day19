import { useState } from "react";

export default function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  let [msg, setMsg] = useState("Hello World");
  const changeMessage = (e) => {
    setMsg(e.target.value);
  };

  return (
    <div>
      <h1>Counter Application</h1>
      <input
        className="w-100"
        type="text"
        value={msg}
        onChange={changeMessage}
      />
      <div>{msg}</div>
      <div>{msg}</div>
      <div>{msg}</div>
      <div>{msg}</div>
      <div>{msg}</div>
    </div>
  );
}
