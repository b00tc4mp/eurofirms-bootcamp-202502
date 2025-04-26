import { logic } from '../logic';
import { useEffect, useState } from 'react';
import { Posts } from './components/Posts';
export const Home = (props) => {
  const onLogout = props.onUserLogout;
  const handleLogoutClick = () => onLogout();
  const [username, setUsername] = useState('world');
  useEffect(() => {
    try {
      const username = logic.getUserUsername();
      setUsername(username);
    } catch (error) {
      alert(error.message);
    }
  }, []);
  return (
    <div className="p-5">
      <i className="text-2xl">Logo</i>

      <div className="mt-2">
        <h1 className="text-xl">Hello, {username}!</h1>

        <button className="bg-black text-white px-2" type="button" onClick={handleLogoutClick}>
          Logout
        </button>
      </div>

      <Posts />
    </div>
  );
};
