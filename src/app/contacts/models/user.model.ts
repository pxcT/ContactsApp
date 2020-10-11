export class UserModel implements IUser {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;

    constructor(user?: IUser) {
        this.firstName = user ? user.firstName : '';
        this.lastName = user ? user.lastName : '';
        this.phoneNumber = user ? user.phoneNumber : '';
        this.email = user ? user.email : '';
    }
}

export interface IUser {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
}