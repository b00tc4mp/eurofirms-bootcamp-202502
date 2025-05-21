import { logic } from '../logic';
export const Login = ({ onRegisterClick, onLoginUser }) => {
  const handleRegisterClick = () => onRegisterClick();

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const password = form.password.value;
    try {
      logic
        .loginUser(username, password)
        .then(() => {
          form.reset();
          onLoginUser();
        })
        .catch((error) => {
          console.error(error);
          alert(error.message);
        });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <h1 className="">Login</h1>
      <form className="flex flex-col gap-2" onSubmit={handleLoginSubmit}>
        <div className="flex flex-col ">
          <label htmlFor="username">Username </label>
          <input type="text" name="username" placeholder=" your username" className="border-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password </label>
          <input type="password" name="password" placeholder=" your password" className="border-2" />
        </div>
        <div className="flex justify-between">
          <a href="#" className="bg-blue-200 text-black rounded-full p-2" onClick={handleRegisterClick}>
            Register
          </a>
          <button className="bg-blue-200 text-black rounded-full p-2">Login</button>
        </div>
      </form>
    </>
  );
};
