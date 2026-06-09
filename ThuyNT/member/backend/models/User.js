class User {
    constructor(id, username, role) {
        this.id = id;
        this.username = username;
        this.role = role;
    }

    getProfile() {
        return `
            ID: ${this.id}
            Username: ${this.username}
            Role: ${this.role}
        `;
    }

    isAdmin() {
        return this.role === "admin";
    }

    toJSON() {
        return {
            id: this.id,
            username: this.username,
            role: this.role
        };
    }

    static fromJSON(data) {
        return new User(
            data.id,
            data.username,
            data.role
        );
    }
}