export interface RegisterData {
  fullname: string;
  email: string;
  password: string;
  confirm: string;
  message: string;
  agree: boolean;
  isEnableLogin: boolean;
  title: string;
}
export const registerData: RegisterData[] = [
  {
    fullname: "QuynhNT",
    email: "quynhnt@example.com",
    password: "Password123!",
    confirm: "Password123!",
    message: "",
    agree: true,
    isEnableLogin: true,
    title: "Register susscess",
  },
  {
    fullname: "QuynhNT",
    email: "123",
    password: "Password123!",
    confirm: "Password123!",
    message: "Email should be the real one!",
    agree: true,
    isEnableLogin: false,
    title: "Register invalid email",
  },
];
