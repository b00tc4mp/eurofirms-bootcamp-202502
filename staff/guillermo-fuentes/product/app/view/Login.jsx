import { logic } from '../logic';
export const Login = (props) => {
  const onRegisterClick = props.onRegisterClick;
  const handleRegisterClick = () => onRegisterClick();
  const onLoginUser = props.onLoginUser;
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const password = form.password.value;
    try {
      logic.loginUser(username, password);
      form.reset();
      onLoginUser();
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <h1>Login</h1>
      <form className="flex flex-col gap-2" onSubmit={handleLoginSubmit}>
        <div className="flex flex-col ">
          <label for="username">Username </label>
          <input type="text" name="username" placeholder=" your username" className="border-2" />
        </div>
        <div className="flex flex-col">
          <label for="password">Password </label>
          <input type="password" name="password" placeholder=" your password" className="border-2" />
        </div>
        <div className="flex justify-between">
          <a href="#" onClick={handleRegisterClick}>
            Register
          </a>
          <button className="bg-black text-white">Login</button>
        </div>
      </form>
    </>
  );
};
