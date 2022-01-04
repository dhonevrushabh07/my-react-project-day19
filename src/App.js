import { useState } from "react";

export default function App() {
  return (
    <div>
      <MyCmponent />
    </div>
  );
}

function MyCmponent() {
  let [counter, setCounter] = useState(0);
  let [disCounter, setDisCounter] = useState(0);
  const [message, setMessage] = useState("");
  const [list, setList] = useState([]);

  const tweet = (e) => {
    const newMessage = e.target.value;
    if (list == []) {
      alert("Please enter tweet");
    } else {
      setMessage(newMessage);
    }
  };
  const post = () => {
    const newList = [message, ...list];
    setList(newList);
    setMessage("");
  };

  const deletePost = () => {
    list.splice(0, 1);
    setList([...list]);
    console.log(list);
  };
  const increment = () => {
    counter++;
    setCounter(counter);
  };
  const decrement = () => {
    setDisCounter(disCounter++);
  };
  return (
    <div>
      <div className="bg-dark text-light p-3 fs-1 mb-1">My Tweet App</div>
      <input
        type="text"
        value={message}
        onChange={tweet}
        placeholder="tweet here"
      />
      {/**Input Box */}
      <input type="button" value="Tweet" onClick={post} />
      <input type="button" value="Delete Tweet" onClick={deletePost} />
      <div>
        {" "}
        {list.map((item) => (
          <div>
            <div className="bg-dark text-light my-1">{item}</div>
            <input type="button" value="Like" onClick={increment} />
            <span className="fs-2 mx-3">{counter}</span>
            <input type="button" value="Dislike" onClick={decrement} />
            <span className=" fs-2 mx-3">{disCounter}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
