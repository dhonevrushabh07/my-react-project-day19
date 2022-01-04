export default function App() {
  return (
    <div>
      <div>Hello</div>
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  let styleCSS = "bg-black text-light p-2 fs-1";
  let styleCSS1 = "bg-danger text-light p-2 fs-1 mt-1";
  return (
    <div>
      <div className={styleCSS}>Hello Vrushabh</div>
      <div className={styleCSS1}>This is my component</div>
    </div>
  );
}
