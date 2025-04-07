interface User {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  phoneNumber: string;
  address: string;
  password?: string;
  confirmPassword?: string;
}

export default User;