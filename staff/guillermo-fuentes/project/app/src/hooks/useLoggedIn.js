import { logic } from "../logic";
export const useLoggedIn = () => {
  try {
    return logic.isUserLoggedIn();
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};
