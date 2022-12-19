import { errorHandler } from "../../errors/errorHandler.js";
import { adsId, adspost } from "../../validate/validate.js";
import {
  ADSDELETE,
  ADSMODELGET,
  ADSMODELGETFUNC,
  ADSMODELPOST,
  ADSMODELUPDATE,
  FUNCVIEWSPOST,
  GETADSMODEL,
  VIEWSFUNC,
} from "./model.js";
import path from "path";

const host = `http://localhost:9090/`;
const ADSGET = async (req, res, next) => {
  const ads = await ADSMODELGET().catch((error) =>
    next(new errorHandler(error.message, 500))
  );
  const adsfelter = ads.filter((e) => {
    e.ad_img = `${host}${e.ad_img}`;
    return e;
  });

  const {
    internal_direction ,
    event_type ,
    ismi_sharifi ,
    created_at ,
  } = req.query;

  // console.log(internal_direction);

  // for (const i of arr) {
  //   console.log(i);
  // }
  console.log(event_type);

  if (created_at) {
    let array = [];

    adsfelter.filter((e) => {
      if (e.created_at == created_at) {
        array.push(e);
      }
    });

    let arr = JSON.parse(internal_direction);

    if (arr.length > 0) {
      let array1 = [];
      array?.filter((m) => {
        for (const i of arr) {
          if (m.internal_direction == i) {
            array1.push(m);
          }
        }
      });

      if (event_type) {
        let array2 = []
        array1?.filter((n) => {
          if(n.event_type == event_type) {
            array2.push(n)
          }
        });

        let arra = JSON.parse(ismi_sharifi);
        if(arra.length > 0) {
          let array3 = [];
          array2?.filter((evt) => {
            for (const i of arra) {
              if (evt.ismi_sharifi == i) {
                array1.push(evt);
              }
            }
          });

          return res.send(array3)
        }
        return  res.send(array2); 
      }

      return res.send(array1);
    }

 

    return res.send(array);
  }


  res.send(adsfelter);
};

const ADSPAGE = async (req, res, next) => {
  const { page, limit } = req.query;

  const ads = await ADSMODELGET().catch((error) =>
    next(new errorHandler(error.message, 500))
  );
  const adsfelter = ads.filter((e) => {
    e.ad_img = `${host}${e.ad_img}`;
    return e;
  });

  const adsPage = adsfelter.slice((page - 1) * limit, page * limit);
  if (!adsPage.length) {
    return next(new errorHandler("Pagination is not fount", 500));
  }

  res.send(adsPage);
};

const ADSVIEWS = async (req, res, next) => {
  const views = await VIEWSFUNC().catch((error) =>
    next(new errorHandler(error.message, 500))
  );
  res.send(views);
};

const ADSGETMALIMOTLAR = async (req, res, next) => {
  const { id } = req.params;
  const ads = await ADSMODELGETFUNC(id).catch((error) =>
    next(new errorHandler(error.message, 500))
  );

  const adsfelter = ads.filter((e) => {
    e.ad_img = `${host}${e.ad_img}`;
    return e;
  });
  res.send(adsfelter);
};

const ADSGETVIEWS = async (req, res, next) => {
  const { id } = req.params;
  const views = await FUNCVIEWSPOST(id).catch((error) =>
    next(new errorHandler(error.message, 500))
  );

  res.send(views);
};

const ADSDELETES = async (req, res, next) => {
  const { id } = req.params;
  const addelete = await ADSDELETE(id).catch((error) =>
    next(new errorHandler(error.message, 500))
  );

  res.send(addelete);
};

const GETADS = async (req, res, next) => {
  const ads = await GETADSMODEL().catch((error) =>
    next(new errorHandler(error.message, 500))
  );

  const adsfelter = ads?.filter((e) => {
    e.ad_img = `${host}${e.ad_img}`;
    return e;
  });
  res.send(adsfelter);
};

const ADSIMG = async (req, res, next) => {
  try {
    const { file } = req.params;
    res.sendFile(path.resolve(process.cwd(), "uploads", file));
  } catch (error) {
    next(new errorHandler(error.message, 500));
  }
};

const ADSUPDATE = async (req, res, next) => {
  const { error, value } = adsId.validate(req.params);
  if (error) {
    return next(new errorHandler(error.message, 500));
  }
  const ads = await ADSMODELUPDATE(value).catch((error) =>
    next(new errorHandler(error.message, 500))
  );
  res.send(ads);
};

const ADSPOST = async (req, res, next) => {
  if (!req.file) {
    next(new errorHandler("Img is not found", 500));
  }
  const { error, value } = adspost.validate(req.body);
  if (error) {
    return next(new errorHandler(error.message, 500));
  }
  const ads = await ADSMODELPOST(value, req.file).catch((error) =>
    next(new errorHandler(error.message, 500))
  );
  res.send(ads);
};

export {
  ADSDELETES,
  ADSGETVIEWS,
  ADSVIEWS,
  ADSGET,
  ADSUPDATE,
  ADSPOST,
  GETADS,
  ADSIMG,
  ADSGETMALIMOTLAR,
  ADSPAGE,
};
