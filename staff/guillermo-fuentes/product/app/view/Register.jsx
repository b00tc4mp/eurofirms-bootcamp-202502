import { logic } from '../logic';
export const Register = (props) => {
  const onLoginClick = props.onLoginClick;
  const handleLoginClick = () => onLoginClick();
  const onRegisteredUser = props.onRegisteredUser;

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const username = form.username.value;
    const password = form.password.value;
    try {
      logic.registerUser(name, email, username, password);
      form.reset();
      onRegisteredUser();
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <div>
        <i>Logo</i>
        <h1 className="text-3xl text-center">Register</h1>
        <form className="flex flex-col gap-2 " onSubmit={handleRegisterSubmit}>
          <div className="flex flex-col ">
            <label for="name">Name </label>
            <input type="text" name="name" id="name" placeholder=" your name" className=" border-2" />
          </div>
          <div className="flex flex-col">
            <label for="email">Email </label>
            <input type="email" name="email" id="email" placeholder=" your email" className="border-2" />
          </div>
          <div className="flex flex-col">
            <label for="username">Username </label>
            <input type="text" name="username" id="username" placeholder=" your username" className="border-2" />
          </div>
          <div className="flex flex-col">
            <label for="password">Password </label>
            <input type="password" name="password" id="password" placeholder=" your password" className="border-2" />
          </div>
          <div className="flex justify-between">
            <a href="#" className="bg-blue-200 text-black rounded-full p-2" onClick={handleLoginClick}>
              Login{' '}
            </a>
            <button className="bg-blue-200 text-black rounded-full p-2">Register </button>
          </div>
        </form>
      </div>
    </>
  );
};
