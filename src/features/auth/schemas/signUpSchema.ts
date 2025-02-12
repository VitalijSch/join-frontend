import * as yup from 'yup'

export const signUpSchema = yup.object().shape({
    username: yup.string()
        .required('This field is required'),
    email: yup.string()
        .required('This field is required')
        .email('Please enter a valid email address'),
    password: yup.string()
        .required('This field is required')
        .min(8, 'The password must be at least 8 characters long'),
    confirmPassword: yup.string()
        .required('This field is required')
        .min(8, 'The password must be at least 8 characters long'),
})