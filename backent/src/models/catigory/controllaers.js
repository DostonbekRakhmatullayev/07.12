import { errorHandler } from "../../errors/errorHandler.js";
import { CATEGORYFUNC, SUBCATEGORYFUNC } from "./model.js";

const CATEGORYGET = async (req, res, next) => {
  const category = await CATEGORYFUNC().catch((error) =>
    next(new errorHandler(error.message, 500))
  );

  res.send(category);
};

const SUBCATEGORYGET = async (req, res, next) => {
  const { subcategory } = req.query;
  const category = await CATEGORYFUNC().catch((error) =>
    next(new errorHandler(error.message, 500))
  );

  const subcategorys = await SUBCATEGORYFUNC().catch((error) =>
    next(new errorHandler(error.message, 500))
  );

  const subcategoryfilter = category.find((e) => e.category == subcategory);
  const find = subcategorys.filter(
    (e) => e.category_id == subcategoryfilter.category_id
  );

  res.send(find);
};

const SUBCATEGORY = async (req, res, next) => {
  const subcategorys = await SUBCATEGORYFUNC().catch((error) =>
    next(new errorHandler(error.message, 500))
  );

  res.send(subcategorys);
};

// const CATEGORYSGET = async (req, res, next) => {
//   const category = await CATEGORYFUNC().catch((error) =>
//     next(new errorHandler(error.message, 500))
//   );

//   const subcategorys = await SUBCATEGORYFUNC().catch((error) =>
//     next(new errorHandler(error.message, 500))
//   );

//   let array = [];

//   category.filter((e) => {
//     for (const sub of subcategorys) {
//       e.subs = [];
//       if (e.category_id == sub.category_id) {
//         e.subs.push(sub);
//         array.push(e);
//       }
//     }
//   });

//   console.log(array);

//   res.send("ok");
// };

export { CATEGORYGET, SUBCATEGORYGET, SUBCATEGORY };
