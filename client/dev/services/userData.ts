export class UserData {

    isAuthenticated: boolean;
    roles: [string];
    level: number;
    username: string;

    constructor(isAuthenticated: boolean, roles: [string], level: number, username: string) {
        this.isAuthenticated = isAuthenticated;
        this.roles = roles;
        this.level = level;
        this.username = username;
    }
}