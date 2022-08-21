-- create database biblioteca

create table
    livros(
        id serial primary key,
        nome text,
        id_autor int references autores(id),
        data_publicacao date,
        descricao text,
        id_editora int,
        genero text
    )
create table
    autores (id serial primary key, nome text)