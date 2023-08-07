import AbstractEntity from "./AbstractEntity";
export default class User extends AbstractEntity {
    constructor(public name: string, email: string, password: string, photoUrl: string, id: string, createdAt?: Date) {
        super(id, createdAt);
    };
};