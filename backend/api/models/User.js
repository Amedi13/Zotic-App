/**
 * TODO: 
 * IMPLEMENT THE USER MODEL
 */

class user { 
    constructor (id, firstname, lastname, email, password, dob, createdAt) {
        this.id = id; 
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.dob = dob;
        this.createdAt = createdAt;
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
        this.firstname = firstname;
    }

    get firstName() {
        return this.firstname 
    }

    // Lastname Methods
    set lastName(lastname){
        this.lastname = lastname
    }
}
