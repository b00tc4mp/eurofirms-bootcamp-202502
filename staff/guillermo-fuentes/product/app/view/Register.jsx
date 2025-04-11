import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <>
      <div>
        <i>Logo</i>
        <h1 className="text-3xl text-center">Register</h1>
        <form className="flex flex-col gap-2 ">
          <div className="flex flex-col ">
            <label for="name">Name </label>
            <input type="text" name="name" placeholder=" your name" className=" border-2" />
          </div>
          <div className="flex flex-col">
            <label for="email">Email </label>
            <input type="email" name="email" placeholder=" your email" className="border-2" />
          </div>
          <div className="flex flex-col">
            <label for="username">Username </label>
            <input type="text" name="username" placeholder=" your username" className="border-2" />
          </div>
          <div className="flex flex-col">
            <label for="password">Password </label>
            <input type="password" name="password" placeholder=" your password" className="border-2" />
          </div>
          <div className="flex justify-between">
            <Link to="/login">Login </Link>
            <button>Register </button>
          </div>
        </form>
      </div>
    </>
  );
};
