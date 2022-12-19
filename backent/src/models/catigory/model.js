import { fetchAll } from "../../lib/postgres.js";
import { CATEGORYQUERY, SUBCATEGORYQUERY } from "./query.js";


const CATEGORYFUNC = async () => {
  try {
    const ads = await fetchAll(CATEGORYQUERY)
    return ads
  } catch (error) {
    console.log(error);
  }
}

const  SUBCATEGORYFUNC = async () => {
  try {
    const ads = await fetchAll(SUBCATEGORYQUERY)
    return ads
  } catch (error) {
    console.log(error);
  }
}



export { CATEGORYFUNC,  SUBCATEGORYFUNC };
