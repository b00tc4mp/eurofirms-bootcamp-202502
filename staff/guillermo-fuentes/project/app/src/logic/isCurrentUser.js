import { data } from "../data";
import { getPayloadFromToken } from "./helper/getPayloadFromToken";

export const isCurrentUser = () => {
  const token = data.getToken();
  const currentUser = getPayloadFromToken(token);
  return currentUser.sub;
};
