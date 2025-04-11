import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <form className="flex flex-col gap-2">
        <div className="flex flex-col ">
          <label for="username">Username </label>
          <input type="text" name="username" placeholder=" your username" className="border-2" />
        </div>
        <div className="flex flex-col">
          <label for="password">Password </label>
          <input type="password" name="password" placeholder=" your password" className="border-2" />
        </div>
        <div className="flex justify-between">
          <Link to="/register">Register</Link>
          <button>Login</button>
        </div>
      </form>
    </>
  );
};
