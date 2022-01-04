export default function App() {
  return (
    <div>
      <div>Hello</div>
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  let id = 1;
  let username = `Vrushabh`;
  let email = `vrushabh@gmail.com`;
  let list = ["delhi", "Pune", "Amravti"];
  let obj = { id: "1", username: "DhoneVrushabh" };
  return (
    <div>
      <h1>Learning Interpolation</h1>
      <h1>
        {username} {id} {email} {list}
      </h1>
      <h1>{`i am also js ${obj.id} ${obj.username}`}</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        perspiciatis autem eligendi sapiente doloribus quidem ratione ab tempora
        corporis, est ipsam id eos amet molestiae, accusamus voluptas numquam ut
        nobis vitae optio! Hic quidem, doloremque laborum recusandae autem ad
        accusantium aspernatur nisi. Dolorum facere fugit placeat ipsum eius
        tempora ipsam.
      </p>
    </div>
  );
}
