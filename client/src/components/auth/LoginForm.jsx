import { PrimaryButton } from "../ui/PrimaryButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 

  const fakeUser = {
    username: "mary21",
    password: "123456",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fakeUser.username === username && fakeUser.password === password) {
      navigate("/admin-panel");
    } else {
      alert('wrong credentials')
    }
  };
  
  return (
    <div className="flex w-full h-full items-center justify-center">
      <form action="GET" className="flex flex-col justify-center gap-5">
        <div className="text-center p-10">
          <h1 className="font-bold text-xl">Please Sign In</h1>
        </div>
        <input
          type="text"
          placeholder="Username"
          className="bg-zinc-300 w-80 p-3 rounded-sm"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          className="bg-zinc-300 w-80 p-3 rounded-sm"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <PrimaryButton label="Sign in" onClick={handleSubmit} />
      </form>
    </div>
  );
}
