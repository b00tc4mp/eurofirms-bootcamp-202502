import { Link } from 'react-router-dom';

export const Landing = () => {
  return (
    <>
      <div>
        <i>Logo</i>
        <h1 className="text-red-600">Welcome to the App</h1>
        <Link to="/register" className="underline">
          Register
        </Link>{' '}
        or{' '}
        <Link to="/login" className="underline">
          Login
        </Link>
      </div>
    </>
  );
};
