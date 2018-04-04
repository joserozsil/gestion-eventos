export class User {
    firstName: string;
    lastName: string;
    idCard: string;
    password: string;
    phone: string;
    address: string;

    constructor(user:any) {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.idCard = user.idCard;
        this.password = user.password;
        this.phone = user.phone;
        this.address = user.address;
    }
}