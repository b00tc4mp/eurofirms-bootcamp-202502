import { logic } from "../logic";

export const useRole = () => {
  try {
    if (logic.isUserLoggedIn()) {
      const isAdmin = logic.isUserAdministrator();
      const isProvider = logic.isUserProvider();

      return { isAdmin, isProvider };
    } else {
      return {};
    }
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};
