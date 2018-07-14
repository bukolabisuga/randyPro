import db from './connect';

try {
    db.query('CREATE TABLE users (id SERIAL, email varchar(250) NOT NULL, password varchar(500) NOT NULL);CREATE TABLE posts (id SERIAL, user_id int NOT NULL, title varchar(250) NOT NULL, body text NOT NULL, created_at TIMESTAMP Default Now());CREATE TABLE comments (id SERIAL, post_id int NOT NULL, user_id int NOT NULL, body text NOT NULL, created_at TIMESTAMP Default Now());');
}
catch(e) {
    console.log(e);
}