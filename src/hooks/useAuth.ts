import { useMutation } from '@tanstack/react-query'

// Services
import { authService } from '@services'

export const useLogin = () =>
  useMutation({
    mutationFn: async (data: { email: string; password: string }) =>
      authService.authLogin(data),
  })
