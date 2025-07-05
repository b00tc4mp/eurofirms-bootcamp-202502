export const Alert = ({ message, onAccepted }) => {
  const handleAcceptAlert = () => onAccepted();

  return (
    <div className="p-10 bg-gray-500/70  absolute w-full h-full flex flex-col justify-center ">
      <div className="bg-blue-100 border-2 border-black p-2 flex flex-col gap-2 rounded-2xl text-center  font-bold">
        <p>{message}</p>

        <button
          className="bg-black text-white px-3 self-end rounded-2xl p-1  "
          type="button"
          onClick={handleAcceptAlert}
        >
          Accept
        </button>
      </div>
    </div>
  );
};
