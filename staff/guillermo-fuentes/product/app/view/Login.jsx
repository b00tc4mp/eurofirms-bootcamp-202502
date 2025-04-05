export const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <form className="flex flex-col gap-20px">
        <div className="flex flex-col">
          <label for="username">Username </label>
          <input type="text" name="username" placeholder=" your username" />
        </div>
        <div className="flex flex-col">
          <label for="password">Password </label>
          <input type="password" name="password" placeholder=" your password" />
        </div>
        <div className="flex justify-between">
          <a href="#">Register</a>
          <button>Login</button>
        </div>
      </form>
    </>
  );
};
