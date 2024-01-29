drop database if exists TimStamp; 
create database TimStamp;
use TimStamp;
drop table if exists users;
drop table if exists workplace;
drop table if exists agenda;

create table users(
  id int not null auto_increment primary key,
  email varchar(255) unique not null,
  password varchar(255) not null,
  name varchar(255) not null,
  prenom varchar(255) not null,
  create_date datetime default current_timestamp,
  last_connexion datetime,
  profile enum('admin', 'user') default 'user'
);

create table workplace(
  id int not null auto_increment primary key,
  name varchar(255) not null,
  address varchar(255) not null,
  contact varchar(255) not null,
  users_id int,
  constraint fk_users_workplace foreign key (users_id) references users(id) ON DELETE CASCADE,
  start_time datetime,
  end_time datetime
);

create table agenda(
  id int not null auto_increment primary key,
  start_date datetime,
  end_date datetime,
  total_majored_hours int,
  total_normal_hours int,
  users_id int,
  workplace_id int,
  constraint fk_users_agenda foreign key (users_id) references users(id) ON DELETE CASCADE,
  constraint fk_workplace foreign key (workplace_id) references workplace(id) ON DELETE CASCADE
);