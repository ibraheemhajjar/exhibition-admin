import { apiClient } from './client';
import type {
  LoginRequest,
  LoginResponse,
  ValidateEmailRequest,
  VerifyOtpRequest,
  ResetPasswordRequest,
} from '@/types/auth';

export const authApi = {
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    const response = await apiClient.post<LoginResponse>('/auth/login', data);
    return response.data;
  },

  validateEmail: async (data: ValidateEmailRequest): Promise<boolean> => {
    const response = await apiClient.post<boolean>(
      '/auth/validate-email',
      data
    );
    return response.data;
  },

  verifyOtp: async (data: VerifyOtpRequest): Promise<boolean> => {
    const response = await apiClient.post<boolean>(
      '/auth/verify-email-otp',
      data
    );
    return response.data;
  },

  resetPassword: async (data: ResetPasswordRequest): Promise<boolean> => {
    const response = await apiClient.post<boolean>(
      '/auth/reset-password',
      data
    );
    return response.data;
  },
};
