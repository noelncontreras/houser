--CREATING TABLE houses
CREATE TABLE houses (
house_id SERIAL PRIMARY KEY,
property_name VARCHAR(255) NOT NULL,
address VARCHAR(255) NOT NULL,
city VARCHAR(255) NOT NULL,
state VARCHAR(2) NOT NULL,
zip INTEGER NOT NULL
);

--INSERTING DUMMY DATA
INSERT INTO houses
(property_name, address, city, state, zip)
VALUES
('Mansion', '89 S 300 E', 'Richfield', 'UT', 82335),
('Triplex', '5906 N 23949 W', 'Salt Lake City', 'UT', 84349),
('Single Family', '123234 S State St.', 'Salt Lake City', 'UT', 82381);