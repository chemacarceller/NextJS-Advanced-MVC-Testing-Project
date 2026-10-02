// Application entity class related to users
export class UserModel {

    constructor( id = null, name, email, status, role ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.status = status;
        this.role = role;
    }

    changeEmail(newEmail) {
        if (!newEmail.includes('@')) {
            throw new Error("The email format is invalid");
        }
        this.email = newEmail;
    }
}