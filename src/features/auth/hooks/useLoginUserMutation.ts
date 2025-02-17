import { useMutation } from '@tanstack/react-query'
import { useNavigation } from '../../../hooks/useNavigation'
import { loginUser } from './../services/api/loginUser'
import { useState } from 'react'

export const useLoginUserMutation = () => {
    const [passwordError, setPasswordError] = useState<string>('')
    const { navigateTo } = useNavigation()

    const { mutate } = useMutation({
        mutationFn: loginUser,
        onSuccess: () => navigateTo("/home/summary"),
        onError: (error: any) => {
            if (error.response?.data.detail) setPasswordError('Invalid email or password. Please try again.')
            setTimeout(() => {
                setPasswordError('')
            }, 2000)
        }
    })

    return {
        passwordError,
        mutate
    }
}