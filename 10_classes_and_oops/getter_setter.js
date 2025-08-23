class user {
    constructor(email, password) { 
        this.email = email;
        this.password = password;
    }
    get email() {
        return this._email;
    }
    get password() {
        return `${this._password.toUpperCase()}manas`;  ;
    }
    set email(value) {
        this._email = value;
    }  
    set password(value) {
        this._password = value;
    }

}
const manas = new user("manas@gmail.ai", "12345");
console.log(manas.password); 