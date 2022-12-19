const ADSQUERYGET = `
    select ad_id,created_at,external_direction,kurish_soni, description, ad_img,ismi_sharifi,birth_day,internal_direction,  event_type from ads where ads.status='active'
`;

const GETADSQUERYMALIMOT = `
    select * from ads where ads.status='active' and   ad_id = $1 
`;

const GETADSQUERY = `
    select * from ads  
`;

const ADSQUERYUPDATE = `
    UPDATE ads SET status = 'active' WHERE ad_id = $1 returning *      
`;

const ADSDELETEQUERY = `
    DELETE FROM ads WHERE ad_id = $1  returning *
`

const GETKURISH = `
    select * from kurish 
`

const VIEWSPUT = `
   UPDATE ads SET kurish_soni = kurish_soni + 1 WHERE ad_id = $1 returning * 
`

// const VIEWSPOST = `
//     INSERT INTO kurish(ad_id, kurishlar) VALUES ($1, $2);
// `


const ADSQUERYPOST = `
    INSERT INTO ads(created_at, birth_day, external_direction, internal_direction, event_type, ad_link, yuridik_nomi, ismi_sharifi, professiya, telefon_raqami, qoshimcha_tel,description, ad_img, mavzu_matni) VALUES
( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) returning *    
`;


export {
  GETADSQUERYMALIMOT,
  ADSQUERYGET,
  ADSQUERYUPDATE,
  ADSQUERYPOST,
  GETADSQUERY,
  ADSDELETEQUERY,
  GETKURISH,
  VIEWSPUT
};
