import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    email: yup.string()
        .required('This field is required')
        .email('Please enter a valid email address'),
    password: yup.string()
        .required('This field is required')
        .min(8, 'The password must be at least 8 characters long'),
})