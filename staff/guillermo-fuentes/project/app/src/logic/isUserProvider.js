import { getPayloadFromToken } from "./helper/getPayloadFromToken";
import { data } from "../data";

export const isUserProvider = () => {
  const payload = getPayloadFromToken(data.getToken());

  const { role } = payload;

  return role === "provider";
};
