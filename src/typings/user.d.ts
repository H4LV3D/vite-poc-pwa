export interface User {
  accessToken: string;
  roomToken: string;
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
  profileCreated: boolean;
  profile: Profile;
}

export interface Profile {
  id: string;
  profilePicUrl: string;
  coverImageUrl: string;
  headline: string;
  bio: string;
  country: string;
  countryName: string;
  region: string;
  website: null;
  createdAt: Date;
  updatedAt: Date;
}
