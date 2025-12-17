/**
 * TODO: 
 * IMPLEMENT THE USER MODEL
 */
class User { 
    constructor(id, firstname, lastname, username, email, password, dob, createdAt) {
        this._id = id; 
        this._firstname = firstname;
        this._lastname = lastname;
        this._username = username;
        this._email = email;
        this._password = password;
        this._dob = dob;
        this._createdAt = createdAt;
    }

    // ID Methods
    set id(id) {
        this._id = id;
    }

    get id() {
        return this._id;
    }

    // Firstname Methods
    set firstName(firstname) {
        this._firstname = firstname;
    }

    get firstName() {
        return this._firstname;
    }

    // Lastname Methods
    set lastName(lastname) {
        this._lastname = lastname;
    }

    get lastName() {
        return this._lastname;
    }

    // Username Methods
    set userName(username) {
        this._username = username;
    }

    get userName() {
        return this._username;
    }

    // Email Methods
    set email(email) {
        this._email = email;
    }

    get email() {
        return this._email;
    }

    // Password Methods
    set password(password) {
        this._password = password;
    }

    get password() {
        return this._password;
    }

    // DOB Methods
    set dob(dob) {
        this._dob = dob;
    }

    get dob() {
        return this._dob;
    }

    // CreatedAt Methods
    set createdAt(createdAt) {
        this._createdAt = createdAt;
    }

    get createdAt() {
        return this._createdAt;
    }
}

export default User;
