CREATE TABLE prevEx (
  id serial PRIMARY KEY,
  name text,
  purpose varchar(30),
  category varchar(8) NOT NULL,
  excuse text NOT NULL,
  used date NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE prevEx (id serial PRIMARY KEY,name text,purpose varchar(30),category varchar(8) NOT NULL,excuse text NOT NULL,used date NOT NULL DEFAULT CURRENT_DATE);