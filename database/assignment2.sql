/*new record for tony*/
INSERT INTO account (first_name, last_name, email, password) 
VALUES ('Tony', 'Stark', 'tony@starkent.com', 'Iam1ronM@n');

/*change the account to Admin*/
UPDATE account 
SET account_type = 'Admin' 
WHERE email = 'tony@starkent.com';

/*delete the tony record*/
DELETE FROM account 
WHERE email = 'tony@starkent.com';

/*modify GM*/
UPDATE inventory 
SET description = REPLACE(description, 'small interiors', 'a huge interior')
WHERE make = 'GM' AND model = 'Hummer';

/*select make and model from the inventory*/
SELECT inventory.make, inventory.model, classification.name
FROM inventory
INNER JOIN classification ON inventory.classification_id = classification.classification_id
WHERE classification.name = 'Sport';

/*update image*/
UPDATE inventory
SET inv_image = REPLACE(inv_image, '/images/', '/images/vehicles/'),
    inv_thumbnail = REPLACE(inv_thumbnail, '/images/', '/images/vehicles/');
