import axios from 'axios'

export async function createUser({ username, email, password }: { username: string, email: string, password: string }) {
    return axios
        .post("http://localhost:8000/accounts/create/", { username, email, password })
        .then(res => res.data)
}