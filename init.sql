CREATE TABLE note (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    date DATE,
    category VARCHAR(255),
    content VARCHAR(255),
    archived BOOLEAN
);