import { useState } from "react";

export default function App() {
  return (
    <div>
      <MyForm />
      <MyForm />
    </div>
  );
}

function MyForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobno, setMobno] = useState("");
  const [password, setPassword] = useState("");

  const [list, setList] = useState([]);
  const uname = (e) => {
    const newUname = e.target.value;
    setUsername(newUname);
  };
  const uemail = (e) => {
    const newUemail = e.target.value;
    setEmail(newUemail);
  };
  const umobno = (e) => {
    const newuMobno = e.target.value;
    setMobno(newuMobno);
  };

  const pass = (e) => {
    const newpass = e.target.value;
    setPassword(newpass);
  };
  const register = () => {
    //alert(`${username} ${email} ${mobno} ${password}`);  //ok

    const object = {
      Name: username,
      email: email,
      Mob_no: mobno,
      Password: password,
    };
    const newList = [object, ...list];
    setList(newList);
    setUsername("");
    setEmail("");
    setMobno("");
    setPassword("");
  };

  return (
    <div>
      <div className="bg-dark text-light p-2 fs-1">Registration form</div>
      <div>
        <input
          type="text"
          className="form form-control w-50 my-2"
          placeholder="Enter your Name"
          value={username}
          onChange={uname}
        />
      </div>
      <div>
        <input
          type="text"
          className="form form-control w-50 my-2"
          placeholder="Enter your email id"
          value={email}
          onChange={uemail}
        />
      </div>
      <div>
        <input
          type="text"
          className="form form-control w-50 my-2"
          placeholder="enter mobile number"
          value={mobno}
          onChange={umobno}
        />
      </div>
      <div>
        <input
          type="text"
          className="form form-control w-50 my-2"
          placeholder="Enter Password"
          value={password}
          onChange={pass}
        />
      </div>
      <div>
        <input
          className="btn btn-outline-danger my-1 w-25"
          type="button"
          value="Register"
          onClick={register}
        />
      </div>
      <div>
        {list.map((item) => (
          <div>
            <div>Name : {item.Name} </div>
            <div>Mobile No {item.Mob_no} </div>
            <div> Email id : {item.email} </div>
            <div>Password : {item.Password} </div>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}
