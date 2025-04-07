import { Link } from 'react-router-dom';

export const Landing = () => {
  return (
    <>
      <div>
        <i>Logo</i>
        <h1>Welcome to the App</h1>
        <Link to="/register">Register</Link> or <Link to="/login">Login</Link>
      </div>
    </>
  );
};
