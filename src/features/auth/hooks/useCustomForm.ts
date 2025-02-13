import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

export const useCustomForm = (schema: any) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        watch
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    })

    return {
        register,
        handleSubmit,
        errors,
        isValid,
        watch
    }
}