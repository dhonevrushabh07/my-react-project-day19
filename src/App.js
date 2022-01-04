import { useState } from "react";

export default function App() {
  return (
    <div>
      <div></div>
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  const [ajaxcall, SetAjaxCall] = useState([]);

  const callToServer = async () => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    const response = await fetch(url);
    const result = await response.json();

    SetAjaxCall(result);
  };
  return (
    <div>
      <div>Hello World</div>
      <input type="button" value="Call To Server" onClick={callToServer} />

      {ajaxcall.map((item, index) => (
        <div key={index}>{item.thumbnailUrl}</div>
      ))}
    </div>
  );
}
