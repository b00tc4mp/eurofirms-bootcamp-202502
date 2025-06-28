import { logic } from '../logic';
import { useState, useEffect } from 'react';
import { Provider } from './components/Provider';
import { useNavigate } from 'react-router';
import { useContext } from '../context/context';

export const Providers = () => {
  const [providers, setProviders] = useState([]);
  const navigate = useNavigate();
  const { alert } = useContext();

  useEffect(() => {
    try {
      logic
        .getProviders()
        .then((providers) => {
          setProviders(providers);
        })
        .catch((error) => {
          alert(error.message);
        });
      console.log(providers);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }, []);
  const handleUpadateProvider = () => {
    try {
      logic
        .getProviders()
        .then((users) => {
          setProviders(users);
        })
        .catch((error) => {
          console.error(error);
          alert(error.message);
        });
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center mt-8 px-4">
        <div className="flex flex-col items-center mt-8 px-4">
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={() => navigate('/addProvider')}
          >
            <i className="fa fa-plus"></i>
            Add Provider
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full">
          {providers.map((provider) => (
            <Provider
              key={provider.id}
              provider={provider}
              onEditedProvider={handleUpadateProvider}
              onReloadProvider={handleUpadateProvider}
            />
          ))}
        </div>
      </div>
    </>
  );
};
