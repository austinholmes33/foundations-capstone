  DROP TABLE IF EXISTS hikes_hike_lists;
  DROP TABLE IF EXISTS hike_lists;
  DROP TABLE IF EXISTS hikes;

  
  CREATE TABLE hike_lists (
      id SERIAL PRIMARY KEY,
      listName VARCHAR UNIQUE NOT NULL
  );

  CREATE TABLE hikes (
    id SERIAL PRIMARY KEY,
    hikeName VARCHAR NOT NULL,
    location VARCHAR NOT NULL,
    distance INT NOT NULL,
    difficulty VARCHAR NOT NULL
  );


  CREATE TABLE hikes_hike_lists (
    id SERIAL PRIMARY KEY,
    hikes_id INT NOT NULL REFERENCES hikes(id),
    hike_lists_id INT NOT NULL REFERENCES hike_lists(id)
  );