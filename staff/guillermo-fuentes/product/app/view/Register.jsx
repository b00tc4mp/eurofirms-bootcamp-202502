import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <>
      <div>
        <i>Logo</i>
        <h1>Register</h1>
        <form className="flex flex-col gap-20px">
          <div className="flex flex-col">
            <label for="name">Name </label>
            <input type="text" name="name" placeholder=" your name" />
          </div>
          <div className="flex flex-col">
            <label for="email">Email </label>
            <input type="email" name="email" placeholder=" your email" />
          </div>
          <div className="flex flex-col">
            <label for="username">Username </label>
            <input type="text" name="username" placeholder=" your username" />
          </div>
          <div className="flex flex-col">
            <label for="password">Password </label>
            <input type="password" name="password" placeholder=" your password" />
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
