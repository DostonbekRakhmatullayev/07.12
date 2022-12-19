INSERT INTO users(username, password) VALUES('salim', '123456789');

INSERT INTO ads(created_at, birth_day, external_direction, internal_direction, event_type, ad_link, yuridik_nomi, ismi_sharifi, professiya, telefon_raqami, qoshimcha_tel, ad_img, mavzu_matni) VALUES
('22-02-2022', '13:00', 'Information Technologies', 'Java developer', 'Online', 'https://www.youtube.com/liver24', 'Najot Ta''lim MCHJ', 'Abbos Janizakov', 'Product designer', '998993746920', '998993746920', 'imf.jpik', 'Najot Ta''lim jamoasi o''z o''quvchilari uchun manfaatli bo''lgan musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi uch soha vakillari, ya''ni UX/UI dizayner, frontend va backend dasturchilarni "bir dasturxon atrofida" to''plashga qaror qildik.
');
-- Online / Offline
 insert into category(category) VALUES ('IT'),( 'Dizayn'), ('Biznes'), ('Ta''lim');


insert into subcategory(category_id, subcategory) VALUES 
(1, 'Mobile dasturlash');


  UPDATE ads SET kurish_soni = kurish_soni + 4 WHERE ad_id = 1; 

select * from ads where ads.status='active';

UPDATE ads SET status = 'active' WHERE ad_id = 2;

























