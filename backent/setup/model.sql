CREATE DATABASE n36;
\c n36;


CREATE TABLE users(
    user_id serial primary key,
    username varchar(70) not null,
    password varchar(100) not null
);


CREATE type event_type as enum('Online', 'Offline');

drop table event_type;
drop table ads;

CREATE TABLE ads(
     ad_id serial primary key,
     status varchar(40) default 'deleted',
     created_at varchar(400) not null ,
     birth_day varchar not null,
     external_direction varchar(200) not null,
     internal_direction varchar(200) not null,
     event_type event_type,
     ad_link varchar(200) not null,
     yuridik_nomi varchar(200) default 'deleted',
     ismi_sharifi varchar(100) not null,
     professiya varchar(200) not null,
     telefon_raqami varchar(200) not null,
     qoshimcha_tel varchar(200) not  null,
     description varchar(400) not null,
     ad_img text not  null,
     mavzu_matni text not null,
     kurish_soni int default 0
);

CREATE TABLE category (
    category_id serial primary key,
    category varchar(50) not null
);

CREATE TABLE subcategory(
    subcategory_id serial primary key,
    category_id int references category(category_id),
    subcategory varchar(100) not null
);

