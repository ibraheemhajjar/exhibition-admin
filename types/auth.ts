import type { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface User {
    accessToken?: string;
    roles?: string[];
    permissions?: string[];
  }

  interface Session {
    user: {
      accessToken?: string;
      roles?: string[];
      permissions?: string[];
    } & DefaultSession['user'];
  }

  interface JWT {
    accessToken?: string;
    roles?: string[];
    permissions?: string[];
  }
}

// Rest of types...
export interface LoginRequest {
  identifier: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  userId: number;
  companyId: number | null;
  employeeId: number;
  roles: string[];
  permission: string[];
  fullName: string;
  email: string;
  phone: string;
}

export interface ValidateEmailRequest {
  email: string;
}

export interface VerifyOtpRequest {
  email: string;
  otp: string;
}

export interface ResetPasswordRequest {
  identifier: string;
  password: string;
}
