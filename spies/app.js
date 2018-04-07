const db = require('./db');

const signUp = (email, password) => {
    // check email is exist
    // save user data to db
    db.saveUser({ email, password });
    // send the welcome email
}

module.exports = {
    signUp
}