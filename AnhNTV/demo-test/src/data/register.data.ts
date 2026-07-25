export interface RegisterData {
  fullname: string;
  email: string;
  password: string;
  confirm: string;
  message: string;
  agree: boolean;
  isEnableRegister: boolean;
  title: string;
}

export const registerData: RegisterData[] = [
  {
    fullname: 'abcd',
    email: 'abc@gmail.com',
    password: '1234',
    confirm: '1234',
    message: '',
    agree: true,
    isEnableRegister: true,
    title: 'Register success',
  },
  {
    fullname: 'abcd',
    email: '',
    password: '1234',
    confirm: '1234',
    message: 'Email is required!',
    agree: true,
    isEnableRegister: false,
    title: 'Register faileded with an empty email',
  },
  {
    fullname: 'abcd',
    email: 'abc',
    password: '1234',
    confirm: '1234',
    message: 'Email should be the real one!',
    agree: true,
    isEnableRegister: false,
    title: 'Register faileded with an invalid email',
  },
  {
    fullname: 'abcd',
    email: 'abc@gmail.com',
    password: '',
    confirm: '1234',
    message: 'Password is required!',
    agree: true,
    isEnableRegister: false,
    title: 'Register failed with an empty password',
  },
  {
    fullname: 'abcd',
    email: 'abc@gmail.com',
    password: '123',
    confirm: '1234',
    message: 'Password should contain from 4 to 50 characters',
    agree: true,
    isEnableRegister: false,
    title: 'Register failed with an invalid password',
  },
  {
    fullname: 'abcd',
    email: 'abc@gmail.com',
    password: '1234',
    confirm: '',
    message: 'Password confirmation is required!',
    agree: false,
    isEnableRegister: false,
    title: 'Register failed without a repeat password',
  },
  {
    fullname: 'abcd',
    email: 'abc@gmail.com',
    password: '1234',
    confirm: '12345',
    message: '',
    agree: true,
    isEnableRegister: true,
    title: "Password confirmation doesn't match with password",
  },
];
