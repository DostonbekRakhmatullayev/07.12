import { fetchAll } from "../../lib/postgres.js";
import { USERQUERY } from "./query.js";

const USERFUNC = async () => {
  try {
    const user = await fetchAll(USERQUERY);
    return user;
  } catch (error) {
    console.log(error);
  }
};

export { USERFUNC };
