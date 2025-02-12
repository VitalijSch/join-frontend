import { useMutation } from '@tanstack/react-query'
import { createUser } from './../services/api/createUser'
import { useNavigation } from './../../../hooks/useNavigate'
import { useState } from 'react'

export const useSignUpMutation = (setIsLoading: any) => {
    const [usernameError, setUsernameError] = useState<string>('')
    const [emailError, setEmailError] = useState<string>('')
    const { navigateTo } = useNavigation()

    const { mutate } = useMutation({
        mutationFn: createUser,
        onSuccess: () => {
            setIsLoading(true)
            setTimeout(() => {
                setIsLoading(false)
                navigateTo("/auth/login")
            }, 1000)
        },
        onError: (error: any) => {
            if (error.response?.data.username) setUsernameError(error.response.data.username[0])
            if (error.response?.data.email) setEmailError(error.response.data.email[0])
            setTimeout(() => {
                setUsernameError('')
                setEmailError('')
            }, 3000)
        }
    })

    return {
        usernameError,
        emailError,
        mutate
    }
}
