import { getPayloadFromToken } from "./helper/getPayloadFromToken";
import { data } from "../data";

export const isUserAdministrator = () => {
  const token = data.getToken();
  if (!token) return false;
  const payload = getPayloadFromToken(data.getToken());
  if (!payload || !payload.role) return false;
  const { role } = payload;

  return role === "administrator";
};
