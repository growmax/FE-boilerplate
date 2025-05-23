import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { login as apiLogin, logout as apiLogout } from '../api/authApi';
import { useUserQuery } from '../api/queries';
import { LoginCredentials, User } from '../types/auth.types';

interface UseAuthReturn {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (credentials: LoginCredentials) => Promise<boolean>;
  logout: () => Promise<void>;
}

export const useAuth = (): UseAuthReturn => {
  const { t } = useTranslation();
  const [error, setError] = useState<string | null>(null);

  // Get user data from query
  const { data: user, isLoading, error: userError, refetch } = useUserQuery();

  const isAuthenticated = !!user;

  // Login handler
  const login = useCallback(
    async (credentials: LoginCredentials): Promise<boolean> => {
      try {
        setError(null);
        await apiLogin(credentials);
        await refetch();
        return true;
      } catch (err) {
        setError(
          err instanceof Error ? err.message : t('auth.errors.loginFailed')
        );
        return false;
      }
    },
    [refetch, t]
  );

  // Logout handler
  const logout = useCallback(async (): Promise<void> => {
    try {
      await apiLogout();
      await refetch();
    } catch (err) {
      console.error('Logout error:', err);
    }
  }, [refetch]);

  // Set error from user query if exists
  useEffect(() => {
    if (userError) {
      setError(
        userError instanceof Error
          ? userError.message
          : t('auth.errors.userDataFailed')
      );
    }
  }, [userError, t]);

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    logout,
  };
};
