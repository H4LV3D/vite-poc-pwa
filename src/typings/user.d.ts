export interface User {
  accessToken: string;

  user: UserClass;
}

export interface UserClass {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  role: string;
  emailVerified: boolean;
}
