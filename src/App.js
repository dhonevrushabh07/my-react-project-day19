import { useState } from "react";

export default function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  let list = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const [headerCss, setheaderCss] = useState(
    "bg-dark text-light p-2 fs-1 fw-bold"
  );
  const [paraCss, setparaCss] = useState(
    "alert alert-danger text-dark fw-bold font-monospace"
  );
  let tweet = `      let str1=Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
      iure non placeat voluptatem aut mollitia doloribus aspernatur? Harum
      quibusdam nobis, eveniet sunt corrupti rerum reiciendis dolorem omnis quod
      optio aliquid architecto consequuntur minus suscipit. Eos, assumenda
      dolorum excepturi neque quod, aliquid autem reprehenderit tenetur
      provident molestias minus non ea. Veritatis.`;

  const customCSS1 = () => setparaCss("bg-info text-light p-2 fs-3 fw-bold");
  const customCSS2 = () => setparaCss("bg-warning text-light p-2 fs-3 fw-bold");
  const customCSS3 = () => setparaCss("bg-success text-light p-2 fs-3 fw-bold");

  return (
    <div>
      <input type="button" value="button1" onClick={customCSS1} />
      <input type="button" value="button2" onClick={customCSS2} />
      <input type="button" value="button3" onClick={customCSS3} />
      <div>
        {list.map(() => (
          <div>
            <div
              className={headerCss}
              style={{ borderBottom: "red solid 5px" }}
            >
              Hello
            </div>
            <div className={paraCss}>
              {tweet} {paraCss}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
