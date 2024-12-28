export interface IUser {
  name: string;
  age: number;
  email: string;
  password: string;
  photoUrl?: string | null;
  role: string;
  userStatus: string;
}
