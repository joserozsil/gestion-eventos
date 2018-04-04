export class Credential {
    idCard:string;
    password:string;

    constructor(credential) {
        this.idCard = credential.idCard;
        this.password = credential.password;
    }
}