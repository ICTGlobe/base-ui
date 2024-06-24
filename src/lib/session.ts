import { SessionOptions } from "iron-session";

export interface SessionData {
  id?: string;
  name?: string;
  email?: string;
  token?: string;
  isSignedIn?: boolean;
}

export const defaultSession: SessionData = {
  isSignedIn: false,
};

export const sessionOptions: SessionOptions = {
  password: process.env.SECRET_KEY!,
  cookieName: "callvault-session",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 15 * 60 * 1000,
  },
};
