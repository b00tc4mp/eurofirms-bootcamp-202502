export const Home = (props) => {
  const onLogout = props.onUserLogout;
  const handleLogoutClick = () => onLogout();
  return (
    <>
      <div>
        <h1>Bienvenido</h1>Hola Mundo
        <br />
        <button className="bg-black text-white" onClick={handleLogoutClick}>
          Logout
        </button>
      </div>
    </>
  );
};
