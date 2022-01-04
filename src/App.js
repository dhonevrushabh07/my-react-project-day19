import { useState } from "react";

export default function App() {
  return (
    <div>
      <div>Hello</div>
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  let list = [1, 1, 1, 1, 1, 1, 1];
  const [defaultCss, setDefaultCss] = useState(
    "bg-info p-3 my-1 text-light font-monospace"
  );
  let btnCSS1 = "btn btn-outline-danger bg-dark mx-1";
  let btnCSS2 = "btn btn-outline-danger bg-warning mx-1";
  let btnCSS3 = "btn btn-outline-danger bg-success mx-1";

  let customeCSS1 = () =>
    setDefaultCss("bg-dark p-3 my-1 text-light font-monospace");

  let customeCSS2 = () =>
    setDefaultCss(
      "bg-warning text-dark p-3 my-1 text-light font-monospace border-red"
    );

  let customeCSS3 = () =>
    setDefaultCss("bg-success p-3 my-1 text-light font-monospace");
  return (
    <div>
      <input
        className={btnCSS1}
        type="button"
        value="Coustom CSS1"
        onClick={customeCSS1}
      />
      <input
        className={btnCSS2}
        type="button"
        value="Coustom CSS2"
        onClick={customeCSS2}
      />
      <input
        className={btnCSS3}
        type="button"
        value="Coustom CSS3"
        onClick={customeCSS3}
      />
      {list.map(() => (
        <div className={defaultCss}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat ullam
          animi nemo ducimus repellendus obcaecati, cum totam accusamus
          similique facere amet, tenetur repudiandae atque vel quibusdam
          quisquam, ipsam error maxime.{defaultCss}
        </div>
      ))}
    </div>
  );
}
