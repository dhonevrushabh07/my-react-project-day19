export default function App() {
  return (
    <div>
      <div>Hello</div>
      <MyComponent />
      <MyComponent></MyComponent>
    </div>
  );
}

function MyComponent() {
  let str1 = `Hello Whats going on`;
  let str2 = `Whats up dude ,How are ypu`;
  let str3 = `I am Fine what about you`;
  let att1 = "bg-info p-3 fs-1 mb-1";
  let att2 = "bg-danger p-3 fs-1 mb-1";
  return (
    <div>
      <div className="bg-danger p-3 fs-1 mb-1">{str1}</div>
      <div className={att1}>{str2.toUpperCase()}</div>
      <div className={att2}> {str3.toLocaleLowerCase()}</div>
    </div>
  );
}
