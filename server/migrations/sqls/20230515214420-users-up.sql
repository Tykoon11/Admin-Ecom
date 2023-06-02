/* Replace with your SQL commands */
CREATE TABLE users (id SERIAL PRIMARY KEY, firstname VARCHAR(50), lastname VARCHAR(50), username VARCHAR(50), UNIQUE(username), password VARCHAR(255), role text);
INSERT INTO users ( firstname, lastname, username, password, role) VALUES ('Nobleman', 'Unachukwu', 'Tykoon', '$2b$10$LFTbd.if1SoPhbx7x43X3.8AyhGmFQn2N587ZwKpqJ0et0ULmXBJ6', 'admin');