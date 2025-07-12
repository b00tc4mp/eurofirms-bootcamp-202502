import { getPayloadFromToken } from "./helper/getPayloadFromToken";
import { data } from "../data";

export const isUserAdministrator = () => {
  const payload = getPayloadFromToken(data.getToken());

  const { role } = payload;

  return role === "administrator";
};
