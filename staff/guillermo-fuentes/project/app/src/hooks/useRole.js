import { logic } from "../logic";

export const useRole = () => {
  try {
    const isAdmin = logic.isUserAdministrator();
    const isProvider = logic.isUserProvider();
    return { isAdmin, isProvider };
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};
