import axios from 'axios'

export async function loginUser({ email, password }: { email: string; password: string }) {
    return axios
        .post("http://localhost:8000/api/token/", { email, password })
        .then(res => {
            const data = res.data
            localStorage.setItem('access', data.access)
            localStorage.setItem('refresh', data.refresh)
        })
}