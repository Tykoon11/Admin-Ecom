/* Replace with your SQL commands */
CREATE TABLE cart (id SERIAL PRIMARY KEY, user_id BIGINT REFERENCES users(id), product_id BIGINT REFERENCES products(id), quantity BIGINT);