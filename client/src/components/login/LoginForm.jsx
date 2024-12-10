import { PrimaryButton } from "../ui/PrimaryButton";

export function LoginForm() {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <form action="get" className="flex flex-col justify-center gap-5">
        <div className="text-center p-10">
            <h1 className="font-bold text-xl">Please Sign In</h1>
        </div>
        <input
          type="text"
          placeholder="Username"
          className="bg-zinc-300 w-80 p-3 rounded-sm"
        />
        <input type="password" name="password" id="password" 
        className="bg-zinc-300 w-80 p-3 rounded-sm"
        placeholder="Password"
        />
        <PrimaryButton label="Login" />
      </form>
    </div>
  );
}
