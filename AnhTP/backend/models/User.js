// Bài 5 — Class UserBasic
// Constructor: id, username, role
// Method getProfile() dùng template literal
// Method isAdmin() trả về true/false

class UserBasic {
  constructor(id, username, role) {
    this.id = id;
    this.username = username;
    this.role = role;
  }

  getProfile() {
    return `ID: ${this.id}
Username: ${this.username}
Role: ${this.role}`;
  }

  isAdmin() {
    return this.role === "admin";
  }
}
// const userBasic = new UserBasic(1, "user1", "admin");
// console.log(userBasic.getProfile());
// console.log("Is admin?", userBasic.isAdmin());

// display_log();
// const userBasic2 = new UserBasic(2, "user2", "user");
// console.log(userBasic2.getProfile());
// console.log("Is admin?", userBasic2.isAdmin());

module.exports = UserBasic;
