import { data } from '../data';
export const isUserLoggedIn = () => {
  return !!data.getUserId();
};
