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
  let [list, setList] = useState(["Hello Worldd"]);

  const tweetHere = () => {
    const newlist = [...list, "Hello universe"];
    setList(newlist);
  };

  const deleteFirstTweet = () => {
    list.splice(0, 1);
    const newlist = [...list];
    setList(newlist);
  };

  return (
    <div>
      <h1>Working with Input Element</h1>
      <input type="button" value="Tweet to Everyone" onClick={tweetHere} />
      <input
        type="button"
        value="Delete First Tweet"
        onClick={deleteFirstTweet}
      />
      <div>
        {list.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </div>
  );
}
