class User {
  constructor(email, password) {
    this.email = email;
    this.pass = password;
  }

  isAdmin() {
    return this.admin === true;
  }
}

class Admin extends User {
  constructor(email, password) {
    super(email, password);

    this.admin = true;
  }
}

const newUser = new User('rodrigo_barros_teixeira@hotmail.com', 'user');
const newAdmin = new Admin('filipebarrosteixeira98@gmail.com', 'admin');

console.log(newUser.isAdmin());
console.log(newAdmin.isAdmin());
