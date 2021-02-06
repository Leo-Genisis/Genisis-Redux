create database genisis;
use genisis;

create table servicos(
idserv INT(11),
img varchar(100),
descricao varchar(100),
preco decimal(10,2),
categoria varchar(100),
primary key (idserv)
);

alter table servicos
ENGINE = innodb;

create table produtos(
idprod INT(11),
img varchar(100),
descricao varchar(100),
preco decimal(10,2),
categoria varchar(100),
primary key (idprod)
);

alter table produtos
ENGINE = innodb;