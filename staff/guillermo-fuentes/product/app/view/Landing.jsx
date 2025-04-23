export const Landing = (props) => {
  const onRegisterClick = props.onRegisterClick;
  const onLoginClick = props.onLoginClick;
  const handleRegisterClick = () => onRegisterClick();
  const handleLoginClick = () => onLoginClick();
  console.log('Landing->render');
  return (
    <>
      <div>
        <i>Logo</i>
        <h1 className="text-red-600">Welcome to the App</h1>
        <a className="underline " href="#" onClick={handleRegisterClick}>
          Register
        </a>{' '}
        or{' '}
        <a className="underline" href="#" onClick={handleLoginClick}>
          Login
        </a>
      </div>
    </>
  );
};
