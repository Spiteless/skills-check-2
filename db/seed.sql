CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(80),
    price NUMERIC,
    img TEXT
);

INSERT INTO products (name, price, img)
VALUES
('Calculator', 100, 'https://images.pexels.com/photos/5775/calculator-scientific.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
('Child''s Homework, Currently Due', 125, 'https://images.pexels.com/photos/256468/pexels-photo-256468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
('Room with Chairs In it', 500, 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),