// Bài 5 (Buổi 6) — Class User
// Thuộc tính: id, username, role
// Method getProfile(): in template literal
// Method isAdmin(): trả về true/false
// Method toJSON(): trả về plain object
// Static method fromJSON(data): tạo User từ plain object

class User {
    constructor(id, username, role = 'user') {
        this.id = id;
        this.username = username;
        this.role = role;
    }

    // Trả về profile thông tin user
    getProfile() {
        return `👤 User: ${this.username} (ID: ${this.id}) - Role: ${this.role}`;
    }

    // Kiểm tra xem user có phải admin không
    isAdmin() {
        return this.role === 'admin';
    }

    // Chuyển thành plain object
    toJSON() {
        return {
            id: this.id,
            username: this.username,
            role: this.role
        };
    }

    // Static method: tạo User từ plain object
    static fromJSON(data) {
        return new User(data.id, data.username, data.role);
    }
}
