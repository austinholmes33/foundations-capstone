            CREATE TABLE hike_lists (
                id SERIAL PRIMARY KEY,
                name UNIQUE VARCHAR NOT NULL
            );

            CREATE TABLE hikes_hike_lists (
                id SERIAL PRIMARY KEY,
                hikes_id INT NOT NULL REFERENCES hikes(id),
                hike-lists_id INT NOT NULL REFERENCES hike-lists(id)
            );
               

            CREATE TABLE hikes (
                id SERIAL PRIMARY KEY,
                name VARCHAR NOT NULL,
                location VARCHAR NOT NULL,
                distance INT NOT NULL,
                difficulty VARCHAR NOT NULL
            );