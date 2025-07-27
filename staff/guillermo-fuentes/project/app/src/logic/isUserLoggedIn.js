import { data } from '../data';

export const isUserLoggedIn = () => !!data.getToken();
