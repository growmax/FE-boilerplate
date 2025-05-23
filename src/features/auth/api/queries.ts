import { useQuery } from '@tanstack/react-query';

import { User } from '../types/auth.types';

import { getCurrentUser } from './authApi';

/**
 * Auth-related query keys
 */
export const authKeys = {
  all: ['auth'] as const,
  user: () => [...authKeys.all, 'user'] as const,
};

/**
 * Query hook for getting current user
 */
export const useUserQuery = () => {
  return useQuery<User, Error>(authKeys.user(), () => getCurrentUser(), {
    // Only attempt to get user if there's a token
    enabled: !!localStorage.getItem('auth_token'),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1, // Only retry once
    // Don't refetch on window focus if there's no token
    refetchOnWindowFocus: !!localStorage.getItem('auth_token'),
  });
};
