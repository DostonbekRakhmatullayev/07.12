import { fetchAll } from "../../lib/postgres.js";
import {
  ADSDELETEQUERY,
  ADSQUERYGET,
  ADSQUERYPOST,
  ADSQUERYUPDATE,
  GETADSQUERY,
  GETADSQUERYMALIMOT,
  GETKURISH,
  VIEWSPUT,
} from "./query.js";

const ADSMODELGET = async () => {
  try {
    const ads = await fetchAll(ADSQUERYGET);
    return ads;
  } catch (error) {
    console.log(error);
  }
};

const ADSDELETE = async (id) => {
  try {
    const adsdelete = await fetchAll(ADSDELETEQUERY, [id])
      return adsdelete
  } catch (error) {
    console.log(error);
  }
}

const VIEWSFUNC = async () => {
  try {
    const views = fetchAll(GETKURISH);
    return views;
  } catch (error) {
    console.log(error);
  }
};

const VIEWSPOSTFUNC = async () => {
  try {
    const views = await fetchAll(VIEWSPUT);
    return views;
  } catch (error) {
    console.log(error);
  }
  // VIEWSPUT
};

const ADSMODELGETFUNC = async (id) => {
  try {
    const ads = await fetchAll(GETADSQUERYMALIMOT, [id]);
    return ads;
  } catch (error) {
    console.log(error);
  }
};

const FUNCVIEWSPOST = async (id) => {
  try {
    const ads = await fetchAll(VIEWSPUT, [id]);
    return ads;
  } catch (error) {
    console.log(error);
  }
};

const GETADSMODEL = async () => {
  try {
    const ads = await fetchAll(GETADSQUERY);
    return ads;
  } catch (error) {
    console.log(error);
  }
};

const ADSMODELUPDATE = async ({ id }) => {
  try {
    const ads = await fetchAll(ADSQUERYUPDATE, [id]);
    return ads;
  } catch (error) {
    console.log(error);
  }
};

const ADSMODELPOST = async (
  {
    created_at,
    birth_day,
    external_direction,
    internal_direction,
    event_type,
    ad_link,
    yuridik_nomi,
    ismi_sharifi,
    professiya,
    telefon_raqami,
    qoshimcha_tel,
    mavzu_matni,
    description,
  },
  { filename }
) => {
  try {
    const ads = await fetchAll(ADSQUERYPOST, [
      created_at,
      birth_day,
      external_direction,
      internal_direction,
      event_type,
      ad_link,
      yuridik_nomi,
      ismi_sharifi,
      professiya,
      telefon_raqami,
      qoshimcha_tel,
      description,
      filename,
      mavzu_matni,
    ]);

    return ads;
  } catch (error) {
    console.log(error);
  }
};

export {
  FUNCVIEWSPOST,
  VIEWSPOSTFUNC,
  VIEWSFUNC,
  ADSMODELGET,
  ADSMODELGETFUNC,
  ADSMODELUPDATE,
  ADSMODELPOST,
  GETADSMODEL,
  ADSDELETE
};
