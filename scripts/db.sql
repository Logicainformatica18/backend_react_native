CREATE DATABASE IF NOT EXISTS tasksdb;

use tasksdb;

create table IF NOT EXISTS tasks(
    id int not null auto_increment primary key,
    title varchar(100) not null,
    description text
)

insert into tasks (title, description) VALUES
('task 1','some description'),
('task 2','some description')