--INSERT INTO TO ADD A NEW HOUSE TO DB
--ADDED THE LAST 3 WHEN I ALTERED THE TABLE (see seed.sql for ALTER TABLE)
INSERT INTO houses
(property_name, address, city, state, zip, image, monthly_mortgage_amount, desired_rent)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8);